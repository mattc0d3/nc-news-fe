import error from '../assets/error.png'

const ErrorPage = ({ status, message }) => {
    return <section className="page-content">
        <div id="error-container">
            <h4>Error</h4>
            <img id="error-img" src={error} alt="error-sign" />
            <p>{status}: {message}</p>
        </div>
    </section>
}

export default ErrorPage