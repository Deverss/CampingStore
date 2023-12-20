import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/auth/index";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  email: null,
  message: null,
  errorVerifyOtp: null,
  errorLogout: null,
  userId: null,
};

const login = createAsyncThunk("user/login", async (data) => {
  try {
    const res = await authApi.login(data);
    const accessToken = res.data.status.elements.accessToken;
    const refreshToken = res.data.status.elements.refreshToken;
    const userId = res.data.status.elements.userId;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("token", JSON.stringify(refreshToken));
    localStorage.setItem("userId", JSON.stringify(userId));
    return { accessToken, refreshToken, userId, };
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

const logout = createAsyncThunk("user/logout", async (data) => {
  try {
    const res = await authApi.logout(data);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
    loginSuccess: (state, action) => {
      state.userId = action.payload.userId;
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
        if (action.error.message) {
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
      if (action.error.message) {
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
      if (action.error.message) {
        state.errorVerifyOtp = "Otp incorrect";
      }
    });

    //logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      if (action.error.message) {
        state.errorLogout = "error logout";
      }
    });
  },
});

export const selectLogin = (state) => state.user;
export const { registrationSuccess } = authSlice.actions;
export const { loginSuccess } = authSlice.actions;
export const AuthAction = {
  login,
  register,
  verifyOtp,
  logout,
};
export default authSlice.reducer;
