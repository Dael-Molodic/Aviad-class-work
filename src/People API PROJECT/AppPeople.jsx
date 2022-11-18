import axios from 'axios';
import { useEffect, useState } from 'react';
import "./AppPeople.css"

function fetchDataInToState(url, setStateFunction) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setStateFunction(data.data));
}

export default function AppPeople() {
  const [UserList, setUserList] = useState([]);
  const [UserDetails, setUserDetails] = useState({});
  const [listPage, setListPage] = useState(1);

  useEffect(() => {
    fetchDataInToState(`https://reqres.in/api/users?page=1`, setUserList);
  }, []);

  const userExtaDetails = (userId) => {
    fetchDataInToState(`https://reqres.in/api/users/${userId}`, setUserDetails);
  };

  useEffect(() => {
    fetchDataInToState(`https://reqres.in/api/users?page=${listPage}`, setUserList);
  }, [listPage])
  

  return (
    <div className='main'>

        <button type="button" style={{position: "absolute", top: "50px", right: "470px", cursor: "pointer"}} onClick = {async (e)=> {
            try {
                const pro = await axios.get(`https://reqres.in/api/users/${e.target.nextSibling.value || 100}`)
                setUserList([pro.data.data])
                setUserDetails({});
            } catch {
                setUserList([{first_name: "No", last_name: "user", id: "0"}])
                setUserDetails({});
            }
        }}>Search</button>
        <input type="search" style={{position: "absolute", top: "50px", right: "0px"}} onClick={(e) => e.stopPropagation()}/>

        <h1>User List</h1>
        <div className='movePage'>

            <button className="Pagebutton" type="button" onClick={() => {
                setUserDetails({});
                return (listPage != 1) ? setListPage((prevPage) => prevPage - 1) : null;
            }}>
                -
            </button>

            <span>{listPage}</span>

            <button className="Pagebutton" type="button" onClick={() => {
                setUserDetails({});
                return (listPage != 2) ? setListPage((prevPage) => prevPage + 1) : null;
            }}>
                +
            </button>

        </div>
        <div style={{ position: "fixed", top: "30%"}}>
            {UserList.map((v) => (
                <div className='userName' key={v.id} onClick={() => userExtaDetails(v.id)}>
                {v.first_name} {v.last_name}
                </div>
            ))}
        </div>

        <img src={UserDetails.avatar}></img>

    </div>
  );
}

