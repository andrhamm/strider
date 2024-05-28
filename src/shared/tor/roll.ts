import { z } from 'zod'

type DieRollResult = {
  dieType: 'feat' | 'success'
  rolledNumericResult: number
}

enum FeatDieFaces {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  EYE_OF_SAURON = 11,
  GANDALF_RUNE = 12
}

enum SuccessDieFaces {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6
}

// raw dice roll function, returns the result for each of the dice
// does not compute the success or failure of the roll
// NOTE: assuming a max of 6 success dice
// TODO: use crypto libs for better randomness
export const rollDice = (numFeatDice: 0 | 1 | 2, numSuccessDice: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
  const results: DieRollResult[] = []

  for (let i = 0; i < numFeatDice; i++) {
    results.push({
      dieType: 'feat',
      rolledNumericResult: Math.floor(Math.random() * 12) + 1
    })
  }

  for (let i = 0; i < numSuccessDice; i++) {
    results.push({
      dieType: 'success',
      rolledNumericResult: Math.floor(Math.random() * 6) + 1
    })
  }

  return results
}

const SkillFeatDieResultSchema = z.object({
  dieType: z.literal('feat'),
  rolledNumericResult: z.number(),
  resolvedNumericResult: z.number(),
  ignored: z.boolean()
})
type SkillFeatDieResult = z.infer<typeof SkillFeatDieResultSchema>

const SkillSuccessDieResultSchema = z.object({
  dieType: z.literal('success'),
  rolledNumericResult: z.number(),
  resolvedNumericResult: z.number(),
  specialSuccess: z.boolean(),
  ignored: z.boolean()
})
type SkillSuccessDieResult = z.infer<typeof SkillSuccessDieResultSchema>

const SkillDieResultSchema = z.discriminatedUnion('dieType', [
  SkillFeatDieResultSchema,
  SkillSuccessDieResultSchema
])

type SkillDieResult = z.infer<typeof SkillDieResultSchema>

type SuccessOutcome =
  | 'success'
  | 'magicalSuccess'
  | 'greatSuccess'
  | 'extraordinarySuccess'
  | 'successWithWoe'

type FailureOutcome = 'simpleFailure' | 'failureWithWoe' | 'disaster'

type Outcome = SuccessOutcome | FailureOutcome

type SkillRollResult = {
  success: boolean
  automatic: boolean // automatic success, automatic magical success, automatic failure
  result: Outcome
  label:
    | 'Success'
    | 'Automatic Success'
    | 'Magical Success'
    | 'Great Success'
    | 'Extraordinary Success'
    | 'Success with Woe'
    | 'Failure'
    | 'Automatic Failure'
    | 'Failure with Woe'
    | 'Disaster!'
  specialSuccesses: 0 | 1 | 2 | 3 | 4 | 5 | 6
  specialSuccessesRemaining: 0 | 1 | 2 | 3 | 4 | 5 | 6
  rolledTotal: undefined | number
  dice: SkillDieResult[]
}

export const rollSkill = ({
  favor,
  skillRank,
  bonusOrPenalty,
  hopeBonus,
  inspirationBonus,
  supportBonus,
  magicalSuccess, // p21
  weary,
  miserable,
  targetNumber,
  riskLevel //p130
}: {
  favor: 'neutral' | 'favored' | 'ill-favored' // when favored AND ill-favored, use 'neutral'
  skillRank: 0 | 1 | 2 | 3 | 4 | 5 | 6
  weary: boolean // p22
  miserable: boolean //p22
  bonusOrPenalty: -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6
  targetNumber: number
  hopeBonus: boolean
  inspirationBonus: boolean
  supportBonus: 0 | 1 | 2 | 3 | 4 | 5 | 6
  magicalSuccess: boolean
  riskLevel: 'standard' | 'hazardous' | 'foolish' // p131
}): SkillRollResult => {
  const numFeatDice: 0 | 1 | 2 = magicalSuccess ? 0 : favor === 'neutral' ? 1 : 2
  // NOTE: limiting the total number of success dice to 6. the rules don't say this explicitly anywhere but it makes sense...
  const numSuccessDice = Math.max(
    0,
    Math.min(
      6,
      skillRank + bonusOrPenalty + supportBonus + (inspirationBonus ? 1 : 0) + (hopeBonus ? 1 : 0)
    )
  ) as 0 | 1 | 2 | 3 | 4 | 5 | 6

  const diceResults = rollDice(numFeatDice, numSuccessDice)

  const successDiceResults: SkillSuccessDieResult[] = []
  let featDiceResults: SkillFeatDieResult[] = []

  for (const die of diceResults) {
    switch (die.dieType) {
      case 'feat': {
        featDiceResults.push({
          ...die,
          dieType: 'feat',
          resolvedNumericResult:
            die.rolledNumericResult === FeatDieFaces.EYE_OF_SAURON ? 0 : die.rolledNumericResult,
          ignored: magicalSuccess // gets updated after sorting
        })
        break
      }
      case 'success': {
        successDiceResults.push({
          ...die,
          dieType: 'success',
          resolvedNumericResult: weary && die.rolledNumericResult < 4 ? 0 : die.rolledNumericResult,
          specialSuccess: die.rolledNumericResult === 6,
          ignored:
            (weary && die.rolledNumericResult < 4) ||
            (magicalSuccess && die.rolledNumericResult !== 6)
        })
        break
      }
    }
  }

  // determine which feat die is used
  featDiceResults = featDiceResults
    .sort((a, b) => {
      if (a === b) return 0

      if (favor === 'ill-favored') {
        return a.rolledNumericResult < b.rolledNumericResult ? -1 : 1
      }

      return a.rolledNumericResult < b.rolledNumericResult ? 1 : -1
    })
    .map((die, index) => ({
      ...die,
      ignored: index !== 0
    }))

  // we only use the first resolved feat die
  const featDie = featDiceResults[0]

  const resolvedDiceResults: SkillDieResult[] = [...featDiceResults, ...successDiceResults]
  const specialSuccesses = successDiceResults.filter(
    (die) => die.dieType === 'success' && die.specialSuccess
  ).length as 0 | 1 | 2 | 3 | 4 | 5 | 6
  const rolledTotal = successDiceResults.reduce(
    (acc, die) => acc + die.resolvedNumericResult,
    featDie.resolvedNumericResult
  )
  const naturalSuccess = rolledTotal >= targetNumber
  const automaticSuccess = featDie.rolledNumericResult === FeatDieFaces.GANDALF_RUNE
  const success = automaticSuccess || naturalSuccess

  const levelOfSuccess: SuccessOutcome =
    specialSuccesses > 1
      ? 'extraordinarySuccess'
      : specialSuccesses === 1
        ? 'greatSuccess'
        : 'success'

  const successLabel =
    automaticSuccess && specialSuccesses === 0
      ? 'Automatic Success'
      : levelOfSuccess === 'extraordinarySuccess'
        ? 'Extraordinary Success'
        : levelOfSuccess === 'greatSuccess'
          ? 'Great Success'
          : 'Success'

  const failureType =
    riskLevel === 'standard'
      ? 'simpleFailure'
      : riskLevel === 'hazardous'
        ? 'failureWithWoe'
        : 'disaster'
  const failureLabel =
    failureType === 'simpleFailure'
      ? 'Failure'
      : failureType === 'failureWithWoe'
        ? 'Failure with Woe'
        : 'Disaster!'

  if (magicalSuccess) {
    // see p21
    // ignore feat die and only observe special successes
    return {
      success: true,
      automatic: true,
      result: 'magicalSuccess',
      label: 'Magical Success',
      specialSuccesses,
      specialSuccessesRemaining: specialSuccesses,
      rolledTotal: undefined,
      dice: resolvedDiceResults
    }
  } else if (success) {
    return {
      success,
      automatic: automaticSuccess,
      result: levelOfSuccess,
      label: successLabel,
      specialSuccesses,
      specialSuccessesRemaining: specialSuccesses,
      rolledTotal,
      dice: resolvedDiceResults
    }
  } else if (miserable && featDie.rolledNumericResult === FeatDieFaces.EYE_OF_SAURON) {
    return {
      success: false,
      automatic: true,
      result: failureType,
      specialSuccesses: 0,
      specialSuccessesRemaining: 0,
      label: 'Automatic Failure',
      rolledTotal: undefined,
      dice: resolvedDiceResults
    }
  } else if (riskLevel === 'standard' && specialSuccesses > 0) {
    // if at least 1 special success, then convert from simpleFailure to successWithWoe
    // deduct all specialSuccesses
    // NOTE: in the core rules turning a simple failure into a success with woe is at the discretion of the Loremaster,
    //       but since we're focusing on strider mode, we'll have this case be automatic
    return {
      success: true,
      automatic: false,
      result: 'successWithWoe',
      specialSuccesses: specialSuccesses,
      specialSuccessesRemaining: 0,
      label: 'Success with Woe',
      rolledTotal,
      dice: resolvedDiceResults
    }
  } else {
    // natural failure
    return {
      success: false,
      automatic: false,
      result: failureType,
      specialSuccesses,
      specialSuccessesRemaining: specialSuccesses,
      label: failureLabel,
      rolledTotal,
      dice: resolvedDiceResults
    }
  }
}

enum EnduranceLossLevel {
  MODERATE = 1,
  SEVERE = 2,
  GRIEVOUS = 3
}

type EnduranceLossResult = {
  outcome: 'knocked-out' | 'bruised' | 'unscathed'
  label: 'Knocked Out' | 'Bruised' | 'Unscathed'
  newEndurance: number
  dice: SkillFeatDieResult[]
}

// see core rules p.134
export const rollEnduranceLoss = ({
  lossLevel,
  currentEndurance
}: {
  lossLevel: EnduranceLossLevel
  currentEndurance: number
}): EnduranceLossResult => {
  const numFeatDice: 1 | 2 = lossLevel === EnduranceLossLevel.SEVERE ? 1 : 2
  let favor: 'neutral' | 'favored' | 'ill-favored' = 'neutral'
  if (lossLevel === EnduranceLossLevel.GRIEVOUS) {
    // if the loss level is grievous, the character is ill-favored
    favor = 'ill-favored'
  } else if (lossLevel === EnduranceLossLevel.MODERATE) {
    // if the loss level is moderate, the character is favored
    favor = 'favored'
  }

  const diceResults = rollDice(numFeatDice, 0)
  const featResults: SkillFeatDieResult[] = diceResults
    .filter((die) => die.dieType === 'feat')
    .sort((a, b) => {
      if (a === b) return 0

      if (favor === 'ill-favored') {
        return a.rolledNumericResult < b.rolledNumericResult ? -1 : 1
      }

      return a.rolledNumericResult < b.rolledNumericResult ? 1 : -1
    })
    .map((die, index) => ({
      ...die,
      dieType: 'feat',
      resolvedNumericResult: die.rolledNumericResult,
      ignored: index !== 0
    }))

  const featDie = featResults[0]

  if (featDie.rolledNumericResult === FeatDieFaces.EYE_OF_SAURON) {
    return {
      outcome: 'knocked-out',
      label: 'Knocked Out',
      newEndurance: 0,
      dice: featResults
    }
  } else if (featDie.rolledNumericResult === FeatDieFaces.GANDALF_RUNE) {
    return {
      outcome: 'unscathed',
      label: 'Unscathed',
      newEndurance: currentEndurance,
      dice: featResults
    }
  }

  return {
    outcome: 'bruised',
    label: 'Bruised',
    newEndurance: currentEndurance - featDie.rolledNumericResult,
    dice: featResults
  }
}

// rollCombat // see core rules p17
// rollShadowTest // see core rules p17

// rollSkillEndeavor // see core rules p132
// NOTE: this should probably live somewhere else where the endeavor state can persist between skill rolls
//       since an endeavor can take many rolls over hours or days
// enum ResistancePoints {
//   SIMPLE = 3,
//   LABORIOUS = 6,
//   DAUNTING = 9
// }

// export const rollSkillEndeavor = ({
//   resistance,
//   timeLimit
// }: {
//   resistance: ResistancePoints
//   timeLimit: number
// }) => {}
