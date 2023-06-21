import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Jason</b> welcome to my blog! I am a software enginner that has worked in the industry for over 10 years. I have gained valuable experience from working at large fortune 500 companies to startups (and everything in between).
        I hope to be able to share some insights with you as I learn new front end technologies and frameworks! I am currently learning building <b>react apps using the Next.js framework.</b></p>
          <i>*This is a sample Next.js React website - you can learn to build a site like this on{' '} <a href="https://nextjs.org/learn">Next.js</a></i>
        <br />
      </section>
      <section className={`${utilStyles.lineSeperate} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}