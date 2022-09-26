import React from 'react'

const NFTittiesCard: React.FC<{imageLink: string, idx: number, count: number, isActive: boolean, makeActive: any, removeActive: any}> = ({imageLink, idx, count, isActive, makeActive, removeActive}) => {

  return (
    <div className={`${isActive ? 'border-black border-4' : 'border-4 border-transparent'}`}>
      <div className="group relative">
        <div className="w-[350px] h-[350px] object-cover overflow-hidden">
          <img src={imageLink} className="w-full h-full object-cover"/>
          <div className="absolute w-fit left-[110px] top-[120px] right-0 backdrop-blur-lg text-5xl whitespace-nowrap rounded-xl"><button className="text-black px-5 py-2 z-10" onClick={() => removeActive(idx)}>-</button>{count}<button className=" text-black px-5 py-2 z-10" onClick={() => makeActive(idx)}>+</button></div>
        </div>
        {/* <div className="absolute h-full left-0 top-0 right-0 p-5 hidden group-hover:block group-hover:bg-slate-900/40 bg-transparent transition-all ease-in">
          <h1 className="text-xl font-bold text-center mt-[20%] opacity-100 text-white">{imageLink}</h1>
        </div> */}
      </div>
    </div>
  )
}
export default NFTittiesCard