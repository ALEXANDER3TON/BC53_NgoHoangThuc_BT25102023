import { GlassesItem } from "./GlassesItem"
import './style.css'
export const GlassesList = (props) => {
    const {glass, handleImgScr} = props
  return (
    <div id="productList" className="row" style={{width:"72%", margin:"90px auto"}}>
            {
                glass.map((item) => {
                    return(
                        <GlassesItem 
                          key={item.id}
                          item={item}
                          handleImgScr={handleImgScr}
                        />
                    )
                })
            }
          </div>
  )
}
