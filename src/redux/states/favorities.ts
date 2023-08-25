import { LocalStorageType } from "@/interfaces";
import { User } from "@/interfaces/user";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

//[]
// {
//     "id": 999999,
//     "name": "",
//     "username": "",
//     "email": "",
//     "address": {
//         "street": "",
//         "suite": "",
//         "city": "",
//         "zipcode": "",
//         "geo": {
//             "lat": "",
//             "lng": ""
//         }
//     },
//     "phone": "",
//     "website": "",
//     "company": {
//         "name": "",
//         "catchPhrase": "",
//         "bs": ""
//     }
// }


const initialState: User []=     []





export const favoritesSlice = createSlice({
    name: LocalStorageType.FAVORITES,
    initialState: getLocalStorage(LocalStorageType.FAVORITES)? JSON.parse(getLocalStorage(LocalStorageType.FAVORITES) as string) :  initialState,
    reducers: {


        addfavorites: (state, action)=>{
            setLocalStorage(LocalStorageType.FAVORITES, state);
            return action.payload;
        }
    }
})



export const {addfavorites} = favoritesSlice.actions