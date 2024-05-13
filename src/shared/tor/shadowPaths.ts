import { PageReferenceSchema, ShadowPathKeySchema } from "./keys";

import { z } from "zod";

const ShadowPathSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    name: z.string(),
})

const ShadowPathsSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    shadowPaths: z.record(ShadowPathKeySchema, ShadowPathSchema).refine((obj): obj is Required<typeof obj> =>
        ShadowPathKeySchema.options.every((key) => obj[key] != null),
    )
})

type ShadowPathsType = z.infer<typeof ShadowPathsSchema>

export const ShadowPaths: ShadowPathsType = {
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 67,
        },
    },
    shadowPaths: {
        lureOfPower: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 44,
                }
            },
            name: 'Lure of Power'
        },
        curseOfVengeance: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 45,
                }
            },
            name: 'Curse of Vengeance'
        },
        wanderingMadness: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 45,
                }
            },
            name: 'Wandering-madness'
        },
        lureOfSecrets: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 45,
                }
            },
            name: 'Lure of Secrets'
        },
        dragonSickness: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 45,
                }
            },
            name: 'Dragon-sickness'
        },
        pathOfDespair: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 46,
                }
            },
            name: 'Path of Despair'
        }
    }
}