import { NextPage } from 'next'
import Head from 'next/head'
import Meta from 'components/Meta'
import ThanksView from 'containers/Views/Thanks'

const ThanksPage: NextPage = () => (
  <>
    <Head>
      <Meta />
      <title>Maisha Roots</title>
    </Head>
    <ThanksView />
  </>
)

export default ThanksPage
