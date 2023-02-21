import './App.css';
import React, { useState } from 'react';
import { Header } from './Components/Header/Header';
import useLoadTable from './Hooks/useLoadTable';
import { Pagination } from './Components/Pagination/Pagination'
import { Table } from './Components/Table/Table';


export default function App() {
  const {data, loading, error} = useLoadTable('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2')

  const [number, setNumber] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  

  const indexLastPost = currentPage*number
  const indexFirstPost = indexLastPost-number
  const currentPosts = data.slice(indexFirstPost,indexLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='App'>
      <Header/>
        {data.length > 0 ? (
          <>
            <Table data={currentPosts} loading={loading} error={error}/>
            <Pagination totalPosts={data.length} pageSize={number} paginate={paginate}/>
          </>
        ) : (
          <h1>No data to display!</h1>
        )}
    </div>
  );
}

