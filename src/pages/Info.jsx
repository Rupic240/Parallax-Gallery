import { LazyLoadImage } from 'react-lazy-load-image-component';
import data from '../data.json';
import InfoBG from '/images/info.png';
import { HiArrowLongDown } from "react-icons/hi2";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Info = () => {
  return (
    <div className='w-full h-screen flex text-white max-sm:flex-col max-sm:h-auto'>
      <div className='relative w-[50%] h-full max-sm:hidden'>
        <LazyLoadImage
          src={InfoBG}
          alt="info_background"
          delayTime={300}
          className='absolute w-full h-full object-cover -z-10'
        />
      </div>
      <div className='w-[50%] h-screen bg-neutral-800 grid place-item-center py-[10%] px-[5%] gap-10 overflow-y-auto max-lg:w-full max-sm:pt-28 max-sm:h-auto max-sm:text-center' style={{ scrollbarWidth: 'none' }} >
        <div className='grid gap-5 mr-[10%] max-sm:place-items-center max-sm:mr-0'>
          <h1 className='text-8xl'>Info</h1>
          <h2 className='text-3xl'>Catapult is a design & motion studio based in San Francisco.</h2>
          <p className='text-lg'>This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It's an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company history or highlight a particular feature that sets it apart from competitors.</p>
          <HiArrowLongDown className="text-6xl text-inherit z-10 animate-bouncing mt-3" />
        </div>
        <div className='grid gap-5'>
          <h2 className='text-4xl mb-5'>The Team</h2>
          <div className='flex justify-between max-sm:grid max-sm:grid-cols-1 max-sm:gap-10'>
            {
              data.myTeam.map(({ img, name, pos }, index) => {
                return (
                  <div key={index} className='grid gap-3' >
                    <img src={img} alt={name} className='w-[160px] h-[190px] object-cover sm_img' />
                    <div>
                      <h3 className='text-lg font-semibold max-sm:text-5xl'>{name}</h3>
                      <p className='text-sm mt-5 max-sm:text-xl'>{pos}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='my-10'>
            <h1 className='text-5xl mb-10'>Selected Clients</h1>
            <div className='w-full h-auto grid grid-cols-3 gap-3 max-sm:grid-cols-1 max-sm:gap-10'>
              {
                data.seletedTeam.map(({ id, name }) => {
                  return (
                    <h1
                      key={id}
                      className='text-3xl'
                    >
                      {name}
                    </h1>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;