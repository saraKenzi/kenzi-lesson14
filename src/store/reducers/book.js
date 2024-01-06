import { selectBookToEdit } from "../action/books.js"

const initialState = {
    arr: [
        { id: 100, name: "שיקופיצקי 1", price: 84, author: "שרה ליאון",color:"pink", imgUrl: "../../pic/shikup1.jpg" },
        { id: 101, name: "שיקופיצקי 2", price: 53, author: " שרה ליאון",color:"yellow", imgUrl: "../../pic/shikup2.jpg" },
        { id: 102, name: "שיקופיצקי 3", price: 45, author: " שרה ליאון", color:"blue",imgUrl: "../../pic/shikup3.jpg" },
        { id: 103, name: "שיקופיצקי 4", price: 45, author: " שרה ליאון", color:"green",imgUrl: "../../pic/shikup4.jpg" },
        { id: 104, name: "שיקופיצקי 5", price: 45, author: " שרה ליאון", color:"orange",imgUrl: "../../pic/shikup5.jpg" }
    ],
    selectedBook: null,
    selctedBookToEdit: null
}
export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                selectedBook: state.selectedBook,
                selectBookToEdit: state.selectBookToEdit,
                arr: [...state.arr, action.payload]
            }
        case 'DELETE_BOOK':
            return {
                selectedBook: state.selectedBook,
                selectBookToEdit: state.selectBookToEdit,
                arr: state.arr.filter(item => item.id !== action.payload)
            }
        case 'SELECT_BOOK_TO_EDIT':
            return {
                selectedBook: state.selectedBook,
                selectBookToEdit: action.payload,
                arr: state.arr
            }
        case 'SAVE_EDITED_BOOK':
            let copy = state.arr.map(item => {
                if (item.id === action.payload.id)
                    return action.payload;
                return item;
            })
            return {
                selectedBook: state.selectedBook,
                selectBookToEdit: null,
                arr: copy
            }
            case 'SELECT_BOOK_TO_SHOW':
                return{
                    selectedBook:action.payload,
                    selectBookToEdit: state.selctedBookToEdit,
                    arr:state.arr


                }
        default:
            return state;
            

    }
}