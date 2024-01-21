export const RandomPhrase = ({ quote }) => {
    const { author, phrase } = quote;

    return (
        <div className="content">
            <p><q>{phrase}</q></p>
            <p><small>Fuente: {author}</small></p>
        </div>
    );
};
