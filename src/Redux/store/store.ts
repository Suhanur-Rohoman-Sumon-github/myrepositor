import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../baseApi/baseApi';
import { authReducer } from '../features/auth/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: 'auth', storage };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    authTechTuend: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
