export const addBook=(book)=>{
    return{
        type:"ADD_BOOK",
        payload:book
    }
}

export const deleteBook=(bookID)=>{
    return{
        type:"DELETE_BOOK",
        payload:bookID
    }
}

export const selectBookToShow=(book)=>{
    return{
        type:"SELECT_BOOK_TO_SHOW",
        payload:book
    }
}

export const selectBookToEdit=(book)=>{
    return{
        type:"SELECT_BOOK_TO_EDIT",
        payload:book
    }
}

export const saveEditBook=(book)=>{
    return{
        type:"SAVE_EDITED_BOOK",
        payload:book
    }
}


