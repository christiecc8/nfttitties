import React, { useState, useEffect } from 'react'

enum Tag {
  FIRE = 'fire',
  FEMININE = 'feminine',
  GRUNGY = 'grungy'
}

const Demo: React.FC<{}> = () => {
  const [currentTag, setCurrentTag] = useState<Tag>();
  const [iterator, setIterator] = useState<number[]>();

  useEffect(() => {
    ;(async () => {
      const collection_size = 30;
      const arr = Array.from({length: collection_size}, (_, i) => i + 1)
      setIterator(arr);
    })()
  }, [iterator])

  
  return (
    <div>
      <div className="flex flex-col p-5 space-y-5">
        <button className="bg-black text-white px-3 py-2 rounded-2xl text-2xl" onClick={() => { setCurrentTag(Tag.FEMININE)}}>Feminine</button>
        <button className="bg-black text-white px-3 py-2 rounded-2xl text-2xl" onClick={() => { setCurrentTag(Tag.GRUNGY)}}>Grungy</button>
        <button className="bg-black text-white px-3 py-2 rounded-2xl text-2xl" onClick={() => { setCurrentTag(Tag.FIRE)}}>Fire</button>
      </div>
      <div className="grid grid-cols-3">
        { currentTag === Tag.FEMININE && 
        ( iterator!.map((i: number) => 
          <img src={`${process.env.PUBLIC_URL}/assets/feminine/${i}.png`}/>
        ))
        }
        { currentTag === Tag.GRUNGY && 
        ( iterator!.map((i: number) => 
          <img src={`${process.env.PUBLIC_URL}/assets/grungy/${i}.png`}/>
        ))
        }
        { currentTag === Tag.FIRE && 
        ( iterator!.map((i: number) => 
          <img src={`${process.env.PUBLIC_URL}/assets/fire/${i}.png`}/>
        ))
        }
      </div>
    </div>
  )
}
export default Demo