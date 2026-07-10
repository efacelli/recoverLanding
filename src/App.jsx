import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { Insurances } from './components/Insurances';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Insurances />
        <Location />
      </main>
      <Footer />
    </>
  );
}
