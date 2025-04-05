import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-purple-800">SBMUN IX</h3>
            <p className="text-gray-600">Change the World, One Resolution at a Time</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-purple-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-800">
                  About SBMUN
                </Link>
              </li>
              <li>
                <Link href="/committees" className="text-gray-600 hover:text-purple-800">
                  Committees
                </Link>
              </li>
              <li>
                <Link href="/event-info" className="text-gray-600 hover:text-purple-800">
                  Event Information
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-600 hover:text-purple-800">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-purple-800">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/files/sbmun-delegate-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-800"
                >
                  Delegate Guide
                </Link>
              </li>
              <li>
                <Link href="/event-info" className="text-gray-600 hover:text-purple-800">
                  Position Paper Guidelines
                </Link>
              </li>
              <li>
                <Link href="/event-info" className="text-gray-600 hover:text-purple-800">
                  Conference Policies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-purple-800">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-purple-800">Contact</h3>
            <address className="not-italic text-gray-600">
              <p>Monta Vista High School</p>
              <p>21840 McClellan Rd</p>
              <p>Cupertino, CA 95014</p>
              <p className="mt-2">
                <a href="mailto:southbaymun@gmail.com" className="hover:text-purple-800">
                  southbaymun@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-purple-200 pt-8 text-center text-gray-600">
          <p>© {currentYear} South Bay Model United Nations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}



