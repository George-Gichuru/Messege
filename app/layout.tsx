import './globals.css'
import { Figtree } from 'next/font/google'

const font = Figtree ({ subsets: ['latin'] })

export const metadata = {
  title: 'Messenger-Clone',
  description: 'Messaging App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
