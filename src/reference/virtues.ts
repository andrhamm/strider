import { HeroicCultureKeySchema, PageReferenceSchema, VirtueKeySchema } from "./keys"

import { z } from "zod"

const VirtueSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    name: z.string(),
    cultures: z.array(HeroicCultureKeySchema).min(1).optional(),
    minimumWisdom: z.number().optional(),
})

const VirtuesSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    virtues: z.record(VirtueKeySchema, VirtueSchema).refine((obj): obj is Required<typeof obj> =>
        VirtueKeySchema.options.every((key) => obj[key] != null),
    )
})

type VirtuesType = z.infer<typeof VirtuesSchema>

export const Virtues: VirtuesType = {
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 80,
        },
    },
    virtues: {
        confidence: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 80,
                },
            },
            name: 'Confidence',
        },
        dourHanded: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 80,
                },
            },
            name: 'Dour-handed',
        },
        hardiness: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 80,
                },
            },
            name: 'Hardiness',
        },
        mastery: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 80,
                },
            },
            name: 'Mastery',
        },
        nimbleness: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 80,
                },
            },
            name: 'Nimbleness',
        },
        prowess: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 80,
                },
            },
            name: 'Prowess',
        },
        cram: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 81,
                }
            },
            name: 'Cram',
            cultures: ['bardings'],
            minimumWisdom: 2
        },
        dragonSlayer: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 81,
                }
            },
            name: 'Dragon-slayer',
            cultures: ['bardings'],
            minimumWisdom: 2,
        },
        dwarfFriend: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 81,
                }
            },
            name: 'Dwarf-friend',
            cultures: ['bardings'],
            minimumWisdom: 2,
        },
        fierceShot: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 81,
                }
            },
            name: 'Fierce Shot',
            cultures: ['bardings'],
            minimumWisdom: 2,
        },
        highDestiny: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 82,
                }
            },
            name: 'High Destiny',
            cultures: ['bardings'],
            minimumWisdom: 2,
        },
        theLanguageOfBirds: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 82,
                }
            },
            name: 'The Language of Birds',
            cultures: ['bardings'],
            minimumWisdom: 2,
        },

        barukKhazad: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 82
                }
            },
            name: 'Baruk Khazâd!',
            cultures: ["dwarvesOfDurinsFolk"],
            minimumWisdom: 2,
        },
        brokenSpells: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 83
                }
            },
            name: 'Broken Spells',
            cultures: ["dwarvesOfDurinsFolk"],
            minimumWisdom: 2,
        },
        darkForDarkBusiness: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 83
                }
            },
            name: 'Dark For Dark Business',
            cultures: ["dwarvesOfDurinsFolk"],
            minimumWisdom: 2,
        },
        durinsWay: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 83
                }
            },
            name:'Durin\'s Way' ,
            cultures: ["dwarvesOfDurinsFolk"],
            minimumWisdom: 2,
        },
        stoneHard: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 83
                }
            },
            name:'Stone-hard' ,
            cultures: ["dwarvesOfDurinsFolk"],
            minimumWisdom: 2,
        },
        untameableSpirit: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 84
                }
            },
            name: 'Untameable Spirit',
            cultures: ["dwarvesOfDurinsFolk"],
            minimumWisdom: 2,
        },
        againstTheUnseen: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 84
                }
            },
            name: 'Against The Unseen',
            cultures: ["elvesOfLindon", "elvesOfMirkwood", "highElvesOfRivendell"],
            minimumWisdom: 2,
        },
        deadlyArchery: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 84
                }
            },
            name: 'Deadly Archery',
            cultures: ["elvesOfLindon", "elvesOfMirkwood", "highElvesOfRivendell"],
            minimumWisdom: 2,
        },
        elberethGilthoniel: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 84
                }
            },
            name: 'Elbereth Gilthoniel!',
            cultures: ["elvesOfLindon", "highElvesOfRivendell"],
            minimumWisdom: 2,
        },
        elvishDreams: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 85
                }
            },
            name: 'Elvish Dreams',
            cultures: ["elvesOfLindon", "elvesOfMirkwood", "highElvesOfRivendell"],
            minimumWisdom: 2,
        },
        gleamOfWrath: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 85
                }
            },
            name: 'Gleam of Wrath',
            cultures: ["elvesOfLindon", "elvesOfMirkwood", "highElvesOfRivendell"],
            minimumWisdom: 2,
        },
        memoryOfAncientDays: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 85
                }
            },
            name: 'Memory of Ancient Days',
            cultures: ["elvesOfLindon", "highElvesOfRivendell"],
            minimumWisdom: 2,
        },
        artOfDisappearing: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 85
                }
            },
            name: 'Art of Disappearing',
            cultures: ["hobbitsOfTheShire"],
            minimumWisdom: 2,
        },
        braveAtAPinch: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 85
                }
            },
            name: 'Brave At A Pinch',
            cultures: ["hobbitsOfTheShire"],
            minimumWisdom: 2,
        },
        smallFolk: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 85
                }
            },
            name: 'Small Folk',
            cultures: ["hobbitsOfTheShire"],
            minimumWisdom: 2,
        },
        sureAtTheMark: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 86
                }
            },
            name: 'Sure At The Mark',
            cultures: ["hobbitsOfTheShire"],
            minimumWisdom: 2,
        },
        threeIsCompany: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 86
                }
            },
            name: 'Three Is Company',
            cultures: ["hobbitsOfTheShire"],
            minimumWisdom: 2,
        },
        toughAsOldTreeRoots: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 86
                }
            },
            name: 'Tough As Old Tree Roots',
            cultures: ["hobbitsOfTheShire"],
            minimumWisdom: 2,
        },
        
        breePony: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 87
                },
            },
            name: 'Bree Pony',
            cultures: ["menOfBree"],
            minimumWisdom: 2,
        },
        defiance: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 87
                },
            },
            name: 'Defiance',
            cultures: ["menOfBree"],
            minimumWisdom: 2,
        },
        desperateCourage: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 88
                },
            },
            name: 'Desperate Courage',
            cultures: ["menOfBree"],
            minimumWisdom: 2,
        },
        friendlyAndFamiliar: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 88
                },
            },
            name: 'Friendly And Familiar',
            cultures: ["menOfBree"],
            minimumWisdom: 2,
        },
        strangeAsNewsFromBree: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 88
                },
            },
            name: 'Strange As News From Bree',
            cultures: ["menOfBree"],
            minimumWisdom: 2,
        },
        theArtOfSmoking: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 88
                },
            },
            name: 'The Art Of Smoking',
            cultures: ["menOfBree"],
            minimumWisdom: 2,
        },
        enduranceOfTheRanger: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 88,
                }
            },
            name: 'Endurance Of The Ranger',
            cultures: ["rangersOfTheNorth"],
            minimumWisdom: 2,
        },
        foresightOfTheirKindred: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 88,
                }
            },
            name: 'Foresight Of Their Kindred',
            cultures: ["rangersOfTheNorth"],
            minimumWisdom: 2,
        },
        heirOfArnor: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 88,
                }
            },
            name: 'Heir of Arnor',
            cultures: ["rangersOfTheNorth"],
            minimumWisdom: 2,
        },
        royaltyRevealed: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 89,
                }
            },
            name: 'Royalty Revealed',
            cultures: ["rangersOfTheNorth"],
            minimumWisdom: 2,
        },
        strengthOfWill: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 89,
                }
            },
            name: 'Strength of Will',
            cultures: ["rangersOfTheNorth"],
            minimumWisdom: 2,
        },
        waysOfTheWild: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 89,
                }
            },
            name: 'Ways Of The Wild',
            cultures: ["rangersOfTheNorth"],
            minimumWisdom: 2,
        },
        beornsEnchantment: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 4,
                }
            },
            name: 'Beorn\'s Enchantment',
            cultures: ['beornings'],
            minimumWisdom: 2,
        },
        brotherToBears: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 4,
                }
            },
            name: 'Brother To Bears',
            cultures: ['beornings'],
            minimumWisdom: 2,
        },
        greatStrength: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 4,
                }
            },
            name: 'Great Strength',
            cultures: ['beornings'],
            minimumWisdom: 2,
        },
        skinCoat: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 4,
                }
            },
            name: 'Skin-coat',
            cultures: ['beornings'],
            minimumWisdom: 2,
        },
        splittingBlow: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 4,
                }
            },
            name: 'Splitting Blow',
            cultures: ['beornings'],
            minimumWisdom: 2,
        },
        twiceBakedHoneyCakes: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 4,
                }
            },
            name: 'Twice-baked Honey-cakes',
            cultures: ['beornings'],
            minimumWisdom: 2,
        },
        elfLights: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 7,
                }
            },
            name: 'Elf-lights',
            cultures: ["elvesOfMirkwood"],
            minimumWisdom: 2,
        },
        shotsInTheDark: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 7,
                }
            },
            name: 'Shots In The Dark',
            cultures: ["elvesOfMirkwood"],
            minimumWisdom: 2,
        },
        aHuntersResolve: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 10,
                }
            },
            name: 'A Hunter\'s Resolve',
            cultures: ["woodmenOfWilderland"],
            minimumWisdom: 2,
        },
        herbalRemedies: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 10,
                }
            },
            name: 'Herbal Remedies',
            cultures: ["woodmenOfWilderland"],
            minimumWisdom: 2,
        },
        forestHarrier: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 10,
                }
            },
            name: 'Forest Harrier',
            cultures: ["woodmenOfWilderland"],
            minimumWisdom: 2,
        },
        houndOfMirkwood: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 10,
                }
            },
            name: 'Hound of Mirkwood',
            cultures: ["woodmenOfWilderland"],
            minimumWisdom: 2,
        },
        naturalWatchfulness: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 10,
                }
            },
            name: 'Natural Watchfulness',
            cultures: ["woodmenOfWilderland"],
            minimumWisdom: 2,
        },
        staunchingSong: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 8,
                }
            },
            name: 'Staunching Song',
            cultures: ["woodmenOfWilderland"],
            minimumWisdom: 2,
        },

        artificerOfEregion: {
            source: {
                pageReference: {
                    textId: 'rivendell',
                    pageNumber: 12,
                }
            },
            name: 'Artificer of Eregion',
            cultures: ["highElvesOfRivendell"],
            minimumWisdom: 2,
        },
        beautyOfTheStars: {
            source: {
                pageReference: {
                    textId: 'rivendell',
                    pageNumber: 12,
                }
            },
            name: 'Beauty Of The Stars',
            cultures: ["highElvesOfRivendell"],
            minimumWisdom: 2,
        },
        mightOfTheFirstborn: {
            source: {
                pageReference: {
                    textId: 'rivendell',
                    pageNumber: 12,
                }
            },
            name: 'Might Of The Firstborn',
            cultures: ["highElvesOfRivendell"],
            minimumWisdom: 2,
        },
        skillOfTheEldar: {
            source: {
                pageReference: {
                    textId: 'rivendell',
                    pageNumber: 12,
                }
            },
            name: 'Skill Of The Eldar',
            cultures: ["highElvesOfRivendell"],
            minimumWisdom: 2,
        },
    }
}