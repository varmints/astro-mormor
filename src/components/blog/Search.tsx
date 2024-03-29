import Fuse from 'fuse.js'
import { useEffect, useMemo, useRef, useState } from 'react'
import Card from '~/components/blog/Card'
import slugify from '~/utils/slugify'
import type { BlogFrontmatter } from '~/content/_schemas'

export type SearchItem = {
	title: string
	description: string
	data: BlogFrontmatter
}

interface Props {
	searchList: SearchItem[]
}

interface SearchResult {
	item: SearchItem
	refIndex: number
}

export default function SearchBar({ searchList }: Props) {
	const inputRef = useRef<HTMLInputElement>(null)
	const [inputVal, setInputVal] = useState('')
	const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null)

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setInputVal(e.currentTarget.value)
	}

	const clearField = () => {
		setInputVal('')
		inputRef.current!.focus()
	}

	const fuse = useMemo(
		() =>
			new Fuse(searchList, {
				keys: ['title', 'description'],
				includeMatches: true,
				minMatchCharLength: 2,
				threshold: 0.5
			}),
		[searchList]
	)

	useEffect(() => {
		// if URL has search query,
		// insert that search query in input field
		const searchUrl = new URLSearchParams(window.location.search)
		const searchStr = searchUrl.get('q')
		if (searchStr) setInputVal(searchStr)

		// put focus cursor at the end of the string
		setTimeout(function () {
			inputRef.current!.selectionStart = inputRef.current!.selectionEnd = searchStr?.length || 0
		}, 50)
	}, [])

	useEffect(() => {
		// Add search result only if
		// input value is more than one character
		let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : []
		setSearchResults(inputResult)

		// Update search string in URL
		if (inputVal.length > 0) {
			const searchParams = new URLSearchParams(window.location.search)
			searchParams.set('q', inputVal)
			const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString()
			history.replaceState(null, '', newRelativePathQuery)
		} else {
			history.replaceState(null, '', window.location.pathname)
		}
	}, [inputVal])

	return (
		<>
			<label className="relative block">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2 opacity-75">
					<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
					</svg>
				</span>
				<input
					className="block w-full rounded border border-skin-fill 
        border-opacity-40 bg-skin-fill py-3 pl-10
        pr-3 placeholder:italic placeholder:text-opacity-75 
        focus:border-skin-accent focus:outline-none"
					placeholder="Szukaj czegokolwiek..."
					type="text"
					name="search"
					value={inputVal}
					onChange={handleChange}
					autoComplete="off"
					autoFocus
					ref={inputRef}
				/>
				<button
					type="button"
					className="clear-button absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2 opacity-75"
					onClick={clearField}
				>
					<svg xmlns="http://www.w3.org/2000/svg">
						<path
							fill="currentColor"
							d="M8.406 5.2a3.5 3.5 0 0 0-2.753 1.338l-3.561 4.535a1.5 1.5 0 0 0 0 1.853l3.561 4.536A3.5 3.5 0 0 0 8.406 18.8h10.647a2.5 2.5 0 0 0 2.5-2.5V7.7a2.5 2.5 0 0 0-2.5-2.5H8.406Zm2.064 3.27a.75.75 0 0 1 1.06 0L14 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L15.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L14 13.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L12.94 12l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
						/>
					</svg>
				</button>
			</label>

			{inputVal.length > 1 && (
				<div className="mt-8">
					Znaleziono {searchResults?.length}
					{searchResults?.length && searchResults?.length === 1 ? ' wynik' : ' wyników'} dla '
					{inputVal}'
				</div>
			)}

			<ul>
				{searchResults &&
					searchResults.map(({ item, refIndex }) => (
						<Card
							href={`/blog/posts/${slugify(item.data)}`}
							frontmatter={item.data}
							key={`${refIndex}-${slugify(item.data)}`}
						/>
					))}
			</ul>
		</>
	)
}
