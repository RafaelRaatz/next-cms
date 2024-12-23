"use client";

import Link from "next/link";
import styles from './error.module.scss'

export default function Error() {
  return (
    <div className={styles.error}>
      <h1>Ops Essa pagina não existe</h1>
      <Link href="/">voltar para home</Link>
    </div>
  );
}
