const Error = (errorStatus, errorMessage) => {
    return <section className="page-content">
        <p>{errorStatus}</p>
        <p>{errorMessage}</p>
    </section>
}