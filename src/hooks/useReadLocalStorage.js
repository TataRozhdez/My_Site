import { useCallback, useEffect, useState } from "react";

import { useEventListener } from "usehooks-ts";

export const useReadLocalStorage = (key) => {
    // Get from local storage then
    // parse stored json or return initialValue
    const readValue = useCallback(() => {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === "undefined") {
            return null;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return null;
        }
    }, [key]);

    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(readValue);

    // Listen if localStorage changes
    useEffect(() => {
        setStoredValue(readValue());
    }, []);

    const handleStorageChange = useCallback(
        (event) => {
            if (event?.key && event.key !== key) {
                return;
            }
            setStoredValue(readValue());
        },
        [key, readValue],
    );

    // this only works for other documents, not the current one
    useEventListener("storage", handleStorageChange);

    // this is a custom event, triggered in writeValueToLocalStorage
    // See: useLocalStorage()
    useEventListener("local-storage", handleStorageChange);

    return storedValue;
};
