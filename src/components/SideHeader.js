import React from 'react'

export default function SideHeader() {
    return (
        <div className="flex md:flex md:flex-grow flex-row-reverse space-x-1">
            <a href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-teal-300 transition duration-300">About Us</a>
            <a href="/signup" className="py-4 px-2 text-gray-500 font-semibold hover:text-teal-300 transition duration-300">Signup</a>
            <a href="/login" className="py-4 px-2 text-gray-500 font-semibold hover:text-teal-300 transition duration-300">Login</a>
        </div>
    )
}