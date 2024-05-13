import { HeroicCultureType } from "../heroicCultures";

export const HeroicCultureWoodmenOfWilderland: HeroicCultureType = {
    name: 'Woodmen of Wilderland',
    source: {
        pageReference: {
            textId: 'peoples-of-wilderland',
            pageNumber: 8,
        },
    },
    characteristics: {
        source: {
            pageReference: {
                textId: 'peoples-of-wilderland',
                pageNumber: 8,
            },
        },
        culturalBlessing: 'woodGoer',
        standardOfLiving: 'frugal',
    },
    attributes: {
        source: {
            pageReference: {
                textId: 'peoples-of-wilderland',
                pageNumber: 8,
            },
        },
        table: [
            { roll: 1, strength: 2, heart: 5, wits: 7 },
            { roll: 2, strength: 3, heart: 4, wits: 7 },
            { roll: 3, strength: 3, heart: 5, wits: 6 },
            { roll: 4, strength: 4, heart: 4, wits: 6 },
            { roll: 5, strength: 4, heart: 5, wits: 5 },
            { roll: 6, strength: 2, heart: 6, wits: 6 },
        ],
    },
    derivedStats: {
        source: {
            pageReference: {
                textId: 'peoples-of-wilderland',
                pageNumber: 8,
            },
        },
        table: [
            { stat: 'endurance', attribute: 'strength', add: 22 },
            { stat: 'hope', attribute: 'heart', add: 8 },
            { stat: 'parry', attribute: 'wits', add: 10 },
        ],
    },
    skills: {
        source: {
            pageReference: {
                textId: 'peoples-of-wilderland',
                pageNumber: 8,
            },
        },
        table: [
            { skill: 'awe', rank: 0 },
            { skill: 'athletics', rank: 2 },
            { skill: 'awareness', rank: 3 },
            { skill: 'hunting', rank: 3, underlined: true },
            { skill: 'song', rank: 1 },
            { skill: 'craft', rank: 1 },
            { skill: 'enhearten', rank: 1 },
            { skill: 'travel', rank: 0 },
            { skill: 'insight', rank: 0 },
            { skill: 'healing', rank: 2, underlined: true },
            { skill: 'courtesy', rank: 0 },
            { skill: 'battle', rank: 1 },
            { skill: 'persuade', rank: 0 },
            { skill: 'stealth', rank: 2 },
            { skill: 'scan', rank: 0 },
            { skill: 'explore', rank: 2 },
            { skill: 'riddle', rank: 1 },
            { skill: 'lore', rank: 0 },
        ]
    },
    combatProficiencies: {
        source: {
            pageReference: {
                textId: 'peoples-of-wilderland',
                pageNumber: 9,
            },
        },
        table: [
            { proficiencyChoices: ['axes', 'bows'], rank: 2 },
            { proficiencyChoices: ['axes', 'bows', 'spears', 'swords'], rank: 1 },
        ],
    },
    distinctiveFeatures: {
        source: {
            pageReference: {
                textId: 'peoples-of-wilderland',
                pageNumber: 9,
            },
        },
        features: ['cunning', 'eager', 'faithful', 'patient', 'stern', 'swift', 'trueHearted', 'wary'],
        choose: 2,
    },
    languagesAndTypicalNames: {
        source: {
            pageReference: {
                textId: 'peoples-of-wilderland',
                pageNumber: 9,
            },
        },
        languages: ['common', "regionalMannishValesOfTheAnduinRiver"],
        typicalNames: [
            { name: 'Amalric', type: 'male' },
            { name: 'Ansegisel', type: 'male' },
            { name: 'Audovald', type: 'male' },
            { name: 'Balderic', type: 'male' },
            { name: 'Beranald', type: 'male' },
            { name: 'Beormud', type: 'male' },
            { name: 'Ebrimuth', type: 'male' },
            { name: 'Euric', type: 'male' },
            { name: 'Gisalric', type: 'male' },
            { name: 'Grimbald', type: 'male' },
            { name: 'Gundovald', type: 'male' },
            { name: 'Hartgard', type: 'male' },
            { name: 'Hartnid', type: 'male' },
            { name: 'Imnachar', type: 'male' },
            { name: 'Ingelram', type: 'male' },
            { name: 'Malaric', type: 'male' },
            { name: 'Munderic', type: 'male' },
            { name: 'Odo', type: 'male' },
            { name: 'Odovacar', type: 'male' },
            { name: 'Reginar', type: 'male' },
            { name: 'Ricfried', type: 'male' },
            { name: 'Sigibert', type: 'male' },
            { name: 'Sunnegisil', type: 'male' },
            { name: 'Theodebert', type: 'male' },
            { name: 'Theodemir', type: 'male' },
            { name: 'Theudebald', type: 'male' },
            { name: 'Theuderic', type: 'male' },
            { name: 'Waleran', type: 'male' },
            { name: 'Willicar', type: 'male' },
            { name: 'Adosinda', type: 'female' },
            { name: 'Amalfrida', type: 'female' },
            { name: 'Amalina', type: 'female' },
            { name: 'Avagisa', type: 'female' },
            { name: 'Avina', type: 'female' },
            { name: 'Basina', type: 'female' },
            { name: 'Beranhild', type: 'female' },
            { name: 'Brunihild', type: 'female' },
            { name: 'Deuteria', type: 'female' },
            { name: 'Gailavira', type: 'female' },
            { name: 'Garsendis', type: 'female' },
            { name: 'Geleswinta', type: 'female' },
            { name: 'Gelvira', type: 'female' },
            { name: 'Grimhild', type: 'female' },
            { name: 'Gunteuch', type: 'female' },
            { name: 'Hermesind', type: 'female' },
            { name: 'Heva', type: 'female' },
            { name: 'Hilduara', type: 'female' },
            { name: 'Ingund', type: 'female' },
            { name: 'Radegund', type: 'female' },
            { name: 'Sichild', type: 'female' },
            { name: 'Verich', type: 'female' },
            { name: 'Waldrada', type: 'female' },
            { name: 'Wisigard', type: 'female' },
            { name: 'the Bird-keeper', type: 'nickname' },
            { name: 'the Bowman', type: 'nickname' },
            { name: 'the Bride', type: 'nickname' },
            { name: 'the Bright one', type: 'nickname' },
            { name: 'the Eagle', type: 'nickname' },
            { name: 'the Healer', type: 'nickname' },
            { name: 'the Hound', type: 'nickname' },
            { name: 'the Hunter', type: 'nickname' },
            { name: 'the Quick', type: 'nickname' },
            { name: 'the Shepherd', type: 'nickname' },
            { name: 'the Shield-bearer', type: 'nickname' },
            { name: 'the Silent one', type: 'nickname' },
            { name: 'the Spear-shaker', type: 'nickname' },
            { name: 'the Wood-goer', type: 'nickname' },
        ]
    }
}