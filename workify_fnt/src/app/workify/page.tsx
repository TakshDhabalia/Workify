'use client'
import { useState, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { Upload, Mail, Lightbulb, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { createClient } from '@supabase/supabase-js'
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function Workify() {
  const [email, setEmail] = useState('')
  const [suggestions, setSuggestions] = useState('')
  const { toast } = useToast()

  const supabaseUrl = "https://adnbsayvxzafroyaynhm.supabase.co"
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbmJzYXl2eHphZnJveWF5bmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NzIzMjIsImV4cCI6MjA0MzQ0ODMyMn0.rYnP9d8Z5m_Nuee_FI5Cy9QQj4IhucStYRYtnIOlK8k"

  const supabase = createClient(supabaseUrl, supabaseKey)

  const handleResumeUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      toast({
        title: "Error",
        description: "No file selected",
        variant: "destructive",
      })
      return
    }

    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `public/${fileName}`

    const { data, error } = await supabase.storage
      .from("Resume")
      .upload(filePath, file)

    if (data) {
      console.log({
        title: "Success",
        description: "Resume uploaded successfully",
      })
    } else if (error) {
      console.log({
        title: "Error",
        description: "Failed to upload resume",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  const handleEmailGeneration = () => {
    // Handle email generation
    console.log('Generating email')
    toast({
      title: "Email Generation",
      description: "Your email is being generated...",
    })
  }

  const handleGetSuggestions = () => {
    // Handle getting suggestions
    console.log('Getting suggestions')
    toast({
      title: "Suggestions",
      description: "Fetching personalized suggestions...",
    })
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12 text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Workify
      </motion.h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div variants={cardVariants} initial="hidden" animate="visible">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2" /> Resume Input
              </CardTitle>
              <CardDescription>Upload your resume for analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <Input type="file" onChange={handleResumeUpload} className="mb-4" />
            </CardContent>
            <CardFooter>
              <Button onClick={() => document.querySelector('input[type="file"]')?.click()} className="w-full">
                Upload Resume <ArrowRight className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2" /> Cold Mailing
              </CardTitle>
              <CardDescription>Generate personalized cold emails</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter job description..."
                className="mb-4 h-32"
              />
            </CardContent>
            <CardFooter>
              <Button onClick={handleEmailGeneration} className="w-full">
                Generate Email <ArrowRight className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2" /> Suggestions
              </CardTitle>
              <CardDescription>Get personalized career advice</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                value={suggestions} 
                onChange={(e) => setSuggestions(e.target.value)} 
                placeholder="Suggestions will appear here..."
                className="mb-4 h-32"
              />
            </CardContent>
            <CardFooter>
              <Button onClick={handleGetSuggestions} className="w-full">
                Get Suggestions <ArrowRight className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}