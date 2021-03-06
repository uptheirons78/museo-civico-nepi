/* eslint-disable */
import React, { useState } from "react";
import styled from "styled-components";

const ImageGrid = ({ gallery }) => {
  const [lightboxOpen, setLightboxOpen] = useState({
    active: false,
    src: null,
  });

  const addLightboxOpen = e => {
    console.log(e.target.dataset.img);
    setLightboxOpen({
      ...lightboxOpen,
      active: true,
      src: e.target.dataset.img,
    });
  };

  const removeLightboxOpen = () => {
    setLightboxOpen({ ...lightboxOpen, active: false, src: null });
  };

  const LightboxClass = lightboxOpen.active ? "active" : "";

  return (
    <>
      <StyledImageGrid>
        <div className="grid">
          {gallery &&
            gallery
              .map(item => {
                if (
                  item.image.includes(
                    "https://res.cloudinary.com/museo-civico-di-nepi/image/upload/"
                  )
                ) {
                  const str = item.image.replace(
                    "https://res.cloudinary.com/museo-civico-di-nepi/image/upload/",
                    "https://res.cloudinary.com/museo-civico-di-nepi/image/upload/t_grid/"
                  );
                  item.cloudinary = str;
                } else {
                  item.cloudinary = item.image;
                }
                return item;
              })
              .map((image, i) => {
                return (
                  <img
                    data-img={image.image}
                    src={image.cloudinary}
                    key={image.alt + i}
                    alt={image.alt}
                    onClick={addLightboxOpen}
                  />
                );
              })}
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

    @media screen and (max-width: 650px) {
      grid-template-columns: 1fr;
    }

    img {
      width: 200px;
      height: 200px;
      cursor: pointer;

      @media screen and (max-width: 650px) {
        width: 60%;
        height: auto;
        margin: 0 auto;
      }
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
