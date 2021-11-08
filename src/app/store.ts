import { configureStore } from '@reduxjs/toolkit';
import serviceProviderSlice from '../features/serviceProvider/service-provider-slice';

export const store = configureStore({

    reducer: {
        serviceProvider: serviceProviderSlice,
    }

});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch