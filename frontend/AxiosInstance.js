import axios from "axios";

const instance= axios.create({
    baseURL:"http://localhost:8080/api",
    // timeout:1000
})

//interecptor is the feature of axios to modify req,res and it act like a middleware for frontend 
instance.interceptors.request.use(
    async(config)=>{
        try{
            const token= localStorage.getItem("jwtToken");
            if(token){
            config.headers.Authorization=`Bearer ${token}`;
            }
            return config ;
        }
        catch(error){
            console.log(error);
        }
    }
)

instance.interceptors.response.use(
    (response)=>{
        console.log(response);
        return response;
    },
  (error)=>{
        console.log("response error",error);
        if(error.response.status ===401){
            console.log("unauthorised error");
        }
  } 
)
export default instance;