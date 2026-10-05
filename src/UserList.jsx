const UserList = ({ usersList }) => {
  return (
    <div>
      <h2>Users List</h2>
      {usersList.length > 0 ? (
        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                Username
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr key={user.id}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {user.name}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Users Not Found</p>
      )}
    </div>
  );
};

export default UserList;
