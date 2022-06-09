import {useContext, useEffect, useRef, useState} from "react";
import {AuthContext} from "../hooks/auth/authContext";
import Axios from "axios";

export const useFetch = (url) => {
    
    const {user} = useContext(AuthContext);
    const {token} = user;
    
    const mount = useRef(true);
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });
    
    useEffect(() => {
        return ()=>{
            (mount.current = false)
        };
    }, []);
    useEffect(() => {
    
    
        Axios.get(url, {
                headers: {
                    'Authorization': "Bearer " + token
                }
            })
            .then(({data}) => {
                        setTimeout(()=> {
                            if(mount.current){
                                setState({
                                    loading: false,
                                    error: null,
                                    data
                                });
                                console.log(data);
                            }
                        }, 2000)
                    }
                )
                .catch(error => console.error(error));
    }, [url, token]);
    return state;
}