import React, { useState, useEffect } from 'react'
import { getUri } from '../utils/web3';
import apiClient from '../utils/apiClient';
import useWallet from '../hooks/useWallet';

const NFTittiesCard: React.FC<{imageLink: string, idx: number, count: number, isActive: boolean, makeActive: any, removeActive: any}> = ({imageLink, idx, count, isActive, makeActive, removeActive}) => {
  const { wallet, connect, setChain } = useWallet()
  const [tokenUri, setTokenUri] = useState<any>()

  useEffect(() => {
    (async () => {
      try {
        const uri = await getUri(idx, wallet);
        if (uri) {
          const res = await apiClient.get(uri)
          setTokenUri(res.data)
        }
      } catch (error: any) {
        console.log(error.message)
      }
    })();
  })

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${isActive ? 'border-black border-4' : 'border-4 border-transparent'} group-relative`}>
        { (imageLink.endsWith('.mov')) ? <div className="w-[350px] h-[350px] object-cover overflow-hidden"><video src={imageLink} className="w-full h-full object-cover"/></div>:
        <div className="w-[350px] h-[350px] object-cover overflow-hidden">
          <img src={imageLink} className="w-full h-full object-cover"/>
        </div>
        }
      </div>
      <div className="w-fit left-[110px] top-[120px] right-0 text-5xl whitespace-nowrap rounded-xl"><button className="text-black px-5 py-2 z-10" onClick={() => removeActive(idx)}>-</button>{count}<button className=" text-black px-5 py-2 z-10" onClick={() => makeActive(idx)}>+</button></div>
      { tokenUri && (
        <div className="w-[350px]">
          <h1 className="font-chopper text-2xl text-center">{tokenUri.properties.artist_details.artist_signature}</h1>
          <h1 className="text-center">{tokenUri.properties.artist_details.type_of_artist}</h1>
          <table className="w-full mt-5">
            <tbody>
              <tr>
                <td>ID</td>
                <td className="text-right">{tokenUri.name}</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td className="text-right">{tokenUri.properties.piece_details.medium}</td>
              </tr>
              <tr>
                <td>Color</td>
                <td className="text-right">{tokenUri.properties.piece_details.color}</td>
              </tr>
            </tbody>
        </table>
        </div>
         
      )}
    </div>
  )
}
export default NFTittiesCard