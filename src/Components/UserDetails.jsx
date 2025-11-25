import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {

  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() =>{
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div className="container mt-5">
      <h2>User Details - {user.firstName} {user.lastName}</h2>
      <p><b>Age:</b> {user.age}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Blood Group:</b> {user.bloodGroup}</p>
    </div>
  );
};

export default UserDetails;
