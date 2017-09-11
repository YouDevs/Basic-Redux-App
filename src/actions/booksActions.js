"use strict"
// GET BOOKS
export function getBooks(book){
    return {
        type:"GET_BOOKS"
    }
}

// DELETE A BOOK
export function deleteBook(id){
    return {
        type:"DELETE_BOOK",
        payload: id
    }
}

// UPDATE A BOOK
export function updateBook(book){
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}
