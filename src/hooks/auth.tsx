
import React, { createContext, useState, useEffect, useContext } from 'react';
import { api, api_git } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as AuthSession from 'expo-auth-session';
import { COLLECTION_APPOINTMENT, USER_STORAGE, TOKEN_STORAGE } from '../config/database';

const { SCOPE } = process.env;
const {CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;


 

type User = {
    id: string;
    name: string;
    avatar_url: string;
    login: string;
    token: string;
}

type AuthContextData = {
    user: User | null;
    isSigningIn: boolean
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

type AuthResponse = {
        token?: string;
        user: User;
}
type AuthorizationResponse = {
    params: {
        code?: string;
        error?: string;
    },
    type?: string;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isSigningIn, setIsSigningIn] = useState(false);

    async function signIn() {
        console.log('entrou no signIn');
        try {
            setIsSigningIn(true);

            // const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
             const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
             
             const authSessionResponse  = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;
             // const response = await AuthSession.startAsync({ authUrl });
           

            if(authSessionResponse.type === 'success' && authSessionResponse.params.error !== 'access_denied' ) {
                const authResponse = await api_git.post('/authenticate', {code: authSessionResponse.params.code});
                const { user, token } = authResponse.data as AuthResponse;

                api_git.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
                await AsyncStorage.setItem(TOKEN_STORAGE, JSON.stringify(token));

                setUser(user);

            }

            setIsSigningIn(false);

            // if (type === "success" && !params.error) {
            //     api.defaults.headers.authorization = `Bearer ${params.access_token}`;

            //     const userInfo = await api.get('/users/@me');
            //     console.log(userInfo);
            //     const firstName = user.data.username.split(' ')[0];
            //     user.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
            //     setUser({
            //         ...userInfo.data,
            //         firsName,
            //         token: params.access_token
            //     });
            //     setLoading(false);
            // } else {
            //     setLoading(false);
            // }

        } catch {
            throw new Error("Não foi possível autenticar");

        } finally {
            setIsSigningIn(false);
        }
    }

    async function signOut() {
        setUser(null);
        await AsyncStorage.removeItem(USER_STORAGE);
        await AsyncStorage.removeItem(TOKEN_STORAGE);
    }

    useEffect(() =>{
        async function loadUserStorageData() {
            const userStorage = await AsyncStorage.getItem(USER_STORAGE);
            const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);
           
            if(userStorage && tokenStorage) {
                api_git.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;
                setUser(JSON.parse(userStorage));
            }
            setIsSigningIn(false);
        }
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            isSigningIn,
            signIn,
            signOut
        }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}

