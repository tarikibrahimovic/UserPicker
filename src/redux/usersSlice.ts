import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface UsersState {
  loading: boolean;
  users: unknown[];
  error: string | null;
}

const initialState: UsersState = {
  loading: false,
  users: [],
  error: null,
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
    saveUsers: (state, action: PayloadAction<unknown[]>) => {
      state.users = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      usersFetch.fulfilled,
      (state, action: PayloadAction<unknown[]>) => {
        state.users = action.payload;
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

export const { saveUsers } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;

export default usersSlice.reducer;
