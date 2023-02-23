import './App.css';
import React, { useMemo, useState } from 'react';
import { Header } from './Components/Header/Header';
import useLoadTable from './Hooks/useLoadTable';
import { Pagination } from './Components/Pagination/Pagination'
import { Table } from './Components/Table/Table';


export default function App() {
  const {data, loading, error} = useLoadTable('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2')

  const number = 10
  const [currentPage, setCurrentPage] = useState(1)
  
  const currentPosts = useMemo(() => {
    const indexLastPost = currentPage*number
    const indexFirstPost = indexLastPost-number
    return data.slice(indexFirstPost,indexLastPost)
  }, [currentPage, data]);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  if (error || data.length === 0){
    return <h1>error</h1>
  }

  if (loading){
    return <h1>Loading...</h1>
  }


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

