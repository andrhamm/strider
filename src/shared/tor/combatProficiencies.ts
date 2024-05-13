import { CombatProficiencyKeySchema, PageReferenceSchema } from "./keys";

import { z } from "zod";

const CombatProficiencySchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    name: z.string(),
})

const CombatProficienciesSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    combatProficiencies: z.record(CombatProficiencyKeySchema, CombatProficiencySchema).refine((obj): obj is Required<typeof obj> =>
        CombatProficiencyKeySchema.options.every((key) => obj[key] != null),
    )
})

type CombatProficienciesType = z.infer<typeof CombatProficienciesSchema>

export const CombatProficiencies: CombatProficienciesType = {
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 65,
        },
    },
    combatProficiencies: {
        axes: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 66,
                },
            },
            name: 'Axes',
        },
        bows: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 66,
                },
            },
            name: 'Bows',
        },
        spears: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 66,
                },
            },
            name: 'Spears',
        },
        swords: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 66,
                },
            },
            name: 'Swords',
        },
    }
}