import React from 'react';
import ReactDOM from 'react-dom/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import App from './components/App'; 
import Link from 'next/link';
import Header from '../components/Header'
import { useState, useEffect } from 'react'

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(()=>{setName(data.name);setLoading(false)}, 10000);
        
      })
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Vote  Apps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
  <nav><ul class="flex">
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="#">Home</a>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="#">About</a>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="#">Blog</a>
  </li>
  <li class="mr-6">
    <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
  </li>
</ul></nav>   
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      
        <h1 className="text-6xl font-bold">
          {' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Vote!
          </a>
        </h1>

        <p>
        {isLoading ? 'Está cargando' :  `${name}`}
        </p>

        <p className="mt-3 text-2xl">
          Get started{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            vote
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'Adinkras'}
        </a>
      </footer>
    </div>
  )
}

export default Home
