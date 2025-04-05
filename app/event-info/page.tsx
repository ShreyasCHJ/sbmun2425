import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarDays, Clock, MapPin, Navigation, Building, Users, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import Image from "next/image"

export default function EventInfoPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <AnimatedText as="h1" className="mb-6 text-center text-4xl font-bold text-purple-800 md:text-5xl">
        Event Information
      </AnimatedText>

      <AnimatedSection className="relative mb-10 overflow-hidden rounded-lg" direction="up">
        <div className="relative h-[350px] w-full">
          <Image
            src="/images/monta-vista-aerial.jpeg"
            alt="Monta Vista High School Campus"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/70 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h2 className="text-3xl font-bold mb-3">Our Venue</h2>
              <p className="text-lg">
                SBMUN IX will be held at Monta Vista High School in Cupertino, California. The campus offers modern
                facilities, spacious committee rooms, and all the amenities needed for a successful conference.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-10" direction="right">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="border-purple-200 transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
            <CardHeader className="bg-purple-50 pb-2">
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <CalendarDays className="h-5 w-5" />
                Conference Date
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <p className="text-xl font-medium text-gray-800">April 5, 2025</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
            <CardHeader className="bg-purple-50 pb-2">
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Clock className="h-5 w-5" />
                Registration Opens
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <p className="text-xl font-medium text-gray-800">7:30 AM</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
            <CardHeader className="bg-purple-50 pb-2">
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <MapPin className="h-5 w-5" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <p className="text-xl font-medium text-gray-800">Monta Vista High School</p>
              <p className="text-gray-600">21840 McClellan Rd, Cupertino, CA 95014</p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      {/* Campus Map and Committee Locations */}
      <AnimatedSection className="mb-10" direction="up">
        <h2 className="mb-6 text-center text-3xl font-bold text-purple-800">Campus Map & Committee Locations</h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2 relative">
            <div className="sticky top-20">
              <div className="rounded-lg overflow-hidden border-2 border-purple-200 shadow-md">
                <Image
                  src="/images/campus-map.png"
                  alt="Monta Vista High School Campus Map"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-2 text-sm text-center text-gray-500">Click or tap on the map to enlarge</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Users className="h-5 w-5" />
                    General Assembly Committees
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-5">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-700 min-w-[100px]">WTO:</span>
                      <span className="text-gray-700">Library (L)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-700 min-w-[100px]">UNODC:</span>
                      <span className="text-gray-700">C210 (Building C, 2nd floor)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Building className="h-5 w-5" />
                    Specialized Committees
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-5">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-700 min-w-[100px]">Apocalypse:</span>
                      <span className="text-gray-700">B103 (Building B, 1st floor)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-700 min-w-[100px]">Senate:</span>
                      <span className="text-gray-700">C110 (Building C, 1st floor)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Navigation className="h-5 w-5" />
                    Crisis Committees
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-5">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-700 min-w-[100px]">Dumbledore:</span>
                      <span className="text-gray-700">C102 (Building C, 1st floor)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-700 min-w-[100px]">Ctrl-Alt-Del:</span>
                      <span className="text-gray-700">C108 (Building C, 1st floor)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-700 min-w-[100px]">Hawaii:</span>
                      <span className="text-gray-700">C109 (Building C, 1st floor)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <MapPin className="h-5 w-5" />
                    Other Important Locations
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-5">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-700 min-w-[180px]">Opening/Closing Ceremony:</span>
                      <span className="text-gray-700">Rally Court</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-700 min-w-[180px]">Staff/Secretariat Room:</span>
                      <span className="text-gray-700">C107 (Building C, 1st floor)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-700 min-w-[180px]">Advisor Room:</span>
                      <span className="text-gray-700">C106 (Building C, 1st floor)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-10" direction="left">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <AnimatedText as="h2" className="mb-4 text-2xl font-bold text-purple-800" delay={0.1}>
              Conference Agenda
            </AnimatedText>
            <div className="overflow-hidden rounded-lg border border-purple-200 shadow-md hover:shadow-lg transition-all duration-300">
              <Table>
                <TableHeader className="bg-purple-100">
                  <TableRow>
                    <TableHead className="w-1/3 text-purple-800">Time</TableHead>
                    <TableHead className="text-purple-800">Activity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-purple-50 transition-colors duration-200">
                    <TableCell className="font-medium">7:30 AM - 8:00 AM</TableCell>
                    <TableCell>Registration Opens</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-purple-50 transition-colors duration-200">
                    <TableCell className="font-medium">8:00 AM - 8:30 AM</TableCell>
                    <TableCell>Opening Ceremony</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-purple-50 transition-colors duration-200">
                    <TableCell className="font-medium">8:30 AM - 11:00 AM</TableCell>
                    <TableCell>Committee Session 1</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-purple-50 transition-colors duration-200">
                    <TableCell className="font-medium">11:00 AM - 11:15 AM</TableCell>
                    <TableCell>Break</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-purple-50 transition-colors duration-200">
                    <TableCell className="font-medium">11:15 AM - 1:15 PM</TableCell>
                    <TableCell>Committee Session 2</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-purple-50 transition-colors duration-200">
                    <TableCell className="font-medium">1:15 PM - 2:15 PM</TableCell>
                    <TableCell>Lunch</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-purple-50 transition-colors duration-200">
                    <TableCell className="font-medium">2:15 PM - 5:00 PM</TableCell>
                    <TableCell>Committee Session 3</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-purple-50 transition-colors duration-200">
                    <TableCell className="font-medium">5:00 PM - 5:30 PM</TableCell>
                    <TableCell>Break</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-purple-50 transition-colors duration-200">
                    <TableCell className="font-medium">5:30 PM - 6:15 PM</TableCell>
                    <TableCell>Closing Ceremony</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[350px] relative overflow-hidden rounded-lg shadow-lg">
            <Image src="/images/lecture-hall.jpeg" alt="Lecture Hall" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
              <div className="p-5 text-white">
                <h3 className="text-xl font-bold mb-1">Engaging Sessions</h3>
                <p>Delegates will participate in three committee sessions throughout the day</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-10" direction="right">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1 h-[350px] relative overflow-hidden rounded-lg shadow-lg">
            <Image src="/images/committee-session.jpeg" alt="Committee Session" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
              <div className="p-5 text-white">
                <h3 className="text-xl font-bold mb-1">Committee Rooms</h3>
                <p>Modern, well-equipped spaces for productive debate and collaboration</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <AnimatedText as="h2" className="mb-4 text-2xl font-bold text-purple-800" delay={0.1}>
              Position Paper Guidelines
            </AnimatedText>
            <div className="rounded-lg bg-purple-50 p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <p className="mb-3 text-gray-700">
                To be eligible for awards, delegates must submit a position paper with the following structure:
              </p>
              <ul className="mb-5 list-inside list-disc space-y-1 text-gray-700">
                <li>Overview of the topic</li>
                <li>Country's/Individual's policies & research</li>
                <li>Proposed solutions</li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-purple-700">Submission Deadlines:</h3>
              <ul className="mb-5 list-inside list-disc space-y-1 text-gray-700">
                <li>March 28 for research awards</li>
                <li>April 4 for any committee award</li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-purple-700">Formatting:</h3>
              <ul className="list-inside list-disc space-y-1 text-gray-700">
                <li>2–5 pages</li>
                <li>Typed & double-spaced</li>
                <li>Submitted as a PDF (no Google Drive links)</li>
                <li>Email submission to committee's email</li>
              </ul>

              <div className="mt-5 rounded-lg bg-purple-100 p-4">
                <p className="font-medium text-purple-800">
                  Crisis Committees: Delegates must include a success plan for their assigned organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-10" direction="left">
        <AnimatedText as="h2" className="mb-6 text-center text-3xl font-bold text-purple-800" delay={0.1}>
          Conference Policies
        </AnimatedText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-purple-200 transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-purple-800">Technology Policy</CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <p className="mb-3 text-gray-700">Technology is allowed:</p>
              <ul className="list-inside list-disc space-y-1 text-gray-700">
                <li>Throughout the conference for Crisis Committees</li>
                <li>During Unmoderated Caucuses for GA & Specialized Committees</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Plagiarism from AI tools (e.g., ChatGPT) is strictly forbidden. Violators will be disqualified from
                awards.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-purple-800">Health & Safety</CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <ul className="list-inside list-disc space-y-1 text-gray-700">
                <li>If feeling unwell, notify the Secretariat or Committee Chair immediately.</li>
                <li>Delegates must provide signed conference forms at check-in.</li>
                <li>
                  A comprehensive Delegate Guide covering parliamentary procedures and other information will be
                  provided soon.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-10" direction="up">
        <AnimatedText as="h2" className="mb-6 text-center text-3xl font-bold text-purple-800" delay={0.1}>
          Delegate Guide
        </AnimatedText>
        <div className="mx-auto max-w-3xl bg-purple-50 p-6 rounded-lg shadow-md">
          <p className="mb-4 text-gray-700">
            We've prepared a comprehensive delegate guide to help you navigate SBMUN IX. This guide includes information
            on parliamentary procedure, points and motions, conference policies, and more.
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-purple-700 hover:bg-purple-800 flex items-center gap-2">
              <a href="/files/sbmun-delegate-guide.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                Download Delegate Guide
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}



