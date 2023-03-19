import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axiosex = () => {
    const [loading,setLoading] = useState(false)
    const [users,setUsers] = useState([])
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            return await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.data)
            .then(data => {
                setLoading(false)
                setUsers(data)
                console.log(data);
            })
            .catch((error) => {
                console.log(error.code)
                setLoading(false)
                setUsers(error.code)
            })
        }
        getData()
    },[])


  return (
    <div>
      {loading && (<h3>loading...</h3>)}  
      {!loading ? users.map((users) => (<h3 key={users.id}>{users.title}</h3>)) : (<h2>{users.error}</h2>)}
    </div>
  )
}

export default Axiosex
