import React from "react";
import { useParams } from "react-router-dom"
const services = () => {
  const { userId } = useParams();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] =  React.useState(null);
  React.useEffect(() => {
      let previousTitle = document.title;
      document.title = `Services`;
  
      return () => { document.title = previousTitle;}
    }, [])
  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!response.ok){
          throw new Error(`User Not Found.  ${(await response).status} `);
        }
        const data = (await response).json;
        setUser(data);
        setError(null);
      } catch (e) {
          setError(e.message);
      } finally{
        setLoading(false);
      }
      fetchUsers();
    }
  }, [])
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  if(!user) return <p>No User In List</p>
  return (
    <>
      <h2>profile page for: {userId}</h2>
      <div>
        <h1>{user.name}</h1>
        <p>email: {user.email}</p>
        <p>Website: {user.Website}</p>
      </div>
    </>
  )
}
export default services