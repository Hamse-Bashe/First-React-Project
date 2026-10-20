import React, { use, useState } from 'react'

const MultipleInputs = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isChecked, setIsChecked] = useState(false);
    const [role, setRole] = useState("")


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(username == ""){
            alert("Please enter username")
            return
        }else if(email == ""){
            alert("Please enter email")
            return
        }else if(password == ""){
            alert("Please enter password")
            return
        }else if(!isChecked){
            alert("Please check the checkbox")
            return
        }if(role == ""){
            alert("Please enter role")
            return
        }

        const user = {
            username,
            email,
            password,
            isChecked,
            role
        }
        console.log(user)
    }

  return (
    <form onSubmit={handleSubmit} className='m-4 space-y-2 border py-2 px-4 rounded-xl max-w-84 mx-auto'>
        <label htmlFor="username">Username: </label>
        <input 
            type="text" 
            name="username" 
            className='p-2 border rounded-xl'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
        /><br/>
        <label htmlFor="username">Email: </label>
        <input 
            type="email" 
            name="email" 
            className='p-2 border rounded-xl'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
        /><br/>
        <label htmlFor="password">Password: </label>
        <input 
            type="password" 
            name="password" 
            className='p-2 border rounded-xl'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
        /><br/>
        <label htmlFor="username">Agree all terms: </label>
        <input 
            type="checkbox" 
            name="checkbox" 
            checked={isChecked}
            onChange={(e)=> setIsChecked(e.target.checked)}
        /><br/>
        <label htmlFor="role">Role: </label>
        <select 
            name="role" 
            className='p-2 border rounded-xl'
            value={role}
            onChange={(e)=> setRole(e.target.value)}
        >
            <option>User</option>
            <option>Admin</option>
        </select><br/>
        <button type="submit" className='border py-2 px-4 rounded-xl bg-indigo-100 text-indigo-600 font-semibold'>Submit</button>
    </form>
  )
}

export default MultipleInputs