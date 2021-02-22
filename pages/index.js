import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Wilson. I'm a self-taught developer with a focus on web development.</p>
        <p>
          Find me on{" "}
          <Link href="https://www.github.com/wlaboy">
            <a>GitHub</a>
          </Link>
          {", "}
          <Link href="https://www.linkedin.com/in/wjlaboy">
            <a>LinkedIn</a>
          </Link>
          {", and "}
          <Link href="mailto:wil.j.laboy@gmail.com">
            <a>Email</a>
          </Link>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
