import { NextPage } from 'next'
import Head from 'next/head'
import Meta from 'components/Meta'
import HomeView from 'containers/Views/Home'

const HomePage: NextPage = () => (
  <>
    <Head>
      <Meta />
      <title>Maisha Roots</title>
    </Head>
    <HomeView />
  </>
)

export default HomePage
