import axiosInstance from "..";

const AuthApi = {
  register(data) {
    return axiosInstance.post("auth/registerUser", {
      EMAIL: data,
    });
  },
  verifyOtp(data) {
    return axiosInstance.post("auth/registerUser/verifyOtp", {
      EMAIL: data.reEmail,
      OTP: data.otp,
    });
  },
  login(data) {
    return axiosInstance.post("auth/login", {
      EMAIL: data.email,
      PASSWORD: data.password,
    });
  },
  logout() {},
};

export default AuthApi;
