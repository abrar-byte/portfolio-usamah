import React from "react";
import { MdWorkHistory } from "react-icons/md";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="w-full py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            {/* <!-- Vertical bar running through middle --> */}
            <div className="hidden sm:block w-1 bg-purple absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            {workExperience?.map((card, index) => {
              const evenNumber = (index + 1) % 2 == 0;
              return (
                <div key={card?.id} className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div
                      className={`flex ${
                        evenNumber ? "justify-end" : "justify-start"
                      } w-full mx-auto items-center`}
                    >
                      <div
                        className={`w-full sm:w-1/2 ${
                          evenNumber ? "sm:pl-8" : "sm:pr-8"
                        } `}
                      >
                        <Button
                          //   random duration will be fun , I think , may be not
                          duration={Math.floor(Math.random() * 10000) + 10000}
                          borderRadius="1.75rem"
                          style={{
                            //   add these two
                            //   you can generate the color from here https://cssgradient.io/
                            background: "rgb(4,7,29)",
                            backgroundColor:
                              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            // add this border radius to make it more rounded so that the moving border is more realistic
                            borderRadius: `calc(1.75rem* 0.96)`,
                          }}
                          containerClassName="!w-full"
                          // remove bg-white dark:bg-slate-900
                          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <img
                              src={card.thumbnail}
                              alt={card.thumbnail}
                              className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                              <p className="text-white-100 text-start text-xs font-medium">
                                2023 09 - 2024 09
                              </p>
                              <h1 className="text-start text-xl md:text-2xl font-bold">
                                {card.title}
                              </h1>
                              <p className="text-start text-white-200 mt-2 font-semibold">
                                {card.company}
                              </p>

                              <ul className="mt-5 pl-5 lg:pl-0 list-disc space-y-2">
                                {card.points.map(
                                  (point: any, iPoint: number) => (
                                    <li
                                      key={`experience-point-${iPoint}`}
                                      className="text-white-100 text-start text-[14px] tracking-wider"
                                    >
                                      {point}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-full bg-purple border-[rgb(4,7,29)] border-4 w-14 h-14 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <MdWorkHistory className="text-3xl text-black" />
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg> */}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            {/* <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4 bg-white rounded shadow">
                      My life got flipped turned upside down,
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
              </div>
            </div> */}

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            {/* <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4 bg-white rounded shadow">
                      And I'd like to take a minute, just sit right there,
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div> */}

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            {/* <div className="mt-6 sm:mt-0">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4 bg-white rounded shadow">
                      I'll tell you how I became the Prince of a town called Bel
                      Air.
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div> */}
    </div>
  );
};

export default Experience;
