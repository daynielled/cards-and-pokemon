import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (initialUrl) => {
    const [url, setUrl] = useState(initialUrl);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setIsfetching] = useState(false);

    const fetchData = async () => {
         try{
                const res = await axios.get(url);
                setData((prevData) => [...prevData, res.data]);
            } catch (error) {
                setError(error);
            } finally {
                setIsfetching(false); //set fetching status to false
            }
        };

        useEffect(() => {
           if(isFetching) {
            fetchData();
           } 
        }, [url, isFetching]); //Only fetch data when is fetching

        return [data,() => setIsfetching(true),error, setUrl];
   
}

export default useAxios;
