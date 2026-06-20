"use client";

export default function Contact() {
  return (
    <div id="contact" className="min-h-[60vh] w-full py-16 md:py-28 flex flex-col bg-[#f0f2fe]">
      <div className="flex justify-center pb-8 md:pb-12">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          Contact
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[60%]">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <iframe
              src="https://forms.gle/HEKDYJXqAVzssCk78"
              className="w-full min-h-[600px] border-0"
              loading="lazy">
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
