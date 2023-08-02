
function LinksLoading() {
    const linkCount = 6;

    return (
        <div className="f-linkbox">
        {
            [...Array(linkCount)].map((_, i) => (
                <div key={i} className="f-link"/>
            ))
        }
        </div>
    )
}

export default LinksLoading;