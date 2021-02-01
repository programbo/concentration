import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen text-gray-900 bg-gray-50">
      <Component {...pageProps} />
    </main>
  )
}
