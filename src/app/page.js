"use client";

import Todo from "@/component/Todo";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Todo Next JS</h1>

      <Todo />
    </main>
  );
}
