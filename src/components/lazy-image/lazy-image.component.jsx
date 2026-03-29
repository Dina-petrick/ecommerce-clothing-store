import { useState } from 'react';

import { Root, Shimmer, StyledImg, BrokenFallback } from './lazy-image.style';

/**
 * Skeleton + native lazy-loaded image (`loading="lazy"`, `decoding="async"`).
 */
const LazyImage = ({ src, alt = '', style, imgStyle, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <Root style={style} className={className}>
      {!failed && (
        <>
          <Shimmer $hide={loaded} aria-hidden />
          <StyledImg
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            $loaded={loaded}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            style={imgStyle}
          />
        </>
      )}
      {failed && <BrokenFallback role="img" aria-label={alt}>No image</BrokenFallback>}
    </Root>
  );
};

export default LazyImage;
