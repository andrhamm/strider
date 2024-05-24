import { z } from 'zod'

const PlayerHeroSchema = z.object({
  id: z.string(), // nanoid
  name: z.string(),
  createdAtMs: z.number(),
  updatedAtMs: z.number()
})

export type PlayerHero = z.infer<typeof PlayerHeroSchema>
