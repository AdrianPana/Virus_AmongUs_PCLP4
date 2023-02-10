import { instance } from './base.service';

export const scanFile = async (email, binData, fileName) => {
    return await instance.post("/add_file", {
        "userEmail": email,
        "binData": [JSON.stringify(binData)],
        "fileName": fileName      
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "AccessToken": localStorage.getItem("AccessToken")    
        }

    })
}