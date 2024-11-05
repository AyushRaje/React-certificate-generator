import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, UserPlusIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Correct Uploads',
    description:
      'Make sure you have correct and cleaned data in proper format before submitting the excel file.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Credentials',
    description:
      'Please provide correct and valid email for receiving certificate reports.',
    icon: LockClosedIcon,
  },
  {
    name: 'Redundancy',
    description:
      'Please make sure you are not providing duplicate data for certificate creation.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Usage',
    description:
      'To successfully generate certificate select a template, enter email and provide the student data.',
    icon: UserPlusIcon,
  },
]

const Instructions = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-white py-5 sm:py-5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                Instructions
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                This is an automated web application for generating certificates.This application requires heavy resources.
                So please read all the instructions and avoid providing incorrect inputs and redundant data.
                A sample format of data is given below.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      );
});

export default Instructions;
