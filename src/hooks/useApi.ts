import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_TEST_VAR 
    //process.env.REACT_APP_prefix  
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {id: 3, name: 'Luan', idade: 23, email: "luanteste@gmail.com"},
        }

        const response = await api.post('/validateLogin', {token})
        return response.data
    },
    signin: async (email: string, password: string) => {
        //resposta fake sem API
        return {
            user: {id: 3, name: 'Luan', idade: 23, email: "luanteste@gmail.com"},
            token: '123456789'
        }

        const response = await api.post('/signin', {email, password})
        return response.data
    },
    logout: async () => {
        return {status: true}
        const response = await api.post('logout')
        return response.data
    }
})