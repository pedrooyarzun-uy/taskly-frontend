import React from 'react'
import { api } from '../api/axios/client'

export const useTasks = () => {
  const create = async ({title, description, category}) => {
    try {
      const payload = {
        Title: title, 
        Description: description, 
        Category: parseInt(category)
      }

      const res  = await api.post("/create-task", payload);
      if (res.status == 200) {
        return {
          success: true
        }
      } 

      return {
        success: false,
        message: res.message
      }
    } catch (e) {
      return {
        success: false,
        message: e.response.data.error
      }
    }
  }

  const getPending = async() => {
    try {
      const res  = await api.get("/get-tasks");
      
      if (res.status == 200) {
        return {
          success: true, 
          tasks: res.data.tasks
        }
      }
  
      return {
        success: false
      }
    } catch (e) {
      return {
        success: false
      }
    }
  }

  return {
    create,
    getPending
  }

}
