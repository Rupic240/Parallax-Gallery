import CardOne from "../cards/CardOne";
import CardTwo from "../cards/CardTwo";

import { Link } from "react-router-dom";
import data from "../data.json";
import CardSwiper from "../components/CardSwiper";

const Arches = ({ showSwiper, setShowSwiper, selectedImageID, handleClick }) => {
  return (
    <div className="relative w-full h-auto bg-neutral-800 p-[10%]">
      <div className="grid grid-cols-2 gap-5 mb-10 max-sm:grid-cols-1 max-sm:my-20 max-sm:gap-10">
        <CardOne
          title={'Arches'}
          client={'Olivia Martinez'}
          year={2035}
        >
          {
            data.archesData.filter(item => item.category === 'arOne').map(({ id, img }) => {
              return (
                <img
                  key={id}
                  src={img}
                  alt="image"
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-80 duration-300 max-sm:w-full max-sm:h-60"
                  onClick={() => handleClick(id)}
                />
              )
            })
          }
        </CardOne>
        <CardTwo>
          {
            data.archesData.filter(item => item.category === 'arTwo').map(({ id, img }) => {
              return (
                <img
                  key={id}
                  src={img}
                  alt="image"
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-80 duration-300 max-sm:w-full max-sm:h-60"
                  onClick={() => handleClick(id)}
                />
              )
            })
          }
        </CardTwo>
      </div>
      <Link
        to='/moon'
        className="text-white text-xl hover:opacity-80 duration-300"
      >
        &laquo; Prev Project
      </Link>
      {
        showSwiper ? (
          <CardSwiper
            data={data.archesData}
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

export default Arches;