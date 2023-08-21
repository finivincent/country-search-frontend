import { useEffect, useState } from "react"

export const useDebounce = (inputValue, delay=1000) =>{
    const [debouncedValue, setDebouncedValue] = useState(inputValue)

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, delay)

        return () => {
            clearTimeout(timer);
        }
        
    },[inputValue, delay])

    return debouncedValue
}