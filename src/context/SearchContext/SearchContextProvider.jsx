"use client";

import { SearchContext, SearchDispatchContext } from "./SearchContext";
import { useState } from "react";

export default function SearchContextProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={search}>
      <SearchDispatchContext.Provider value={setSearch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}
