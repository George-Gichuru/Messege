import ActiveStatus from './components/ActiveStatus'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'

import './globals.css'

import { Figtree } from 'next/font/google'

const font = Figtree ({ subsets: ['latin'] })

export const metadata = {
  title: 'Messenger-Clone',
  description: 'Messaging App',
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthContext>
        <ToasterContext />
        <ActiveStatus />
        {children}
        </AuthContext>
      </body>
    </html>
  )
}
