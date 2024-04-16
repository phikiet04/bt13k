import "./ImageShow.css"
const ImageShow = ({image}) => {
  return (
    <div className="item"> 
        <img src={image} />
        
    </div>
  )
}

export default ImageShow;