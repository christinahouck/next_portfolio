import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/Home.module.css";
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
                <p>
                    I'm a California-based software engineer with a background
                    in digital marketing.
                </p>
                <p>
                    I'm looking for a front-end forward position that allows me
                    to continually grow and experiment with new-to-me
                    technologies. I'm self-taught and love to learn.
                </p>
            </section>
            <section className={homeStyles.pillsContainer}>
                <h2 className={utilStyles.headingLg}>My stack </h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>CSS, Less, & Sass</li>
                    <li>Netlify, Heroku, & Vercel</li>
                    <li>npm, yarn, & webpack</li>
                    <li>SEO & Google Analytics</li>
                    <li>Google AdWords & Facebook Ads</li>
                    <li>Webflow</li>
                    <li>Project management</li>
                    <li>Agile methodologies</li>
                    <li>Jira</li>
                    <li>Raygun</li>
                </ul>
                <h2 className={utilStyles.headingLg}>
                    Some professional experience with
                </h2>
                <ul>
                    <li>Redux</li>
                    <li>C#</li>
                    <li>Microsoft Azure</li>
                </ul>
                <h2 className={utilStyles.headingLg}>
                    My favorite things to think about
                </h2>
                <ul>
                    <li>User experience</li>
                    <li>Accessibility</li>
                    <li>Pixel-perfect design</li>
                    <li>Thoughtful copywriting</li>
                </ul>
            </section>

            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Portfolio</h2>
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
            <section
                className={`${utilStyles.headingMd} ${utilStyles.paddingTop40px}`}
            >
                <a
                    href="https://www.linkedin.com/in/christinademartinez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={utilStyles.ctaButton}
                >
                    Find me on LinkedIn
                </a>
            </section>
        </Layout>
    );
}
