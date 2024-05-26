const { createSlice } = require("@reduxjs/toolkit");

// state bir nesne olsaydı metotlar içerisinde
// "state" değişkeni üzerinden direkt değerlere
// erişebilirdik ancak burada state direkt verinin
// bizzatihi kendisi bu yüzden return kullanıyoruz
const counterSlice = createSlice({
    name:'counterSlice',
    initialState:0,
    reducers:{
        arttir : (state) => { 
            return state + 1;
        },
        azalt : (state) => {
            return state - 1;
        },
        ayarla : (state, action) => {
            return action.payload;
        }
    }
});

export const { arttir, azalt, ayarla } = counterSlice.actions;
export default counterSlice.reducer;