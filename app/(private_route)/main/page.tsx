'use client';

import Main from './Components/Main';
import Navbar from './Components/Navbar';
import PhoneMockup from './Components/PhoneMockup';

import './main.css';

export default function page() {
  return (
    <main className="bg-light-gray pt-6 w-full h-full">
      <div className="max-w-[87rem] mx-auto h-full">
        <Navbar />

        <div className="lg:flex lg:gap-6 mt-6 | main-height">
          <div className="hidden lg:block w-[44%]">
            <PhoneMockup />
          </div>

          <div className="lg:w-[56%]">
            <Main />
          </div>
        </div>
      </div>
    </main>
  );
}
