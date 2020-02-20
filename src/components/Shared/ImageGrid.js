/* eslint-disable */
import React, { useState } from "react";
import styled from "styled-components";

const images = ["mountain", "space", "beach"];

const ImageGrid = () => {
  const [lightboxOpen, setLightboxOpen] = useState({
    active: false,
    src: null,
  });
  const addLightboxOpen = e => {
    setLightboxOpen({ ...lightboxOpen, active: true, src: e.target.src });
  };
  const removeLightboxOpen = () => {
    setLightboxOpen({ ...lightboxOpen, active: false, src: null });
  };

  const LightboxClass = lightboxOpen.active ? "active" : "";

  return (
    <>
      <StyledImageGrid>
        <div className="grid">
          {images.map(image => (
            <img
              src={`https://source.unsplash.com/400x400?${image}`}
              key={image}
              alt={image}
              onClick={addLightboxOpen}
            />
          ))}
        </div>
      </StyledImageGrid>
      <Lightbox className={LightboxClass} onClick={removeLightboxOpen}>
        <img src={lightboxOpen.src} alt="lightbox-image" />
      </Lightbox>
    </>
  );
};

export default ImageGrid;

const StyledImageGrid = styled.section`
  padding: 0 1rem;
  margin-bottom: 2rem;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    justify-content: center;
    align-content: center;
    grid-gap: 10px;

    img {
      width: 200px;
      height: 200px;
      cursor: pointer;
    }
  }
`;

const Lightbox = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: none;

  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 90%;
    max-height: 80%;
    padding: 4px;
    background-color: #000;
    border: 2px solid #fff;
  }
`;
