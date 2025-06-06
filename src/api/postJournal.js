import axios from "axios"

export const postJournal = async (userId, payload) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_DEV_API_BASE_URL}/journal/${userId}`, payload, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })

    return res
  } catch (error) {
    return error.response
  }

}