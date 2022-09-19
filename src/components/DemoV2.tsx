import React from 'react'
import CategoryCard from './CategoryCard'

const DemoV2: React.FC<{}> = () => {
  const categories = ["arty_punk_anime_dog", "black_punk_anime_dog", "femine_punk_anime_dogs_with_bones", "feminine_punk_anime_dog_as_a_spy", "feminine_punk_anime_dog_super_excited", "feminine_punk_anime_dog_with_collar", "feminine_punk_anime_dog_with_ethereum_symbol_on_forehead", "feminine_punk_anime_dog_with_fashionable_scarf", "feminine_punk_anime_dog_with_fro", "feminine_punk_anime_dog_with_hat", "feminine_punk_anime_dog_with_helmet", "feminine_punk_anime_with_headphones"]

  return (
    <div className="flex flex-col md:grid grid-cols-3 gap-2">
      {( categories && categories.map((category: string) =>
        <CategoryCard label={category}/>   
      ))}
    </div>
  )
}
export default DemoV2