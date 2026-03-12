import { ProductBenefitsSection } from "@/components/products/product-benefits-section";
import { ProductComparisonSection } from "@/components/products/product-comparison-section";
import { ProductHeroSection } from "@/components/products/product-hero-section";
import { ProductReviewsSection } from "@/components/products/product-reviews-section";
import { ProductSpecsSection } from "@/components/products/product-specs-section";
import { ProductStoreCtaSection } from "@/components/products/product-store-cta-section";

export default function ProductsPage() {
  return (
    <>
      <ProductHeroSection />
      <ProductBenefitsSection />
      <ProductComparisonSection />
      <ProductSpecsSection />
      <ProductReviewsSection />
      <ProductStoreCtaSection />
    </>
  );
}
