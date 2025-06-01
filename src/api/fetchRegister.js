import axios from "axios"


export const fetchRegister = async () => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_DEV_API_BASE_URL}/auth/register`)

    return res

  } catch (error) {
    throw new Error(error)
  }
}