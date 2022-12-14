import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const { data } = trpc.useQuery(['shortLink.getAll']);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {data ? <p>{data.length}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

export default Home;
