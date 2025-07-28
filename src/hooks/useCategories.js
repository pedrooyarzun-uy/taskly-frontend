import React from 'react'
import { api } from '../api/axios/client';

export const useCategories = () => {
  
  const getAllCategories = async () => {
    try {
      const res = await api.get("get-categories");
      if (res.status == 200) {
        return {
          success: true,
          categories: res.data.categories
        }
      } else {
        return {
          success: false,
        }
      }
    } catch (e) {
      return {
        success: false,
      }
    }
  }

  return {
    getAllCategories,
  }
}
