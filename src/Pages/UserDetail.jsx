import React from 'react'
import { useParams } from 'react-router-dom'
const UserDetail = () => {
    const params=useParams()
    const userId=params.userId
  return (
    <div>
      <h1>
        details about users {userId}
      </h1>
    </div>
  )
}

export default UserDetail
