import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getArticles, getUserByUsername } from "../utils/apis"
import ClipLoader from "react-spinners/ClipLoader";

const User = () => {

    const params = useParams()

    // console.log(params, "<<<< params in User")

    const [userProfile, setUserProfile] = useState({})
    const [userArticles, setUserArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    // console.log(params.username, "<<<<< username in User")

    useEffect(() => {
        getUserByUsername(params.username)
            .then(({ user }) => {
                setUserProfile(user)
                // console.log(user, "<<<< user after api call")
                getArticles(author=userProfile.username)
                    .then(articles => {
                        console.log(articles, "<<<<< articles by user")
                        setIsLoading(false)
                    })
            })
            .catch(err => {
                setError(err.response)
                setIsLoading(false)
            })
    }, [params.username])

    useEffect(() => {
        getArticles(1, null, "desc", "author", userProfile.username)
            .then(({articles}) => {
                const filterArticles = articles.filter(article => article.author === params.username)
                setUserArticles(filterArticles)
            })
    }, [params.username])

    if (isLoading) {
        return <section className="page-content">
            <p>Loading...</p>
            <ClipLoader
                color={"red"}
                loading={isLoading}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </section>
    }
    else if (error) return < ErrorPage status={error.status} message={error.data.msg} />
    else {
        return <section className="page-content">
            <div className="profile-container">
                <h3>{userProfile.username}</h3>
                <img className="profile-img" src={userProfile.avatar_url} alt={`avatar for ${userProfile.username}`} />
                <p>{userProfile.name}</p>
                <p>Articles written: {userArticles.length}</p>
            </div>
        </section>
    }
}

export default User