import React, {useState} from "react";

function Login(){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false)

    function loginHandle(e) 
    {

        if(user.length < 3 || password.length < 3)
        {
            alert("Type Correct Values !!")
        }
        else
        {
            alert("All good :)")
        }
        e.preventDefault()
    }
    function userHandler(e){
        let item = e.target.value ;
        if(item.length < 3)
        {
            setUserErr(true)
        }
        else 
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item = e.target.value ;
        if(item.length < 3)
        {
            setPassErr(true)
        }
        else 
        {
            setPassErr(false)
        }
        setPassword(item)
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
            <input type="text" placeholder="Enter UserID" onChange={userHandler} />{userErr ? <span>User not Valid </span> : ""}
            <br></br>
            <br></br>
            <input type="password" placeholder="Enter Your Password" onChange={passwordHandler} /> {passErr ? <span>Invalid Password </span> : ""}
            <br></br>
            <br></br>
            <button type="Submit" >Login</button>
            </form>
        </div>
    )
}

export default Login