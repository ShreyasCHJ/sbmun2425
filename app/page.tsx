import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CalendarDays, MapPin, Users, Globe2, Award, BookOpen, ChevronRight } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/80 z-10" />
        <Image
          src="/images/monta-vista-aerial.jpeg"
          alt="Monta Vista High School Aerial View"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <AnimatedText as="h1" className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" delay={0.1}>
            South Bay Model United Nations
          </AnimatedText>
          <AnimatedText as="h2" className="mb-4 text-xl sm:text-2xl md:text-3xl" delay={0.2}>
            Change the World, One Resolution at a Time
          </AnimatedText>
          <AnimatedText as="p" className="mb-6 max-w-2xl text-lg" delay={0.3}>
            Join us on April 5, 2025 at Monta Vista High School for SBMUN IX
          </AnimatedText>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 animate-pulse">
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
              className="border-white text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Info Section */}
      <AnimatedSection className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-purple-50 p-5 text-center shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="mb-3 rounded-full bg-purple-100 p-3">
                <CalendarDays className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-purple-800">April 5, 2025</h3>
              <p className="text-gray-600">Mark your calendars for a full day of engaging debate</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-purple-50 p-5 text-center shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="mb-3 rounded-full bg-purple-100 p-3">
                <MapPin className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-purple-800">Monta Vista High School</h3>
              <p className="text-gray-600">21840 McClellan Rd, Cupertino, CA 95014</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-purple-50 p-5 text-center shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="mb-3 rounded-full bg-purple-100 p-3">
                <Users className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-purple-800">Open to All Students</h3>
              <p className="text-gray-600">Middle school and high school students welcome</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Conference Experience */}
      <AnimatedSection className="py-10 bg-gray-50" direction="right">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <AnimatedText as="h2" className="text-3xl font-bold text-purple-800 sm:text-4xl" delay={0.1}>
              The SBMUN Experience
            </AnimatedText>
            <p className="mt-2 text-lg text-gray-600">Immerse yourself in global diplomacy and debate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg duration-300 flex flex-col h-full">
              <div className="relative h-48">
                <Image src="/images/un-conference.jpeg" alt="UN-Style Conference" fill className="object-cover" />
              </div>
              <div className="bg-white p-4 flex-grow">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Professional Environment</h3>
                <p className="text-gray-600">Experience the formality and procedures of real UN conferences</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg duration-300 flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src="/images/committee-presentation.jpeg"
                  alt="Committee Presentation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-4 flex-grow">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Develop Presentation Skills</h3>
                <p className="text-gray-600">Present resolutions and defend your country's position</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg duration-300 flex flex-col h-full">
              <div className="relative h-48">
                <Image src="/images/committee-session.jpeg" alt="Committee Session" fill className="object-cover" />
              </div>
              <div className="bg-white p-4 flex-grow">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Collaborative Problem-Solving</h3>
                <p className="text-gray-600">Work with fellow delegates to address global challenges</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="bg-purple-700 hover:bg-purple-800">
              <Link href="/about" className="flex items-center">
                Learn More About SBMUN <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Committees */}
      <AnimatedSection className="bg-purple-900 py-10 text-white" direction="left">
        <div className="container mx-auto px-4">
          <AnimatedText as="h2" className="mb-8 text-center text-3xl font-bold sm:text-4xl" delay={0.1}>
            Featured Committees
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg bg-purple-800 p-5 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl duration-300">
              <div className="mb-3 flex items-center justify-center">
                <Globe2 className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-center text-xl font-semibold">General Assembly</h3>
              <ul className="space-y-1 text-purple-100">
                <li>• World Trade Organization</li>
                <li>• UN Office on Drugs and Crime</li>
              </ul>
            </div>

            <div className="rounded-lg bg-purple-800 p-5 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl duration-300">
              <div className="mb-3 flex items-center justify-center">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-center text-xl font-semibold">Specialized Committees</h3>
              <ul className="space-y-1 text-purple-100">
                <li>• Senate: National Split-State Initiative</li>
                <li>• Apocalypse: The CARMA Pandemic</li>
              </ul>
            </div>

            <div className="rounded-lg bg-purple-800 p-5 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl duration-300">
              <div className="mb-3 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-center text-xl font-semibold">Crisis Committees</h3>
              <ul className="space-y-1 text-purple-100">
                <li>• Ctrl-Alt-Del: Technology & Government</li>
                <li>• Hawaiian Crisis: Queen Lili'uokalani</li>
                <li>• Dumbledore Crisis: Hogwarts Gets Leaked</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 transition-transform hover:scale-105 duration-300"
            >
              <Link href="/committees">View All Committees</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Bay Area Location */}
      <AnimatedSection className="py-10 bg-white" direction="up">
        <div className="container mx-auto px-4">
          <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg mb-6">
            <Image src="/images/sf-night.jpeg" alt="San Francisco Bay Area" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Located in the Heart of Silicon Valley</h2>
                <p className="text-lg">Join us in Cupertino, California for SBMUN IX</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/campus-dusk.jpeg" alt="Campus at Dusk" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Modern Facilities</h3>
                  <p>State-of-the-art venue for your MUN experience</p>
                </div>
              </div>
            </div>

            <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/mv-graduates.jpeg" alt="Monta Vista High School" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Monta Vista High School</h3>
                  <p>Home to a tradition of academic excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Conference Schedule Preview */}
      <AnimatedSection className="py-10 bg-purple-50" direction="right">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <AnimatedText as="h2" className="text-3xl font-bold text-purple-800 sm:text-4xl" delay={0.1}>
              Conference Schedule
            </AnimatedText>
            <p className="mt-2 text-lg text-gray-600">A full day of diplomatic engagement</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-0.5 bg-purple-300" aria-hidden="true"></div>

              <div className="mb-8 flex items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white z-10">
                  <span className="text-sm font-semibold">1</span>
                </div>
                <div className="ml-4 rounded-lg bg-white p-4 shadow-md">
                  <div className="font-semibold text-purple-800">7:30 AM - 8:30 AM</div>
                  <div className="text-gray-700">Registration & Opening Ceremony</div>
                </div>
              </div>

              <div className="mb-8 flex items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white z-10">
                  <span className="text-sm font-semibold">2</span>
                </div>
                <div className="ml-4 rounded-lg bg-white p-4 shadow-md">
                  <div className="font-semibold text-purple-800">8:30 AM - 11:00 AM</div>
                  <div className="text-gray-700">Committee Session 1</div>
                </div>
              </div>

              <div className="mb-8 flex items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white z-10">
                  <span className="text-sm font-semibold">3</span>
                </div>
                <div className="ml-4 rounded-lg bg-white p-4 shadow-md">
                  <div className="font-semibold text-purple-800">11:15 AM - 1:15 PM</div>
                  <div className="text-gray-700">Committee Session 2</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white z-10">
                  <span className="text-sm font-semibold">4</span>
                </div>
                <div className="ml-4 rounded-lg bg-white p-4 shadow-md">
                  <div className="font-semibold text-purple-800">2:15 PM - 6:15 PM</div>
                  <div className="text-gray-700">Committee Session 3 & Closing Ceremony</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-purple-700 hover:bg-purple-800">
                <Link href="/event-info" className="flex items-center">
                  View Full Schedule <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="bg-gradient-to-r from-purple-700 to-purple-500 py-10 text-white" direction="up">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText as="h2" className="mb-4 text-3xl font-bold sm:text-4xl" delay={0.1}>
            Ready to Join SBMUN IX?
          </AnimatedText>
          <AnimatedText as="p" className="mx-auto mb-6 max-w-2xl text-lg" delay={0.2}>
            Register now to secure your spot and be part of this exciting diplomatic experience. Early registration ends
            March 12, 2025.
          </AnimatedText>
          <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100 animate-bounce">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScRe_H9Dhu24rqehjwkDyt5mduwoaCpmpym6QUwL2j_AfJsZQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  )
}

