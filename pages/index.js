import Head from 'next/head';
import Header from '../components/Header';
import {getSession} from 'next-auth/react';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from '../components/Widget';

export default function Home({session}) {
  if (!session) return <Login/>;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <title>Facebook 2.0</title>
      </Head>

      <Header />

      <main className='flex'>
        <Sidebar />
        <Feed />
        <Widget />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
   // Get the User
   const session = await getSession(context);

   return {
     props: {
       session,
     },
   };

}
