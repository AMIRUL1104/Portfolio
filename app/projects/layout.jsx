import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectsLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
