import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IMAGE_PLACEHOLDER } from './../util/StringConstants';

const Image = styled.img`
  width: 100%;
  margin-bottom: 30px;

  // Add a smooth animation on loading
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }

  // I use utilitary classes instead of props to avoid style regenerating
  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }

  &.has-error {
    // fallback to placeholder image on error
    content: url(${IMAGE_PLACEHOLDER});
  }
`;

export const LazyImage = ({ src, alt}) => {
  const [imageSrc, setImageSrc] = useState(IMAGE_PLACEHOLDER);
  const [imageRef, setImageRef] = useState();

  const onLoad = event => {
    event.target.classList.add("loaded");
  };

  const onError = event => {
    event.target.classList.add("has-error");
  };

  useEffect(() => {
      let observer;
      let didCancel = false;

      if (imageRef && imageSrc !== src) {
        if (IntersectionObserver) {
          observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                  setImageSrc(src);
                  observer.unobserve(imageRef);
                }
              });
            }, {
              threshold: 0.01,
              rootMargin: "75%"
            }
          );
          observer.observe(imageRef);
        }
      }
      return () => {
        didCancel = true;

        if (observer && observer.unobserve) {
          observer.unobserve(imageRef);
        }
      };
    },
    [src, imageSrc, imageRef]
  );
  return (
    <Image
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
    />
  );
};
