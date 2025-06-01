import axios from "axios"


export const fetchLogin = async (payload) => {
  try {
    
    const res = await axios.post(`${import.meta.env.VITE_DEV_API_BASE_URL}/auth/login`, payload)

    return res

  } catch (error) {
    return error.response.data
    // console.log(error)
    // throw new Error(error)
  }
}