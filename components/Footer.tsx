"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200">
      <div className="max-w-[90%] mx-auto p-6 text-sm text-gray-500 text-center">
        &copy; {year} Plenum Inc. All rights reserved.
      </div>
    </footer>
  )
}
