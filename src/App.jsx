import './App.css'
import { useState } from 'react';
import phrases from './utils/phrases.json';
import randomIndex from './services/randomIndex';
import { RandomPhrase } from './components/RandomPhrase';
import { ButtonPhrase } from './components/ButtonPhrase';

function App() {
	const sentence = randomIndex(phrases);
	const [quote, setQuote] = useState(sentence);

	return (
		<div>
			<h1>Galletas de la fortuna</h1>

			<ButtonPhrase setQuote={setQuote} />

			<RandomPhrase quote={quote} />
		</div>
	);
}

export default App
