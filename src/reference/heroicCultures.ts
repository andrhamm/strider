import { AttributeKeySchema, CombatProficiencyKeySchema, CulturalBlessingKeySchema, CulturalHandicapKeySchema, DerivedStatKeySchema, DistinctiveFeatureKeySchema, HeroicCultureKeySchema, LanguageKeySchema, PageReferenceSchema, SkillKeySchema, StandardOfLivingKeySchema, TypicalNameTypeKeySchema } from "./keys"

import { z } from "zod"

const CulturalBlessingSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    name: z.string(),
})

const CulturalBlessingsSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    culturalBlessings: z.record(CulturalBlessingKeySchema, CulturalBlessingSchema).refine((obj): obj is Required<typeof obj> =>
        CulturalBlessingKeySchema.options.every((key) => obj[key] != null),
    )
})

type CulturalBlessingsType = z.infer<typeof CulturalBlessingsSchema>

export const CulturalBlessings: CulturalBlessingsType = {
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 30,
        },
    },
    culturalBlessings: {
        stoutHearted: {
            source: {
                pageReference: {
                textId: 'core-rulebook',
                pageNumber: 32,
                },
            },
            name: 'Stout-hearted',
        },
        redoubtable: {
            source: {
                pageReference: {
                textId: 'core-rulebook',
                pageNumber: 34,
                },
            },
            name: 'Redoubtable',
        },
        elvenSkill: {
            source: {
                pageReference: {
                textId: 'core-rulebook',
                pageNumber: 36,
                },
            },
            name: 'Elven-skill',
        },
        hobbitSense: {
            source: {
                pageReference: {
                textId: 'core-rulebook',
                pageNumber: 38,
                },
            },
            name: 'Hobbit-sense',
        },
        breeBlood: {
            source: {
                pageReference: {
                textId: 'core-rulebook',
                pageNumber: 40,
                },
            },
            name: 'Bree-blood',
        },
        kingsOfMen: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 42,
                },
            },
            name: 'Kings of Men',
        },
        furious: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 2,
                },
            },
            name: 'Furious',
        },
        folkOfTheDusk: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 5,
                },
            },
            name: 'Folk of the Dusk',
        },
        woodGoer: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 8,
                },
            },
            name: 'Wood-goer',
        },
        elvenWise: {
            source: {
                pageReference: {
                    textId: 'rivendell',
                    pageNumber: 10,
                },
            },
            name: 'Elven-wise',
        },
    }
}

const CulturalHandicapSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    name: z.string(),
})

const CulturalHandicapsSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    culturalHandicaps: z.record(CulturalHandicapKeySchema, CulturalHandicapSchema).refine((obj): obj is Required<typeof obj> =>
        CulturalHandicapKeySchema.options.every((key) => obj[key] != null),
    )
})

type CulturalHandicapsType = z.infer<typeof CulturalHandicapsSchema>

export const CulturalHandicaps: CulturalHandicapsType = {
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 30,
        },
    },
    culturalHandicaps: {
        naugrim: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 34,
                },
            },
            name: 'Naugrim',
        },
        theLongDefeat: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 36,
                },
            },
            name: 'The Long Defeat',
        },
        halflings: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 38,
                },
            },
            name: 'Halflings',
        },
        allegianceOfTheDunedain: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 42,
                },
            },
            name: 'Allegiance of the Dúnedain',
        },
        besetByWoe: {
            source: {
                pageReference: {
                    textId: "rivendell",
                    pageNumber: 10,
                },
            },
            name: 'Beset by Woe',
        }
    }
}

const AttributesTableSchema = z.array(z.object({
    roll: z.number(),
    strength: z.number(),
    heart: z.number(),
    wits: z.number(),
})).length(6)

const DerivedStatsTableSchema = z.array(z.object({
    stat: DerivedStatKeySchema,
    attribute: AttributeKeySchema,
    add: z.number(),
})).length(3)

const SkillsTableSchema = z.array(z.object({
    skill: SkillKeySchema,
    rank: z.number(),
    underlined: z.boolean().default(false).optional(),
})).length(18)

const HeroicCultureSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    name: z.string(),
    characteristics: z.object({
        source: z.object({
            pageReference: PageReferenceSchema,
        }),
        culturalBlessing: CulturalBlessingKeySchema,
        culturalHandicap: CulturalHandicapKeySchema.optional(),
        standardOfLiving: StandardOfLivingKeySchema,
    }),
    attributes: z.object({
        source: z.object({
            pageReference: PageReferenceSchema,
        }),
        table: AttributesTableSchema,
    }),
    derivedStats: z.object({
        source: z.object({
            pageReference: PageReferenceSchema,
        }),
        table: DerivedStatsTableSchema,
    }),
    skills: z.object({
        source: z.object({
            pageReference: PageReferenceSchema,
        }),
        table: SkillsTableSchema,
    }),
    combatProficiencies: z.object({
        source: z.object({
            pageReference: PageReferenceSchema,
        }),
        table: z.array(z.object({
            proficiencyChoices: z.array(CombatProficiencyKeySchema),
            rank: z.number(),
        })),
    }),
    distinctiveFeatures: z.object({
        source: z.object({
            pageReference: PageReferenceSchema,
        }),
        features: z.array(DistinctiveFeatureKeySchema),
        choose: z.number(),
    }),
    languagesAndTypicalNames: z.object({
        source: z.object({
            pageReference: PageReferenceSchema,
        }),
        languages: z.array(LanguageKeySchema),
        typicalNames: z.array(z.object({
            name: z.string(),
            type: TypicalNameTypeKeySchema,
            example: z.string().optional(),
        })),
    }),
})
export type HeroicCultureType = z.infer<typeof HeroicCultureSchema>

const HeroicCulturesSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    heroicCultures: z.record(HeroicCultureKeySchema, HeroicCultureSchema).refine((obj): obj is Required<typeof obj> =>
        HeroicCultureKeySchema.options.every((key) => obj[key] != null),
    )
})
export type HeroicCulturesType = z.infer<typeof HeroicCulturesSchema>