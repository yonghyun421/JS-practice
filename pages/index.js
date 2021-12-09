import { Axios } from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL = 
  'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    Axios.get(API_URL)
    .then(res => {
      console.log(res)
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <Head>
        <title>HOME | 투데위</title>
      </Head>
      create-next-app
    </div>
  )
}
