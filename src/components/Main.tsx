import React, { useEffect } from 'react'
import useWallet from '../hooks/useWallet'
import { useWallets } from '@web3-onboard/react'

const Main: React.FC<{}> = () => {
  const { wallet, connect, connecting, setChain } = useWallet()

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

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-end p-2">
        { wallet ?
        <span className="bg-white px-4 py-1 rounded-lg">Wallet Connected</span> : 
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
        >Connect Wallet</button>}
      </div>
      <h1 className="font-chopper text-center text-4xl text-white">NFTitties</h1>
    </div>
  )
}
export default Main