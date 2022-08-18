import { useState, useEffect } from "react";

const useFetch = (API_URL) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] =useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [API_URL]);

    return { data, loading, error }  
}

export default useFetch;