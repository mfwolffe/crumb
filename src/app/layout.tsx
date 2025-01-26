
import "./globals.css";
import type { Metadata } from "next";
import { notoSans } from "@/utils/fonts";


export const metadata: Metadata = {
  title: "bash a crumb",
  description: "navigate to your heart's content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <body
        className={`${notoSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

