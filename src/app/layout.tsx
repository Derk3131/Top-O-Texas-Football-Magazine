import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

// No need to call GeistSans() or GeistMono() like a function from next/font/google
// The direct import provides the necessary CSS variables and class names.

export const metadata: Metadata = {
  title: "Top O Texas Football", // You can update this to your actual site title
  description: "Your source for Panhandle football news", // And your site description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        {/* The font variables are applied to the <html> tag, 
            so they are available globally. 
            You can then use var(--font-geist-sans) and var(--font-geist-mono) in your CSS 
            or Tailwind utility classes if needed, e.g., font-sans or font-mono 
            if you configure Tailwind to use these variables. 
            For now, just applying the variable classes to html is enough to make them available.
        */}
        {children}
      </body>
    </html>
  );
}
