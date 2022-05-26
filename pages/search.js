import { useState } from 'react';
import MiniSearch from 'minisearch';
import filter from 'lodash/filter';
import includes from 'lodash/includes';

const onKeyDown = () => {};

const documents = [
	{
		id: 1,
		prac: 'Gloucester Road Surgery',
		times: [
			{
				start: '9:00',
				end: '10:00',
				date: '14th January 2020',
			},
		],
		category: 'fiction',
	},
	{
		id: 2,
		prac: 'The Hillview Surgery',
		times: [
			{
				start: '5:00',
				end: '10:00',
				date: '15th January 2020',
			},
		],
	},
	{
		id: 3,
		prac: 'The Miller Practice',
		times: [
			{
				start: '9:00',
				end: '10:00',
				date: '14th Febuary 2020',
			},
		],
	},
	{
		id: 4,
		prac: 'Brick Lane Surgery',
		times: [
			{
				start: '15:00',
				end: '16:00',
				date: '16th March 2022',
			},
			{
				start: '20:00',
				end: '21:00',
				date: '16th March 2022',
			},
		],
	},
	{
		id: 5,
		prac: 'Keats Group Surgery',
		times: [
			{
				start: '9:00',
				end: '10:00',
				date: '10th March 2022',
			},
			{
				start: '9:00',
				end: '17:00',
				date: '14th March 2022',
			},
			{
				start: '15:00',
				end: '16:00',
				date: '25th March 2022',
			},
			{
				start: '15:00',
				end: '16:00',
				date: '22th March 2022',
			},
			{
				start: '20:00',
				end: '21:00',
				date: '23th March 2022',
			},
		],
	},
	{
		id: 6,
		prac: 'Grove Road Surgery',
		times: [
			{
				start: '9:00',
				end: '10:00',
				date: '10th March 2022',
			},
			{
				start: '9:00',
				end: '17:00',
				date: '14th March 2022',
			},
			{
				start: '15:00',
				end: '16:00',
				date: '25th March 2022',
			},
			{
				start: '15:00',
				end: '16:00',
				date: '22th March 2022',
			},
			{
				start: '20:00',
				end: '21:00',
				date: '23th March 2022',
			},
		],
	},
];

let miniSearch = new MiniSearch({
	fields: ['prac', 'times'], // fields to index for full-text search
	storeFields: ['prac', 'times'], // fields to return with search results,
	// Custom extractField function that can deal with arrays
	extractField: (document, fieldName) => {
		if (Array.isArray(document[fieldName])) {
			return document[fieldName].map(e => e.start + '-' + e.end + ', ' + e.date + ';').join(' ');
		} else {
			return document[fieldName];
		}
	},
});

// Index all documents
miniSearch.addAll(documents);

const AutoComplete = ({ suggestions }) => {
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);
	const [filteredResults, setFilteredResults] = useState([]);
	const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [input, setInput] = useState('');

	const onChange = e => {
		const userInput = e.target.value;

		// Filter our suggestions that don't contain the user's input
		// const unLinked = suggestions.filter(suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

		let unLinked = miniSearch.search(e.target.value, { prefix: true, combineWith: 'AND' });

		/* console.log(
			filter(documents, v =>
				includes(
					unLinked.map(e => e.id),
					v.id
				)
			)
		); */
		setFilteredResults(
			filter(documents, v =>
				includes(
					unLinked.map(e => e.id),
					v.id
				)
			)
		);

		console.log(unLinked);

		setInput(e.target.value);
		setFilteredSuggestions(unLinked);
		setActiveSuggestionIndex(0);
		setShowSuggestions(true);
	};

	const onClick = e => {
		setFilteredSuggestions([]);
		setInput(e.target.innerText);
		setActiveSuggestionIndex(0);
		setShowSuggestions(false);
	};

	const renderTimes = value => {
		const splitDays = value.split(';');

		return splitDays.map(e => <div>{e}</div>);
	};

	const SuggestionsListComponent = () => {
		return filteredSuggestions.length ? (
			<ul class="suggestions">
				{filteredSuggestions.map((suggestion, index) => {
					let className;
					if (index === activeSuggestionIndex) {
						className = 'suggestion-active';
					}
					return (
						<li className={'ac_container' + ' ' + className} key={suggestion.id} onClick={onClick}>
							<div className={'autocompleteTitle'}>Practice:</div>
							<div className={'autocompleteValue'}>{suggestion.prac}</div>

							<div className={'autocompleteTitle padHeight'}>times:</div>
							<div className={'autocompleteValue padHeight'}>{renderTimes(suggestion.times)}</div>
						</li>
					);
				})}
			</ul>
		) : (
			<div class="no-suggestions">
				<em>No suggestions, you're on your own!</em>
			</div>
		);
	};

	return (
		<>
			<div style={{ position: 'relative' }}>
				<input className={'inputBox'} type="text" onChange={onChange} onKeyDown={onKeyDown} value={input} />
				{showSuggestions && input && <SuggestionsListComponent />}
			</div>
		</>
	);
};

const SearchPage = () => {
	return (
		<>
			<h4 className={'titleStyle'}>Realtime rota check</h4>
			<AutoComplete />
		</>
	);
};

export default SearchPage;
