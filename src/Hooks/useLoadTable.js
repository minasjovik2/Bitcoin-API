import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function useLoadTable(url) {

     //useState to save states of posts, loading and if necessary error
     const [data, setData] = useState([])
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState(null)
 
    useEffect(() => {
        const fetchPosts = async () => { //bruker threading for at datahentingen skal skje separat fra kjøringen av resten av koden
            setLoading(true);
                axios.get(url)
                .then((response) => { //.then sikrer at koden venter på dataen, og dermed ikke har noen udefinerte felter som kan lede til at applikasjonen kræsjer
                    console.log(response)
                    const newResponse = response.data.Data.Data
                    setData(newResponse)
                } )
                .catch((e) => {
                    setError(e) //if error occures during fetching posts set error to true
                })
                .finally(() => {
                    setLoading(false)
                 } )

            }
        fetchPosts();
    }, [url]);

    return {data,loading,error};
}

