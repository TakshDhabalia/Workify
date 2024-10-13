import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Check } from 'lucide-react'

export default function PricingPage() {
  const tiers = [
    {
      name: "Basic",
      price: "₹10,000",
      description: "Perfect for job seekers just starting out",
      features: [
        "Resume Analysis",
        "Basic Email Templates",
        "Limited Career Suggestions",
        "Email Support"
      ]
    },
    {
      name: "Pro",
      price: "₹11,000",
      description: "Ideal for serious job seekers",
      features: [
        "Advanced Resume Analysis",
        "Customized Email Generator",
        "Comprehensive Career Suggestions",
        "Priority Email Support",
        "Interview Preparation Tips"
      ]
    },
    {
      name: "Enterprise",
      price: "₹12,000",
      description: "For professionals and career changers",
      features: [
        "Expert Resume Review",
        "AI-Powered Email Campaigns",
        "Personalized Career Coaching",
        "24/7 Priority Support",
        "LinkedIn Profile Optimization",
        "Salary Negotiation Strategies"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Choose Your Plan</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card key={index} className={index === 1 ? "border-indigo-500 border-2" : ""}>
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4">{tier.price}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  {index === 1 ? "Get Started" : "Choose Plan"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Not sure which plan is right for you?</h2>
          <p className="text-xl text-gray-700 mb-6">
            Contact our sales team for a personalized recommendation.
          </p>
          <Button size="lg" variant="outline">
            Contact Sales
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