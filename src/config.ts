import type { Site, SocialObjects, SiteInfo } from './types'

export const siteInfo: SiteInfo = {
	name: 'mormor.dev',
	title: 'Strona internetowa, którą chcesz',
	description:
		'Tworzę strony internetowe, które są funkcjonalne, wydajne i stanowią doskonałą reprezentację osoby lub firmy w cyfrowym wszechświecie. Build fast websites, faster with me. mormor is here.',
	image: {
		src: '/og/social.jpg',
		alt: 'Build the web you want'
	},
	socialLinks: [
		{
			platform: 'github',
			href: 'https://github.com/varmints',
			me: 'https://github.com/varmints',
			text: 'Go to mormor GitHub repo',
			icon: 'fa-brands:github-alt'
		},
		{
			platform: 'instagram',
			href: 'https://www.instagram.com/foto.tfurca',
			me: 'https://www.instagram.com/foto.tfurca',
			text: 'Follow mormor on Instagram',
			footerOnly: true,
			icon: 'fa-brands:instagram'
		}
	]
}

export const SITE: Site = {
	website: 'https://mormor.dev/',
	author: 'Kamil',
	desc: 'A minimal, responsive and SEO-friendly Astro blog theme.',
	title: 'mormor',
	ogImage: 'astropaper-og.jpg',
	lightAndDarkMode: true,
	postPerPage: 3
}

export const LOCALE = ['pl-PL'] // set to [] to use the environment default

export const SOCIALS: SocialObjects = [
	{
		name: 'Github',
		href: 'https://github.com/varmints',
		linkTitle: ` ${SITE.title} on Github`,
		active: true
	},
	{
		name: 'Facebook',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Facebook`,
		active: false
	},
	{
		name: 'Instagram',
		href: 'https://instagram.com/foto.tfurca',
		linkTitle: `${SITE.title} on Instagram`,
		active: true
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/kamil-morkisz/',
		linkTitle: `${SITE.title} on LinkedIn`,
		active: true
	},
	{
		name: 'Mail',
		href: 'mailto:yourmail@gmail.com',
		linkTitle: `Send an email to ${SITE.title}`,
		active: false
	},
	{
		name: 'Twitter',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Twitter`,
		active: false
	},
	{
		name: 'Twitch',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Twitch`,
		active: false
	},
	{
		name: 'YouTube',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on YouTube`,
		active: false
	},
	{
		name: 'WhatsApp',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on WhatsApp`,
		active: false
	},
	{
		name: 'Snapchat',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Snapchat`,
		active: false
	},
	{
		name: 'Pinterest',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Pinterest`,
		active: false
	},
	{
		name: 'TikTok',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on TikTok`,
		active: false
	},
	{
		name: 'CodePen',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on CodePen`,
		active: false
	},
	{
		name: 'Discord',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Discord`,
		active: false
	},
	{
		name: 'GitLab',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on GitLab`,
		active: false
	},
	{
		name: 'Reddit',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Reddit`,
		active: false
	},
	{
		name: 'Skype',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Skype`,
		active: false
	},
	{
		name: 'Steam',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Steam`,
		active: false
	},
	{
		name: 'Telegram',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Telegram`,
		active: false
	},
	{
		name: 'Mastodon',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Mastodon`,
		active: false
	}
]
