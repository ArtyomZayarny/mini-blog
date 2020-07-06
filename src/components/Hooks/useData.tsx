import {useState, useEffect} from 'react';
import apiClient from '../apiClient'

 interface IData {
     data:[]
 }
 interface IFetching {
     fetch:boolean
 }
const useData = (path:any):any => {
    const [data,setData] = useState<IData>({data:[]})
    const [isFetching,setFetching] = useState<IFetching>({fetch:false});

    useEffect( () => {
        setFetching({fetch:true});
        apiClient.get(path).then(response => {
            setData(response.data);
            setFetching({fetch:false})
        })
    }, [path]);

    return [data,isFetching]
}
export default useData