import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import Image from "next/image"
import { FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CommitteesPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <AnimatedText as="h1" className="mb-2 text-center text-4xl font-bold text-purple-800 md:text-5xl">
        Committees at SBMUN IX
      </AnimatedText>
      <AnimatedText as="p" className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-600" delay={0.1}>
        Delegates can participate in a variety of committees, ranging from General Assembly to Crisis Committees.
      </AnimatedText>

      <AnimatedSection className="mb-10" direction="up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/delegates-classroom.jpeg"
              alt="Delegates in Session"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/70 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h2 className="text-2xl font-bold mb-2">Engaging Committee Sessions</h2>
                <p className="text-lg max-w-md">Our committees provide an immersive diplomatic experience</p>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/un-conference.jpeg"
              alt="UN Conference"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/70 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h2 className="text-2xl font-bold mb-2">Professional Environment</h2>
                <p className="text-lg max-w-md">Experience the formality and procedures of real UN conferences</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-5xl" direction="right">
        <Tabs defaultValue="ga" className="w-full">
          <TabsList className="mb-6 grid w-full grid-cols-3">
            <TabsTrigger
              value="ga"
              className="text-sm sm:text-base data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800 transition-all duration-300"
            >
              General Assembly
            </TabsTrigger>
            <TabsTrigger
              value="specialized"
              className="text-sm sm:text-base data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800 transition-all duration-300"
            >
              Specialized Committees
            </TabsTrigger>
            <TabsTrigger
              value="crisis"
              className="text-sm sm:text-base data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800 transition-all duration-300"
            >
              Crisis Committees
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ga" className="space-y-5">
            <Card className="overflow-hidden transition-all hover:shadow-lg duration-300">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">World Trade Organization</CardTitle>
                <CardDescription>Novice + Double Delegation</CardDescription>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-gray-700">
                  <strong>Topic:</strong> Ramification of the Trump Administration's Tariffs
                </p>
                <p className="mt-3 text-gray-700">
                  Delegates will discuss the global economic impact of tariff policies implemented during the Trump
                  administration, exploring trade relationships, economic dependencies, and potential solutions to
                  promote fair and balanced international trade.
                </p>
              </CardContent>
              <CardFooter className="bg-gray-50 py-3">
                <Button asChild className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800">
                  <Link
                    href="https://drive.google.com/file/d/1N5FT7trw4SLgvj1TSsrV9we04PJgXwwy/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download WTO Background Guide"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Background Guide
                    <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg duration-300">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">United Nations Office on Drugs and Crime</CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-gray-700">
                  <strong>Topic:</strong> Organized Crime and the Spread of Opioids/Cocaine
                </p>
                <p className="mt-3 text-gray-700">
                  This committee will address the global challenge of drug trafficking networks, focusing on the opioid
                  epidemic and cocaine trade. Delegates will develop strategies to combat organized crime while
                  addressing public health concerns related to substance abuse.
                </p>
              </CardContent>
              <CardFooter className="bg-gray-50 py-3">
                <Button asChild className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800">
                  <Link
                    href="https://drive.google.com/file/d/1Vf2S9sTs-GtSsjcZNtJ4y4LdzuxY3uUf/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" />
                    Background Guide
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="specialized" className="space-y-5">
            <Card className="overflow-hidden transition-all hover:shadow-lg duration-300">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">Senate</CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-gray-700">
                  <strong>Topic:</strong> The National Split-State Initiative
                </p>
                <p className="mt-3 text-gray-700">
                  This committee simulates the U.S. Senate debating a controversial proposal to redraw state boundaries.
                  Delegates will represent senators navigating complex constitutional, political, and regional
                  interests.
                </p>
              </CardContent>
              <CardFooter className="bg-gray-50 py-3">
                <Button asChild className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800">
                  <Link
                    href="https://drive.google.com/file/d/1Hk-lqMF720MhiB3M9L-IxrjIGEJ0qqAt/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" />
                    Background Guide
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg duration-300">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">Apocalypse</CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-gray-700">
                  <strong>Topic:</strong> The CARMA Pandemic
                </p>
                <p className="mt-3 text-gray-700">
                  In this specialized committee, delegates will face a fictional global pandemic scenario, making
                  critical decisions about public health measures, international cooperation, and resource allocation
                  during a rapidly evolving crisis.
                </p>
              </CardContent>
              <CardFooter className="bg-gray-50 py-3">
                <Button asChild className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800">
                  <Link
                    href="https://drive.google.com/file/d/1qrfoQwFRM6pumxKmhkDZRHVTptc8eX6d/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" />
                    Background Guide
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="crisis" className="space-y-5">
            <Card className="overflow-hidden transition-all hover:shadow-lg duration-300">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">Ctrl-Alt-Del</CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-gray-700">
                  <strong>Topic:</strong> Re-balancing Technology and Government
                </p>
                <p className="mt-3 text-gray-700">
                  This crisis committee explores the tension between technological advancement and government
                  regulation. Delegates will represent key stakeholders navigating cybersecurity threats, privacy
                  concerns, and the evolving digital landscape.
                </p>
              </CardContent>
              <CardFooter className="bg-gray-50 py-3">
                <Button asChild className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800">
                  <Link
                    href="https://drive.google.com/file/d/124Ne-HA0pq56eFYuIXQMPpprAVwDiS7e/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" />
                    Background Guide
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg duration-300">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">Hawaiian Crisis</CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-gray-700">
                  <strong>Topic:</strong> Queen Lili'uokalani's Special Summit
                </p>
                <p className="mt-3 text-gray-700">
                  Set in a historical context, this committee examines the overthrow of the Hawaiian monarchy. Delegates
                  will represent historical figures navigating complex diplomatic, cultural, and geopolitical challenges
                  during this pivotal moment in Hawaiian history.
                </p>
              </CardContent>
              <CardFooter className="bg-gray-50 py-3">
                <Button asChild className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800">
                  <Link
                    href="https://drive.google.com/file/d/1hLchlk_25p2sl3aom7BpsZkNkViJK2_s/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" />
                    Background Guide
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg duration-300">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">Dumbledore Crisis</CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-gray-700">
                  <strong>Topic:</strong> Hogwarts Gets Leaked
                </p>
                <p className="mt-3 text-gray-700">
                  In this creative crisis committee, delegates will role-play as characters from the Harry Potter
                  universe dealing with a major security breach that threatens to expose the wizarding world to muggles.
                  This committee combines fantasy elements with real-world diplomatic and crisis management skills.
                </p>
              </CardContent>
              <CardFooter className="bg-gray-50 py-3">
                <Button asChild className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800">
                  <Link
                    href="https://drive.google.com/file/d/17Ze563b0GqEqGr8TrPLi83kRxG1bH_k-/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" />
                    Background Guide
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </AnimatedSection>

      <AnimatedSection className="mt-10 rounded-lg bg-purple-100 p-6" direction="up">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/3 h-[200px] relative overflow-hidden rounded-lg">
            <Image src="/images/committee-session.jpeg" alt="Committee Session" fill className="object-cover" />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <AnimatedText as="h2" className="mb-3 text-2xl font-bold text-purple-800" delay={0.1}>
              Committee Assignments
            </AnimatedText>
            <AnimatedText as="p" className="text-lg text-gray-700" delay={0.2}>
              Country and character assignments will be sent after registration is complete. We strive to match
              delegates with committees that align with their experience level and interests. Position papers will be
              due one week before the conference.
            </AnimatedText>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

