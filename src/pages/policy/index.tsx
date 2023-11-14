import { NextPage } from 'next'
import Head from 'next/head'
import Meta from 'components/Meta'
import PolicyView from 'containers/Views/Policy'

const Policy: NextPage = () => (
  <>
    <Head>
      <Meta />
      <title>Maisha Roots | Política de privacidad</title>
    </Head>
    <PolicyView />
  </>
)

export default Policy
