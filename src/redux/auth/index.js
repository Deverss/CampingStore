import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/auth/index";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  email:null,
  message:null,
  errorVerifyOtp:null,
};

const login = createAsyncThunk("user/login", async (data) => {
  try {
    const res = await authApi.login(data);
    localStorage.setItem("user", JSON.stringify(res.data.status.elements.accessToken)); // Fixed typo in "accessToken"
    return res; // Fixed typo in "accessToken"
  } catch (error) {
    throw new Error(error);
  }
});

const register = createAsyncThunk("user/register", async (data) => {
  try {
    const res = await authApi.register(data);
    return res;
  } catch (error) {
    throw new Error(error);
  }
});

const verifyOtp = createAsyncThunk("user/register/verifyOtp", async (data) => {
  try {
    const res = await authApi.verifyOtp(data);
    return res;
  } catch (error) {
    throw new Error(error);
  }
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registrationSuccess: (state, action) => {
      state.email = action.payload.email;
      state.message = action.payload.message;
    },
  }, // Added an empty 'reducers' field
  extraReducers: (builder) => {
    //login
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        if(action.error.message){
          state.error = "Email or password incorrect!";
        }
      });

    //register
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      if(action.error.message){
        state.error = "Email ready exist!";
      }
     
    });

    //verify Otp
    builder.addCase(verifyOtp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(verifyOtp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.isLoading = false;
      if(action.error.message){
        state.errorVerifyOtp = "Otp incorrect";
      }
    });
  },
});

export const selectLogin = (state) => state.user;
export const { registrationSuccess } = authSlice.actions;
export const AuthAction = {
  login,
  register,
  verifyOtp
};
export default authSlice.reducer;
