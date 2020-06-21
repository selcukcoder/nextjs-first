import Nav from './navigation'
import Head from 'next/head'


function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Boş title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <Nav></Nav>
      <main>{children}</main>
      <footer>
        Design footer
      </footer>
    </div>
  );
}
export default Layout;
