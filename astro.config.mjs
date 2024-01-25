import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { i18n, filterSitemapByDefaultLocale } from 'astro-i18n-aut/integration'
import markdownConfig from './markdown.config.js'
import netlify from '@astrojs/netlify'

const defaultLocale = 'pl'
const locales = {
	en: 'en-US',
	pl: 'pl-PL'
}

// https://astro.build/config
export default defineConfig({
	scopedStyleStrategy: 'class',
	site: 'https://mormor.dev',
	trailingSlash: 'never',
	build: {
		format: 'file'
	},
	markdown: markdownConfig,
	integrations: [
		tailwind(),
		partytown({
			// Example: Add dataLayer.push as a forwarding-event.
			config: {
				forward: ['dataLayer.push']
			}
		}),
		mdx({
			...markdownConfig,
			extendPlugins: false
		}),
		react(),
		i18n({
			locales,
			defaultLocale
		}),
		sitemap({
			i18n: {
				locales,
				defaultLocale
			},
			filter: filterSitemapByDefaultLocale({
				defaultLocale
			})
		})
	],
	vite: {
		ssr: {
			external: ['svgo'],
			noExternal: ['smartypants']
		},
		optimizeDeps: {
			exclude: ['@resvg/resvg-js']
		}
	},
	experimental: {},
	output: 'server',
	adapter: netlify({
		cacheOnDemandPages: true
	})
})
