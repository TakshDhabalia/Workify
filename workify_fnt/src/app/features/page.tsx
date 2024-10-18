'use client'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { FileText, Send, Lightbulb, Database, Globe, Cpu } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function FeaturesPage() {
  const router = useRouter(); 
  const handleRedirectWorkify = () => router.push('workify')
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Workify Features</h1>
        
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 text-indigo-600" /> Resume Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                AI-powered resume analysis to optimize your CV for ATS systems and highlight your key strengths.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="mr-2 text-indigo-600" /> Cold Email Generator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Create personalized, compelling cold emails to increase your chances of landing interviews.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2 text-indigo-600" /> Career Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Receive tailored career advice and job recommendations based on your skills and experience.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Image src="/nextjs.svg" height={80} width={80} alt="Next.js logo" className="mx-auto mb-4" />
                <CardTitle className="text-center mb-2">Next.js</CardTitle>
                <CardDescription className="text-center">
                  React framework for building fast and scalable web applications.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Image src="/supabase-logo-wordmark--light.svg" height={80} width={190}   alt="Supabase logo" className="mx-auto mb-4" />
                <CardTitle className="text-center mb-2">Supabase</CardTitle>
                <CardDescription className="text-center" >
                  Open-source Firebase alternative for backend infrastructure.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Image src="/Vercel_logo.svg" height={80} width={180} alt="Vercel logo" className="mx-auto mb-4" />
                <CardTitle className="text-center mb-2">Vercel</CardTitle>
                <CardDescription className="text-center">
                  Cloud platform for static sites and Serverless Functions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Image src="/groq.svg" height={80} width={180} alt="GROQ logo" className="mx-auto mb-4" />
                <CardTitle className="text-center mb-2">GROQ</CardTitle>
                <CardDescription className="text-center">
                  Advanced AI model for natural language processing tasks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Experience the Power of Workify</h2>
          <p className="text-xl text-gray-700 mb-6">
            Harness cutting-edge technology to supercharge your job search.
          </p>
          
          <Button size="lg" onClick={handleRedirectWorkify}>
            Start Your Free Trial
          </Button>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Workify. All rights reserved.
        </div>
      </footer>
    </div>
  )
}