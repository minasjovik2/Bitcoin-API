import React from 'react'
import './Table.css'

export const Table = ({data}) => {
    

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
              let unix_timestamp = post.time
              var date = new Date(unix_timestamp * 1000);
              var hours = date.getHours();
              var minutes = "0" + date.getMinutes();
              var seconds = "0" + date.getSeconds();
              var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

                return(
                  <tr key={index}>
                    <td>{formattedTime}</td>
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
