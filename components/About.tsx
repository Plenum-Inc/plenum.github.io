"use client";

import { teamMembers } from "./data/team";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row min-h-[80vh] w-screen overflow-hidden bg-[#f0f2fe]">
      <div id="about" className="justify-between w-full py-16 md:py-28 flex-1 flex flex-col">
        <div className="h-1/4 mb-4 md:mb-0 flex justify-center">
          <h2 className="text-2xl md:text-4xl text-center font-bold">
            Our&nbsp;
          </h2>
          <h2 className="text-2xl md:text-4xl text-center font-bold text-[#ff6b4a]">
            Company
          </h2>
        </div>
        <div className="h-3/4 flex justify-center">
          <dl className="w-[80%] md:w-3/4 divide-y divide-gray-400">
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-base font-semibold">会社名</dt>
              <dd className="text-base col-span-2">株式会社Plenum</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-base font-semibold">設立年月</dt>
              <dd className="text-base col-span-2">2026年2月</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-base font-semibold">代表者</dt>
              <dd className="text-base col-span-2">小林聖弥</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="w-auto h-0 border-b border-gray-300 md:w-0 md:h-auto md:border-b-0 md:border-r"></div>

      <div id="team" className="justify-between w-full py-16 md:py-28 flex-1 flex flex-col">
        <div className="h-1/4 mb-4 md:mb-0 flex justify-center">
          <h2 className="text-2xl md:text-4xl text-center font-bold">
            Our&nbsp;
          </h2>
          <h2 className="text-2xl md:text-4xl text-center font-bold text-[#ff6b4a]">
            Team
          </h2>
        </div>
        <div className="h-3/4 flex justify-center">
            {teamMembers.length == 1 ? (
              <div className="flex flex-col items-center w-[90%] md:w-3/4 border border-gray-200 rounded-4xl shadow-lg px-8 md:px-12 py-8 bg-white">
                <h3 className="text-xl md:text-3xl text-center font-bold mb-2">{teamMembers[0].name}</h3>
                <h4 className="text-lg md:text-xl text-center font-semibold italic mb-4">{teamMembers[0].title}</h4>
                <p className="text-sm md:text-base text-left text-pretty">{teamMembers[0].description}</p>
              </div>
            ) : (
              <div className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory w-[90%] md:w-[80%] gap-8 pb-4">
                {teamMembers.map((member, i) => (
                  <div
                    key={i}
                    className={`flex-none flex flex-col items-center snap-center w-full border border-gray-200 rounded-4xl shadow-lg px-12 py-8 bg-white`}
                  >
                    <h3 className="text-xl md:text-3xl text-center font-bold mb-2">{member.name}</h3>
                    <h4 className="text-lg md:text-xl text-center font-semibold italic mb-4">{member.title}</h4>
                    <p className="text-sm md:text-base text-left text-pretty">{member.description}</p>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  )
}
