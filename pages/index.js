import Head from "next/head";
import styles from "../styles/Home.module.css";
import Profile from "../components/Profile";
import Details from "../components/Details";
<link
  href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,400;0,423;1,300;1,400&display=swap"
  rel="stylesheet"
></link>;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anything from me | Phong Dang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Profile></Profile>
        <Details></Details>
      </main>

      <footer></footer>
    </div>
  );
}
