'use client';
import AuthorizedDeleadSection from './authorized_dealer_section';
import HeroSection from './hero_section';
import ProductCatalogSection from './product_catalog_section';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProductCatalogSection/>
      <AuthorizedDeleadSection/>
    </div>
  );
}
 