import './OneBook.css';
import { deleteBook, selectBookToShow, selectBookToEdit } from '../store/action/books';
import { useDispatch } from 'react-redux';
import BookDetails from './BookDetails';
import { useSelector } from 'react-redux';

const OneBook = ({ one }) => {
    let dispatch=useDispatch();
    let selectedBook = useSelector(st => st.selectedBook);

    return (<div className='divi'>
        <div className='div-in'>
        <img src={one.imgUrl} alt={one.name} />
        <input type='button' value="הצג פרטים" onClick={()=>{dispatch(selectBookToShow(one));
        }} />
        <input type='button' value="מחק ספר" onClick={()=>dispatch(deleteBook(one.id))} />
        <input type='button' value="ערוך ספר" onClick={()=>dispatch(selectBookToEdit(one))} />


        {selectedBook &&selectedBook.id===one.id&& <BookDetails />}
        </div>
    </div>);
}

export default OneBook;