'use client'
import React from 'react'
import "../utils/global.css";
import {Howl, Howler} from 'howler'

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href='/cincin.png'></link>
      <title>Wedding Prima ♥ Yulia</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, maximum-scale=1.0, user-scalable=no" />
      <body>
      {children}
      </body>
    </html>
  );
}