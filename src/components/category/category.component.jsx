import './category.style.scss'

const Category = ({category}) => {
  const {title, imageUrl} = category;

  return(
    <div className="category">
            <div className="category__bg" style={{backgroundImage: `url(${imageUrl})`}}></div>
                <div className="category__body">
                <h2 className="category__body-title">{title}</h2>
                <p className="category__body-subtitle">shop now</p>
            </div>
    </div>
  )
}

export default Category;