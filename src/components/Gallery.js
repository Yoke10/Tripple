import React from 'react';
import gallery from "./images/i20.jpg";
import gal1 from "./images/i1.jpg";
import gal2 from "./images/i2.jpg";
import gal3 from "./images/i3.jpg";
import gal4 from "./images/i4.jpg";
import gal5 from "./images/i5.jpg";
import gal6 from "./images/i6.jpg";
import gal7 from "./images/i7.jpg";
import g8 from "./images/i8.jpg";
import g9 from "./images/i9.jpg";
import g10 from "./images/i10.jpg";
import g11 from "./images/i11.jpg";
import g12 from "./images/i12.jpg";
import g13 from "./images/i13.jpg";
import g14 from "./images/i14.jpg";
import g15 from "./images/i15.jpg";
import g16 from "./images/i16.jpg";
import g17 from "./images/i17.jpg";
import g18 from "./images/i18.jpg";
import g19 from "./images/i19.jpg";
import './Gallery.css';

function Gallery() {
  const images = [
    gallery, gal1, gal2, gal3, gal4, gal5, gal6, gal7,
    g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19
  ];

  return (
    <div className="gallery-page">
      <header className="about-us-header">
        <h1>Gallery</h1>
      </header>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="img-wrapper" key={index}>
            <img className="front" src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
