import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CONFIG } from '../config'
import useWallet from '../hooks/useWallet'
import { useWallets } from '@web3-onboard/react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Header: React.FC<{}> = () => {
  const { wallet, connecting, connect, setChain, disconnect } = useWallet()
  const connectedWallets = useWallets();
  const env = CONFIG.DEV;

  const location = useLocation()
  const isWhiteBackground = (location.pathname === '/mint') ? true : false;

  useEffect(() => {
    if (!connectedWallets.length) return

    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }) => label
    )
    window.localStorage.setItem(
      'connectedWallets',
      JSON.stringify(connectedWalletsLabelArray)
    )
  }, [connectedWallets, wallet])

  useEffect(() => {
    const previouslyConnectedWallets = window.localStorage.getItem("connectedWallets");
    if (!previouslyConnectedWallets) {
      return;
    }
    async function setWalletFromLocalStorage() {
      const parsedPreviouslyConnectedWallets = JSON.parse(previouslyConnectedWallets!);
      await connect({ autoSelect: parsedPreviouslyConnectedWallets[0] })
    }
    setWalletFromLocalStorage()
  }, [connect])

  const connectedWallet = wallet?.accounts[0]

  return (
    <header className="h-16 w-full lg:px-0 py-4 fixed top-0 left-0 z-10 backdrop-blur-sm">
      <div className="w-full px-5 mx-auto flex items-center justify-between h-full">
        <div>
          <Link
            to={"/"}>
            <div className="flex items-center justify-center md:justify-between">
              <div className="inline-flex">
                <h1 className={`${isWhiteBackground ? `text-black` : `text-white`} font-chopper text-4xl`}>NFTitties</h1>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} className={`${isWhiteBackground ? `filter invert` : `filter invert-0`} ml-2 h-[30px] hidden sm:block`}/>
              </div>
            </div>
          </Link>
        </div>
        <div>
          {/* <Link
            to={"/about"}>
            <h1 className="text-2xl text-white">about</h1>
          </Link> */}
        </div>
        <div className="flex justify-end md:justify-end gap-2">
        <a href="https://twitter.com/nftitties_space" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter size={30} fill={`${isWhiteBackground ? `black` : `white`}`}/>
        </a>
        <a href="https://www.instagram.com/nftitties.space/" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram size={30} fill={`${isWhiteBackground ? `black` : `white`}`}/>
        </a>
        <Link to="/mint">
          <button className="header-button hidden sm:block">View All NFTitties</button>
        </Link>
          {connectedWallet ? (
          <div className="flex flex-row gap-1">
            <button className="header-button" onClick={() => disconnect({label: wallet!.label})}>Wallet Connected</button>
          </div>
          ) : (
            <button className="header-button"
            onClick={async() => {
            await connect({ 
              autoSelect: { 
                label: 'MetaMask',
                disableModals: false
              }
            });
            await setChain({chainId: `${env.network.id}`});
            }}
          > { connecting ? "Connecting" : "Connect Wallet" }</button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
