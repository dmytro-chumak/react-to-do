"use client";

import { useContext, useState } from "react";

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
  const [activePage, setActivePage] = useState("Today");

  const menuItems = [
    {
      url: "/today",
      value: "Today",
    },
    {
      url: "/tasks",
      value: "Tasks",
    },
    {
      url: "/planned",
      value: "Planned",
    },
    {
      url: "/important",
      value: "Important",
    },
  ];

  return (
    <ul className={styles.menu}>
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.value}
          url={menuItem.url}
          value={menuItem.value}
          active={menuItem.value === activePage}
          setActivePage={setActivePage}
        />
      ))}
    </ul>
  );
}

function MenuItem({ url, value, active, setActivePage }) {
  return (
    <li
      className={styles.menuItem + " " + (active ? styles.menuItemActive : "")}
    >
      <Link
        href={url}
        className={styles.menuItem}
        scroll={false}
        onClick={() => setActivePage(value)}
      >
        {value}
      </Link>
    </li>
  );
}
