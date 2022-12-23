import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';



const initialState = [
  {
    id: v4().slice(0, 4),
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
  name: 'userdata',
  initialState,
  reducers: {
    addUser: () => {},
    deleteUser: () => {},
    editUser: () => {},
  },
});

export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
