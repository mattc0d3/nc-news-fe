const SearchBar = ({ topics }) => {
    return <section id="searchbar-container">
        <form id="searchbar">
            <label htmlFor="topic-filter-dropdown">Filter by Topic: </label>
            <select name="topic" id="topic-filter-dropdown">
                {topics.map(topic => {
                    return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                })}
            </select>
            <button>Search</button>
        </form>
    </section>
}

export default SearchBar