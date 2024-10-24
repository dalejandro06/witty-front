import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import { Providers } from "../Providers/providers";

import { siteConfig } from "@/config/site";
import { fontLato } from "@/config/fonts";
import { ErrorLogo, LogoImage } from "@/components/icons";
import { NextAuthProvider } from "@/Providers/AuthProvider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-72x72.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontLato.className,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <NextAuthProvider>
            <div className="relative flex flex-col">
              <main className="container min-h-screen mx-auto max-w-7xl flex-grow">
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                  toastOptions={{
                    duration: 5000,
                    success: {
                      style: { background: "#D9ECE2", width: "100%" },
                      className:
                        "rounded-lg p-6 border-l-8 border-l-[#66CC99] font-bold",
                      icon: <LogoImage fill="#66CC99" />,
                    },
                    error: {
                      style: { background: "#ECD9D9", width: "100%" },
                      className:
                        "rounded-lg p-6 border-l-8 border-l-[#C64444] font-bold",
                      icon: <ErrorLogo fill="#C64444" />,
                    },
                  }}
                />
                {children}
                <Analytics />
              </main>
            </div>
          </NextAuthProvider>
        </Providers>
      </body>
    </html>
  );
}
