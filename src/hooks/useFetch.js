import React, {useState, useEffect} from "react";


const useFetch = (API_URL) =>{
    const [loading, setLoading] = useState(true);
    const [error, setError] =useState(null);
    const [questions, setQuestions] = useState([]);



    useEffect(() => {
        setLoading(true);
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [API_URL]);


    return {questions, loading, error}
    
}

export default useFetch;