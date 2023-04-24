import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

import LayoutComponent from '@/component/Layout';

import '@/styles/globals.css'

const fontNunito = Nunito({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fontNunito.style.fontFamily};
        }
      `}</style>

      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  )
}
