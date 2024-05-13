import { HeroicCultureType } from "../heroicCultures";

export const HeroicCultureHighElvesOfRivendell: HeroicCultureType = {
    name: 'High Elves of Rivendell',
    source: {
        pageReference: {
            textId: 'rivendell',
            pageNumber: 10,
        },
    },
    characteristics: {
        source: {
            pageReference: {
                textId: 'rivendell',
                pageNumber: 10,
            },
        },
        culturalBlessing: 'elvenWise',
        standardOfLiving: 'prosperous',
        culturalHandicap: 'besetByWoe'
    },
    attributes: {
        source: {
            pageReference: {
                textId: 'rivendell',
                pageNumber: 10,
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
                textId: 'rivendell',
                pageNumber: 10,
            },
        },
        table: [
            { stat: 'endurance', attribute: 'strength', add: 22 },
            { stat: 'hope', attribute: 'heart', add: 6 },
            { stat: 'parry', attribute: 'wits', add: 12 },
        ],
    },
    skills: {
        source: {
            pageReference: {
                textId: 'rivendell',
                pageNumber: 11,
            },
        },
        table: [
            { skill: 'awe', rank: 2 },
            { skill: 'athletics', rank: 2 },
            { skill: 'awareness', rank: 2, underlined: true },
            { skill: 'hunting', rank: 0 },
            { skill: 'song', rank: 2 },
            { skill: 'craft', rank: 2 },
            { skill: 'enhearten', rank: 0 },
            { skill: 'travel', rank: 1 },
            { skill: 'insight', rank: 0 },
            { skill: 'healing', rank: 2, underlined: true },
            { skill: 'courtesy', rank: 1 },
            { skill: 'battle', rank: 2 },
            { skill: 'persuade', rank: 0 },
            { skill: 'stealth', rank: 0 },
            { skill: 'scan', rank: 0 },
            { skill: 'explore', rank: 0 },
            { skill: 'riddle', rank: 0 },
            { skill: 'lore', rank: 3 },
        ]
    },
    combatProficiencies: {
        source: {
            pageReference: {
                textId: 'rivendell',
                pageNumber: 11,
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
                textId: 'rivendell',
                pageNumber: 11,
            },
        },
        features: ['fair', 'keenEyed', 'lordly', 'inquisitive', 'merry', 'proud', 'subtle', 'wilful'],
        choose: 2,
    },
    languagesAndTypicalNames: {
        source: {
            pageReference: {
                textId: 'rivendell',
                pageNumber: 11,
            },
        },
        languages: ['common', 'elvish', 'ancientElvish'],
        typicalNames: [
            { name: 'Aegnor', type: 'male' },
            { name: 'Beleg', type: 'male' },
            { name: 'Celegrom', type: 'male' },
            { name: 'Daeron', type: 'male' },
            { name: 'Edrahil', type: 'male' },
            { name: 'Fingon', type: 'male' },
            { name: 'Finrod', type: 'male' },
            { name: 'Gwindor', type: 'male' },
            { name: 'Mablung', type: 'male' },
            { name: 'Maeglin', type: 'male' },
            { name: 'Orodreth', type: 'male' },
            { name: 'Saeros', type: 'male' },
            { name: 'Amarië', type: 'female' },
            { name: 'Ancalimë', type: 'female' },
            { name: 'Berúthiel', type: 'female' },
            { name: 'Celebrindal', type: 'female' },
            { name: 'Elwing', type: 'female' },
            { name: 'Finduilas', type: 'female' },
            { name: 'Fíriel', type: 'female' },
            { name: 'Idril', type: 'female' },
            { name: 'Lothiriel', type: 'female' },
            { name: 'Míriel', type: 'female' },
            { name: 'Nimloth', type: 'female' },
            { name: 'Nimrodel', type: 'female' },
        ]
    }
}