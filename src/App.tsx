import "./App.css";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
} from "./sections/index";

import NavBar from "./components/NavBar";
function App() {
  return (
    <main className="relative">
      <NavBar />
      <section className="xl:padding-l 2xl:px-[10rem] wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="py-10 padding-x">
        <Services />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="w-full py-16 padding-x sm:py-32">
        <Subscribe />
      </section>
      <section className="pb-8 bg-black padding-x padding-t">
        <Footer />
      </section>
    </main>
  );
}

export default App;
