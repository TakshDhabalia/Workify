import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Zap, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">


      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">About Workify</h1>
        
        <section className="mb-12">
          <p className="text-xl text-gray-700 mb-6">
            Workify is an innovative AI-powered platform designed to revolutionize your job search process. We combine cutting-edge technology with expert insights to help job seekers optimize their applications, stand out to employers, and land their dream jobs.
          </p>
          <p className="text-xl text-gray-700 mb-6">
            Our mission is to empower job seekers with the tools and knowledge they need to navigate the competitive job market successfully. We understand the challenges of job hunting in today's fast-paced world, and we're here to make the process smoother, more efficient, and more effective.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <Target className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">Targeted Approach</h3>
              <p className="text-gray-600 text-center">
                We tailor our solutions to your specific career goals and industry requirements.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Zap className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600 text-center">
                Leverage advanced AI to gain valuable insights and optimize your job search strategy.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">Expert Support</h3>
              <p className="text-gray-600 text-center">
                Benefit from the collective wisdom of career experts and industry professionals.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Job Search?</h2>
          <p className="text-xl text-gray-700 mb-6">
            Join Workify today and take the first step towards your dream career.
          </p>
          <Button size="lg">
            Get Started Now <ArrowRight className="ml-2" />
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