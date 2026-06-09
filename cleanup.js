const fs = require('fs');

const path = 'd:/sample/cura-dental/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Replace Home component
const homeRegex = /export default function Home\(\) \{[\s\S]*?\}\n/m;
const newHome = `export default function Home() {
  return (
    <div className="selection:bg-secondary selection:text-white">
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <DoctorSpotlight />
      <PatientJourney />
      <BeforeAfterSection />
      <WhyChooseUs />
      <ClinicGallery />
      <Testimonials />
      <FAQSection />
      <ConsultationCTA />
      <ContactFormSection />
      <LocationSection />
    </div>
  );
}
`;
content = content.replace(homeRegex, newHome);

// 2. Remove FloatingCTAs
content = content.replace(/function FloatingCTAs\(\) \{[\s\S]*?\}\n\n/m, '');

// 3. Remove Navbar
content = content.replace(/function Navbar\(\) \{[\s\S]*?\}\n\n/m, '');

// 4. Remove Footer
content = content.replace(/function Footer\(\) \{[\s\S]*?\}\n/m, '');

// 5. Remove unused imports (useState, Link if exists, etc)
// Actually we can keep them or clean them up later.
// We should remove Menu, X, Mail from lucide-react import
content = content.replace(/Menu, X, /, '');
content = content.replace(/, Mail/, '');
content = content.replace(/, MessageCircle, PhoneCall, Calendar/, '');

fs.writeFileSync(path, content);
console.log('Done!');
