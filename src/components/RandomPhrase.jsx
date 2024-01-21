export const RandomPhrase = ({ quote }) => {
    const { author, phrase } = quote;

    return (
        <div>
            <p><q>{phrase}</q></p>
            <small>Fuente: {author}</small>
        </div>
    );
};
