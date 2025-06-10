import { api } from "../axios/client"


export const login = async (credentials) => {
  const response = await api.post('/')
} 

export const signup = async (data) => {
  const response = await api.post('/sign-up', data);
  return response;
}