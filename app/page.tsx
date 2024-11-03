import MobileSidebar from "./_components/navigation/MobileSidebar";
import DesktopGradient from "./_components/hero/DesktopGradient";
import Terminal from "./_components/hero/Terminal";
import ContactButton from "./_components/hero/ContactButton";
import LocationTag from "./_components/hero/LocationTag";
import DesktopNavBar from "./_components/navigation/DesktopNavBar";
import MobileGrid from "./_components/hero/MobileGrid";
import DesktopGrid from "./_components/hero/DesktopGrid";
import MobileGradient from "./_components/hero/MobileGradient";
import AboutSection from "./_components/about/AboutSection";
import ProjectSection from "./_components/projects/ProjectSection";
import ArticleSection from "./_components/articles/ArticleSection";
import CTASection from "./_components/cta/CTASection";
import Footer from "./_components/footer/Footer";
import Headline from "./_components/hero/Headline";
import TerminalOutput from "./_components/hero/TerminalOutput";

export default async function Home() {
  return (
    <main className="scroll-smooth">
      <div className="m-default sticky top-6 z-50 flex w-full items-center justify-end drop-shadow-md lg:hidden">
        <MobileSidebar />
      </div>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-start lg:justify-center">
        <div className="m-default absolute left-1/2 top-1/2 z-10 flex h-[80vh] w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-between lg:h-fit lg:flex-col lg:items-center lg:justify-center">
          <div className="flex h-full flex-col justify-between py-[5rem] lg:h-fit lg:w-full lg:py-0">
            <div className="flex flex-col space-y-[0.5rem] lg:w-full lg:justify-center lg:space-y-0 lg:px-[6vw] xl:px-[10vw] 2xl:px-[12vw]">
              <Headline />
              <DesktopGradient />
              <div className="flex w-[85%] flex-col space-y-[1rem] lg:w-full lg:flex-row lg:space-x-12 lg:space-y-0 lg:pt-[4vh]">
                <div className="hidden w-full flex-col lg:flex">
                  <div className="space-between flex w-full items-start lg:space-x-8">
                    <div className="relative flex w-full flex-col">
                      <div className="flex w-full items-center justify-center rounded-xl border-[1px] border-primary-gray bg-white px-4 py-3 pt-3.5 sm:px-6 lg:flex lg:justify-start lg:overflow-clip lg:py-0 lg:pl-0">
                        <Terminal />
                      </div>
                      <TerminalOutput />
                    </div>
                    <ContactButton />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center rounded-xl border-[1px] border-primary-gray bg-white px-4 py-3 pt-3.5 sm:px-6 lg:hidden lg:justify-start lg:overflow-clip lg:py-0 lg:pl-0">
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
            <LocationTag />
          </div>
          <MobileGradient />
        </div>
        <MobileGrid />
        <div className="absolute left-1/2 top-1/2 hidden h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 transform flex-col space-y-6 lg:flex">
          <DesktopNavBar />
          <DesktopGrid />
        </div>
      </div>
      <div className="m-default flex w-full flex-col space-y-[12rem] pt-[10vh]">
        <AboutSection />
        <ProjectSection />
        <ArticleSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
