import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"
import CountriesList from "./CountriesList"
import { useTheme } from "./hooks/useTheme";
import { useState } from "react";


export const Home = () => {
    const [query,setQuery]=useState('');
    const [isDark] = useTheme();
  return (
    <main className={`${isDark && "dark"}`}>
    <div class="search-filter-container">
      <SearchBar setQuery={setQuery}/>
      <SelectMenu setQuery={setQuery} />
    </div>
    <CountriesList query={query}/>
    </main>
  )
}

export default Home;