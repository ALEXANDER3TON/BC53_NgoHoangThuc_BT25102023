import { useState } from "react";
import glass from "./dataGlasses.json";
import "./style.css";
import { GlassesList } from "./GlassesList";

export const BTGlasses = () => {
  const [imgScr, setImgScr] = useState("");
  const handleImgScr = (item) => {
    setImgScr(item.url);
  };
  return (
    <div className="content">
      <div className="backgroundStyle"></div>
      
      <div className="body">
      <header className="py-2 text-center">
          <h1>Try Glasses Online</h1>
        </header>
        <div className="tryGlasses">
          <div>
            <div
              className="model d-flex justify-content-between"
              style={{width:"63%", margin: "3rem auto" }}
            >
              <div id="model1">
                <img
                  style={{ width: 240, height: 270 }}
                  src="./glassesImage/model.jpg"
                  alt="..."
                  id="exModel"
                />
                <img
                  style={{ width: 120, height: 63 }}
                  src="./glassesImage/v7.png"
                  alt="..."
                  id="exGlass"
                />
                <div id="exDecs">
                  <h4>FENDI F8750</h4>
                  <p>
                    Light pink square lenses define these sunglasses, ending
                    with amother of pearl effect tip.
                  </p>
                </div>
              </div>
              <div id="model2">
                <img
                  style={{ width: 240, height: 270 }}
                  src="./glassesImage/model.jpg"
                  alt=""
                  id="testModel"
                />
                {imgScr ? (
                  <img
                    style={{ width: 120, height: 63 }}
                    id="testGlass"
                    src={imgScr}
                    alt="..."
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <GlassesList glass={glass} handleImgScr={handleImgScr} />
      </div>
    </div>
  );
};
