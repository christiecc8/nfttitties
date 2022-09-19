import React from 'react'
import { CLOUDINARY_BASE_URL } from '../config'
import { Link } from 'react-router-dom'

const CategoryCard: React.FC<{label: string}> = (label) => {

  return (
    <Link
    to={`/category/${label.label}`}>
    <div className="justify-center drop-shadow-lg rounded-2xl bg-[#2e2c38] aspect-video items-center flex flex-col m-2">   
      <div className="group relative">
        <div className="w-full aspect-video rounded-2xl object-cover overflow-hidden">
          <img src={`${CLOUDINARY_BASE_URL}/${label.label}/0.png`} alt={label.label} className="w-full aspect-video rounded-2xl object-cover"/>
        </div>
        <div className="absolute h-full left-0 top-0 rounded-2xl right-0 p-5 hidden group-hover:block group-hover:bg-slate-900/40 bg-transparent transition-all ease-in">
          <h1 className="text-xl font-bold text-center mt-[20%] opacity-100 text-white">{label.label}</h1>
        </div>
      </div>
    </div>
  </Link>
  )
}
export default CategoryCard