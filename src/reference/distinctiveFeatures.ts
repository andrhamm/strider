import { DistinctiveFeatureKeySchema, PageReferenceSchema } from "./keys"

import { z } from "zod"

const DistinctiveFeatureSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    name: z.string(),
})

const DistinctiveFeaturesSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    distinctiveFeatures: z.record(DistinctiveFeatureKeySchema, DistinctiveFeatureSchema).refine((obj): obj is Required<typeof obj> =>
        DistinctiveFeatureKeySchema.options.every((key) => obj[key] != null),
    )
})

type DistinctiveFeaturesType = z.infer<typeof DistinctiveFeaturesSchema>

export const DistinctiveFeatures: DistinctiveFeaturesType = {
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 67,
        },
    },
    distinctiveFeatures: {
        bold: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 67,
                }
            },
            name: 'Bold'
        },
        cunning: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 67,
                }
            },
            name: 'Cunning'
        },
        eager: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 67,
                }
            },
            name: 'Eager'
        },
        faithful: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'faithful'
        },
        fair: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Fair'
        },
        fairSpoken: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Fair-spoken'
        },
        fierce: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Fierce'
        },
        generous: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Generous'
        },
        honourable: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Honourable'
        },
        inquisitive: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Inquisitive'
        },
        keenEyed: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Keen-eyed'
        },
        lordly: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Lordly'
        },
        merry: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Merry'
        },
        patient: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Patient'
        },
        proud: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Proud'
        },
        rustic: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Rustic'
        },
        secretive: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Secretive'
        },
        stern: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 68,
                }
            },
            name: 'Stern'
        },
        subtle: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 69,
                }
            },
            name: 'subtle'
        },
        swift: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 69,
                }
            },
            name: 'Swift'
        },
        tall: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 69,
                }
            },
            name: 'Tall'
        },
        trueHearted: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 69,
                }
            },
            name: 'True-hearted'
        },
        wary: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 69,
                }
            },
            name: 'Wary'
        },
        wilful: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 69,
                }
            },
            name: 'Wilful'
        },
        leadership: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 44,
                }
            },
            name: 'Leadership'
        },
        enemyLore: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 45,
                }
            },
            name: 'Enemy-lore'
        },
        folkLore: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 44,
                }
            },
            name: 'Folk-lore'
        },
        rhymesOfLore: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 45,
                }
            },
            name: 'Rhymes of Lore'
        },
        burglary: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 45,
                }
            },
            name: 'Burglary'
        },
        shadowLore: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 46,
                }
            },
            name: 'Shadow-lore'
        },
    },
}