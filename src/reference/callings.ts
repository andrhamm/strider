import { CallingKeySchema, DistinctiveFeatureKeySchema, PageReferenceSchema, ShadowPathKeySchema, SkillKeySchema } from "./keys"

import { z } from "zod"

const CallingSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    name: z.string(),
    favouredSkills: z.object({
        source: z.object({
            pageReference: PageReferenceSchema,
        }),
        skills: z.array(SkillKeySchema),
        choose: z.number(),
    }),
    additionalDistinctiveFeature: z.object({
        source: z.object({
            pageReference: PageReferenceSchema,
        }),
        feature: DistinctiveFeatureKeySchema,
    }),
    shadowPath: ShadowPathKeySchema,
})

const CallingsSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    callings: z.record(CallingKeySchema, CallingSchema).refine((obj): obj is Required<typeof obj> =>
        CallingKeySchema.options.every((key) => obj[key] != null),
    )
})

type CallingsType = z.infer<typeof CallingsSchema>

export const Callings: CallingsType = {
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 44,
        },
    },
    callings: {
        captain: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 44,
                },
            },
            name: 'Captain',
            favouredSkills: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 44,
                    },
                },
                skills: ['battle', 'enhearten', 'persuade'],
                choose: 2,
            },
            additionalDistinctiveFeature: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 44,
                    },
                },
                feature: 'leadership',
            },
            shadowPath: 'lureOfPower',
        },
        champion: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 44,
                },
            },
            name: 'Champion',
            favouredSkills: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 44,
                    },
                },
                skills: ['athletics', 'awe', 'hunting'],
                choose: 2,
            },
            additionalDistinctiveFeature: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 45,
                    },
                },
                feature: 'enemyLore',
            },
            shadowPath: 'curseOfVengeance',
        },
        messenger: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 45,
                },
            },
            name: 'Messenger',
            favouredSkills: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 45,
                    },
                },
                skills: ['courtesy', 'song', 'travel'],
                choose: 2,
            },
            additionalDistinctiveFeature: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 45,
                    },
                },
                feature: 'folkLore',
            },
            shadowPath:  'wanderingMadness',
        },
        scholar: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 45,
                },
            },
            name: 'Scholar',
            favouredSkills: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 45,
                    },
                },
                skills: ['craft', 'lore', 'riddle'],
                choose: 2,
            },
            additionalDistinctiveFeature: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 45,
                    },
                },
                feature: 'rhymesOfLore',
            },
            shadowPath: 'lureOfSecrets',
        },
        treasureHunter: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 45,
                },
            },
            name: 'Treasure-hunter',
            favouredSkills: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 45,
                    },
                },
                skills: ['explore', 'scan', 'stealth'],
                choose: 2,
            },
            additionalDistinctiveFeature: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 45,
                    },
                },
                feature: 'burglary',
            },
            shadowPath: 'dragonSickness',
        },
        warden: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 46,
                },
            },
            name: 'Warden',
            favouredSkills: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 46,
                    },
                },
                skills: ['awareness', 'healing', 'insight'],
                choose: 2,
            },
            additionalDistinctiveFeature: {
                source: {
                    pageReference: {
                        textId: 'core-rulebook',
                        pageNumber: 46,
                    },
                },
                feature: 'shadowLore',
            },
            shadowPath: 'pathOfDespair',
        },
    }
}