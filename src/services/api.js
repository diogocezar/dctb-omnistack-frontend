import axios from 'axios'

const api = axios.create({
  baseURL: 'https://oministack-back-end.herokuapp.com',
})

export default api
