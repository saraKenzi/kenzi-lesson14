import { useSelector } from "react-redux";

const BookDetails = () => {
    const selectedBook = useSelector(state => state.selectedBook)
    return (<>
        <h3>{selectedBook.name}</h3>
        <p>סופר:{selectedBook.author}</p>
        <p>מחיר:{selectedBook.price}</p>

    </>);
}

export default BookDetails;