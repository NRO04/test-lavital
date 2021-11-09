import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import customerSlice from '../features/customer/customer-slice';
import itemsSlice from '../features/items/items-slice';
import searchSlice from '../features/search/search-slice';
import serviceProviderSlice from '../features/serviceProvider/service-provider-slice';

export const store = configureStore({

    reducer: {
        serviceProvider: serviceProviderSlice,
        items: itemsSlice,
        search: searchSlice,
        customer: customerSlice,
    }

});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch