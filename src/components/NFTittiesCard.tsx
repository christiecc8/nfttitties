import React from 'react'

const NFTittiesCard: React.FC<{imageLink: string, idx: number, count: number, isActive: boolean, makeActive: any}> = ({imageLink, idx, count, isActive, makeActive}) => {

  return (
    <div>
    <div className={`${isActive ? 'nftcardborder border-8' : 'border-8 border-transparent'}`}>
      <div className="group relative" onClick={() => makeActive(idx)}>
        <div className="w-[350px] h-[350px] object-cover overflow-hidden">
          <img src={imageLink} className="w-full h-full object-cover"/>
        </div>
        <div className="absolute h-full left-0 top-0 right-0 p-5 hidden group-hover:block group-hover:bg-slate-900/40 bg-transparent transition-all ease-in">
          <h1 className="text-xl font-bold text-center mt-[20%] opacity-100 text-white">{imageLink}</h1>
        </div>
      </div>
    </div>
    {count}
    </div>
  )
}
export default NFTittiesCard