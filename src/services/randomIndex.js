export default function randomIndex(array) {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
}