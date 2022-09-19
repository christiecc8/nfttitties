import React, { useState, useEffect } from 'react'
import { CLOUDINARY_BASE_URL, CATEGORY_SIZE } from '../config';
import { useParams } from 'react-router-dom';

const CategoryPage: React.FC<{}> = () => {
  const params = useParams()
  const label = params.label
  const [pups, setPups] = useState<any>()

  useEffect(() => {
    if (!pups) {
      const arr: string[] = [];
      for (let i = 0; i < CATEGORY_SIZE; i++ ) {
        arr.push(`${CLOUDINARY_BASE_URL}/${label}/${i}.png`)
      }
      setPups(arr)
    }
  }, [pups, label])

  return (
    <div className="flex flex-col md:grid grid-cols-3 gap-2">
    { pups && pups.map((pup_url: string) => <img src={pup_url}/>)}
    </div>
  )
}
export default CategoryPage