import './App.css'
import { useState } from 'react';
import bgList from "./utils/bgList.json";
import phrases from './utils/phrases.json';
import randomIndex from './services/randomIndex';
import { RandomPhrase } from './components/RandomPhrase';
import { ButtonPhrase } from './components/ButtonPhrase';

function App() {
	const sentence = randomIndex(phrases);
	const bgIndex = randomIndex(bgList);

	const [quote, setQuote] = useState(sentence);
	const [bgImgRandom, setBgImgRandom] = useState(bgIndex);

	const bgStyle = {
		backgroundImage: `url('../assets/fondo${bgImgRandom}.jpg')`,
	};

	return (
		<div className="app" style={bgStyle}>
			<div className="container">
				<h1>Galletas de la fortuna</h1>

				<ButtonPhrase
					setQuote={setQuote}
					setBgImgRandom={setBgImgRandom}
				/>

				<RandomPhrase quote={quote} />
			</div>
		</div>
	);
}

export default App
