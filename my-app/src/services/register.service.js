import { instance } from './base.service';

export const register = async (email, username, password) => {
    return await instance.post("/signup", {
        "userEmail": email,
        "username": username,
        "password": password
    })
}