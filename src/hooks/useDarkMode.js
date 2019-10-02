import {useLocalStorage} from "./useLocalStorage";
import {useState, useEffect } from "react";



export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage(key, initialValue)
    useEffect(() => {
        if(initialValue === true){
            let body = document.getElementsByTagName("body");
            body.classList.add("dark-mode");
        }else{
            body.classList.remove("dark-mode");
        }
    }[initialValue]);

    return [value, setValue]
}