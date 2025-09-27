// file: client/src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Web3Provider } from "@/components/Web3Provider"; // 1. Import

export const metadata: Metadata = {
  title: "Blue Carbon MRV Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Web3Provider> {/* 2. Wrap */}
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}