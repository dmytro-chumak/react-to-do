"use client";

import { useContext } from "react";

import styles from "./sidebar.module.css";
import Link from "next/link";

import {
  SearchContext,
  SearchDispatchContext,
} from "@/context/SearchContext/SearchContext";

export default function Sidebar() {
  return (
    <aside>
      <nav className={styles.sidebar}>
        <Search />
        <Menu />
      </nav>
    </aside>
  );
}

function Search() {
  const search = useContext(SearchContext);
  const setSearch = useContext(SearchDispatchContext);

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
}

function Menu() {
  return (
    <ul className={styles.menu}>
      <MenuItem url="/today" value="Today" />
      <MenuItem url="/important" value="Important" />
      <MenuItem url="/planned" value="Planned" />
      <MenuItem url="/tasks" value="Tasks" />
    </ul>
  );
}

function MenuItem({ url, value }) {
  return (
    <li className={styles.menuItem}>
      <Link href={url} className={styles.menuItem} scroll={false}>
        {value}
      </Link>
    </li>
  );
}
