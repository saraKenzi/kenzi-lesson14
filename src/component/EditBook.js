import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveEditBook } from '../store/action/books';
const EditBook = () => {
    let toEdit = useSelector(st => st.selectBookToEdit);
    const [details, setDetails] = useState({ ...toEdit });
    let myDispatch = useDispatch();
    const change = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    const save = (e) => {
        e.preventDefault();
        myDispatch(saveEditBook(details))
    }
    return (<form onSubmit={save}>
        <label>שם הספר:</label>
        <input type="text" name="name" onChange={change} value={details.name} />
        <label>מחיר</label>
        <input type="text" name="price" onChange={change} value={details.price} />
        <label>שם הסופר:</label>
        <input type="text" name="author" onChange={change} value={details.author} />
        <input type="submit"/>

    </form>);
}

export default EditBook;