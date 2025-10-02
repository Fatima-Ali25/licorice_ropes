'use client';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import termsData from '@/content/terms_of_service.json';

interface TermsSection {
  id: number;
  title: string;
  content: string;
}

// interface TermsData {
//   title: string;
//   subtitle: string;
//   description: string;
//   sections: TermsSection[];
// }

const TermsOfServicePage = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <div className="w-full h-full py-36">
        <div className="layout w-full h-full py-20">
          {/* Terms of Service Container */}
            {/* Title */}
            <div className="flex flex-col items-center justify-center text-center gap-6 mb-8">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter text-gray-900 uppercase mb-4">
                {termsData.title}
              </h1>
              <p className="text-base sm:text-base md:text-lg lg:text-xl font-inter leading-10 tracking-wide max-w-3xl text-gray-700">
                {termsData.description}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {termsData.sections.map((section) => (
                <div key={section.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h2 className="text-2xl md:text-3xl font-medium font-inter text-[#211F1F] uppercase mb-4">
                    SECTION {section.id} - {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

        </div>
      </div>

    </div>
  );
};

export default TermsOfServicePage;
