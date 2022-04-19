import React, { useEffect, useState } from "react";
import axios from "axios";
// import {useQuery} from "react-query"
// function useAxios({url}:any) {
//     useEffect(()=>{
//         const fetchData=()=>{
//             axios.get(url)
//         }
//         const {data,isLoading,error} = useQuery([`${url}`],()=>fetchData())
//     },[url])

//     return
// }

axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;
