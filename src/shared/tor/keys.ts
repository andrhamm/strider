import { z } from 'zod'

// const BookBaseSchema = z.object({
//     id: z.string(),
//     title: z.string(),
// })

const BookCoreRulesSchema = z.object({
  id: z.literal('core-rulebook'),
  title: z.literal('Core Rulebook (2e)')
})

const BookPeoplesOfWilderlandSchema = z.object({
  id: z.literal('peoples-of-wilderland'),
  title: z.literal('Peoples of Wilderland')
})

const BookRivendellSchema = z.object({
  id: z.literal('rivendell'),
  title: z.literal('Rivendell')
})

const BookIdSchema = z.union([
  BookCoreRulesSchema.shape.id,
  BookPeoplesOfWilderlandSchema.shape.id,
  BookRivendellSchema.shape.id
])

// const BooksSchema = z.discriminatedUnion('id', [
//     BookCoreRulesSchema,
//     BookPeoplesOfWilderlandSchema,
//     BookRivendellSchema,
// ])

export const PageReferenceSchema = z.object({
  textId: BookIdSchema,
  pageNumber: z.number()
})

export const CombatProficiencyKeySchema = z.enum(['axes', 'bows', 'spears', 'swords'])

export const CulturalBlessingKeySchema = z.enum([
  'stoutHearted',
  'redoubtable',
  'elvenSkill',
  'hobbitSense',
  'breeBlood',
  'kingsOfMen',
  'furious',
  'folkOfTheDusk',
  'woodGoer',
  'elvenWise'
])

export const CulturalHandicapKeySchema = z.enum([
  'naugrim',
  'theLongDefeat',
  'halflings',
  'allegianceOfTheDunedain',
  'besetByWoe'
])

export const StandardOfLivingKeySchema = z.enum(['common', 'frugal', 'prosperous'])
export const AttributeKeySchema = z.enum(['strength', 'heart', 'wits'])
export const DerivedStatKeySchema = z.enum(['endurance', 'hope', 'parry'])

export const DistinctiveFeatureKeySchema = z.enum([
  'bold',
  'cunning',
  'eager',
  'faithful',
  'fair',
  'fairSpoken',
  'fierce',
  'generous',
  'honourable',
  'inquisitive',
  'keenEyed',
  'lordly',
  'merry',
  'patient',
  'proud',
  'rustic',
  'secretive',
  'stern',
  'subtle',
  'swift',
  'tall',
  'trueHearted',
  'wary',
  'wilful',
  // callings-specific distinctive features:
  'leadership',
  'enemyLore',
  'folkLore',
  'rhymesOfLore',
  'burglary',
  'shadowLore'
])

export const ShadowPathKeySchema = z.enum([
  'lureOfPower',
  'curseOfVengeance',
  'wanderingMadness',
  'lureOfSecrets',
  'dragonSickness',
  'pathOfDespair'
])

export const SkillKeySchema = z.enum([
  'awe',
  'athletics',
  'awareness',
  'hunting',
  'song',
  'craft',
  'enhearten',
  'travel',
  'insight',
  'healing',
  'courtesy',
  'battle',
  'persuade',
  'stealth',
  'scan',
  'explore',
  'riddle',
  'lore'
])

export const CallingKeySchema = z.enum([
  'captain',
  'champion',
  'messenger',
  'scholar',
  'treasureHunter',
  'warden'
])

export const LanguageKeySchema = z.enum([
  'common',
  'dalish',
  'dwarvish',
  'elvish',
  'ancientElvish',
  'regionalMannishValesOfTheAnduinRiver'
])

export const TypicalNameTypeKeySchema = z.enum(['male', 'female', 'family', 'byname', 'nickname'])

export const HeroicCultureKeySchema = z.enum([
  'bardings',
  `dwarvesOfDurinsFolk`,
  'elvesOfLindon',
  'hobbitsOfTheShire',
  'menOfBree',
  'rangersOfTheNorth',
  'beornings',
  'elvesOfMirkwood',
  'woodmenOfWilderland',
  'highElvesOfRivendell'
])

export const VirtueKeySchema = z.enum([
  'confidence',
  'dourHanded',
  'hardiness',
  'mastery',
  'nimbleness',
  'prowess',
  // virtues of the bardings
  'cram',
  'dragonSlayer',
  'dwarfFriend',
  'fierceShot',
  'highDestiny',
  'theLanguageOfBirds',
  // virtues of the dwarves
  'barukKhazad',
  'brokenSpells',
  'darkForDarkBusiness',
  'durinsWay',
  'stoneHard',
  'untameableSpirit',
  // virtues of the elves (of lindon)
  'againstTheUnseen',
  'deadlyArchery',
  'elberethGilthoniel',
  'elvishDreams',
  'gleamOfWrath',
  'memoryOfAncientDays',
  // virtues of the hobbits
  'artOfDisappearing',
  'braveAtAPinch',
  'smallFolk',
  'sureAtTheMark',
  'threeIsCompany',
  'toughAsOldTreeRoots',
  // virtues of the men of bree
  'breePony',
  'defiance',
  'desperateCourage',
  'friendlyAndFamiliar',
  'strangeAsNewsFromBree',
  'theArtOfSmoking',
  // virtues of the rangers of the north
  'enduranceOfTheRanger',
  'foresightOfTheirKindred',
  'heirOfArnor',
  'royaltyRevealed',
  'strengthOfWill',
  'waysOfTheWild',
  // virtues of the beornings
  'beornsEnchantment',
  'brotherToBears',
  'greatStrength',
  'skinCoat',
  'splittingBlow',
  'twiceBakedHoneyCakes',
  // virtues of the elves of mirkwood
  'againstTheUnseen', // repeat!
  'deadlyArchery', // repeat!
  'elfLights',
  'elvishDreams', // repeat!
  'gleamOfWrath', // repeat!
  'shotsInTheDark',
  // virtues of the woodmen of wilderland
  'aHuntersResolve',
  'herbalRemedies',
  'forestHarrier',
  'houndOfMirkwood',
  'naturalWatchfulness',
  'staunchingSong',
  // virtues of the high elves of rivendell
  // NOTE: all from the elves of lindon PLUS the following
  'artificerOfEregion',
  'beautyOfTheStars',
  'mightOfTheFirstborn',
  'skillOfTheEldar'
])
