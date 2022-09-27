import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare, AiOutlineGlobal } from 'react-icons/ai'
import "@fontsource/spline-sans";

const Main: React.FC<{}> = () => {
  return (
    <div className="flex flex-col p-5 items-center pb-20">
      <div className="flex flex-col -mt-16 items-center w-full">
        <img src={`${process.env.PUBLIC_URL}/boobs-hero.png`} className="w-4/5"/>
        <h1 className="section-header">The Project You Never Knew You Needed</h1>
        <div className="flex flex-col w-full items-center lg:grid grid-cols-3 grid-rows-1 auto-rows-max justify-center gap-10 lg:mx-20 lg:my-10 order-2 lg:order-1 lg:px-16">
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
        <h2 className="text-white text-center font-spline p-3 md:w-4/5 md:text-2xl order-1 lg:order-2 mt-5">
          NFTitties is the latest women-led NFT drop with a mission to celebrate women, art and boobs while raising funds to fight breast cancer.
          Emerging artists and activists are invited to submit an artwork representing breasts, following a set of image
          parameters. The artworks are then vetted by a
          curatorial panel and, if selected, included in the first
          release of NFTitties to be sold on the NFTitties
          website. The deadline for
          submissions for the first drop of NFTitties is
          September 30th, 2022.
          The first drop of NFTitties will take place during Breast
          Cancer Awareness month this October. Each of the
          selected NFTitties will be sold as an open edition, and
          the sale will last until October 31st, 2022.
        </h2>
        <Link to="/mint">
          <button className="bg-white text-2xl px-5 py-4 rounded-lg m-5">Mint an NFTitty today!</button>
        </Link>
        </div>
        <h2 className="text-white text-center font-spline p-3 md:w-4/5 md:text-2xl m-5">The project is committed to raising funds for Keep-a-Breast, a breast cancer charity. It is equally concerned with onboarding more women into web3. NFTitties advocates against the unfair nudity policy bias that exists in social media platforms today.</h2>
        <img src={`${process.env.PUBLIC_URL}/proceeds-split.png`} className="m-10"/>
        <div className="flex flex-col items-center space-y-10">
          <div className="flex flex-col space-y-10 md:w-3/5 items-center">
            <div className="inline-flex gap-2">
              <h1 className="bitchcoin-info">Brought to you by</h1>
              <h1 className="bitchcoin-logo">Bitchcoin</h1>
            </div>
            <h1 className="inline-block text-center text-white lg:text-left align-top">Predating the launch of Ethereum by five months, in February 2015 conceptual artist Sarah Meyohas released the first tokenization of art on the blockchain: Bitchcoin. Today, Bitchcoin is evolving into a hub for the promotion & incubation of new ideas, deeply rooted in Web3. We are excited to be working together to develop NFTitties.</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            <div className="artist-info">
              <div className="artist-headshot-carlota"/>
                <h1 className="artist-name">Carlota Dochao Naveira</h1>
                <h2 className="artist-about">Founder, NFTitties</h2>
                <div className="grid grid-cols-3 mt-2">
                  <a href="https://uk.linkedin.com/in/carlotadochao" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size="50px"/>
                  </a>
                  <a href="https://www.instagram.com/blockchain_what/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size="50px"/>
                  </a>
                  <a href="https://twitter.com/blockhain_what?lang=en" target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterSquare size="50px"/>
                  </a>
                </div>
            </div>
            <div className="artist-info">
              <div className="artist-headshot-sarah"/>
              <h1 className="artist-name">Sarah Meyohas</h1>
              <h2 className="artist-about">Conceptual Artist & Founder of Bitchcoin</h2>
                <div className="grid grid-cols-3 mt-2">
                  <a href="https://sarahmeyohas.com/" target="_blank" rel="noopener noreferrer">
                    <AiOutlineGlobal size="50px"/>
                  </a>
                  <a href="https://www.instagram.com/sarahmeyohas/?hl=en" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size="50px"/>
                  </a>
                  <a href="https://twitter.com/sarahmeyohas" target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterSquare size="50px"/>
                  </a>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Main