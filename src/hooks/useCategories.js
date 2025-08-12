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

  const create = async (category) => {
    try {
      const res = await api.post("create-category", category)

      if (res.status == 200) {
        return {
          success: true
        }
      } else {
        return {
          success: false,
          message: res.message
        }
      }
    } catch (error) {
      return {
        success: false,
        message: e.response.data.error
      }
    }
  }

  return {
    getAllCategories,
    create
  }

}
