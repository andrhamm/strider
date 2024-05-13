import { LanguageKeySchema, PageReferenceSchema } from "./keys";

import { z } from "zod";

const LanguageSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    name: z.string(),
})

const LanguagesSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    languages: z.record(LanguageKeySchema, LanguageSchema).refine((obj): obj is Required<typeof obj> =>
        LanguageKeySchema.options.every((key) => obj[key] != null),
    )
})

type LanguagesType = z.infer<typeof LanguagesSchema>

export const Languages: LanguagesType = {
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 30,
        },
    },
    languages: {
        common: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 30,
                },
            },
            name: 'Common',
        },
        dalish: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 33,
                },
            },
            name: 'Dalish',
        },
        dwarvish: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 35,
                },
            },
            name: 'Dwarvish (Khuzdul)',
        },
        elvish: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 37, // TODO: add references to rivendell pg 11, and peoples of wilderland pg 6
                },
            },
            name: 'Elvish (Sindarin)',
        },
        ancientElvish: {
            source: {
                pageReference: {
                    textId: 'rivendell',
                    pageNumber: 11,
                },
            },
            name: 'Ancient Elvish (Quenya)',
        },
        regionalMannishValesOfTheAnduinRiver: {
            source: {
                pageReference: {
                    textId: 'peoples-of-wilderland',
                    pageNumber: 3, // TODO: add reference for peoples of wilderland pg 9
                },
            },
            name: 'Regional Mannish (Vales of the Anduin River)',
        }
    }
}