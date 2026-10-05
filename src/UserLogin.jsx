import { useState } from "react";

const UserLogin = ()=> {

    const [usernameInput, setUsernameInput] =useState('')
    const [passwordInput, setPasswordInput] =useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = ()=> {
        setIsLoggedIn(!isLoggedIn)
        
    }
    const handleLogout = ()=> {
        setUsernameInput("")
        setPasswordInput("")
        setIsLoggedIn(!isLoggedIn)
    }


    return (
        <>
        {!isLoggedIn ? (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    value={usernameInput}
                    onChange={(e)=> setUsernameInput(e.target.value)}
                    required
                /><br></br>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    value={passwordInput}
                    onChange={(e)=> setPasswordInput(e.target.value)}
                    required
                /><br></br>
                <button>Login</button>
            </form>
        </div>
    ) : (
        <div>
        <h1>Welcome, {usernameInput}</h1>
        <button onClick={handleLogout}>Logout</button>
        </div>
    )}
        </>
    )

    // return (
        
        // <div>
        //     <h2>Login</h2>
        //     <label htmlFor="username">Username:</label>
        //     <input 
        //         type="text" 
        //         id="username" 
        //         value={usernameInput}
        //         onChange={(e)=> setUsernameInput(e.target.value)}
        //     /><br></br>
        //     <label htmlFor="password">Password:</label>
        //     <input 
        //         type="password" 
        //         id="password" 
        //         value={passwordInput}
        //         onChange={(e)=> setPasswordInput(e.target.value)}
        //     /><br></br>
        //     <button onClick={handleLogin}>Login</button>
        // </div>
    // )
}

export default UserLogin;