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





export const peopleSlice = createSlice({
    name: LocalStorageType.PEOPLE,
    initialState: getLocalStorage(LocalStorageType.PEOPLE)? JSON.parse(getLocalStorage(LocalStorageType.PEOPLE) as string) :  initialState,
    reducers: {

        addPeople: (state, action)=> {
            setLocalStorage(LocalStorageType.PEOPLE, state);
            return action.payload;
        },


    }
})

export const {addPeople} = peopleSlice.actions