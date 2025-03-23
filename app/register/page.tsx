import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-2 text-center text-4xl font-bold text-purple-800 md:text-5xl">Registration & Fees</h1>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
        Secure your spot at SBMUN IX by completing the registration process below.
      </p>

      <div className="mb-16">
        <h2 className="mb-6 text-center text-3xl font-bold text-purple-800">Registration Timeline</h2>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-purple-200 shadow-md">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-purple-100">
                <TableRow>
                  <TableHead className="w-1/4 text-purple-800">Date</TableHead>
                  <TableHead className="w-2/5 text-purple-800">Details</TableHead>
                  <TableHead className="text-purple-800">Fees</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">March 12</TableCell>
                  <TableCell>Early Registration Deadline</TableCell>
                  <TableCell>$35 per school, $25 per delegate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">March 14</TableCell>
                  <TableCell>Early Registration Payments Due</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">March 12</TableCell>
                  <TableCell>Last day for full refunds</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">March 13 - April 2</TableCell>
                  <TableCell>Regular Registration</TableCell>
                  <TableCell>$40 per school, $30 per delegate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">April 4</TableCell>
                  <TableCell>Regular Registration Payments Due</TableCell>
                  <TableCell>No refunds</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="border-purple-200">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-purple-800">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-inside list-disc space-y-4 text-gray-700">
              <li>
                <strong>Online Payment:</strong> Via Monta Vista High School Student Store
              </li>
              <li>
                <strong>Check Payment:</strong>
                <ul className="ml-6 mt-2 list-inside list-disc space-y-2">
                  <li>Payable to: Monta Vista ASB</li>
                  <li>Memo: SBMUNIX & Delegation Name</li>
                  <li>
                    Mailing Address: Monta Vista High School
                    <br />
                    21840 McClellan Rd
                    <br />
                    Cupertino, CA 95014
                  </li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-purple-800">Important Notes</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-inside list-disc space-y-4 text-gray-700">
              <li>
                <strong>Country Assignments:</strong> Will be sent only after payment is received.
              </li>
              <li>
                <strong>Delegation Size:</strong> Schools may register multiple delegations of varying sizes.
              </li>
              <li>
                <strong>Chaperones:</strong> Each school must provide at least one adult chaperone who will be present
                for the duration of the conference.
              </li>
              <li>
                <strong>Forms:</strong> All delegates must submit signed permission forms prior to the conference.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Alert className="mb-16 border-purple-300 bg-purple-50">
        <InfoIcon className="h-4 w-4 text-purple-800" />
        <AlertTitle className="text-purple-800">Registration Inquiry</AlertTitle>
        <AlertDescription className="text-gray-700">
          For any questions regarding registration, please contact us at{" "}
          <span className="font-medium">southbaymun@gmail.com</span>
        </AlertDescription>
      </Alert>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-purple-800">Ready to Register?</h2>
        <p className="mb-8 text-lg text-gray-700">
          Click the button below to start your registration process for SBMUN IX. Early registration is recommended to
          secure your preferred committee assignments.
        </p>
        <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScRe_H9Dhu24rqehjwkDyt5mduwoaCpmpym6QUwL2j_AfJsZQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            Register Now
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

