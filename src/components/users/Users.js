import React,{useContext} from 'react'
import UserItem from './Useritem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext'

 const  Users =() => {
    const githubContext= useContext(GithubContext);

    const {loading,users}=githubContext;

    if(loading){
        return <Spinner/>
    }
    return (
        <div style={userStyle} className="titlebg" >
            {users.map(user=>(
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    )

}


const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}

export default Users
