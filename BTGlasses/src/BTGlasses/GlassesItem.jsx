

export const GlassesItem = (props) => {
    const {item, handleImgScr} = props
    console.log(item)
  return (
    <div className="d-flex glass" style={{width:120, height:69, margin:"10px 10px", padding:0}}>
      <button className="btn"><img className="img-fluid" src={item.url} alt="" onClick={() => {
        handleImgScr(item);
      }}/></button>
    </div>
  )
}
