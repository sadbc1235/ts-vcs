'use client'

import { BtnBox } from './component/BtnBox'
import './globals.css'

export default function RootLayout({ children }) {

  return (
    <html>
      <title> TS version controll system </title>
      <body>
        <header>
          <div id='logo'>TS VCS</div>
          <BtnBox />
        </header>
        {children}
      </body>
    </html>
  )
}
