import { instance } from './base.service';

export const deleteProfile= async () => {
    const token = localStorage.getItem("AccessToken");
    const email = localStorage.getItem("email");
    localStorage.removeItem("email");
    localStorage.removeItem("AccessToken");
    return await instance.post("/delete_user", {
        "userEmail": email,
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "AccessToken": token   
        }
    })
}