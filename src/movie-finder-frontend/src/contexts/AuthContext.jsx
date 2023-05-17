import {createContext, useState} from "react";
import {api} from "../services/api.js";
import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({})

export function AuthProvider({children}) {
    async function logIn(emailLogin, passwordLogin) {
        const response = await api.post('/movieFinder/login', {
            email: emailLogin,
            senha: passwordLogin
        });

        Cookies.set('moviefinder-token', response.data.token.token, {expires: 2})
        localStorage.setItem("user", JSON.stringify(response.data.data))
        return response.data;
    }

    return (
        <AuthContext.Provider value={{ logIn }}>
            {children}
        </AuthContext.Provider>
    )
}
