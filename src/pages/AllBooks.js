import { useSelector } from "react-redux";
import './AllBooks.css';
import OneBook from "../component/OneBook";

const AllBooks = () => {
    let arr = useSelector(st => st.arr)
    return (<div >
        <h1 className="header">רשימת הספרים שלנו</h1>
        <ul className="all">
            {arr.map(item => <li key={item.id}><OneBook one={item} /></li>)}
        </ul>
    </div>
    );
}

export default AllBooks;