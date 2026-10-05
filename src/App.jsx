import UserList from "./UserList";

function App(){
  const usersList = [
    {id: 1, name: "Hamse", email: "hamse@example.com"},
    {id: 2, name: "Ibrahin", email: "ibrahin@example.com"},
    {id: 3, name: "Hussein", email: "hussein@example.com"},
  ]
  return(
    // jsx
    <>
    <UserList 
      usersList={usersList}
    />
    </>
  )
}

export default App;