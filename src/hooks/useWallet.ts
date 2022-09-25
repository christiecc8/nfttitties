import React from 'react'
import { WalletContext } from '../contexts/WalletContextProvider'

const useWallet = () => {
  const { wallet, connecting, connect, disconnect, settingChain, setChain } = React.useContext(WalletContext)

  return { wallet, connecting, connect, disconnect, settingChain, setChain }
}

export default useWallet