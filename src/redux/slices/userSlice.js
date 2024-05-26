const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name:'userSlice',
    initialState:{
        username    :'mazot',
        password    :'qwasdqwd@ææßacascda',
        isAdmin     :true,
        email       :'xyzumut06@gmail.com',
        token       :null,
        id          :1,
        wallet      :0
    },
    reducers:{
        userAyarla : (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.isAdmin  = action.payload.isAdmin;
            state.wallet   = action.payload.walle;
            state.email    = action.payload.email;
            state.token    = action.payload.token;
            state.id       = action.payload.id;
        },
        bakiyeArttir : (state) => {
            state.wallet = state.wallet + 1
        }
    }
});

export const { userAyarla, bakiyeArttir } = userSlice.actions;
export default userSlice.reducer;