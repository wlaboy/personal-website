import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const name = "Wilson Laboy";

export default function Home() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>WilsonLaboy.dev</title>
      </Head>

      <header className={utilStyles.header}>
        <Image
          priority
          src="/images/drawing.png"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>

      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Wilson.</p>
        <p>
          I am a self-taught software developer with a focus on web development.
          I have experience with C# and .NET, Angular, Node.js, React.js, and
          Vue.js.
        </p>
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
    </div>
  );
}
