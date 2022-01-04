import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis';
import Web3ContextProvider from '../context/Web3Context';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <MoralisProvider appId="L8kuo2v3DlsVmjGfmKNYWZq3W0ZQQSdADNav4hum" serverUrl="https://zz6umijjwcmt.usemoralis.com:2053/server">
      <Web3ContextProvider>
        <Component {...pageProps} />
      </Web3ContextProvider>
    </MoralisProvider>
  );
}

export default MyApp