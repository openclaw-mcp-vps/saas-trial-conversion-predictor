import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TrialPredict — Predict Trial-to-Paid Conversion',
  description: 'Analyze user behavior during free trials to predict conversion probability and suggest intervention strategies for SaaS growth.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fa6eaf07-bd7b-48cc-a1fa-28cb9ba0899b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
