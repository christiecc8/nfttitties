import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useWallet from '../hooks/useWallet'
import { useWallets } from '@web3-onboard/react'

const Header: React.FC<{}> = () => {
  const { wallet, connecting, connect, setChain } = useWallet()
  const connectedWallets = useWallets();

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
    <header className="h-16 w-full px-2 lg:px-0 py-4 fixed top-0 left-0 z-10 backdrop-blur-sm">
      <div className="w-full px-10 mx-auto flex items-center justify-between h-full">
        <div className="flex items-center justify-center md:justify-between">
          <h1 className="font-chopper text-4xl text-white">NFTitties</h1>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} className="ml-5 h-[30px]"/>
        </div>
        <div className="flex justify-end md:justify-end w-4/6">
          {connectedWallet ? (
          <div className="flex flex-row gap-1">
            <span className="bg-white px-4 py-1 rounded-lg">Wallet Connected</span>
          </div>
          ) : (
            <button className="bg-white px-4 py-2 rounded-lg"
            onClick={() => {
            setChain({chainId: '0x1'});
            connect({ 
              autoSelect: { 
                label: 'Wallet Connect',
                disableModals: false
              }
            });
            }}
          >Connect Wallet</button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
