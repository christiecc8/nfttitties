import React from 'react';
import {
  init,
  useConnectWallet,
  useSetChain,
} from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';

import { WalletContextReturn } from '../model/types';

const injected = injectedModule();

const initialValue: WalletContextReturn = {
  connect: (options) => Promise.resolve(),
  disconnect: (options) => Promise.resolve(),
  wallet: null,
  connecting: false,
  settingChain: false,
  setChain: (options) => Promise.resolve(false),
};

export const WalletContext = React.createContext(initialValue);

const onboard = init({
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl:'https://eth-mainnet.alchemyapi.io/v2/HB8dFHS6vY1h_LX3yZgyUYAj8Stv9Ja3',
    },
    {
      label: 'GOERLI',
      id: '0x5',
      token: 'GoerliETH',
      rpcUrl:
        'https://eth-goerli.alchemyapi.io/v2/cgHuBwD5rDkESlnFr3ee92PLMp3pkfyE',
    },
  ],
  appMetadata: {
    name: 'NFTitties',
    icon: '<svg><svg/>',
    description: 'NFTitties',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' },
    ],
  },
  accountCenter: {
    desktop: {
      enabled: false,
      position: 'topRight',
    },
    mobile: {
      enabled: false,
      position: 'topRight',
    },
  },
});

const WalletContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [{ connectedChain, settingChain }, setChain] = useSetChain();

  return (
    <WalletContext.Provider
      value={{
        wallet,
        connect,
        disconnect,
        connecting,
        setChain,
        settingChain
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
