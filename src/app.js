"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// REACT-ROUTER
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

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


import BooksList from './components/pages/bookslist.js';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForms';
import Main from './main';


const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BooksList} />
                <Route path="/admin" component={BooksForm} />
                <Route path="/cart" component={Cart} />
            </Route>
        </Router>
    </Provider>
)

render(
    Routes, document.getElementById('app')
);
