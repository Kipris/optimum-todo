import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task } from '../interfaces/tasks';
import { PopupState } from '../interfaces/state';

const initialState: PopupState = {
    isPopupOpened: false,
    popupData: null,
};

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        openPopup: (state, action: PayloadAction<Task>) => {
            state.popupData = action.payload;
            state.isPopupOpened = true;
        },
        closePopup: (state) => {
            state.popupData = null;
            state.isPopupOpened = false;
        },
    }
});

export const {
    openPopup,
    closePopup,
} = popupSlice.actions;

export default popupSlice.reducer;
