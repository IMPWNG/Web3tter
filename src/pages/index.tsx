import React from 'react';
import Head from 'next/head';
import { useMoralis } from 'react-moralis';

import LoginPage from "../components/sections/login";
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import WalletInfo from '../components/WalletInfo';

const Home = () => {
  const { isAuthenticated } = useMoralis();
  
  if (!isAuthenticated) {
  return (
    <div>
      <LoginPage />
    </div>
  )
}
  return (
    <div>
      <Head>
        <title>NFTPLACE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
          <Sidebar />
          <Feed />
          <WalletInfo />
        </main>
    </div>
  )
}

export default Home;
