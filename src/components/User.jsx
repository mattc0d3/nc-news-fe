import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getArticles, getUserByUsername, getCommentsByUser } from "../utils/apis"
import { countVotes } from "../utils/countVotes"
import ClipLoader from "react-spinners/ClipLoader";

const User = () => {

    const params = useParams()

    const [userProfile, setUserProfile] = useState({})
    const [userArticles, setUserArticles] = useState({})
    const [userComments, setUserComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getUserByUsername(params.username)
            .then(({ user }) => {
                setUserProfile(user)
            })
        getCommentsByUser(params.username)
            .then(({ comments }) => {
                setUserComments(comments)
            })
        getArticles(1, null, "desc", "created_at", params.username)
            .then((data) => {
                setUserArticles(data)
                setIsLoading(false)
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
                <div className="profile-info">
                    <h3 id="profile-username">{userProfile.username}</h3>
                    <p id="profile-name">({userProfile.name})</p>
                    <p><span className="profile-stats">Total Votes:</span> {countVotes(userArticles.articles, userComments)}</p>
                    <p><span className="profile-stats">Articles:</span> {userArticles.totalArticles}</p>
                    <p><span className="profile-stats">Comments:</span> {userComments.length}</p>
                </div>
                <img className="profile-img" src={userProfile.avatar_url} alt={`avatar for ${userProfile.username}`} />
            </div>
        </section>
    }
}

export default User