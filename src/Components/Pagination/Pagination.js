import React from 'react'
import './Pagination.css'


export const Pagination = ({totalPosts, pageSize, paginate}) => {
    const pageNumbers = [] 
    
    for (let i=1; i <= Math.ceil(totalPosts/pageSize); i++){
        pageNumbers.push(i)
    }
    
  
    
  return (
    <nav >
        <ul className='pagination'>
            {
                pageNumbers.map(page => (
                     <a key={page} href="!#" onClick={() => paginate(page)} className='pageItemButton'>
                        {page}
                     </a>
                ))
            }
        </ul>
    </nav>
  )
}
