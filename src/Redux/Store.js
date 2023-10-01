import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './Slices/ModalSlices';

  const store = configureStore({
  reducer: {
    modal: modalReducer, 
  },
});

export default store;