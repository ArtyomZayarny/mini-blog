import React,{useEffect,useState} from 'react';
import useData from '../Hooks/useData'
import {Loader,Dimmer} from 'semantic-ui-react'
import styles from './AuthorInfo.module.css'

type AuthorInfoProps = {
    authorId:null | number
}

type AuthorInfo = {
    username:string
}
interface IAuthor {
    name:string,
    email:string,
    phone:number
}
const AuthorInfo:React.FC<AuthorInfoProps> = ({authorId, ...props}) => {
    
    const [data,isFetching] = useData(`/users/${authorId}`);
    const [authorInfo,setAuthorInfo] = useState<IAuthor>({name:'',email:'',phone:0});
    const [loading,setLoading] = useState(false);

    useEffect( () => {
        setLoading(true)
    },[authorId]);
    
    useEffect(() => {
        setLoading(true)
        if(data.id) {
            setAuthorInfo(data);
            setLoading(false)
        }
    }, [data])

    return (
        <>
        <Dimmer active={loading === true} inverted>
            <Loader>Loading...</Loader>
        </Dimmer>
        <div className={styles.author}>
            <h3>AuthorInfo</h3>
            <p>Name : {authorInfo.name}</p>
            <p>E-mail : {authorInfo.email}</p>
            <p>Phone : {authorInfo.phone}</p>
        </div>
        </>
    )
}
export default AuthorInfo