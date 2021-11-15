import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user) => {
    try {
      let result = await axios.post(
        "http://localhost:5000/user/registerUser",
        user
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/login", user);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const currentUser = createAsyncThunk("user/currentUser", async () => {
  let opts = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("http://localhost:5000/user/current", opts);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const allUsers = createAsyncThunk("user/users", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/users");
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser/:id",
  async ({ _id, user }) => {
    try {
      let result = await axios.put(
        `http://localhost:5000/user/updateUser/${_id}`,
        user
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser/:id",
  async ({ _id, user }) => {
    try {
      let result = await axios.delete(
        `http://localhost:5000/user/deleteUser/${_id}`,
        user
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  user: null,
  sers: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("userType");
      state.user = null;
    },
  },
  extraReducers: {
    //registreUser
    [registerUser.pending]: (state) => {
      state.status = "pending";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.data?.user;
      console.log(action.payload);
      localStorage.setItem("token", action.payload.data?.token);
      localStorage.setItem("userType", action.payload.data?.user.userType);
    },
    [registerUser.rejected]: (state) => {
      state.status = "failed";
    },
    //loginUser
    [loginUser.pending]: (state) => {
      state.status = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.data?.searchedUser;
      localStorage.setItem("token", action.payload.data?.token);
      localStorage.setItem(
        "userType",
        action.payload.data?.searchedUser.userType
      );
    },
    [loginUser.rejected]: (state) => {
      state.status = "failed";
    },
    //currentUser
    [currentUser.pending]: (state) => {
      state.status = "pending";
    },
    [currentUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action?.payload?.data.user;
    },
    [currentUser.rejected]: (state) => {
      state.status = "failed";
    },
    //allUsers
    [allUsers.pending]: (state) => {
      state.status = "pending";
    },
    [allUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.sers = action.payload?.users;
    },
    [allUsers.rejected]: (state) => {
      state.status = "failed";
    },
    // //updateUser
    // [updateUser.pending]:(state)=>{
    //   state.status="pending";
    // },
    // [updateUser.fulfilled]:(state,action)=>{
    // state.status="success";
    // state.user=action.payload.data.user;
    // },
    // [updateUser.rejected]:(state)=>{
    // state.status="failed";
    // },

    //deleteUser
    // [deleteUser.pending]:(state)=>{
    //   state.status="pending";
    // },
    // [deleteUser.fulfilled]:(state,action)=>{
    // state.status="success";
    // state.user=action.payload.data.user;
    // },
    // [deleteUser.rejected]:(state)=>{
    // state.status="failed";
    // },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
