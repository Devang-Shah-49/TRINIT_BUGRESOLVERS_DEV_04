import React from 'react';
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    MegaphoneIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const navigate = useNavigate()
  return (
    <div className="bg-indigo-600">
      <div className="mx-auto max-w-7xl py-2 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-indigo-800 p-2">
              <MegaphoneIcon className="h-4 w-4 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate md:font-medium text-white xs:text-xs">
              {/* <span className="md:hidden">Do you want us to add new features?</span> */}
              <span className="text-sm xs:text-xs sm:inline"> Do you want us to add new features? </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 sm:order-2 sm:mt-0 sm:w-xs">
            {/* <button onClick={navigate("/committee/create-event")}> */}
            <a
              href="/"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-xs font-medium text-indigo-600 shadow-sm hover:bg-indigo-50 "
            >
              Give Feedback
            </a>
            {/* </button> */}
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            {/* <button
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
