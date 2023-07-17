const SearchBar = () => {
    return <section id="searchbar-container">
        <form id="searchbar">
            <label for="searchBar" class="sr-only">Search Term: </label>
            <input id="searchBar" type="text"/>
            <button>Search</button>
        </form>
    </section>
}

export default SearchBar