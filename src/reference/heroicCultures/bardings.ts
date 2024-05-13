import { HeroicCultureType } from "../heroicCultures";

export const HeroicCultureBardings: HeroicCultureType = {
    name: 'Bardings',
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 32,
        },
    },
    characteristics: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 32,
            },
        },
        culturalBlessing:  'stoutHearted',
        standardOfLiving: 'prosperous',
    },
    attributes: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 32,
            },
        },
        table: [
            { roll: 1, strength: 5, heart: 7, wits: 2 },
            { roll: 2, strength: 4, heart: 7, wits: 3 },
            { roll: 3, strength: 5, heart: 6, wits: 3 },
            { roll: 4, strength: 4, heart: 6, wits: 4 },
            { roll: 5, strength: 5, heart: 5, wits: 4 },
            { roll: 6, strength: 6, heart: 6, wits: 2 },
        ],
    },
    derivedStats: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 32,
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
                pageNumber: 32,
            },
        },
        table: [
            { skill: 'awe', rank: 1 },
            { skill: 'athletics', rank: 1, underlined: true },
            { skill: 'awareness', rank: 0 },
            { skill: 'hunting', rank: 2 },
            { skill: 'song', rank: 1 },
            { skill: 'craft', rank: 1 },
            { skill: 'enhearten', rank: 2, underlined: true },
            { skill: 'travel', rank: 1 },
            { skill: 'insight', rank: 2 },
            { skill: 'healing', rank: 0 },
            { skill: 'courtesy', rank: 2 },
            { skill: 'battle', rank: 2 },
            { skill: 'persuade', rank: 3 },
            { skill: 'stealth', rank: 0 },
            { skill: 'scan', rank: 1 },
            { skill: 'explore', rank: 1 },
            { skill: 'riddle', rank: 0 },
            { skill: 'lore', rank: 1 },
        ]
    },
    combatProficiencies: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 33,
            },
        },
        table: [
            { proficiencyChoices: ['bows', 'swords'], rank: 2 },
            { proficiencyChoices: ['axes', 'bows', 'spears', 'swords'], rank: 1 },
        ],
    },
    distinctiveFeatures: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 33,
            },
        },
        features: ['bold', 'eager', 'fair', 'fierce', 'generous', 'proud', 'tall', 'wilful'],
        choose: 2,
    },
    languagesAndTypicalNames: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 33,
            },
        },
        languages: ['common', 'dalish'],
        typicalNames: [
            { name: 'Aegir', type: 'male' },
            { name: 'Arn', type: 'male' },
            { name: 'Brandulf', type: 'male' },
            { name: 'Domarr', type: 'male' },
            { name: 'Egil', type: 'male' },
            { name: 'Erland', type: 'male' },
            { name: 'Farald', type: 'male' },
            { name: 'Finn', type: 'male' },
            { name: 'Gautarr', type: 'male' },
            { name: 'Hafgrim', type: 'male' },
            { name: 'Hjalmar', type: 'male' },
            { name: 'Ingolf', type: 'male' },
            { name: 'Jofur', type: 'male' },
            { name: 'Kolbeinn', type: 'male' },
            { name: 'Leiknir', type: 'male' },
            { name: 'Lomund', type: 'male' },
            { name: 'Munan', type: 'male' },
            { name: 'Nari', type: 'male' },
            { name: 'Nefstan', type: 'male' },
            { name: 'Ottarr', type: 'male' },
            { name: 'Ragnarr', type: 'male' },
            { name: 'Reinald', type: 'male' },
            { name: 'Sigmarr', type: 'male' },
            { name: 'Steinarr', type: 'male' },
            { name: 'Thorald', type: 'male' },
            { name: 'Torwald', type: 'male' },
            { name: 'Ulfarr', type: 'male' },
            { name: 'Unnarr', type: 'male' },
            { name: 'Vandil', type: 'male' },
            { name: 'Varinn', type: 'male' },
            { name: 'Aldis', type: 'female' },
            { name: 'Asfrid', type: 'female' },
            { name: 'Bera', type: 'female' },
            { name: 'Bergdis', type: 'female' },
            { name: 'Dagmar', type: 'female' },
            { name: 'Eilif', type: 'female' },
            { name: 'Erna', type: 'female' },
            { name: 'Frida', type: 'female' },
            { name: 'Geira', type: 'female' },
            { name: 'Gudrun', type: 'female' },
            { name: 'Halla', type: 'female' },
            { name: 'Hild', type: 'female' },
            { name: 'Ingirun', type: 'female' },
            { name: 'Ingrith', type: 'female' },
            { name: 'Lif', type: 'female' },
            { name: 'Linhild', type: 'female' },
            { name: 'Kelda', type: 'female' },
            { name: 'Runa', type: 'female' },
            { name: 'Saldis', type: 'female' },
            { name: 'Sigga', type: 'female' },
            { name: 'Sigrun', type: 'female' },
            { name: 'Thora', type: 'female' },
            { name: 'Thordis', type: 'female' },
            { name: 'Thorhild', type: 'female' },
            { name: 'Ulfhild', type: 'female' },
            { name: 'Ulfrun', type: 'female' },
            { name: 'Una', type: 'female' },
            { name: 'Valdis', type: 'female' },
            { name: 'Vigdis', type: 'female' },
            { name: 'Walda', type: 'female' },
        ]
    }
}