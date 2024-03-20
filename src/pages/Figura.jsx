import CardOne from "../cards/CardOne";
import CardTwo from "../cards/CardTwo";

import { Link } from "react-router-dom";
import { figuraData } from "../data";
import CardSwiper from "../components/CardSwiper";

const Figura = ({ showSwiper, setShowSwiper, selectedImageID, handleClick }) => {
  return (
    <div className="w-full h-auto bg-neutral-800 p-[10%]">
      <div className="grid grid-cols-2 gap-5 mb-10 max-sm:grid-cols-1 max-sm:my-20 max-sm:gap-10">
        <CardOne
          title={'Figura'}
          client={'Lucas Thompson'}
          year={2026}
        >
          {
            figuraData.filter(item => item.category === "fOne").map(({ id, img, vd }) => {
              return (
                <div key={id}>
                  {
                    img && (
                      <img
                        src={img}
                        alt="image"
                        className="w-full h-auto object-cover cursor-pointer hover:opacity-80 duration-300 max-sm:w-full max-sm:h-60"
                        onClick={() => handleClick(id)}
                      />
                    )
                  }
                  {
                    vd && (
                      <video
                        autoPlay
                        muted
                        loop
                        className="w-full h-auto object-cover cursor-pointer max-sm:w-full max-sm:h-60"
                        onClick={() => handleClick(id)}
                      >
                        <source src={vd} type="video/mp4" />
                      </video>
                    )
                  }
                </div>
              )
            })
          }
        </CardOne>
        <CardTwo>
          {
            figuraData.filter(item => item.category === "fTwo").map(({ id, img }) => {
              return (
                <img
                  key={id}
                  src={img}
                  alt="image"
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-80 duration-300  max-sm:w-full max-sm:h-60"
                  onClick={() => handleClick(id)}
                />
              )
            })
          }
        </CardTwo>
      </div>
      <div className="w-full h-auto flex justify-between">
        <Link
          to='/tectonic'
          className="text-white text-xl hover:opacity-80 duration-300"
        >
          &laquo; Prev Project
        </Link>
        <Link
          to='/facade'
          className="text-white text-xl hover:opacity-80 duration-300"
        >
          Next Project &raquo;
        </Link>
      </div>
      {
        showSwiper ? (
          <CardSwiper
            data={figuraData}
            setShowSwiper={setShowSwiper}
            selectedImageID={selectedImageID}
          />
        ) : (
          ''
        )
      }
    </div>
  )
}

export default Figura;