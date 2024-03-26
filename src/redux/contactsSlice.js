import { nanoid, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './contactsOps';

// const contactsReducer = createSlice({
//     name: 'contacts',
//     initialState: {
//         items: [],
//         loading: false,
//         error: null,
//     },
//     reducers: {
//         addContacts: {
//             reducer: (state, action) => {
//                 state.items.push(action.payload);
//             },
//             prepare: (name, number) => {
//                 return {
//                     payload: {
//                         name,
//                         number,
//                         id: nanoid(),
//                     },
//                 };
//             },
//         },
//         deleteContacts(state, action) {
//             state.items = state.items.filter(el => el.id !== action.payload);
//         },
//     },
// });

const contactsReducer = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addContact.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// export const { addContacts, deleteContacts } = contactsReducer.actions;
export default contactsReducer.reducer;

export const selectContacts = state => state.contacts.items;
