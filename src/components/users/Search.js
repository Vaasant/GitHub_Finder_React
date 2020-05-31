import React,{useState,useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext';
const Search = ( ) => {

    const githubContext= useContext(GithubContext);
    const alertContext= useContext(AlertContext);

    const [text,setText]=useState('');

    const onChange=(e)=>{
        setText(e.target.value )
    }

    const onSubmit=(e)=>{
        e.preventDefault();  
        console.log(text);
        
        if(text===''){
            alertContext.setAlert('Please enter the name ','light')
        }
        else{
            githubContext.searchUsers(text);
            setText('');
        }
        
    }

        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text"  name ="text"
                    value ={text} 
                    onChange={onChange} 
                    placeholder="Search Users..."  />
                    <input  type="submit" 
                    
                    className="btn btn-dark btn-block titlebg" 
                    
                    />
                    {githubContext.users.length>0 && (
                    <button className="btn btn-light btn-block" onClick={githubContext.clearUsers} >Clear</button>
                    )}
                </form>
            </div>
        )
    
}


export default Search
