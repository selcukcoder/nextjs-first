import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import slug from "slug";

function Index({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Index title</title>
      </Head>
      <h1>Hello Next.js 👋</h1>

      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link href="/character/[slug]" as={`/character/${slug(character.name)}-${character.id}`}>
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        h1 {
          color: green;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://rickandmortyapi.com/api/character/");
  const characters = await data.json();
  return {
    props: {
      characters,
    },
  };
}

export default Index;
