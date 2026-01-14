import { ApiResponse } from "../types/Stock";

// Use Vite proxy to bypass CORS restrictions
// In development: /api/* -> https://json.bselivefeeds.indiatimes.com/*
const API_URL = "/api/ET_Community/Gain?pagesize=100";

export const fetchStocks = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }

    const data: ApiResponse = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching stocks:", error);
    throw error;
  }
};
