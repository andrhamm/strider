import { HeroicCultureType } from "../heroicCultures";

export const HeroicCultureElvesOfLindon: HeroicCultureType = {
    name: 'Elves of Lindon',
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 36,
        },
    },
    characteristics: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 36,
            },
        },
        culturalBlessing: 'elvenSkill',
        standardOfLiving: 'frugal',
        culturalHandicap: 'theLongDefeat',
    },
    attributes: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 36,
            },
        },
        table: [
            { roll: 1, strength: 5, heart: 2, wits: 7 },
            { roll: 2, strength: 4, heart: 3, wits: 7 },
            { roll: 3, strength: 5, heart: 3, wits: 6 },
            { roll: 4, strength: 4, heart: 4, wits: 6 },
            { roll: 5, strength: 5, heart: 4, wits: 5 },
            { roll: 6, strength: 6, heart: 2, wits: 6 },
        ],
    },
    derivedStats: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 36,
            },
        },
        table: [
            { stat: 'endurance', attribute: 'strength', add: 20 },
            { stat: 'hope', attribute: 'heart', add: 8 },
            { stat: 'parry', attribute: 'wits', add: 12 },
        ],
    },
    skills: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 36,
            },
        },
        table: [
            { skill: 'awe', rank: 2 },
            { skill: 'athletics', rank: 2 },
            { skill: 'awareness', rank: 2 },
            { skill: 'hunting', rank: 0 },
            { skill: 'song', rank: 2, underlined: true },
            { skill: 'craft', rank: 2 },
            { skill: 'enhearten', rank: 1 },
            { skill: 'travel', rank: 0 },
            { skill: 'insight', rank: 0 },
            { skill: 'healing', rank: 1 },
            { skill: 'courtesy', rank: 0 },
            { skill: 'battle', rank: 0 },
            { skill: 'persuade', rank: 0 },
            { skill: 'stealth', rank: 3 },
            { skill: 'scan', rank: 0 },
            { skill: 'explore', rank: 0 },
            { skill: 'riddle', rank: 0 },
            { skill: 'lore', rank: 3, underlined: true},
        ]
    },
    combatProficiencies: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 37,
            },
        },
        table: [
            { proficiencyChoices: ['bows', 'spears'], rank: 2 },
            { proficiencyChoices: ['axes', 'bows', 'spears', 'swords'], rank: 1 },
        ],
    },
    distinctiveFeatures: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 37,
            },
        },
        features: ['fair', 'keenEyed', 'lordly', 'merry', 'patient', 'subtle', 'swift', 'wary'],
        choose: 2,
    },
    languagesAndTypicalNames: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 37,
            },
        },
        languages: ['common', 'elvish'],
        typicalNames: [
            { name: 'Amras', type: 'male' },
            { name: 'Aredhel', type: 'male' },
            { name: 'Beleganor', type: 'male' },
            { name: 'Belegon', type: 'male' },
            { name: 'Calanhir', type: 'male' },
            { name: 'Carmagor', type: 'male' },
            { name: 'Dagorhir', type: 'male' },
            { name: 'Durandir', type: 'male' },
            { name: 'Edrahil', type: 'male' },
            { name: 'Ellahir', type: 'male' },
            { name: 'Fincalan', type: 'male' },
            { name: 'Fuindor', type: 'male' },
            { name: 'Galdagor', type: 'male' },
            { name: 'Galdor', type: 'male' },
            { name: 'Hallas', type: 'male' },
            { name: 'Hirimlad', type: 'male' },
            { name: 'Ithidir', type: 'male' },
            { name: 'Lascalan', type: 'male' },
            { name: 'Linaith', type: 'male' },
            { name: 'Mablin', type: 'male' },
            { name: 'Malanor', type: 'male' },
            { name: 'Nauros', type: 'male' },
            { name: 'Orgalad', type: 'male' },
            { name: 'Pelegorn', type: 'male' },
            { name: 'Sargon', type: 'male' },
            { name: 'Anórel', type: 'female' },
            { name: 'Aranel', type: 'female' },
            { name: 'Arbereth', type: 'female' },
            { name: 'Baraniel', type: 'female' },
            { name: 'Calanril', type: 'female' },
            { name: 'Celebrindal', type: 'female' },
            { name: 'Celenneth', type: 'female' },
            { name: 'Elanor', type: 'female' },
            { name: 'Elwing', type: 'female' },
            { name: 'Eraniel', type: 'female' },
            { name: 'Fimbrethil', type: 'female' },
            { name: 'Gloredhel', type: 'female' },
            { name: 'Idril', type: 'female' },
            { name: 'Irilde', type: 'female' },
            { name: 'Laurelin', type: 'female' },
            { name: 'Lôrwend', type: 'female' },
            { name: 'Lothíriel', type: 'female' },
            { name: 'Meneloth', type: 'female' },
            { name: 'Moriel', type: 'female' },
            { name: 'Narieth', type: 'female' },
            { name: 'Narniel', type: 'female' },
            { name: 'Nimloth', type: 'female' },
            { name: 'Nimrodel', type: 'female' },
            { name: 'Níniel', type: 'female' },
            { name: 'Tarandîs', type: 'female' },
        ]
    }
}