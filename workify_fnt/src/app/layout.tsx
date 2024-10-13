'use client'
import { useRouter } from 'next/navigation'
import './globals.css'
import { Button } from "@/components/ui/button"
import { Home, Menu } from 'lucide-react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  // Define route handlers
  const handleRedirect = () => router.push('/workify')
  const handleRedirectHome = () => router.push('/')
  const handleRedirectAbout = () => router.push('/about')
  const handleRedirectFeatures = () => router.push('/features')
  const handleRedirectPricing = () => router.push('/pricing')

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Universal Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Button variant="ghost" className="mr-2 p-0" onClick={handleRedirectHome}>
                  <span className="text-2xl font-bold text-indigo-600">Workify</span>
                </Button>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" onClick={handleRedirectHome}>
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
                <Button variant="ghost" onClick={handleRedirectFeatures}>Features</Button>
                <Button variant="ghost" onClick={handleRedirectPricing}>Pricing</Button>
                <Button variant="ghost" onClick={handleRedirectAbout}>About</Button>
                <Button onClick={handleRedirect}>Get Started</Button>
              </div>
              <div className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow">{children}</main>


      </body>
    </html>
  )
}