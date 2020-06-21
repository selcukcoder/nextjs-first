import Nav from "../components/navigation";
import Layout from "../components/layout";
import Head from "next/head";
import styles from "./about.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About title</title>
      </Head>
      <p className={styles.link}>This is the about page</p>
    </Layout>
  );
}
