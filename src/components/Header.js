import React from 'react'

const header = {
    backgroundColor: 'lightblue',
    height: '100px',
    textAlign: 'center',
    marginTop: '10px',
    fontSize:'30px',
    padding: '20px',
    color: 'white'
}
const Header = () => {
  return (
    <div style={header}>
      Redux Toolkit CRUD
    </div>
  )
}

export default Header
