import {createContext, useEffect, useState} from "react";
import {api} from "../services/api.js";
import Cookies from "js-cookie"

export const AuthContext = createContext({})

export function AuthProvider({children}) {

    const [userDto, setUserDto] = useState(null);
    const [authenticated, isAuthenticated] = useState(false);

    useEffect(() => {
        const getUserInformation = async () => {
            const token = Cookies.get('moviefinder-token');
            if (token) {
                try {
                    const response = await api.get('/movieFinder/informacoesusuario/',
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                    setUserDto(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
        };
        getUserInformation();
    }, []);

    async function logIn(emailLogin, passwordLogin) {
        const response = await api.post('/movieFinder/login', {
            email: emailLogin,
            senha: passwordLogin
        });

        isAuthenticated(true);
        setUserDto(response.data.data)

        Cookies.set('moviefinder-token', response.data.token.token, {expires: 2})
        localStorage.setItem("user", JSON.stringify(response.data.data))
        return response.data;
    }

    return (
        <AuthContext.Provider value={{ authenticated, logIn, userDto }}>
            {children}
        </AuthContext.Provider>
    )
}
