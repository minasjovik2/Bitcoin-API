import React from 'react'
import './Table.css'

export const Table = ({data, loading, error}) => {
    if (loading){
        return <h1>Loading...</h1>
    }

    if (error){
        console.log(error)
    }

  return (
    <table className='table'>
    <thead>
       <tr>
            <th scope='col'>Time</th>
            <th scope='col'>High</th>
            <th scope='col'>Low</th>
            <th scope='col'>Open</th>
            <th scope='col'>Volume from</th>
            <th scope='col'>Volume to</th>
        </tr>
    </thead>
    <tbody>
        {
            data?.map((post,index) => {
                return(
                  <tr key={index}>
                    <td>{post.time}</td>
                    <td>{post.high}</td>
                    <td>{post.low}</td>
                    <td>{post.open}</td>
                    <td>{post.volumefrom}</td>
                    <td>{post.volumeto}</td>
                  </tr>
                )
              })
        }
    </tbody>
  </table>
  )
}
