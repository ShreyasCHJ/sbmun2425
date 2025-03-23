import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"

const teamMembers = [
  {
    name: "Suprathik",
    role: "Secretary-General",
    bio: "Passionate about global issues, public speaking, and critical thinking.",
    image: "/images/secretariat/suprathik.png",
  },
  {
    name: "Shreya",
    role: "Director-General",
    bio: "In charge of staffing and management, with four years of Model UN experience.",
    image: "/images/secretariat/shreya.png",
  },
  {
    name: "Tanush",
    role: "Under-Secretary-General of Logistics",
    bio: "Focuses on logistics while also enjoying taekwondo and sports.",
    image: "/images/secretariat/tanush.png",
  },
  {
    name: "Dhruv",
    role: "Under-Secretary-General of Logistics",
    bio: "A four-year MUN participant who enjoys soccer and movies.",
    image: "/images/secretariat/dhruv.png",
  },
  {
    name: "Archit",
    role: "Under-Secretary-General of Committees",
    bio: "A fan of debate, ethical hacking, and baking.",
    image: "/images/secretariat/archit.png",
  },
  {
    name: "Shreyas",
    role: "Under-Secretary-General of Committees",
    bio: "Loves discussing international issues and editing videos.",
    image: "/images/secretariat/shreyas.png",
  },
  {
    name: "Charlotte",
    role: "Under-Secretary-General of Finance",
    bio: "A senior with extensive public speaking and leadership experience.",
    image: "/images/secretariat/charlotte.png",
  },
  {
    name: "Aryaa",
    role: "Under-Secretary-General of Public Relations",
    bio: "Enjoys learning about international politics and improving writing skills.",
    image: "/images/secretariat/aryaa.png",
  },
]

// Split the team members into two rows of four
const firstRow = teamMembers.slice(0, 4)
const secondRow = teamMembers.slice(4, 8)

export default function SecretariatPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedText as="h1" className="mb-2 text-center text-4xl font-bold text-purple-800 md:text-5xl">
        Meet the 2024-2025 Secretariat
      </AnimatedText>
      <AnimatedText as="p" className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600" delay={0.1}>
        Our organizing team consists of experienced Model UN members dedicated to making SBMUN IX a success.
      </AnimatedText>

      {/* First Row */}
      <AnimatedSection className="mb-8" direction="up">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {firstRow.map((member, index) => (
            <Card
              key={`first-row-${member.name}-${index}`}
              className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardContent className="bg-gradient-to-r from-purple-50 to-white p-4">
                <h3 className="mb-1 text-xl font-bold text-purple-800">{member.name}</h3>
                <h4 className="mb-3 text-sm font-medium text-purple-600">{member.role}</h4>
                <p className="text-gray-700">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* Second Row */}
      <AnimatedSection className="mb-16" direction="up" delay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {secondRow.map((member, index) => (
            <Card
              key={`second-row-${member.name}-${index}`}
              className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardContent className="bg-gradient-to-r from-purple-50 to-white p-4">
                <h3 className="mb-1 text-xl font-bold text-purple-800">{member.name}</h3>
                <h4 className="mb-3 text-sm font-medium text-purple-600">{member.role}</h4>
                <p className="text-gray-700">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="rounded-lg bg-purple-100 p-8" direction="right">
        <h2 className="mb-6 text-center text-2xl font-bold text-purple-800">Leadership Philosophy</h2>
        <p className="mx-auto max-w-4xl text-center text-lg text-gray-700">
          Our Secretariat team is committed to creating an inclusive, educational, and engaging conference experience.
          We believe in the power of Model UN to transform students into confident global citizens and future leaders.
          Each member of our team brings unique skills and perspectives, united by a shared passion for international
          relations and student development.
        </p>
      </AnimatedSection>
    </div>
  )
}

