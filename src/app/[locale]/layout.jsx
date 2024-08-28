import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/lib/providers";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import PrelineScript from "../components/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params }) {
  const messages = await getMessages();
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} >
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
