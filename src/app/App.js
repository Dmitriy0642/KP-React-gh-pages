import React, { useState,useEffect } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState();
    useEffect(()=>{
        api.users.fetchAll().then((users)=>{
            return setUsers(users)
        })
    } , [])
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
        console.log(id);
    };
    if (users){
        return (
            <div>
                <Users
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                    users={[...users]}
                />
            </div>
        );
    }
}

export default App;
