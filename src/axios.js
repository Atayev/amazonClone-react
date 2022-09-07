import axios from 'axios'

const instance = axios.create({
    baseURL:"https://us-central1-clone-d7aeb.cloudfunctions.net/api"
})

export default instance


// http://localhost:5001/clone-d7aeb/us-central1/api/