import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        window.document.title = `${title} - Dentist servics`;
       

    },[title])
}

export default useTitle;