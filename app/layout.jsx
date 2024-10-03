
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


 import  Header  from "../components/Header";
 import PageTransition from "../components/PageTransition";
 import StairTransition from "../components/StairTransition";


const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable: '--font-jetbrainsMemo'
 });

export const metadata = {
  title: "Jerin Portfolio",
  description: "Jerin Portfolio build using nextjs, tailwindcss, clerk, motion",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={JetBrainsMono.variable}>
          <Header/>
          <StairTransition/>
          <PageTransition>
              {children}
          </PageTransition>
        </body>
      </html>
  );
}
