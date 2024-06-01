import { HeroicCultureType } from '../heroicCultures'

export const HeroicCultureDwarvesOfNogrodAndBelegost: HeroicCultureType = {
  name: `Dwarves of Nogrod and Belegost`,
  source: {
    pageReference: {
      textId: 'moria',
      pageNumber: 186 // TODO: alpha
    }
  },
  characteristics: {
    source: {
      pageReference: {
        textId: 'moria',
        pageNumber: 187 // TODO: alpha
      }
    },
    culturalBlessing: 'redoubtable',
    standardOfLiving: 'common',
    culturalHandicap: 'pettyDwarves'
  },
  attributes: {
    source: {
      pageReference: {
        textId: 'moria',
        pageNumber: 187 // TODO: alpha
      }
    },
    table: [
      { roll: 1, strength: 7, heart: 2, wits: 5 },
      { roll: 2, strength: 7, heart: 3, wits: 4 },
      { roll: 3, strength: 6, heart: 3, wits: 5 },
      { roll: 4, strength: 6, heart: 4, wits: 4 },
      { roll: 5, strength: 5, heart: 4, wits: 5 },
      { roll: 6, strength: 6, heart: 2, wits: 6 }
    ]
  },
  derivedStats: {
    source: {
      pageReference: {
        textId: 'moria',
        pageNumber: 187 // TODO: alpha
      }
    },
    table: [
      { stat: 'endurance', attribute: 'strength', add: 22 },
      { stat: 'hope', attribute: 'heart', add: 8 },
      { stat: 'parry', attribute: 'wits', add: 10 }
    ]
  },
  skills: {
    source: {
      pageReference: {
        textId: 'moria',
        pageNumber: 187 // TODO: alpha
      }
    },
    table: [
      { skill: 'awe', rank: 2, underlined: true },
      { skill: 'athletics', rank: 0 },
      { skill: 'awareness', rank: 0 },
      { skill: 'hunting', rank: 0 },
      { skill: 'song', rank: 1 },
      { skill: 'craft', rank: 3, underlined: true },
      { skill: 'enhearten', rank: 0 },
      { skill: 'travel', rank: 2 },
      { skill: 'insight', rank: 0 },
      { skill: 'healing', rank: 0 },
      { skill: 'courtesy', rank: 0 },
      { skill: 'battle', rank: 0 },
      { skill: 'persuade', rank: 0 },
      { skill: 'stealth', rank: 1 },
      { skill: 'scan', rank: 3 },
      { skill: 'explore', rank: 2 },
      { skill: 'riddle', rank: 2 },
      { skill: 'lore', rank: 2 }
    ]
  },
  combatProficiencies: {
    source: {
      pageReference: {
        textId: 'core-rulebook',
        pageNumber: 35
      }
    },
    table: [
      { proficiencyChoices: ['axes', 'swords'], rank: 2 },
      { proficiencyChoices: ['axes', 'bows', 'spears', 'swords'], rank: 1 }
    ]
  },
  distinctiveFeatures: {
    source: {
      pageReference: {
        textId: 'moria',
        pageNumber: 187 // TODO: alpha
      }
    },
    features: ['cunning', 'fierce', 'proud', 'rustic', 'secretive', 'stern', 'wary', 'wilful'],
    choose: 2
  },
  languagesAndTypicalNames: {
    source: {
      pageReference: {
        textId: 'moria',
        pageNumber: 187 // TODO: alpha
      }
    },
    languages: ['common', 'dwarvish'],
    typicalNames: [
      { name: 'Ai', type: 'male' },
      { name: 'Anar', type: 'male' },
      { name: 'Beli', type: 'male' },
      { name: 'Bláin', type: 'male' },
      { name: 'Borin', type: 'male' },
      { name: 'Burin', type: 'male' },
      { name: 'Bruni', type: 'male' },
      { name: 'Farin', type: 'male' },
      { name: 'Flói', type: 'male' },
      { name: 'Frár', type: 'male' },
      { name: 'Frerin', type: 'male' },
      { name: 'Frór', type: 'male' },
      { name: 'Ginar', type: 'male' },
      { name: 'Gróin', type: 'male' },
      { name: 'Grór', type: 'male' },
      { name: 'Hanar', type: 'male' },
      { name: 'Hepti', type: 'male' },
      { name: 'Iari', type: 'male' },
      { name: 'Lófar', type: 'male' },
      { name: 'Lóni', type: 'male' },
      { name: 'Náli', type: 'male' },
      { name: 'Nár', type: 'male' },
      { name: 'Niping', type: 'male' },
      { name: 'Nói', type: 'male' },
      { name: 'Núr', type: 'male' },
      { name: 'Nýrád', type: 'male' },
      { name: 'Ónar', type: 'male' },
      { name: 'Póri', type: 'male' },
      { name: 'Regin', type: 'male' },
      { name: 'Svior', type: 'male' },
      { name: 'Veig', type: 'male' },
      { name: 'Vidar', type: 'male' },
      { name: 'Adís', type: 'female' },
      { name: 'Afrid', type: 'female' },
      { name: 'Agda', type: 'female' },
      { name: 'Bersa', type: 'female' },
      { name: 'Birna', type: 'female' },
      { name: 'Dagrún', type: 'female' },
      { name: 'Dís', type: 'female' },
      { name: 'Drífa', type: 'female' },
      { name: 'Edda', type: 'female' },
      { name: 'Elin', type: 'female' },
      { name: 'Fenja', type: 'female' },
      { name: 'Frida', type: 'female' },
      { name: 'Geira', type: 'female' },
      { name: 'Gísla', type: 'female' },
      { name: 'Hadda', type: 'female' },
      { name: 'Hón', type: 'female' },
      { name: 'Ida', type: 'female' },
      { name: 'Iimr', type: 'female' },
      { name: 'Jóra', type: 'female' },
      { name: 'Kára', type: 'female' },
      { name: 'Kóna', type: 'female' },
      { name: 'Líf', type: 'female' },
      { name: 'Línhild', type: 'female' },
      { name: 'Már', type: 'female' },
      { name: 'Mist', type: 'female' },
      { name: 'Nál', type: 'female' },
      { name: 'Oda', type: 'female' },
      { name: 'Ósk', type: 'female' },
      { name: 'Rán', type: 'female' },
      { name: 'Rinda', type: 'female' },
      { name: 'Sefa', type: 'female' },
      { name: 'Syn', type: 'female' },
      { name: 'Tóra', type: 'female' },
      { name: 'Trana', type: 'female' },
      { name: 'Úlfrún', type: 'female' },
      { name: 'Vírún', type: 'female' },
      { name: 'Yrr', type: 'female' }
    ]
  }
}
