import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  classes:[],
  status: 'idle',
  currentClass:{}
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
   // const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
   // return response.data;
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  
  reducers: {
    increment: (state) => {
      state.classes = [...state.classes,34]
    },
    decrement: (state) => {
        state.classes = [...state.classes,33]
    },
    incrementByAmount: (state, action) => {
        state.classes = [...state.classes,action.payload]
    },
    setClasses: (state,action)=>{
        state.classes = action.payload
        
    },
    setCurrentClass: (state,action)=>{
        state.currentClass = action.payload
        
    },
    addStudent: (state,action)=>{
        state.currentClass = {...state.currentClass,students:[...state.currentClass.students,action.payload]}
        
    }
  },
  
});

export const { increment, decrement, incrementByAmount,setClasses,setCurrentClass,addStudent } = dataSlice.actions;
export const selectClasses = (state) => state.data.classes;
export const selectCurrentClass = (state) => state.data.currentClass;
export default dataSlice.reducer;
