import Head from 'next/head'
import { useState } from 'react'
import Coin from '../components/Coin'
import CoinApi from '../components/CoinApi'
import Layout from '../components/Layout'
import Search from '../components/Search'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'

export default function Home({filteredCoins}) {

const [search, setSearch] = useState('');

const allCoins = filteredCoins.filter(coin => 
  coin.name.toLowerCase().includes(search.toLowerCase())

)
const handleChange = e => {
  console.log(handleChange);
  e.preventDefault()
  setSearch(e.target.value.toLowerCase())
}




  return (
    <div class=' '>
    <Layout>
      <SearchBar></SearchBar>
      <Search  type="text" placeholder="Search" onChange={handleChange}></Search>
      <CoinApi filteredCoins={allCoins}  />
    </Layout>
    </div>
  )
}






export const getServerSideProps = async () => {
const res = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
const filteredCoins = await res.json();


return {
  props: {filteredCoins},
}

}