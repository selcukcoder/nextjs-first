import Nav from "../components/navigation";
import Layout from "../components/layout";
import Head from "next/head";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Index title</title>
      </Head>
      <h1>Hello Next.js 👋</h1>

      <style jsx>{`
     
          h1 {
            color: green;
          }
        
      `}</style>
    </Layout>
  );
}
