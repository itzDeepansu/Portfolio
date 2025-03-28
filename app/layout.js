import localFont from "next/font/local";
import { Bebas_Neue, JetBrains_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-jetbrainsmono",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-dancingscript",
});

export const metadata = {
  title: "Deepansu Siwach",
  description: "This is the portfolio of Deepansu Siwach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebas.variable} ${jetbrainsMono.variable} ${dancingScript.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
