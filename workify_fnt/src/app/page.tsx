'use client'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { FileText, Send, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()
//----------------------------------------------------//
  const handleRedirect = () => {
    router.push('workify') // Use router.push() as before
  }
//----------------------------------------------------//
//----------------------------------------------------//
  const handleRedirectAbout = () => {
    router.push('about') // Use router.push() as before
  }
//----------------------------------------------------//
//----------------------------------------------------//
const handleRedirectFeatures = () => {
  router.push('features') // Use router.push() as before
}
//----------------------------------------------------//
//----------------------------------------------------//
const handleRedirectPricing = () => {
  router.push('pricing') // Use router.push() as before
}
//----------------------------------------------------//
//----------------------------------------------------//
//----------------------------------------------------//




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">Workify</span>
          </div>
          <div className="hidden sm:block">
            <Button variant="ghost" className="mr-2" onClick={handleRedirectFeatures}>Features</Button>
            <Button variant="ghost" className="mr-2"onClick={handleRedirectPricing}>Pricing</Button>
            <Button variant="ghost" className="mr-4"onClick={handleRedirectAbout}>About</Button>
            <Button onClick={handleRedirect}>Get Started </Button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
            Optimize Your <span className="text-indigo-600">Job Search</span> with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to streamline your job application process, 
            enhance your resume, and increase your chances of landing your dream job.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="transition-all duration-300 hover:shadow-lg border-t-4 border-indigo-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="mr-2 text-indigo-600" /> Resume Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our advanced AI analyzes your resume, providing detailed insights and 
                suggestions to make it stand out to potential employers.
              </p>
              <ul className="space-y-2">
                {['ATS Optimization', 'Content Improvement', 'Industry-specific Recommendations'].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg border-t-4 border-indigo-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Send className="mr-2 text-indigo-600" /> Cold Email Generator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Craft personalized, compelling cold emails that grab the attention of 
                hiring managers and increase your chances of getting an interview.
              </p>
              <ul className="space-y-2">
                {['Job-specific Tailoring', 'Skill Highlighting', 'Professional Formatting'].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg border-t-4 border-indigo-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Lightbulb className="mr-2 text-indigo-600" /> Career Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Receive personalized career advice and insights based on your skills, 
                experience, and job market trends.
              </p>
              <ul className="space-y-2">
                {['Skill Gap Analysis', 'Role Recommendations', 'Development Strategies'].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Workify Transforms Your Job Search
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { title: 'Upload Resume', description: 'Simply upload your current resume to get started.' },
              { title: 'AI Analysis', description: 'Our AI analyzes your resume and job market data.' },
              { title: 'Get Insights', description: 'Receive personalized suggestions and improvements.' },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-600 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-indigo-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Supercharge Your Job Search?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of job seekers who have already optimized their 
            job search process with Workify. Get started today and take the first 
            step towards your dream career!
          </p>
          <Button size="lg" variant="secondary" className="text-indigo-600">
            Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Workify. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

