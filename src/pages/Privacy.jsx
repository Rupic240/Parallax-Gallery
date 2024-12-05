import data from "../data.json";

const Privacy = () => {
  return (
    <div className="w-full h-auto bg-neutral-800 p-[10%] grid place-content-center gap-10">
      <h1 className="text-7xl font-bold text-white max-lg:mt-16">Privacy Policy</h1>
      {
        data.privacyPolicy.map(({ title, disc }, index) => {
          return (
            <div key={index} className='grid gap-3 py-5 w-[70%] max-lg:w-full' >
              <h3 className='text-4xl font-bold mb-5 text-white'>{title}</h3>
              <p className='text-lg text-gray-200' dangerouslySetInnerHTML={{ __html: disc }} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Privacy;