import Image from "next/image";
import styles from "./page.module.css";
import Timer from "./ui/timer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <Timer timeLeft={90} />
      </div>
    </main>
  );
}
