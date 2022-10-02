import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare, AiOutlineGlobal } from 'react-icons/ai'
import "@fontsource/spline-sans";

const Main: React.FC<{}> = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const toggleModal = () => { setShowModal(!showModal)}

  return (
    <div className="flex flex-col p-5 items-center pb-20">
      <div className="flex flex-col -mt-16 items-center w-full space-y-5">
        <img src={`${process.env.PUBLIC_URL}/boobs-hero.png`} className="hidden sm:block w-full md:w-4/5"/>
        <img src={`${process.env.PUBLIC_URL}/boobs-hero-mobile.png`} className="w-full block sm:hidden"/>
        <Link to="/mint">
          <button className="border-white border-2 text-white text-2xl px-5 py-4 rounded-lg">Collect NFTitties</button>
        </Link>
        <div className="flex flex-col w-full items-start lg:grid grid-cols-3 auto-rows-fit auto-rows-min justify-center gap-10 order-2 lg:order-1 lg:px-16">
          <div className="why-3">
            <h1 className="why-header">Boobs for Good</h1>
            <h2 className="why-text">We are committed to raising funds and awarness to fight breast cancer, globally. A part of the proceeds will be donated to charitable causes.</h2>
          </div>
          <div className="why-2">
            <h1 className="why-header">Free the Nipple!</h1>
            <h2 className="why-text">There's no unfair nudity policy on the blockchain! We are an inclusive platform campaigning against censorship in art.</h2>
          </div>
          <div className="why-1">
            <h1 className="why-header">For Women into Web3</h1>
            <h2 className="why-text">We are a women-led project striving to close the gender gap and empowering women to make their mark on the blockchain.</h2>
          </div>
        </div>
        <h2 className="text-white text-center font-spline p-3 md:w-4/5 md:text-2xl order-1 lg:order-2 mt-5">
        NFTitties is the latest women-led NFT drop with a mission to celebrate women, art and boobs while fighting breast cancer. Anyone who believed in the cause was invited to submit an artwork representing breasts through an Open Call. 31 selected submissions are included in the first drop of NFTitties, one for each day of Breast Cancer Awareness Month. Each NFTitty will be sold as an open edition until the 31st of October, 2022. 
        </h2>
        </div>
        <h2 className="text-white text-center font-spline p-3 md:w-4/5 md:text-2xl m-5">We are committed to raising funds to fight breast cancer, globally. We will be donating 30% of all proceeds to <a href="https://www.keep-a-breast.org/" target="_blank" rel="noopener noreferrer" className="text-fuchsia-300">The Keep A Breast Foundation</a>.</h2>
        {/* <img src={`${process.env.PUBLIC_URL}/proceeds-split.png`} className="m-10"/>
        <map name="workmap">
          <area className="bg-black" shape="circle" coords="389,629,390,629" alt="Computer" href="https://launch.medicilabs.xyz">Hi</area>
        </map> */}
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1397 808">
          <image width="1397" height="808" xlinkHref={`${process.env.PUBLIC_URL}/proceeds-split.png`}></image>
          <a onClick={() => toggleModal()}>
            <rect x="368" y="607" fill="#fff" opacity="0" width="50" height="50"></rect>
          </a>
        </svg>
        <Modal isOpen={showModal} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="modal-header">NFT Treasury</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>Collecting an NFTitty is your invitation to form part of a growing community with a Treasury. As a member of the NFTitties community, you can vote on how the money in the treasury is used, receive community perks and participate in events. The NFTitties community will be activated once the treasury receives 7 ETH or roughly 500 editions are minted. </h1>
          </ModalBody>
          <br></br>
        </ModalContent>
        </Modal>
        <div className="flex flex-col items-center space-y-10">
          <div className="flex flex-col space-y-10 items-center">
            <div className="inline-flex gap-2">
              <h1 className="bitchcoin-info">Brought to you by</h1>
              <h1 className="bitchcoin-logo">Bitchcoin</h1>
            </div>
            <h1 className="text-white text-center font-spline p-3 md:w-4/5 md:text-2xl mt-5">Predating the launch of Ethereum by five months, in February 2015 conceptual artist Sarah Meyohas released the first tokenization of art on the blockchain: Bitchcoin. Today, Bitchcoin is evolving into a hub for the promotion & incubation of new ideas, deeply rooted in Web3. We are excited to be working together to develop NFTitties.</h1>
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