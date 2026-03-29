import { Body, DirectoryItemContainer, DirectoryMedia } from './directory-item.style';

import { Link } from 'react-router-dom';
import LazyImage from '../lazy-image/lazy-image.component';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  return (
    <DirectoryItemContainer as={Link} to={`/${route}`}>
      <DirectoryMedia>
        <LazyImage src={imageUrl} alt={`${title} category`} />
      </DirectoryMedia>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
