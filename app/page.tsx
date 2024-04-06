import Link from "next/link";
import MobileSidebar from "./_components/MobileSidebar";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="">
      <div className="relative mt-6 flex min-h-screen w-full flex-col items-center justify-start lg:justify-center">
        <div className="m-default sticky top-6 z-50 flex w-full items-center justify-end drop-shadow-md lg:hidden">
          <MobileSidebar />
        </div>
        <div className="m-default absolute left-1/2 top-1/2 z-10 flex h-[80vh] w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-between lg:flex-col lg:items-center lg:justify-center">
          <div className="flex h-full flex-col justify-between py-[5rem] lg:h-fit lg:w-full lg:py-0 lg:pb-8">
            <div className="flex flex-col space-y-[2.5rem] lg:w-full lg:justify-center lg:space-y-0 lg:px-[10vw]">
              <div className="leading-0 flex flex-col -space-y-5 text-[3.25rem] font-bold sm:-space-y-7 sm:text-[3.75rem] md:text-[6rem] lg:flex-row lg:justify-center lg:space-x-4 lg:space-y-0 xl:text-[7.75rem] 2xl:text-[8.5rem]">
                <h1>ANDREAS</h1>
                <h1>NK.</h1>
              </div>
              <div className="hidden h-3 w-full bg-default-gradient lg:block" />
              <div className="flex w-[85%] flex-col space-y-[1rem] lg:w-full lg:flex-row lg:space-x-12 lg:space-y-0 lg:pt-[6vh]">
                <div className="flex w-full items-center justify-center rounded-xl border-[1px] border-primary-gray bg-white px-4 py-3 pt-3.5 sm:px-6 lg:justify-start lg:space-x-6 lg:overflow-clip lg:py-0 lg:pl-0">
                  <div className="hidden items-center lg:flex">
                    <button className="bg-white px-6 py-4 transition duration-200 hover:bg-primary-gray hover:bg-opacity-[0.08]">
                      <Image
                        src="/images/terminal_icon.svg"
                        height={14}
                        width={14}
                        alt="terminal"
                      />
                    </button>
                    <div className="h-[4vh] w-[1px] bg-black"></div>
                  </div>
                  <h3 className="hidden font-body sm:text-lg lg:block">
                    Software Engineer based in Yogyakarta, Indonesia
                  </h3>
                  <h3 className="font-body sm:text-lg md:text-xl lg:hidden">
                    Software Engineer
                  </h3>
                </div>
                <button className="flex w-full items-center justify-center rounded-xl border-[1px] bg-black px-4 py-3 pt-3.5 sm:px-6 lg:w-fit lg:px-16">
                  <h3 className="font-body font-medium text-white sm:text-lg md:text-xl">
                    Contacts
                  </h3>
                </button>
              </div>
            </div>
            <h4 className="flex space-x-3 font-mono text-sm sm:text-base md:text-lg lg:hidden">
              <span className="font-light">based on</span>
              <span className="font-bold">YOGYAKARTA, INDONESIA</span>
            </h4>
          </div>
          <div className="h-full min-w-2 bg-variant-gradient md:min-w-4 lg:hidden" />
        </div>
        <div className="absolute left-1/2 top-1/2 -z-10 grid h-[80vh] w-full -translate-x-1/2 -translate-y-1/2 transform grid-cols-4 gap-[0px] lg:hidden">
          {Array(32)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="h-full w-full border-[0.8px] border-primary-gray border-opacity-30 bg-transparent"
              ></div>
            ))}
        </div>
        <div className="absolute left-1/2 top-1/2 hidden h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 transform flex-col space-y-6 lg:flex">
          <div className="font-primary-gray hidden justify-end space-x-16 font-mono text-lg lg:flex">
            <Link href="/" className="transition duration-300 hover:underline">
              Home
            </Link>
            <Link
              href="/about"
              className="transition duration-300 hover:underline"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="transition duration-300 hover:underline"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="transition duration-300 hover:underline"
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="transition duration-300 hover:underline"
            >
              Contacts
            </Link>
          </div>
          <div className="-z-10 grid h-full w-full grid-cols-12 gap-[0px]">
            {Array(72)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-full w-full border-[0.8px] border-primary-gray border-opacity-30 bg-transparent"
                ></div>
              ))}
          </div>
        </div>
      </div>
      <p>Pantek</p>
    </main>
  );
}
