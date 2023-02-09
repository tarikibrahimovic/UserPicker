import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface UsersState {
  loading: boolean;
  users: any[];
  error: string | null;
  gender: string;
}

const initialState: UsersState = {
  loading: false,
  users: [],
  error: null,
  gender: "male",
};

export const usersFetch = createAsyncThunk("users/fetch", async () => {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();
  return data.results;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUsers: (state, action: PayloadAction<Object[]>) => {
      state.users = action.payload;
    },
    filterUsers: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user:any) => {
        return user.gender === action.payload;
      });
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      usersFetch.fulfilled,
      (state, action: PayloadAction<Object[]>) => {
        state.users = action.payload.filter((data:any) => {
          return data.gender === state.gender;
        });
        state.loading = false;
      }
    );
    builder.addCase(usersFetch.rejected, (state) => {
      state.error = "Error fetching users";
    });
    builder.addCase(usersFetch.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { saveUsers, filterUsers, setGender } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;

export default usersSlice.reducer;
