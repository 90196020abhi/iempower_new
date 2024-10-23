import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, } from 'lucide-react';
import './BlogImages.css';

const BlogImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/IMG1.png",
      alt: "People working on computers",
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dein snde.",
      readMoreLink: "#"
    },
    {
      src: "/IMG2.png",
      alt: "Hands typing on laptop",
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dein snde.",
      readMoreLink: "#"
    },
    {
      src: "/IMG3.png",
      alt: "Colleagues high-fiving",
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dein snde.",
      readMoreLink: "#"
    },
    {
      src: "/IMG4.png",
      alt: "Team working on laptops",
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dein snde.",
      readMoreLink: "#"
    },
    {
        src: "/IMG5.png",
        alt: "Team working on laptops",
        title: "Lorem ipsum dolor sit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dein snde.",
        readMoreLink: "#"
      },
      {
        src: "/IMG6.png",
        alt: "Team working on laptops",
        title: "Lorem ipsum dolor sit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dein snde.",
        readMoreLink: "#"
      },
      {
        src: "/IMG7.png",
        alt: "Team working on laptops",
        title: "Lorem ipsum dolor sit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dein snde.",
        readMoreLink: "#"
      },
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };



  return (
    <div className="blog-section">
    <h2>
    iEmpPower <span style={{ color: 'white' }}>Blog</span>
  </h2>
      <p>Discover articles and tutorials to help you build better</p>
    
    <div className="blog-images-container">
      <button className="nav-button left" onClick={prevImage}>
        <ChevronLeft />
      </button>
      <div className="images-wrapper" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
            <div className="image-content">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
              <a href={image.readMoreLink}>Read More...</a>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button right" onClick={nextImage}>
        <ChevronRight />
      </button>
    </div>
    </div>
  );
};

export default BlogImages;