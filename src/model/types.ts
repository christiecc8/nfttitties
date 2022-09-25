import type {
  ConnectOptions,
  DisconnectOptions,
  WalletState,
} from '@web3-onboard/core'

export type WalletContextReturn = {
  connect: (options: ConnectOptions) => Promise<any>
  disconnect: (options: DisconnectOptions) => Promise<any>
  wallet: WalletState | null
  connecting: boolean
  setChain: (options: {
    chainId: string
    chainNamespace?: string
    wallet?: WalletState['label']
  }) => Promise<boolean>
  settingChain: boolean
}

export interface Chain {
  namespace?: 'evm'
  id: number
  hexId: string
  rpcUrl: string
  etherscanUrl: string
  label: string
  token: string
  color?: string
  icon?: string
}