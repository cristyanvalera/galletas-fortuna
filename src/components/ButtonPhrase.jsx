import randomIndex from "../services/randomIndex";
import phrases from './../utils/phrases.json';
import bgList from './../utils/bgList.json';

export const ButtonPhrase = ({ setQuote, setBgImgRandom }) => {
    const handleClick = () => {
        setQuote(randomIndex(phrases));
        setBgImgRandom(randomIndex(bgList));
    };

    return (
        <button onClick={handleClick}>Probar mi suerte</button>
    );
};
