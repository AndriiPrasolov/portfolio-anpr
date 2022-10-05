import type { NextPage } from 'next'
import Head from 'next/head'
import { Main } from '@layouts'
import globalStyles from '@styles/globalStyles'

const Home: NextPage = () => {
  globalStyles()

  return (
    <>
      <Head>
        <title>Andrii Pasolov</title>
        <meta name="description" content="Andrii Prasolov Portfolio" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/manifest.webmanifest" />
      </Head>
      <Main />
    </>
  )
}

export default Home
