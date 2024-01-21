import randomIndex from "../services/randomIndex";
import phrases from './../utils/phrases.json';

export const ButtonPhrase = ({ setQuote }) => {
    const handleClick = () => {
        setQuote(randomIndex(phrases));
    };

    return (
        <button onClick={handleClick}>Probar mi suerte</button>
    );
};
