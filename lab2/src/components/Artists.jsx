function Artists(props) {
    const { artists } = props;

    return (
        <>
            <div className="artist-card">
                <div>
                    <img src={artists.image} alt={artists.artist} />
                </div>
                <div className="artist-details">
                    <h2>{artists.artist}</h2>
                    <div className="artist-detail-content">
                        <p>Country: {artists.country}</p>
                        <p>Year Active: {artists.year}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artists;