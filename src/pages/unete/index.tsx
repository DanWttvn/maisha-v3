import { NextPage } from 'next'
import Head from 'next/head'
import Meta from 'components/Meta'
import LandingView from 'containers/Views/Landing'

const UnetePage: NextPage = () => (
  <>
    <Head>
      <Meta />
      <title>Maisha Roots | Unete</title>
    </Head>
    <LandingView variant="2" />
  </>
)

export default UnetePage
