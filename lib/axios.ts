// lib/axios.ts

import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

// ==========================================
// Axios instance
// ==========================================

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  headers: {
    "Content-Type": "application/json",
  },

  // Important:
  // Allows browser to send the refresh-token cookie
  withCredentials: true,
});

// ==========================================
// Request Interceptor
// ==========================================

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


let isRefreshing = false;

let refreshPromise: Promise<string> | null = null;

// ==========================================
// Response Interceptor
// ==========================================

api.interceptors.response.use(

  // Successful response
 

  (response) => {
    return response;
  },



  async (error: AxiosError) => {
    // Get the original request that failed
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // ======================================
    // Check if error is 401
    // ======================================

    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    // ======================================
    // Prevent infinite retry loop
    // ======================================

    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    // ======================================
    // Refresh already in progress
    // ======================================

    if (isRefreshing && refreshPromise) {
      try {
        // Wait for the existing refresh request
        const newAccessToken = await refreshPromise;

        // Put new access token on original request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    // ======================================
    // Start a new refresh request
    // ======================================

    isRefreshing = true;

    refreshPromise = (async () => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/refresh/access-token`,
      {},
      {
        withCredentials: true,
      }
    );

    const newAccessToken = response.data.access_token;

  

    if (!newAccessToken) {
      throw new Error("Refresh API did not return an access token");
    }

    localStorage.setItem("access_token", newAccessToken);

    return newAccessToken;

  } finally {
    isRefreshing = false;
    refreshPromise = null;
  }
})();

    try {
      const newAccessToken = await refreshPromise;

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      localStorage.removeItem("access_token");
      
      if (typeof window !== "undefined") {
        window.location.href = "/admin/login";
      }

      return Promise.reject(refreshError);
    }
  },
);

export default api;
