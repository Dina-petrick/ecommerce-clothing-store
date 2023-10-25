import Category from "../category/category.component";
import "./directory.style.scss"

const Directory = ({categories}) => {

  return(
    <div className="directory">
      {categories.map((category) => {
        return(
          <Category key={category.id} category={category} />
        )
      })}
    </div>
  )
}

export default Directory;