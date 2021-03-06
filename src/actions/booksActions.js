"use strict"
// GET BOOKS
export function getBooks(book){
    return {
        type:"GET_BOOKS"
    }
}

// POST A BOOK
export function postBooks(book){
    return {
        type:"POST_BOOK",
        payload: book
    }
}

// DELETE A BOOK
export function deleteBooks(id){
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
