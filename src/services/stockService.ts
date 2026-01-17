import { ApiResponse } from "../types/Stock";
import { API_URL } from "../constants";

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
