import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const SortOptions = ({ order, setOrder, sortBy, setSortBy, topic }) => {

    const [searchParams, setSearchParams] = useSearchParams({ sort_by: sortBy, order: order })

    useEffect(() => {
        setSearchParams({ sort_by: sortBy, order: order})
    }, [sortBy, order, topic])

    useEffect(() => {
        setOrder(searchParams.get("order"))
        setSortBy(searchParams.get("sort_by"))

    }, [])

    const reverseOrder = () => {
        if (order === "desc") setOrder("asc")
        else setOrder("desc")
    }

    return <form id="sort-options">
        <label id="sort-label" htmlFor="sort-options">Sort by:</label>
        <select id="sort-select" onChange={e => setSortBy(e.target.value)} >
            <option value="created_at" >date</option>
            <option value="comment_count" >comments</option>
            <option value="votes" >votes</option>
        </select>
        <label className="switch">
            <input type="checkbox" onChange={reverseOrder}></input>
            <span className="slider round"></span>
        </label>
        {order === "desc" ? <FontAwesomeIcon className="order-arrow" icon={faArrowDown} /> : <FontAwesomeIcon className="order-arrow" icon={faArrowUp} />}
    </form>
}

export default SortOptions