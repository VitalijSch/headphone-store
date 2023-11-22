import React from "react";

function CarouselProduct() {
    const carouselContent = [
        {
            title: "Klangvolle Fluchten",
            text: "Erlebe fesselnde Klanglandschaften. Unsere Kopfhörer holen jedes Detail deiner Musik ins Hier und Jetzt."
        },
        {
            title: "Sphären des Hörgenusses",
            text: "Genieße akustische Meisterwerke. Unsere Kopfhörer präsentieren Klang in seiner vollen Pracht."
        },
        {
            title: "Melodische Reisen",
            text: "Entdecke Klangwelten. Tauche mit unseren Kopfhörern in die Emotionen deiner Musik ein."
        }
    ];

    const carouselBackground = {
        height: "40vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    return (
        <div id="myCarousel" className="carousel slide mb-3" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item">
                    <div style={{ ...carouselBackground, backgroundImage: "url('/images/cover0.jpg')" }}></div>
                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>{carouselContent[0].title}</h1>
                            <p className="opacity-75">{carouselContent[0].text}</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active">
                    <div style={{ ...carouselBackground, backgroundImage: "url('/images/cover1.jpg')" }}></div>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>{carouselContent[1].title}</h1>
                            <p>{carouselContent[1].text}</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div style={{ ...carouselBackground, backgroundImage: "url('/images/cover2.jpg')" }}></div>
                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>{carouselContent[2].title}</h1>
                            <p>{carouselContent[2].text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default CarouselProduct;