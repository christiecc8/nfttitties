import React, { useEffect } from 'react'

const Main: React.FC<{}> = () => {
  return (
    <div className="flex flex-col">
      <div className="space-y-5">
        <img src={`${process.env.PUBLIC_URL}/boobs-hero.png`}/>
        <div className="px-20">
        <h2 className="text-white text-center font-authentic">
        NFTitties is the latest women-led NFT drop with a mission to celebrate women, art and boobs while raising funds to fight breast cancer.
        Emerging artists and activists are invited to submit an artwork representing breasts, following a set of image
        parameters. The artworks are then vetted by a
        curatorial panel and, if selected, included in the first
        release of NFTitties to be sold on the NFTitties
        website http://nftitties.space. The deadline for
        submissions for the first drop of NFTitties is
        September 30th, 2022.
        The first drop of NFTitties will take place during Breast
        Cancer Awareness month this October. Each of the
        selected NFTitties will be sold as an open edition, and
        the sale will last until October 31st, 2022.
        </h2>
        </div>
        <img src={`${process.env.PUBLIC_URL}/proceeds-split.png`}/>
      </div>
    </div>
  )
}
export default Main