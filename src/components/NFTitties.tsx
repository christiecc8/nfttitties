import React, { useState, useEffect } from 'react'
import "@fontsource/spline-sans";
import NFTittiesCard from './NFTittiesCard';
import { COLLECTION_SIZE } from '../config.js';
import update from 'immutability-helper';

const NFTitties: React.FC<{}> = () => {
  const [images, setImages] = useState<string[]>()
  const [activeEdition, setActiveEdition] = useState<number>()
  const [activeEditions, setActiveEditions] = useState<number[]>([])

  const toggleActive = (index: number) => {
    if (!activeEditions!.includes(index)) {
      setActiveEditions(update(activeEditions, {$push: [index]})); // ['x', 'y']);
    } else {
      const i = activeEditions!.indexOf(index);
      if (i >= 0) {
        setActiveEditions(update(activeEditions, {$splice: [[i, 1]] })); 
      }
    }
  }

  useEffect(() => {
    if (!images) {
      const arr: string[] = [];
      for (let i = 0; i < COLLECTION_SIZE; i++ ) {
        arr.push(`${process.env.PUBLIC_URL}/submissions/${i}.png`)
      }
      setImages(arr)
    }
  }, [images])

  return (
    <div className="flex flex-col p-5 items-center pb-20">
      <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-max">
      { images && images.map((image: string, index: number) =>
      (
        // <div className={`${activeEdition === index ? 'border-2' : ''} border-white rounded-2xl p-2`}>
        //   <NFTittiesCard imageLink={image} idx={index} makeActive={setActiveEdition}/>
        // </div>
        // <div className={`${activeEditions?.includes(index) ? 'border-2' : ''} border-white rounded-2xl p-1`}>
          <NFTittiesCard imageLink={image} idx={index} isActive={activeEditions!.includes(index)} makeActive={toggleActive}/>
        // </div>
      ))}
      </div>
      <footer className="w-full top-[92%] fixed text-white text-3xl p-4">Selected: {activeEditions.length}</footer>
    </div>
  )
}
export default NFTitties