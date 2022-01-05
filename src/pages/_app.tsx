import { MoralisProvider } from 'react-moralis';
import type { AppProps } from 'next/app';
import { Web3DappWrapper } from "../context/Web3Provider/Web3Provider";

import '../styles/globals.css'

function TwitterWeb3({ Component, pageProps }: AppProps) {

  return (
    <MoralisProvider appId="EkDzqxdXZY1dUZ5aag5toFfYyPA9fA1eqVtHYkmd" serverUrl="https://lamoyru9w7tr.usemoralis.com:2053/server">
      <Web3DappWrapper>
        <Component {...pageProps} />
      </Web3DappWrapper>
    </MoralisProvider>
  );
}

export default TwitterWeb3;