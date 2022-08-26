import axios from 'axios'

const instance = axios.create({
    baseURL:"http://localhost:5001/clone-d7aeb/us-central1/api/"
})

export default instance