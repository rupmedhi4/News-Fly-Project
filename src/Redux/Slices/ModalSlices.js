import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    menuModal: false,
}

export const ModalSlices = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
          state.menuModal = !state.menuModal
        }
    }
})


export const { openModal } = ModalSlices.actions

export default ModalSlices.reducer