import type { Metadata } from "next";
import { Lexend} from 'next/font/google'
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const lexend = Lexend({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Vegemart",
  description: "Vegetables E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lexend.className}
      >
        {children}
      </body>
    </html>
  );
}
