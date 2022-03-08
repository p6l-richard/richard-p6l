import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Index() {
  return (
    <div className="relative bg-grey-50 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">👋 Hi! I'm Richard</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I'm a Software Engineer with a background in Growth based in
                Berlin.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex justify-center">
        {/* TODO: get a shot with a bg just sebastian petravic: https://dribbble.com/shots/14991063-Portfolio-About-Page/attachments/6711607?mode=media */}
        <img
          className="object-contain h-48 w-48"
          src="https://pbs.twimg.com/profile_images/1470002376383860742/XR9q6vYE_400x400.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
