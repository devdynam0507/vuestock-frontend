import axios, { AxiosResponse } from 'axios';

export async function isLoggedIn(): Promise<boolean> {
    const resposne: AxiosResponse = 
            await axios.post('http://api.stockvue.kr:8080/api/v1/auth', 
                             {}, 
                             { withCredentials: true });
    return resposne.status === 200;
}