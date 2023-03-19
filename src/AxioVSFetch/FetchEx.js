import React, { useEffect, useState } from 'react'

const FetchEx = () => {
    const [users,setUsers] = useState()
    useEffect(() => {
        const getUsers = async() => {
            return await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(data => {
                console.log(data)
            })
            .then((error) => error)
        } 
        getUsers()
    },[]);
  return (
    <div>
        
    </div>
  )
}

export default FetchEx
