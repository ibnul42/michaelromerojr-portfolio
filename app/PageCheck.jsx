'use client'
import React from 'react'

export default function PageCheck({ children }) {
    return (
        <main className="flex-grow pl-4 pr-4 py-2 bg-gray-100">
            {children}
        </main>
    )
}
