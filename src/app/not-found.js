import React from 'react'

const notFoundPage = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
            <section className="text-center p-8">
                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-6">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                    Please use the links below to navigate back.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="/"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Home
                    </a>
                    <a
                        href="/contact"
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    >
                        Contact Us
                    </a>
                    <a
                        href="/government-jobs"
                        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                    >
                        Government Jobs
                    </a>
                    <a
                        href="/private-jobs"
                        className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
                    >
                        Private Jobs
                    </a>
                </div>
            </section>
        </main>
    )
}

export default notFoundPage
