import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentViewer: null
}


const viewerSlice = createSlice(
    {
        name: "viewer",
        initialState,
        reducers: {
            updateViewer: (state, action) => {
                state.currentViewer = action.payload;
            },
            clearViewer: (state) => {
                state.currentViewer = initialState.currentViewer;
            }
        }
    }
)

export const {updateViewer, clearViewer} = viewerSlice.actions

export default viewerSlice.reducer