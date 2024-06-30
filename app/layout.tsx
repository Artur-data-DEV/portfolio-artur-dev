import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import CustomLayout from "./_components/customLayout";
import TransitionProvider from "@/providers/transition-provider";

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
    <html lang="pt-BR" suppressHydrationWarning className="overflow-x-hidden ">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          data-testid="theme-provider"
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
          <CustomLayout>
            <TransitionProvider data-testid="transition-provider">
              {children}
            </TransitionProvider>
          </CustomLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
