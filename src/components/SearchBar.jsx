const SearchBar = () => {
    return <section id="searchbar-container">
        <form id="searchbar">
            <label htmlFor="topic-filter-dropdown">Filter By: </label>
            <select name="topic" id="topic-filter-dropdown">
                {topics.map(topic => {
                    return <option value={topic.slug}>{topic.slug}</option>
                })}
            </select>
            <button>Search</button>
        </form>
    </section>
}

export default SearchBar