import Head from 'next/head'
import ContentExample from '../components/admin/content-example'
import Footer from '../components/admin/footer'
import Navbar from '../components/admin/navbar'
import Scripts from '../components/admin/scripts'
import Sidebar from '../components/admin/sidebar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin Template</title>
        <meta name="author" content="Haho Team" />
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <div className="main-wrapper main-wrapper-1">
          <Navbar />
          <div className="navbar-bg"></div>
          <Sidebar />
          <ContentExample />
          <Footer />
          <Scripts />
        </div>
      </div>
    </>
  )
}
