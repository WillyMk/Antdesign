import React,{useState,useEffect} from 'react'
import Axios from 'axios'
const BASE_URL = 'https://gorest.co.in/'

const Tables = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer a167da9923f5af3060de33cffe5328df25b7eeb6eb0914da195782d0be4b4778',
            'Accept':'application/json'
          }
        Axios.post(`${BASE_URL}/public/v2/users/`,values,{
            headers: headers
          })
          .then((response) => {
            setUsers(response);
          })
          .catch((error) => {
            console.log(error)
          })
    })
  return (
    <div>
    <h1>Table list</h1>
        <table>
          <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Status</td>
          </tr>
          {
            users.map((item,id)=>{
              <tr key={id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
              </tr>
            })
          }
          </tbody>
        </table> 
        </div>
  )
}

export default Tables