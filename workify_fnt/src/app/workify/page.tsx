'use client'

import { useState, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { Upload, Mail, Lightbulb, ArrowRight, FileText, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { createClient } from '@supabase/supabase-js'

export default function Workify() {
  const [email, setEmail] = useState('')
  const [suggestions, setSuggestions] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)

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
    
    // Create a preview for PDF files
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
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `public/${fileName}`

    // Check for duplicates
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
              <Input type="file" onChange={handleResumeUpload} className="mb-4" accept=".pdf,.doc,.docx" />
              {filePreview && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Selected File Preview:</h3>
                  <iframe src={filePreview} className="w-full h-64 border rounded" />
                </div>
              )}
              {selectedFile && !filePreview && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Selected File:</h3>
                  <p className="flex items-center">
                    <FileText className="mr-2" />
                    {selectedFile.name}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button onClick={() => document.querySelector('input[type="file"]')?.click()} className="w-full">
                Select Resume <ArrowRight className="ml-2" />
              </Button>
              <Button onClick={handleSubmitResume} className="w-full" disabled={!selectedFile}>
                Submit Resume <Send className="ml-2" />
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