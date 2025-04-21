import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser } from "@/services/users/userService";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getCurrentUser(token)
                .then((user) => {
                    setUser(user);
                    setIsAuthenticated(true);
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    setIsAuthenticated(false);
                    setUser(null);
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
        
    }, []);

    const login = async (token) => {
        localStorage.setItem('token', token);
        try {
            const user = await getCurrentUser(token);
            setUser(user);
            setIsAuthenticated(true);
        } catch (err) {
            console.error("Error al cargar usuario después de login", err);
            setUser(null);
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
