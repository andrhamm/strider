import { HeroicCultureType } from "../heroicCultures";

export const HeroicCultureMenOfBree: HeroicCultureType = {
    name: 'Men of Bree',
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 40,
        },
    },
    characteristics: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 40,
            },
        },
        culturalBlessing: 'breeBlood',
        standardOfLiving: 'common',
    },
    attributes: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 40,
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
                textId: 'core-rulebook',
                pageNumber: 40,
            },
        },
        table: [
            { stat: 'endurance', attribute: 'strength', add: 20 },
            { stat: 'hope', attribute: 'heart', add: 10 },
            { stat: 'parry', attribute: 'wits', add: 10 },
        ],
    },
    skills: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 40,
            },
        },
        table: [
            { skill: 'awe', rank: 0 },
            { skill: 'athletics', rank: 1 },
            { skill: 'awareness', rank: 1 },
            { skill: 'hunting', rank: 1 },
            { skill: 'song', rank: 1 },
            { skill: 'craft', rank: 2 },
            { skill: 'enhearten', rank: 2 },
            { skill: 'travel', rank: 1 },
            { skill: 'insight', rank: 2, underlined: true },
            { skill: 'healing', rank: 0 },
            { skill: 'courtesy', rank: 3 },
            { skill: 'battle', rank: 0 },
            { skill: 'persuade', rank: 2 },
            { skill: 'stealth', rank: 1 },
            { skill: 'scan', rank: 1 },
            { skill: 'explore', rank: 1 },
            { skill: 'riddle', rank: 2 },
            { skill: 'lore', rank: 0 },
        ]
    },
    combatProficiencies: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 41,
            },
        },
        table: [
            { proficiencyChoices: ['axes', 'spears'], rank: 2 },
            { proficiencyChoices: ['axes', 'bows', 'spears', 'swords'], rank: 1 },
        ],
    },
    distinctiveFeatures: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 41,
            },
        },
        features: ['cunning', 'fairSpoken', 'faithful', 'generous', 'inquisitive', 'patient', 'rustic', 'trueHearted'],
        choose: 2,
    },
    languagesAndTypicalNames: {
        source: {
            pageReference: {
                textId: 'core-rulebook',
                pageNumber: 41,
            },
        },
        languages: ['common'],
        typicalNames: [
            { name: 'Alfred', type: 'male' },
            { name: 'Artie', type: 'male' },
            { name: 'Bill', type: 'male' },
            { name: 'Bob', type: 'male' },
            { name: 'Carl', type: 'male' },
            { name: 'Ed', type: 'male' },
            { name: 'Fred', type: 'male' },
            { name: 'Giles', type: 'male' },
            { name: 'Herb', type: 'male' },
            { name: 'Larry', type: 'male' },
            { name: 'Nob', type: 'male' },
            { name: 'Oswald', type: 'male' },
            { name: 'Percy', type: 'male' },
            { name: 'Perry', type: 'male' },
            { name: 'Sid', type: 'male' },
            { name: 'Tom', type: 'male' },
            { name: 'Harry', type: 'male' },
            { name: 'Daisy', type: 'female' },
            { name: 'Emma', type: 'female' },
            { name: 'Etta', type: 'female' },
            { name: 'Fay', type: 'female' },
            { name: 'Fern', type: 'female' },
            { name: 'Flora', type: 'female' },
            { name: 'Gert', type: 'female' },
            { name: 'Holly', type: 'female' },
            { name: 'Lily', type: 'female' },
            { name: 'Myrtle', type: 'female' },
            { name: 'Poppy', type: 'female' },
            { name: 'Rose', type: 'female' },
            { name: 'Sage', type: 'female' },
            { name: 'Tilly', type: 'female' },
            { name: 'Violet', type: 'female' },
            { name: 'Appledore', type: 'family' },
            { name: 'Asterfire', type: 'family' },
            { name: 'Bellsap', type: 'family' },
            { name: 'Briarcleave', type: 'family' },
            { name: 'Butterbur', type: 'family' },
            { name: 'Cherryborn', type: 'family' },
            { name: 'Chesterstout', type: 'family' },
            { name: 'Droverwind', type: 'family' },
            { name: 'Ferny', type: 'family' },
            { name: 'Foxglow', type: 'family' },
            { name: 'Goatleaf', type: 'family' },
            { name: 'Hardybough', type: 'family' },
            { name: 'Heathertoes', type: 'family' },
            { name: 'Hedgedon', type: 'family' },
            { name: 'Kettlegrass', type: 'family' },
            { name: 'Lilyhawk', type: 'family' },
            { name: 'Mossburn', type: 'family' },
            { name: 'Mugworts', type: 'family' },
            { name: 'Oakstout', type: 'family' },
            { name: 'Pickthorn', type: 'family' },
            { name: 'Pollenroad', type: 'family' },
            { name: 'Rushlight', type: 'family' },
            { name: 'Shrubrose', type: 'family' },
            { name: 'Sweetroot', type: 'family' },
            { name: 'Thistlewool', type: 'family' },
            { name: 'Wayward', type: 'family' },
        ]
    },
}