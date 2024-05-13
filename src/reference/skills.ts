import { PageReferenceSchema, SkillKeySchema } from "./keys";

import { z } from "zod";

const SkillSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema
    }),
    name: z.string(),
})

const SkillsSchema = z.object({
    source: z.object({
        pageReference: PageReferenceSchema,
    }),
    skills: z.record(SkillKeySchema, SkillSchema).refine((obj): obj is Required<typeof obj> =>
        SkillKeySchema.options.every((key) => obj[key] != null),
    )
})

type SkillsType = z.infer<typeof SkillsSchema>

export const Skills: SkillsType = {
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 60,
        },
    },
    skills: {
        athletics: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 61,
                },
            },
            name: 'Athletics',
        },
        awareness: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 62,
                },
            },
            name: 'Awareness',
        },
        awe: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 62,
                },
            },
            name: 'Awe',
        },
        battle: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 62,
                },
            },
            name: 'Battle',
        },
        courtesy: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 62,
                },
            },
            name: 'Courtesy',
        },
        craft: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 62,
                },
            },
            name: 'Craft',
        },
        enhearten: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 62,
                },
            },
            name: 'Enhearten',
        },
        explore: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 62,
                },
            },
            name: 'Explore',
        },
        healing: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 62,
                },
            },
            name: 'Healing',
        },
        hunting: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 63,
                },
            },
            name: 'Hunting',
        },
        insight: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 63,
                },
            },
            name: 'Insight',
        },
        lore: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 63,
                },
            },
            name: 'Lore',
        },
        persuade: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 64,
                },
            },
            name: 'Persuade',
        },
        riddle: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 64,
                },
            },
            name: 'Riddle',
        },
        scan: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 64,
                },
            },
            name: 'Scan',
        },
        song: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 65,
                },
            },
            name: 'Song',
        },
        stealth: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 65,
                },
            },
            name: 'Stealth',
        },
        travel: {
            source: {
                pageReference: {
                    textId: 'core-rulebook',
                    pageNumber: 65,
                },
            },
            name: 'Travel',
        },
    }
}