import {useEffect, useState} from "react";

export const useSetFocusInsideInput = (ref: any) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const handleClickInside = () => {
        setIsFocused(true)
    }

    const handleClickOutside = () => {
        setIsFocused(false)
    }

    useEffect(() => {
        const inputElement = ref.current

        inputElement.addEventListener('click', handleClickInside)
        document.addEventListener('click', (e: MouseEvent) => {
            if (!inputElement.contains(e.target)) {handleClickOutside()}
        })

        return function() {
            inputElement.removeEventListener('click', handleClickInside)
            inputElement.removeEventListener('click', handleClickOutside)
        }
    }, [])
    return isFocused
}
