import { defineCollection, z } from 'astro:content'
import { blogSchema } from './_schemas'

const blog = defineCollection({
	schema: blogSchema
})

const showcase = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string().min(1),
		image: z.string(),
		url: z.string(),
		featured: z.number().min(1).optional()
	})
})

export const collections = {
	blog,
	showcase
}
