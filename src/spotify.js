
import axios from 'axios';

const authEndpoint ="https://accounts.spotify.com/authorize?";
const clientID = "3d810f0e48184ce7a0d126c7bf79b36d";
const redirectUrl = "http://localhost:3000";
const  scopes = ["user-library-read","playlist-read-private"];

export const  loginENDPOINT = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
const apiClient = axios.create({
    baseURL:"https://api.spotify.com/v1/",
});
export function getAccessToken(token){
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      body: {
        grant_type: 'refresh_token',
        refresh_token: token,
        client_id: clientID,
      },
      headers: {
        'Content-Type': 'applicaton/x-www-form-urlencoded'
      }
    })
  }
export const setClientToken = (token) =>{
apiClient.interceptors.request.use(async function(config){
    try {  
   config.headers.Authorization = "Bearer " + token;
   return config;
    }
    catch(e){
        console.log(e.toJSON());
    }
});
};
export default apiClient;

// window.onbeforeunload = function (event) {
//     if (event && event.type === "beforeunload") {
//         sessionStorage.removeItem("token");
//     }
// };

