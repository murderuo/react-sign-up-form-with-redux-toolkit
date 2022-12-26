import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = [
  {
    id: v4().slice(0, 4),
    type: false,
    firstName: 'ugur',
    lastName: 'okur',
    phonenumber: '05375447979',
    email: 'asd@ad.gmail.com',
    password: '1234',
    repassword: '1234',
    adv: true,
    accept: true,
  },
  {
    id: v4().slice(0, 4),
    type: false,
    firstName: 'ugur',
    lastName: 'okur',
    phonenumber: '05375447979',
    email: 'asd@ad.gmail.com',
    password: '1234',
    repassword: '1234',
    adv: true,
    accept: true,
  },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // addUser: (type, other) => {
    //   console.log(type, other);
    // },
    addUser: (state, action) => {
      const new_payload = { ...action.payload, id: v4().slice(0, 4) };
      state.push(new_payload);
    },
    deleteUser: (state, action) => {
      console.log(action.payload);
      return state.filter(user => {
        if (user.id !== action.payload) {
          return user;
        }
      });
    },
    updateUser: (state, action) => {
      state.forEach((user, index) => {
        if (user.id === action.payload.id) {
          user = { ...action.payload };
          // console.log(user);
          state[index] = user;
        }
      });
    },
    // showmeState: (state) => {
    //   const currentState = (JSON.parse(JSON.stringify(state)));
    //   console.log(currentState);
    // },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
