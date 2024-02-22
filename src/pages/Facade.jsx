import CardOne from "../cards/CardOne";
import CardTwo from "../cards/CardTwo";

import { Link } from "react-router-dom";
import CardSwiper from "../cards/CardSwiper";
import { facadeData } from "../data";

const Facade = ({ showSwiper, setShowSwiper, selectedImageID, handleClick }) => {
  
  return (
    <div className="w-full h-auto bg-neutral-800 p-[10%]">
      <div className="grid grid-cols-2 gap-5 mb-10">
        <CardOne
          title={'Facade'}
          client={'Isabella Kim'}
          year={2023}
        >
          {
            facadeData.filter(item => item.category === 'facOne').map(({ id, img }) => {
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
            facadeData.filter(item => item.category === 'facTwo').map(({ id, img }) => {
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
          to='/figura'
          className="text-white text-xl hover:opacity-80 duration-300"
        >
          &laquo; Prev Project
        </Link>
        <Link
          to='/tubes'
          className="text-white text-xl hover:opacity-80 duration-300"
        >
          Next Project &raquo;
        </Link>
      </div>
      {
        showSwiper ? (
          <CardSwiper
            data={facadeData}
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

export default Facade;