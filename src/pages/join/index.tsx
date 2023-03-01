import { NextPage } from 'next'
import Head from 'next/head'
import Meta from 'components/Meta'
import JoinView from 'containers/Views/Join'

const JoinPage: NextPage = () => (
  <>
    <Head>
      <Meta />
      <title>Maisha Roots</title>
    </Head>
    <JoinView />
  </>
)

export default JoinPage
