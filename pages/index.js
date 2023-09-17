import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

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
        <p>I'm an software engineer with a M.S. and B.S. in Aerospace engineering
          I've had the opportunity to work at some cool companies like SpaceX and Analytical Graphics Inc.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <p>Projects to go here instead of these example mark down blogs</p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
      <p>There is also a simple json api at {' '}
        <Link href={`/api/hello`}>/api/hello</Link>
      </p>
      <p>
        (This website was built using {' '}
        <a href="https://nextjs.org/">Next.js</a>
        {' '} and {' '}
        <a href="https://react.dev/">React</a>.)
      </p>
    </Layout>
  );
}