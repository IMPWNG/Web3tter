import { MoralisProvider } from 'react-moralis';
import type { AppProps } from 'next/app';
import { Web3DappWrapper } from "../context/Web3Provider/Web3Provider";

import '../styles/globals.css'

function TwitterWeb3({ Component, pageProps }: AppProps) {

  return (
    <MoralisProvider appId="L8kuo2v3DlsVmjGfmKNYWZq3W0ZQQSdADNav4hum" serverUrl="https://zz6umijjwcmt.usemoralis.com:2053/server">
      <Web3DappWrapper>
        <Component {...pageProps} />
      </Web3DappWrapper>
    </MoralisProvider>
  );
}

export default TwitterWeb3;