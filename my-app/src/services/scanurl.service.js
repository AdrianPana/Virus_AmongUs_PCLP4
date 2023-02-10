import { instance } from './base.service';

export const scanUrl = async (email, url) => {
    return await instance.post("/add_url", {
        "userEmail": email,
        "urlAddress": url,      
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "AccessToken": localStorage.getItem("AccessToken")    
        }

    })
}