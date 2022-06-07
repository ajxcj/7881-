import axios from "axios"
export const Getdata = axios.create(
    {baseURL:'/home',
    headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
}
    
)