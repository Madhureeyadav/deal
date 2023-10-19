import './globals.css'

import Navbar from './components/Navbar'
import Contact from './components/Contact'


export const metadata = {
  title: 'Property Dealing',
  description: 'property dealer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative" >
        <Navbar/>
          {children}</body>
          <Contact/>
    </html>
  )
}
