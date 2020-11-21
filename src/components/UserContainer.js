import React from "react";
import { useEffect } from "react";
import { getUserDetail } from "../services/twubricService";
import User from "./User";
import Header from "./Header";
import './styles.css';
import {getFilteredUser,getUserBetweenDates} from "./../utils/filterHelper";  

export default function UserContainer() {
  const [filteredUsers,setFilteredUsers] = React.useState([]);
  const [users,setUsers] = React.useState([])
  useEffect(() => {
    getUserDetail().then(data =>{
      setUsers([...data]);
      console.log(users);
      setFilteredUsers([...data]);
    });
  }, [])

  const handleRemove = (id)=>{
    let copyFilteredUsers = [...filteredUsers];
    let copyUsers = [...users];
    copyFilteredUsers.forEach((user,index)=>{
      if(user.uid===id){
        copyFilteredUsers.splice(index,1)
        index--;
      }
    })
    copyUsers.forEach((user,index)=>{
      if(user.uid===id){
        copyUsers.splice(index,1)
        index--;
      }
    })
    setUsers(copyUsers);
    console.log(copyFilteredUsers);
    setFilteredUsers(copyFilteredUsers);
  }

  const handleFilterChange = (...args) => {
    if(args.length===2){
      const filterdData = getFilteredUser(users,args[0],args[1]);
      setFilteredUsers(filterdData);
    }
    else{
      const filterdData = getUserBetweenDates(users,args[1],args[2]);
      setFilteredUsers(filterdData);
    }
  }
  const handleResetClick = () => {
    setFilteredUsers(users);
  }
  return (
    <>
      <Header onFilterChange = {(...args)=>handleFilterChange(...args)} onResetClick={handleResetClick}/>
      <div className="userList">
        {
          filteredUsers.map((user) => (
              <User user={user} key={user.uid} id={user.uid} handleRemove={(id)=>handleRemove(id)} />     
          ))
        }
      </div>
    </>
  );
}
