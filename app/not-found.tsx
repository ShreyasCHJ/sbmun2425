import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-purple-800">404</h1>
      <h2 className="mb-6 text-2xl font-semibold text-gray-700">Page Not Found</h2>
      <p className="mb-8 max-w-md text-gray-600">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button asChild className="bg-purple-700 hover:bg-purple-800">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  )
}

