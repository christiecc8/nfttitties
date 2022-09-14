import React, { useState, useEffect, useCallback } from 'react'

enum Tag {
  INITIAL = 'initial',
  FIRE = 'fire',
  FEMININE = 'feminine',
  GRUNGY = 'grungy',
}

const Demo: React.FC<{}> = () => {
  const [currentTag, setCurrentTag] = useState<Tag>(Tag.INITIAL);
  const [femininePups, setFemininePups] = useState<string[]>();
  const [grungyPups, setGrungyPups] = useState<string[]>();
  const [firePups, setFirePups] = useState<string[]>();
  const [allPups, setAllPups] = useState<string[]>();
  const [iterator, setIterator] = useState<number[]>();

  useEffect(() => {
    ;(async () => {
      const collection_size = 30;
      const arr = Array.from({length: collection_size}, (_, i) => i + 1)
      setIterator(arr);
    })()
  }, [iterator])

  const getFemininePups = useCallback(async () => {
    const arr: string[] = [];
    for (let i = 0; i < 30; i++ ) {
      arr.push(`${process.env.PUBLIC_URL}/assets/feminine/${i}.png`);
    }
    setFemininePups(arr);
  }, [setFemininePups])

  const getGrungyPups = useCallback(async () => {
    const arr: string[] = [];
    for (let i = 0; i < 30; i++ ) {
      arr.push(`${process.env.PUBLIC_URL}/assets/grungy/${i}.png`);
    }
    setGrungyPups(arr);
  }, [setGrungyPups])

  const getFirePups = useCallback(async () => {
    const arr: string[] = [];
    for (let i = 0; i < 30; i++ ) {
      arr.push(`${process.env.PUBLIC_URL}/assets/fire/${i}.png`);
    }
    setFirePups(arr);
  }, [setFirePups])

  useEffect(() => {
    if (!femininePups) {
      getFemininePups()
    }
    if (!grungyPups) {
      getGrungyPups()
    }
    if (!firePups) {
      getFirePups()
    }
    if (!allPups && femininePups && grungyPups && firePups) {
      var newArr: string[] = []
      for (let i = 0; i < 30; i++) {
        newArr.push(femininePups[i])
        newArr.push(grungyPups[i])
        newArr.push(firePups[i])
      }
      setAllPups(newArr)
    }
  }, [
    femininePups, getFemininePups,
    grungyPups, getGrungyPups,
    firePups, getFirePups,
    allPups, setAllPups
  ])

  return (
    <div>
      <div className="flex flex-col p-5 space-y-5">
        <button className="bg-black text-white px-3 py-2 rounded-2xl text-2xl" onClick={() => { setCurrentTag(Tag.INITIAL)}}>All Pups</button>
        <button className="bg-black text-white px-3 py-2 rounded-2xl text-2xl" onClick={() => { setCurrentTag(Tag.FEMININE)}}>Feminine</button>
        <button className="bg-black text-white px-3 py-2 rounded-2xl text-2xl" onClick={() => { setCurrentTag(Tag.GRUNGY)}}>Grungy</button>
        <button className="bg-black text-white px-3 py-2 rounded-2xl text-2xl" onClick={() => { setCurrentTag(Tag.FIRE)}}>Fire</button>
      </div>
      <div className="grid grid-cols-3">
        { currentTag === Tag.INITIAL &&
        ( allPups && allPups.map((str: string) => 
          <img src={str}/>
        ))
        }
        { currentTag === Tag.FEMININE && 
        ( femininePups && femininePups.map((str: string) => 
          <img src={str}/>
        ))
        }
        { currentTag === Tag.GRUNGY && 
        ( grungyPups && grungyPups.map((str: string) => 
          <img src={str}/>
        ))
        }
        { currentTag === Tag.FIRE && 
        ( firePups && firePups.map((str: string) => 
          <img src={str}/>
        ))
        }
      </div>
    </div>
  )
}
export default Demo