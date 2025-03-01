"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MenuProps } from "@/utils";

interface SubMenuProps {
  menu: MenuProps;
}

export function Submenu({ menu }: SubMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.subMenu}>
      <div className={styles.subMenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Menu
      </div>
      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}

        {menu.objects.map((item) => (
          <li key={item.slug} className={styles.li}>
            <Link href={`/post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
