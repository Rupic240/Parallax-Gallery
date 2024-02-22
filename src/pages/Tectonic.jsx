import CardOne from "../cards/CardOne";
import CardSwiper from "../cards/CardSwiper";
import CardTwo from "../cards/CardTwo";

import { Link } from "react-router-dom";
import { tectonicData } from "../data";

const Tectonic = ({ showSwiper, setShowSwiper, selectedImageID, handleClick }) => {
  return (
    <div className="w-full h-auto bg-neutral-800 p-[10%]">
      <div className="grid grid-cols-2 gap-5 mb-10">
        <CardOne
          title={'Tectonic'}
          client={'Mia Sullivan'}
          year={2027}
        >
          {
            tectonicData.filter(item => item.category === "tOne").map(({ id, img }) => {
              return (
                <img
                  key={id}
                  src={img}
                  alt="image"
                  className="w-full h-auto object-fill cursor-pointer hover:opacity-80 duration-300"
                  onClick={() => handleClick(id)}
                />
              )
            })
          }
        </CardOne>
        <CardTwo>
          {
            tectonicData.filter(item => item.category === "tTwo").map(({ id, img }) => {
              return (
                <img
                  key={id}
                  src={img}
                  alt="image"
                  className="w-full h-auto object-fill cursor-pointer hover:opacity-80 duration-300"
                  onClick={() => handleClick(id)}
                />
              )
            })
          }
        </CardTwo>
      </div>
      <div className="w-full h-auto flex justify-between">
        <Link
          to='/mashup'
          className="text-white text-xl hover:opacity-80 duration-300"
        >
          &laquo; Prev Project
        </Link>
        <Link
          to='/figura'
          className="text-white text-xl hover:opacity-80 duration-300"
        >
          Next Project &raquo;
        </Link>
      </div>
      {
        showSwiper ? (
          <CardSwiper
            data={tectonicData}
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

export default Tectonic;