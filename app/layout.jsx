import './globals.css';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  title: 'Shahista Inamdar | Senior Developer in Toronto',
  description: 'Toronto-based Senior Developer with over a decade of software development experience across India and Canada, specializing in enterprise application delivery, Agile collaboration, developer testing, and deployment.',
  keywords: ['Shahista Inamdar', 'Senior Developer', 'Software Engineer', 'Toronto', 'Canada', '.NET', 'Agile', 'Enterprise Software'],
  openGraph: {
    title: 'Shahista Inamdar | Senior Developer',
    description: '10+ years of proven software engineering experience in enterprise application delivery, Agile collaboration, and developer mentorship.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sansFont.variable} ${displayFont.variable} dark scroll-smooth`}>
      <body className="bg-[#090D16] text-[#F8FAFC] antialiased min-h-screen relative selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* Ambient Glows */}
        <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="fixed top-[40%] left-[-150px] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="fixed bottom-[10%] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        {children}
      </body>
    </html>
  );
}
