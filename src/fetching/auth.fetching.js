import { resolveConfig } from "vite"
import { HTTP, URL } from "./http"


const ROUTE = '/api/auth'

export const login = async (usuario) => {
    try {
        const result = await HTTP.POST(URL.URL_API + ROUTE + '/login', usuario)
        console.log(result)
        if(!result.ok){
            throw result
        }
        else{
            localStorage.setItem('token', result.token)
        }
    }
    catch(error){
        console.error('Error en logueo', error)
        throw {message: error.message}
    }
}

export const register = async (usuario) => {
    try {
        const result = await HTTP.POST(URL.URL_API + ROUTE + '/register', usuario)
        console.log(result)
        if(!result.ok){
            throw result
        }
    }
    catch(error){
        console.error('Error en logueo', error)
        throw {message: error.message}
    }
}

export const verificarToken = async (usuario) =>{
    try{
        const token = localStorage.getItem('token')
        const headers = new Headers()
        headers.append('Authorization', token)
        const result = await HTTP.GET(URL.URL_API + ROUTE + '/verify-token', headers)
        console.log(result)
    }
    catch(error){
        console.log(error)

    }
    
}