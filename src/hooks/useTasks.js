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

  const complete = async (id) => {
    try {
      const payload = {
        id: parseInt(id)
      }

      const res = await api.put("/complete-task", payload);
      if (res.status == 200) {
        return {
          success: true
        }
      }

      return {
        success: false,
        message: res.message
      }

    } catch (error) {
      return {
        success: false,
        message: error.response.data.error
      }
    }
  }

  const incomplete = async (id) => {
    try {
      const payload = {
        id: parseInt(id)
      }

      const res = await api.put('incomplete-task', payload);

      if(res.status == 200) {
        return {
          success: true
        }
      }

      return {
        success: false,
        message: res.message
      }

    } catch (error) {
      return {
        success: false,
        message: error.response.data.error
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
    complete,
    incomplete,
    getPending
  }

}
