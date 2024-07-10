import './globals.css';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/Footer';


export const metadata = {
  title: 'Jericho High school',
  description: 'Center of learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
