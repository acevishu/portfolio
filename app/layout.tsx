import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Vishal Rao | Cloud Solutions Consultant",
  description:
    "Premium technical portfolio for Vishal Rao, a Cloud Solutions Consultant specializing in Azure, DevOps, Linux, networking, automation, and enterprise infrastructure operations.",
  keywords: [
    "Vishal Rao",
    "Cloud Solutions Consultant",
    "Azure Consultant",
    "DevOps",
    "Linux Administration",
    "Terraform",
    "AKS",
    "Cloud Networking"
  ],
  openGraph: {
    title: "Vishal Rao | Cloud Solutions Consultant",
    description:
      "Azure, DevOps, Linux, automation, secure hybrid connectivity, and enterprise cloud operations.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
