import { instance } from './base.service';

export const renderURLs = async (email) => {
    return await instance.get("/user_urls", {
        params: {
            "userEmail": email
        }
    })
    .then (function (res) {
        return res.data;
    })
}

export const renderFiles = async (email) => {
    return await instance.get("/user_files", {
        params: {
            "userEmail": email
        }
    })
    .then (function (res) {
        return res.data;
    })
}