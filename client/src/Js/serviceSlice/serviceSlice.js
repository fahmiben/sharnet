import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addService = createAsyncThunk(
  "service/addService",
  async (service) => {
    try {
      let result = await axios.post(
        "http://localhost:5000/service/addService",
        service
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const allServices = createAsyncThunk("service/getService", async () => {
  try {
    let result = await axios.get("http://localhost:5000/service/services");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const updateService = createAsyncThunk(
  "/updateService",
  async ({ id, service }) => {
    try {
      let result = await axios.put(
        `http://localhost:5000/service/updateService/${id}`,
        service
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteService = createAsyncThunk(
  "/deleteService/:id",
  async (id) => {
    try {
      let result = await axios.delete(
        `http://localhost:5000/service/deleteService/${id}`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  service: null,
  status: null,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,

  extraReducers: {
    //addService
    [addService.pending]: (state) => {
      state.status = "pending";
    },
    [addService.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addService.rejected]: (state) => {
      state.status = "failed";
    },
    //allServices
    [allServices.pending]: (state) => {
      state.status = "pending";
    },
    [allServices.fulfilled]: (state, action) => {
      state.status = "success";
      state.service = action.payload?.data.services;
    },
    [allServices.rejected]: (state) => {
      state.status = "failed";
    },
    //updateService
    [updateService.pending]: (state) => {
      state.status = "pending";
    },
    [updateService.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [updateService.rejected]: (state) => {
      state.status = "failed";
    },
    //deleteService
    [deleteService.pending]: (state) => {
      state.status = "pending";
    },
    [deleteService.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteService.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// export const { addService } = serviceSlice.actions;

export default serviceSlice.reducer;
