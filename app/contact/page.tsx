"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-2 text-center text-4xl font-bold text-purple-800 md:text-5xl">Contact Us</h1>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
        Have questions about SBMUN IX? We're here to help! Reach out to us using any of the methods below.
      </p>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card className="border-purple-200 text-center">
          <CardContent className="pt-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-purple-800">Email</h3>
            <p className="text-gray-700">southbaymun@gmail.com</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 text-center">
          <CardContent className="pt-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Phone className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-purple-800">Phone</h3>
            <p className="text-gray-700">(408) 555-1234</p>
            <p className="text-sm text-gray-500">Available Mon-Fri, 9AM-5PM PT</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 text-center">
          <CardContent className="pt-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-purple-800">Location</h3>
            <p className="text-gray-700">
              Monta Vista High School
              <br />
              21840 McClellan Rd
              <br />
              Cupertino, CA 95014
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto mb-16 max-w-3xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-purple-800">Send Us a Message</h2>
        <Card className="border-purple-200">
          <CardContent className="pt-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-purple-200"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="border-purple-200"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-700">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="Message subject"
                  className="border-purple-200"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px] border-purple-200"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-4xl rounded-lg bg-purple-50 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold text-purple-800">Follow Us</h2>
        <p className="mb-6 text-lg text-gray-700">
          Stay updated with the latest news and announcements about SBMUN IX by following us on social media.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-100 hover:text-purple-800"
            as="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Button>
          <Button
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-100 hover:text-purple-800"
            as="a"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Button>
          <Button
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-100 hover:text-purple-800"
            as="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Button>
        </div>
      </div>
    </div>
  )
}

