import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface UserState {
    name : string | null
    token : string | null
}

const initialState: UserState = {
    name: null,
    token: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (
            state,
            action : PayloadAction< {name:string, token:string }> 
            ) => {
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        name: action.payload.name, 
                        token: action.payload.token
                    })
                )
                state.name = action.payload.name
                state.token = action.payload.token
        },
        unsetUser: ( state ) => {
            localStorage.clear()
            state.name = null
            state.token = null
        }
    }
})

export const getUser = (state: RootState) => state.user;

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;