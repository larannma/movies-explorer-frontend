import { useState, useEffect } from 'react'

function isDefined (storedValue) {
    return storedValue !== null && storedValue !== 'undefined';
}

export function useLocalStorageState(key, initialValue) {
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key)

        return isDefined(storedValue) ? (JSON.parse(storedValue)) : initialValue 
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
};