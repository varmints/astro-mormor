export interface NavItem {
	title: string
	url: string
}

export interface FeatureItem {
	description: string
	icon: string
	title: string
}

export interface CompatibilityItem {
	icon: string
	title: string
	url: string
}

export interface PriceLevel {
	title: string
	body: string
	price: string
	colorAccent: string
}

export interface FooterLink {
	description: string
	icon: string
	url: string
}

export type SocialObjects = {
	name: SocialMedia
	href: string
	active: boolean
	linkTitle: string
}[]

export type SocialIcons = {
	[social in SocialMedia]: string
}

export type SocialMedia =
	| 'Github'
	| 'Facebook'
	| 'Instagram'
	| 'LinkedIn'
	| 'Mail'
	| 'Twitter'
	| 'Twitch'
	| 'YouTube'
	| 'WhatsApp'
	| 'Snapchat'
	| 'Pinterest'
	| 'TikTok'
	| 'CodePen'
	| 'Discord'
	| 'GitLab'
	| 'Reddit'
	| 'Skype'
	| 'Steam'
	| 'Telegram'
	| 'Mastodon'

export type Site = {
	website: string
	author: string
	desc: string
	title: string
	ogImage: string
	lightAndDarkMode: boolean
	postPerPage: number
}

export type SocialLink = {
	platform: string
	href: string
	me?: string
	text: string
	icon: string
	footerOnly?: boolean
}

export type SiteInfo = {
	name: string
	title: string
	description: string
	image: {
		src: string
		alt: string
	}
	socialLinks: SocialLink[]
}
