import { instance } from './base.service';

export const login = async (email, password) => {
    return await instance.post("/login", {
        "userEmail": email,
        "password": password
    })
}