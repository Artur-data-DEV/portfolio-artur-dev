import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import CustomLayout from "./_components/customLayout";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Artur | Fullstack Dev",
  description:
    "Artur Campos, um desenvolvedor web fullstack apaixonado por inovação e novos desafios de tecnologia!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          enableColorScheme
          themes={[
            "light",
            "dark-classic",
            "tangerine",
            "dark-tangerine",
            "mint",
            "dark-mint",
          ]}
        >
          <Navbar />
          <CustomLayout>{children}</CustomLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
