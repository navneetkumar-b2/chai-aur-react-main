import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams() 
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

// export default User
//The curly braces {} in { userid } are used for object destructuring. It's a shorthand syntax for extracting the userid property from the object returned by useParams().
//code without destructuring
// const params = useParams();
// const userid = params.userid;

// // Or directly
// const userid = useParams().userid;