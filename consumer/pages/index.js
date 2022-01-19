import Link from 'next/link'
import styles from '../styles/Home.module.css'

import dynamic from "next/dynamic";

const RemoteButton = dynamic(
  () => window.shell.get("./Button").then((factory) => factory()),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>This app consumes components from remote server <Link href="http://localhost:3001"><a>http://localhost:3001</a></Link></p>
        <RemoteButton onClick={() => window.alert('You clicked a remote button!')}>Remote Button!</RemoteButton>
      </main>
    </div>
  )
}
