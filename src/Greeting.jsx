// using props
const Greeting = ({currentUser,role, age})=>{
  return (
    <>
    <h1>Hello, {currentUser}</h1>
    <p>Your Role is: {role}</p>
    <p>Your Age is: {age} years old</p>
    </>
  )
}

export default Greeting;