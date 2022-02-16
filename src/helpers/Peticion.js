import { useState } from "react";
import { url } from "../helpers/url";


export const GetData = async() =>{
    const [data, setdata] = useState([]);
    const resp = await fetch(url);
   
    const {results} =await resp.json();
    setdata(results)
    return data;
}