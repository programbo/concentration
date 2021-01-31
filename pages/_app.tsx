import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900 text-gray-50">
      <Component {...pageProps} />
    </main>
  )
}
