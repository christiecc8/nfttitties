import React, { useEffect } from 'react'
import "@fontsource/spline-sans";

const Main: React.FC<{}> = () => {
  return (
    <div className="flex flex-col p-5 items-center">
      <div className="flex flex-col -mt-16 items-center">
        <img src={`${process.env.PUBLIC_URL}/boobs-hero.png`} className="h-3/5"/>
        <h1 className="text-3xl text-white">The Project You Never Knew You Needed</h1>
        <div className="flex flex-col items-center lg:grid grid-cols-3 grid-rows-1 auto-rows-max justify-center gap-10 lg:mx-20 lg:my-10 order-2 lg:order-1">
          <div className="why-1">
            <h1 className="why-header">Women in Web3 Project</h1>
            <h2 className="why-text">We are a women-led project empowering women to make their mark on the Ethereum blockchain. Founded by Carlota Dochao Naveira and supported by Bitchcoin.</h2>
          </div>
          <div className="why-2">
            <h1 className="why-header">Free the Nipple!</h1>
            <h2 className="why-text">There's no nudity policy on the blockchain! We are an inclusive platform campaigning against the nudity policy bias that exists in social media platforms today.</h2></div>
          <div className="why-3">
            <h1 className="why-header">Boobs for Good</h1>
            <h2 className="why-text">We are committed to raising funds and awarness to fight breast cancer, globally. A part of the proceeds will be donated to charitable causes.</h2>
          </div>
        </div>
        <h2 className="text-white text-center font-spline p-3 md:w-4/5 text-2xl order-1 lg:order-2">
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
        <button className="bg-white text-2xl px-5 py-2 rounded-lg hover:bg-pink-200 order-3">Mint a NFTitty today!</button>
        </div>
        <div className="items-center m-10">
          <img src={`${process.env.PUBLIC_URL}/proceeds-split.png`}/>
        </div>
    </div>
  )
}
export default Main