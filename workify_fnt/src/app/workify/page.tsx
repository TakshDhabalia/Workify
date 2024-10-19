'use client'

import { useState, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { Upload, Mail, Lightbulb, ArrowRight, FileText, Send, Search, Briefcase } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { createClient } from '@supabase/supabase-js'

export default function Workify() {
  const [email, setEmail] = useState('')
  const [suggestions, setSuggestions] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [analysisResult, setAnalysisResult] = useState('')
  const [jobPostings, setJobPostings] = useState<string[]>([])

  const supabaseUrl = "https://adnbsayvxzafroyaynhm.supabase.co"
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbmJzYXl2eHphZnJveWF5bmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NzIzMjIsImV4cCI6MjA0MzQ0ODMyMn0.rYnP9d8Z5m_Nuee_FI5Cy9QQj4IhucStYRYtnIOlK8k"

  const supabase = createClient(supabaseUrl, supabaseKey)

  const handleResumeUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      alert("Error: No file selected")
      return
    }

    setSelectedFile(file)
    
    if (file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file)
      setFilePreview(fileUrl)
    } else {
      setFilePreview(null)
    }
  }

  const handleSubmitResume = async () => {
    if (!selectedFile) {
      alert("Error: No file selected")
      return
    }

    const fileExt = selectedFile.name.split('.').pop()
    const fileName = `${selectedFile.name}.${fileExt}`
    const filePath = `${fileName}`

    const { data: existingFiles, error: listError } = await supabase.storage
      .from("Resume")
      .list('public')

    if (listError) {
      alert("Error: Failed to check for duplicates")
      return
    }

    const isDuplicate = existingFiles.some(file => file.name === selectedFile.name)

    if (isDuplicate) {
      alert("Warning: A file with this name already exists. Uploading as a new file.")
    }

    const { data, error } = await supabase.storage
      .from("Resume")
      .upload(filePath, selectedFile)

    if (data) {
      alert("Success: Resume uploaded successfully")
      analyzeResume()
    } else if (error) {
      alert("Error: Failed to upload resume")
    }
  }

  const handleEmailGeneration = () => {
    console.log('Generating email')
    alert("Email Generation: Your email is being generated...")
  }

  const handleGetSuggestions = () => {
    console.log('Getting suggestions')
    alert("Suggestions: Fetching personalized suggestions...")
  }

  const analyzeResume = () => {
    setAnalysisResult("Your resume has been analyzed. Here are some key findings: ...")
    setJobPostings([
      "Software Engineer at TechCorp",
      "Data Analyst at DataCo",
      "Product Manager at InnovateInc"
    ])
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

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Resume Input Section */}
        <motion.section variants={cardVariants} initial="hidden" animate="visible">
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center text-blue-800">
                <Upload className="mr-2" /> Resume Input
              </CardTitle>
              <CardDescription>Upload your resume for analysis</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Input type="file" onChange={handleResumeUpload} className="mb-4" accept=".pdf,.doc,.docx" />
              {filePreview && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Selected File Preview:</h3>
                  <iframe src={filePreview} className="w-full h-96 border rounded" />
                </div>
              )}
              {selectedFile && !filePreview && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Selected File:</h3>
                  <p className="flex items-center">
                    <FileText className="mr-2 text-blue-600" />
                    {selectedFile.name}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button onClick={() => document.querySelector('input[type="file"]')?.click()} className="w-full bg-blue-600 hover:bg-blue-700">
                Select Resume <ArrowRight className="ml-2" />
              </Button>
              <Button onClick={handleSubmitResume} className="w-full bg-green-600 hover:bg-green-700" disabled={!selectedFile}>
                Submit Resume <Send className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </motion.section>

        {/* Cold Mailing Section */}
        <motion.section variants={cardVariants} initial="hidden" animate="visible">
          <Card className="shadow-lg">
            <CardHeader className="bg-purple-50">
              <CardTitle className="flex items-center text-purple-800">
                <Mail className="mr-2" /> Cold Mailing
              </CardTitle>
              <CardDescription>Generate personalized cold emails</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Textarea 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter job description..."
                className="mb-4 h-32"
              />
            </CardContent>
            <CardFooter>
              <Button onClick={handleEmailGeneration} className="w-full bg-purple-600 hover:bg-purple-700">
                Generate Email <ArrowRight className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </motion.section>

        {/* Suggestions Section */}
        <motion.section variants={cardVariants} initial="hidden" animate="visible">
          <Card className="shadow-lg">
            <CardHeader className="bg-yellow-50">
              <CardTitle className="flex items-center text-yellow-800">
                <Lightbulb className="mr-2" /> Suggestions
              </CardTitle>
              <CardDescription>Get personalized career advice</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Textarea 
                value={suggestions} 
                onChange={(e) => setSuggestions(e.target.value)} 
                placeholder="Suggestions will appear here..."
                className="mb-4 h-32"
              />
            </CardContent>
            <CardFooter>
              <Button onClick={handleGetSuggestions} className="w-full bg-yellow-600 hover:bg-yellow-700">
                Get Suggestions <ArrowRight className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </motion.section>

        {/* Analysis and Job Postings Section */}
        <motion.section variants={cardVariants} initial="hidden" animate="visible">
          <Card className="shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center text-green-800">
                <Search className="mr-2" /> Resume Analysis and Job Postings
              </CardTitle>
              <CardDescription>View your resume analysis and relevant job postings</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Resume Analysis</h3>
                <p className="bg-white p-4 rounded-md border border-gray-200">
                  {analysisResult || "Upload your resume to see the analysis."}
                </p>
              </div>
              <Separator className="my-4" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Relevant Job Postings</h3>
                {jobPostings.length > 0 ? (
                  <ul className="space-y-2">
                    {jobPostings.map((job, index) => (
                      <li key={index} className="bg-white p-3 rounded-md border border-gray-200">
                        <span className="flex items-center">
                          <Briefcase className="mr-2 h-4 w-4 text-green-600" />
                          {job}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="bg-white p-4 rounded-md border border-gray-200">
                    No job postings available. Upload your resume to see relevant jobs.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}