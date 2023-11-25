import React from "react";

function CarouselProduct() {
    // Konstante für die Inhalte des Carousels
    const carouselItems = [
        {
            title: "Klangvolle Fluchten",
            text: "Erlebe fesselnde Klanglandschaften. Unsere Kopfhörer holen jedes Detail deiner Musik ins Hier und Jetzt.",
            imageUrl: "/images/cover0.jpg",
            alignClass: "text-start",
        },
        {
            title: "Sphären des Hörgenusses",
            text: "Genieße akustische Meisterwerke. Unsere Kopfhörer präsentieren Klang in seiner vollen Pracht.",
            imageUrl: "/images/cover1.jpg",
            alignClass: "",
        },
        {
            title: "Melodische Reisen",
            text: "Entdecke Klangwelten. Tauche mit unseren Kopfhörern in die Emotionen deiner Musik ein.",
            imageUrl: "/images/cover2.jpg",
            alignClass: "text-end",
        },
    ];

    return (
        <div id="myCarousel" className="carousel slide mb-3" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                    <div key={index} className={`carousel-item ${index === 1 ? 'active' : ''}`}>
                        <div className="carouselBackground" style={{ backgroundImage: `url('${item.imageUrl}')` }}></div>
                        <div className="container">
                            <div className={`carousel-caption ${item.alignClass}`}>
                                <h1>{item.title}</h1>
                                <p className={index === 0 ? "opacity-75" : ""}>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
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