import MetaPl from '../locales/pl/meta.json'
import HomePl from '../locales/pl/home.json'
import NavPl from '../locales/pl/nav.json'

import MetaEn from '../locales/en/meta.json'
import HomeEn from '../locales/en/home.json'
import NavEn from '../locales/en/nav.json'

export function t(locale: string): any {
	if (locale === 'en') {
		return {
			meta: MetaEn,
			home: HomeEn,
			nav: NavEn
		}
	}
	return {
		meta: MetaPl,
		home: HomePl,
		nav: NavPl
	}
}

export function localedURL(locale: string, url: string): string {
	if (locale === 'pl') {
		return url
	}
	if (url === '/') {
		return `/${locale}`
	}
	return `/${locale}${url}`
}
