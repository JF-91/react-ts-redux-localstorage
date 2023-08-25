import { User } from "@/interfaces/user";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, peopleSlice } from "./states";


export interface AppStore {
    people: User[];
    favorites: User[];

}


export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favorites: favoritesSlice.reducer
    }
});