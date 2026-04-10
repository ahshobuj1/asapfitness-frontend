import FAQSection from './_components/FAQ';
import FuelYourGainsSection from './_components/FeatureProduct';
import HeroSection from './_components/Header';
import Pricing from './_components/Pricing';
import Programs from './_components/Programs';
import WhyTrainWithUsSection from './_components/WhyTrainWithUsSection';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <HeroSection />
      <Programs />
      <WhyTrainWithUsSection />
      <FuelYourGainsSection />
      <Pricing />
      <FAQSection />
    </div>
  );
}
