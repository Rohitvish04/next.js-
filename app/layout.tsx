import "./globals.css";
import Navbar from "./components/Navbar";
import { title } from "process";

export const metadata = {
  title: 'Next.js Practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
         <header style={{ padding: '1rem', background:'#eee'}}> 
        <Navbar />
        </header>
         <main style={{ padding: '1rem'}}>{children}</main>

         <footer style={{ padding: '1rem' , background: '#eee'}}>@2026 My App</footer>
      </body>
    </html>
  );
}
