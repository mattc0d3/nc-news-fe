const SortOptions = ({ order, setOrder, sortBy, setSortBy }) => {

    const reverseOrder = () => {
        if (order === "DESC") setOrder("ASC")
        else setOrder("DESC")
    }

    return <form>
        <label htmlFor="sort-options">Sort by: </label>
        <select>
            <option>date</option>
            <option>title</option>
            <option>user</option>
        </select>
        <label className="switch">
            <input type="checkbox" onChange={reverseOrder}></input>
            <span className="slider round"></span>
        </label>
    </form>
}

export default SortOptions