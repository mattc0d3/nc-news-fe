const NewComment = ({ setCommentWindowOpen }) => {
    return <div id="new-comment-window">
        <button className="close-window-button" onClick={() => setCommentWindowOpen(false)}>X</button>
        <form id="new-comment-form">
        <label htmlFor="new-comment">Add new comment: </label>
            <textarea name="new-comment" id="new-comment" ></textarea>
        </form>
    </div>
}

export default NewComment