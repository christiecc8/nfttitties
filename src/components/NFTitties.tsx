import React, { useState, useEffect } from 'react'
import "@fontsource/spline-sans";
import NFTittiesCard from './NFTittiesCard';
import { mint, getPriceFromContract } from '../utils/web3';
import { utils } from 'ethers';
import { CONFIG } from '../config';
import useWallet from '../hooks/useWallet';

const NFTitties: React.FC<{}> = () => {
  const env = CONFIG.PROD;
  // const [images, setImages] = useState<string[]>()

  // const [activeEdition, setActiveEdition] = useState<number>()
  // const [activeEditions, setActiveEditions] = useState<number[]>([])
  var [allActive, setAllActive] = useState<Map<number, number>>(new Map());
  const [price, setPrice] = useState<string>()
  const { wallet, connect, setChain } = useWallet()
  const COLLECTION_SIZE = env.cloudinary.imageUrls.length;

  useEffect(() => {
    (async () => {
    if (!price) {
      const res = await getPriceFromContract()
      console.log(res)
      setPrice(utils.formatEther(res._hex.toString()))
    }
    })();
  }, [price])
  const addActive = (index: number) => {
    // if (!activeEditions!.includes(index)) {
    //   setActiveEditions(update(activeEditions, {$push: [index]})); // ['x', 'y']);
    // } else {
    //   const i = activeEditions!.indexOf(index);
    //   if (i >= 0) {
    //     setActiveEditions(update(activeEditions, {$splice: [[i, 1]] })); 
    //   }
    // }
    // setActiveEditions(update(activeEditions, {$push: [index]})); // ['x', 'y']);
    if (!allActive?.has(index)) {
      // console.log("initialising token id " + index)
      setAllActive(new Map(allActive?.set(index, 1)));
    } else {
      var count = allActive.get(index)
      // console.log("token id " + index + " has count " + count)
      setAllActive(new Map(allActive?.set(index, count!+=1)));
    }
  }

  const removeActive = (index: number) => {
    if (allActive?.has(index)) {
      var count = allActive.get(index)
      if (count) {
        if (count > 1) {
          setAllActive(new Map(allActive?.set(index, count-=1)));
        } else {
          /* remove key from the map */
          var temp = new Map()
          allActive.forEach(function(value, key) {
            // console.log("Token id " + key + " has value " + value)
            if (key !== index) {
              // console.log("Setting for temp " + key + " value " + value)
              temp.set(key, value)
            }
          });
          setAllActive(temp);
          // console.log(allActive)
        }
      }
    }
  }

  const onMint = async() => {
    if (allActive.size > 0) {
      if (!wallet) {
        await connect({ 
          autoSelect: { 
            label: 'MetaMask',
            disableModals: false
          }
        });
      }
      await setChain({ chainId: `${env.network.id}`})
      
      if (wallet) {
        try { 
          mint(wallet!, allActive)
        } catch {
          alert("Error minting!")
        }
      }
    } else {
      alert("Please select NFTs to mint!")
    }
  }

  // useEffect(() => {
  //   if (!images) {
  //     const arr: string[] = [];
  //     for (let i = 0; i < COLLECTION_SIZE; i++ ) {
  //       arr.push(`${process.env.PUBLIC_URL}/submissions/${i}.png`)
  //     }
  //     setImages(arr)
  //   }
  // }, [images])

  return (
    <div className="flex flex-col p-5 items-center pb-20">
      <h1 className="font-sans text-2xl py-8 px-10 text-center w-full sm:w-4/5">Connect your wallet & Collect as many NFTitties as you like before time runs out! The more boobs minted, the closer we will be to achieving our mission. Each token is {price} ETH.</h1>
      <h1 className="font-sans text-xl py-4 mb-4 px-10 text-center w-full sm:hidden">Please open in the Metamask app to mint if you are on mobile.</h1>
      <div className="flex flex-col lg:grid grid-cols-2 gap-20 auto-rows-max w-4/5">
      { env && env.cloudinary.imageUrls.map((image: string, index: number) =>
      (
        // <div className={`${activeEdition === index ? 'border-2' : ''} border-white rounded-2xl p-2`}>
        //   <NFTittiesCard imageLink={image} idx={index} makeActive={setActiveEdition}/>
        // </div>
        // <div className={`${activeEditions?.includes(index) ? 'border-2' : ''} border-white rounded-2xl p-1`}>
          <NFTittiesCard imageLink={image} idx={index} count={allActive.get(index)!} isActive={allActive?.has(index) ? true : false} makeActive={addActive} removeActive={removeActive} key={`${image}-${index}`}/>
        // </div>
      ))}
      </div>
      <footer className="flex items-center w-full justify-center top-[85%] fixed text-white text-3xl"><button className="bg-black px-10 py-4 rounded-[100px] drop-shadow-lg hover:bg-white hover:text-black transition-all ease-in" onClick={() => onMint()}>Mint</button></footer>
    </div>
  )
}
export default NFTitties