import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import Link from "next/link"
import { ChevronRight, Award, Globe, Users, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/80 z-10" />
        <Image src="/images/un-conference.jpeg" alt="Model UN Conference" fill className="object-cover" priority />
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <AnimatedText as="h1" className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" delay={0.1}>
            About SBMUN
          </AnimatedText>
          <AnimatedText as="p" className="mx-auto max-w-2xl text-lg md:text-xl" delay={0.2}>
            Fostering the next generation of global leaders through diplomacy and debate
          </AnimatedText>
        </div>
      </section>

      {/* Mission Statement with Quote */}
      <AnimatedSection className="py-16 bg-white" direction="up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText as="h2" className="text-3xl font-bold text-purple-800 mb-6" delay={0.1}>
              Our Mission
            </AnimatedText>

            <div className="mb-8 relative">
              <div className="absolute -top-6 -left-6 text-8xl text-purple-200">"</div>
              <p className="text-xl text-gray-700 italic relative z-10">
                South Bay MUN is dedicated to fostering the next generation of global leaders by providing a platform
                for students to develop critical thinking, public speaking, and diplomatic skills in a supportive and
                engaging environment.
              </p>
              <div className="absolute -bottom-6 -right-6 text-8xl text-purple-200">"</div>
            </div>

            <p className="text-lg text-gray-600">
              Co-hosted by Monta Vista High School and Homestead High School, SBMUN welcomes middle school and high
              school students of all experience levels to engage in global diplomacy and collaborative problem-solving.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* What We Offer Section - Keeping as requested */}
      <AnimatedSection className="py-16 bg-gray-50" direction="up">
        <div className="container mx-auto px-4">
          <AnimatedText as="h2" className="mb-6 text-center text-3xl font-bold text-purple-800" delay={0.1}>
            What We Offer
          </AnimatedText>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-purple-200 bg-purple-50 transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
              <CardContent className="p-5">
                <h3 className="mb-2 text-xl font-semibold text-purple-700">Public Speaking</h3>
                <p className="text-gray-700">
                  Develop confidence and articulation through formal speeches, moderated caucuses, and negotiations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50 transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
              <CardContent className="p-5">
                <h3 className="mb-2 text-xl font-semibold text-purple-700">Debate</h3>
                <p className="text-gray-700">
                  Engage in structured debate on complex global issues, learning to construct and defend arguments.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50 transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
              <CardContent className="p-5">
                <h3 className="mb-2 text-xl font-semibold text-purple-700">Foreign Policy</h3>
                <p className="text-gray-700">
                  Research and represent countries' positions on international issues, understanding diverse
                  perspectives.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50 transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
              <CardContent className="p-5">
                <h3 className="mb-2 text-xl font-semibold text-purple-700">Global Politics</h3>
                <p className="text-gray-700">
                  Explore current events and historical contexts that shape our world today.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* The SBMUN Experience */}
      <AnimatedSection className="py-16 bg-white" direction="right">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <AnimatedText as="h2" className="text-3xl font-bold text-purple-800 mb-6" delay={0.1}>
                The SBMUN Experience
              </AnimatedText>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Real-World Simulation</h3>
                    <p className="text-gray-700">
                      SBMUN provides an authentic simulation of United Nations proceedings, allowing students to step
                      into the shoes of international diplomats. Delegates research their assigned countries, draft
                      resolutions, and engage in formal debate following parliamentary procedure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Collaborative Problem-Solving</h3>
                    <p className="text-gray-700">
                      Through this immersive experience, participants gain valuable skills in negotiation, critical
                      thinking, and collaborative problem-solving – all while developing a deeper understanding of
                      global issues and international relations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Award className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Recognition and Awards</h3>
                    <p className="text-gray-700">
                      Delegates have the opportunity to earn awards for their performance, including Best Delegate,
                      Outstanding Delegate, and Honorable Mention. These recognitions celebrate excellence in research,
                      public speaking, negotiation, and leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/committee-presentation.jpeg"
                  alt="Committee Presentation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Develop Essential Skills</h3>
                    <p className="text-lg">
                      Public speaking, critical thinking, research, and leadership skills that last a lifetime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Development */}
      <AnimatedSection className="py-16 bg-purple-900 text-white" direction="left">
        <div className="container mx-auto px-4">
          <AnimatedText as="h2" className="text-3xl font-bold text-center mb-12" delay={0.1}>
            Skills That Last a Lifetime
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-800/50 p-6 rounded-lg hover:bg-purple-800/70 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-purple-700 flex items-center justify-center">
                  <BookOpen className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Academic Excellence</h3>
              <p className="text-purple-100">
                MUN participation enhances research abilities, critical analysis, and writing skills that translate
                directly to academic success. Many colleges and universities recognize the value of MUN experience in
                their admissions process.
              </p>
            </div>

            <div className="bg-purple-800/50 p-6 rounded-lg hover:bg-purple-800/70 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-purple-700 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Professional Development</h3>
              <p className="text-purple-100">
                The conference environment fosters leadership, teamwork, and effective communication – skills that are
                essential for success in college and beyond. Former MUN participants often excel in professional
                settings due to their experience with negotiation and public speaking.
              </p>
            </div>

            <div className="bg-purple-800/50 p-6 rounded-lg hover:bg-purple-800/70 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-purple-700 flex items-center justify-center">
                  <Globe className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Global Perspective</h3>
              <p className="text-purple-100">
                SBMUN helps students develop a nuanced understanding of international relations and global challenges.
                Delegates learn to consider multiple perspectives and appreciate the complexity of world issues,
                preparing them to be informed global citizens.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Join Us CTA */}
      <AnimatedSection className="py-16 bg-white" direction="up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText as="h2" className="text-3xl font-bold text-purple-800 mb-6" delay={0.1}>
              Join Us at SBMUN IX
            </AnimatedText>

            <p className="text-lg text-gray-700 mb-8">
              Whether you're a seasoned MUN delegate or just starting your journey in international relations, SBMUN IX
              offers a welcoming and enriching experience. Join us on April 5, 2025, and be part of a community
              dedicated to making a positive impact on the world. Our team of experienced staff members is committed to
              creating an educational, engaging, and memorable conference for all participants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScRe_H9Dhu24rqehjwkDyt5mduwoaCpmpym6QUwL2j_AfJsZQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                <Link href="/committees" className="flex items-center">
                  Explore Committees <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

