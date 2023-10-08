import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import { MutableRefObject, useRef } from "react";
import Footer from "../components/Footer";
import { Providers } from "./providers";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Holiday Services Agenzia Vacanze Silvi Marina",
  description:
    "Affitti case vacanze sul mare a Silvi Marina, residences, villini, appartamenti per le tue vacanze al mare in Abruzzo - Agenzia Vacanze Silvi Marina. ",
};
export function generateStaticsParams() {
  return [{ locale: "en" }, { locale: "it" }];
}
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang="it-IT" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
