import { HeroicCultureType } from "../heroicCultures";

export const HeroicCultureRangersOfTheNorth: HeroicCultureType = {
    name: 'Rangers of the North',
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 42,
        },
    },
    characteristics: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 42,
            },
        },
        culturalBlessing: 'kingsOfMen',
        standardOfLiving: 'frugal',
        culturalHandicap: 'allegianceOfTheDunedain',
    },
    attributes: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 42,
            },
        },
        table: [
            { roll: 1, strength: 7, heart: 5, wits: 2 },
            { roll: 2, strength: 7, heart: 4, wits: 3 },
            { roll: 3, strength: 6, heart: 5, wits: 3 },
            { roll: 4, strength: 6, heart: 4, wits: 4 },
            { roll: 5, strength: 5, heart: 5, wits: 4 },
            { roll: 6, strength: 6, heart: 6, wits: 2 },
        ],
    },
    derivedStats: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 42,
            },
        },
        table: [
            { stat: 'endurance', attribute: 'strength', add: 20 },
            { stat: 'hope', attribute: 'heart', add: 6 },
            { stat: 'parry', attribute: 'wits', add: 14 },
        ],
    },
    skills: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 43,
            },
        },
        table: [
            { skill: 'awe', rank: 1 },
            { skill: 'athletics', rank: 2 },
            { skill: 'awareness', rank: 2 },
            { skill: 'hunting', rank: 2, underlined: true },
            { skill: 'song', rank: 0 },
            { skill: 'craft', rank: 0 },
            { skill: 'enhearten', rank: 0 },
            { skill: 'travel', rank: 2 },
            { skill: 'insight', rank: 0 },
            { skill: 'healing', rank: 2 },
            { skill: 'courtesy', rank: 0 },
            { skill: 'battle', rank: 2 },
            { skill: 'persuade', rank: 0 },
            { skill: 'stealth', rank: 2 },
            { skill: 'scan', rank: 1 },
            { skill: 'explore', rank: 2 },
            { skill: 'riddle', rank: 0 },
            { skill: 'lore', rank: 2, underlined: true },
        ]
    },
    combatProficiencies: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 43,
            },
        },
        table: [
            { proficiencyChoices: ['spears', 'swords'], rank: 2 },
            { proficiencyChoices: ['axes', 'bows', 'spears', 'swords'], rank: 1 },
        ],
    },
    distinctiveFeatures: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 43,
            },
        },
        features: ['bold', 'honourable', 'secretive', 'stern', 'subtle', 'swift', 'tall', 'trueHearted'],
        choose: 2,
    },
    languagesAndTypicalNames: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 43,
            },
        },
        languages: ['common'],
        typicalNames: [
            { name: 'Adrahil', type: 'male' },
            { name: 'Amlaith', type: 'male' },
            { name: 'Arvegil', type: 'male' },
            { name: 'Baranor', type: 'male' },
            { name: 'Belecthor', type: 'male' },
            { name: 'Bergil', type: 'male' },
            { name: 'Celepharn', type: 'male' },
            { name: 'Cirion', type: 'male' },
            { name: 'Damrod', type: 'male' },
            { name: 'Dírhael', type: 'male' },
            { name: 'Duinhir', type: 'male' },
            { name: 'Egalmoth', type: 'male' },
            { name: 'Eradan', type: 'male' },
            { name: 'Findemir', type: 'male' },
            { name: 'Forlong', type: 'male' },
            { name: 'Golasdan', type: 'male' },
            { name: 'Hallas', type: 'male' },
            { name: 'Hirluin', type: 'male' },
            { name: 'Ingold', type: 'male' },
            { name: 'Iorlas', type: 'male' },
            { name: 'Malvegil', type: 'male' },
            { name: 'Ohtar', type: 'male' },
            { name: 'Orodreth', type: 'male' },
            { name: 'Tarannon', type: 'male' },
            { name: 'Targon', type: 'male' },
            { name: 'Anwen', type: 'female' },
            { name: 'Arbereth', type: 'female' },
            { name: 'Berúthiel', type: 'female' },
            { name: 'Baraniel', type: 'female' },
            { name: 'Calanril', type: 'female' },
            { name: 'Celenneth', type: 'female' },
            { name: 'Elnîth', type: 'female' },
            { name: 'Eraniel', type: 'female' },
            { name: 'Finduilas', type: 'female' },
            { name: 'Gilraen', type: 'female' },
            { name: 'Gilraeth', type: 'female' },
            { name: 'Gloredhel', type: 'female' },
            { name: 'Idril', type: 'female' },
            { name: 'Ioreth', type: 'female' },
            { name: 'Ivorwen', type: 'female' },
            { name: 'Lôrwend', type: 'female' },
            { name: 'Lothíriel', type: 'female' },
            { name: 'Luindîs', type: 'female' },
            { name: 'Meneloth', type: 'female' },
            { name: 'Moriel', type: 'female' },
            { name: 'Morwen', type: 'female' },
            { name: 'Narieth', type: 'female' },
            { name: 'Narniel', type: 'female' },
            { name: 'Orothêl', type: 'female' },
            { name: 'Tarandîs', type: 'female' },
        ]
    }
}