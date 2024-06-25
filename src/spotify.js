
import axios from 'axios';
import { redirect } from "react-router-dom";
const authEndpoint ="https://accounts.spotify.com/authorize?";
const clientID = "3d810f0e48184ce7a0d126c7bf79b36d";
const redirectUrl = "http://localhost:3000";
const  scopes = ["user-library-read","playlist-read-private"];

export const  loginENDPOINT = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
const apiClient = axios.create({
    baseURL:"https://api.spotify.com/v1/",
});

export const setClientToken = (token) =>{

apiClient.interceptors.request.use(async function(config){
   config.headers.Authorization = "Bearer " + token;
   return config;
});
};

apiClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    window.sessionStorage.clear();
    redirect("/login");
    return Promise.reject(error);
  });


export default apiClient;

// window.onbeforeunload = function (event) {
//     if (event && event.type === "beforeunload") {
//         sessionStorage.removeItem("token");
//     }
// };

