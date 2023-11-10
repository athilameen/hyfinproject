import HeaderArea from './(components)/Header'
import './globals.css'
import '@/app/assets/styles/bootstrap.min.css';
import '@/app/assets/styles/main.css';
import '@/app/assets/styles/home.css';
import '@/app/assets/styles/all.min.css';
import '@/app/assets/styles/form.css';
import { AuthProvider } from './Provider';

export const metadata = {
  title: 'The Hyfin | Find the right business partners',
  description: 'The Hyfin will connect Entrepreneurs and Businesses, and facilitate the realization of entrepreneurial aspirations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <HeaderArea />
          <main className="p-0">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}