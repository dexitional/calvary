
import Head from '@/components/Head'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MainHead from '@/components/Head'

export const metadata = {
  title: 'Calvary Redemption Church',
  description: 'The Prayer City | Worship with us !!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MainHead />
      <body className="font-poppins flex flex-col">
        <Header />
        <div className='z-0 flex-1'>
          {children}
        </div>
        {/*@ts-ignore */}
        <Footer />
      </body>
    </html>
  )
}
