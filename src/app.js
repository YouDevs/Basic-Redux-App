"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBook, deleteBook, updateBook} from './actions/booksActions';

// STEP 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);
// Show me the current state
// store.subscribe(function(){
//     console.log('current state is: ', store.getState());
//     // console.log('current price is: ', store.getState()[1].price);
// })

// STEP 2 create and dispatch actions
// type is a keyword of redux
store.dispatch(postBook(
    [{
        id: 1,
        title: 'this is the title',
        description: 'this is the description',
        price: 33.33
    },{
        id: 2,
        title: 'this is a second the title',
        description: 'this is a second description',
        price: 44.44
    }]
));


// DISPATCH action: DELETE a book
store.dispatch(deleteBook(
    {id: 1}
));


// DISPATCH action: UDATED a book
store.dispatch(updateBook(
    {
        id: 2,
        title:'Learn React in 24h'
    }
));

//  -->> CART ACTIONS <<--
// ADD to cart
store.dispatch(addToCart([{id:1}]));
