import {configureStore} from '@reduxjs/toolkit';

import productReducer from '../store/slice/product.store';
import userReducer from '../store/slices/user.slice';


const store = configureStore({
    reducer: {
        products: productReducer,
        user: userReducer,
        
    }
});

export default store;