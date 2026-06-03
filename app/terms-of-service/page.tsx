"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

function TermsOfService() {
  return (
    <div className="terms-of-service-page bg-background min-h-screen py-12">
      
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>

          <p className="text-muted-foreground text-base lg:text-lg">
            Effective From: 23 February 2018
          </p>
        </div>

        <Card className="border shadow-lg rounded-3xl">
          <CardContent className="p-6 md:p-10 lg:p-12">

            {/* Company Info */}
            <div className="bg-muted/40 rounded-2xl p-6 mb-10">
              <h2 className="text-2xl font-bold mb-4">
                Webeside Technology
              </h2>

              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>GST:</strong> 06CEWPB0138N1Z8
                </p>

                <p>
                  <strong>Address:</strong> 3H-47, NIT 3, Near DAV College,
                  Faridabad, Haryana, India
                </p>

                <p>
                  <strong>Contact:</strong> +91 88-6087-6087
                </p>

                <p>
                  <strong>Email:</strong> Info@webeside.in
                </p>
              </div>
            </div>

            <Separator className="mb-10" />

            {/* 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                By accessing our website, engaging our services, or making any
                payment to Webeside Technology, you agree to be legally bound by
                these Terms and Conditions. If you do not agree, please refrain
                from using our services.
              </p>
            </section>

            {/* 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                2. Services Offered
              </h2>

              <p className="text-muted-foreground mb-4">
                Webeside Technology provides professional digital services
                including but not limited to:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Website Design & Development</li>
                <li>
                  Mobile Application Development (Android, iOS, PWA)
                </li>
                <li>Custom Software Development</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Paid Advertising (Google Ads, Meta Ads, etc.)</li>
                <li>Social Media Management & Marketing</li>
                <li>
                  Branding, UI/UX Design, and Digital Consulting
                </li>
              </ul>

              <p className="text-muted-foreground mt-4 leading-relaxed">
                The detailed scope, timelines, and deliverables are defined in
                the quotation, proposal, or service agreement shared with the
                client.
              </p>
            </section>

            {/* 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                3. Project Initiation & Payments
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Work begins only after receipt of the required advance payment.
                </li>

                <li>
                  Payments must be made as per the agreed milestones or billing
                  cycle.
                </li>

                <li>
                  Any delay in payment may lead to pause or termination of
                  services.
                </li>

                <li>
                  Prices quoted are exclusive of applicable GST unless stated
                  otherwise.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-red-500">
                4. Strict No Refund Policy
              </h2>

              <p className="text-muted-foreground mb-4">
                All payments made to Webeside Technology are non-refundable,
                including but not limited to:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Advance payments</li>
                <li>One-time project payments</li>
                <li>Monthly retainers</li>
                <li>Setup, onboarding, or consultation fees</li>
              </ul>

              <p className="text-muted-foreground mt-4 leading-relaxed font-medium">
                Once a payment is made, it cannot be canceled, reversed, or
                refunded under any circumstances, irrespective of project status
                or outcome.
              </p>
            </section>

            {/* 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                5. Client Responsibilities
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Provide accurate content, credentials, and approvals on time.
                </li>

                <li>
                  Ensure ownership or licensing rights for all shared materials.
                </li>

                <li>
                  Review and approve deliverables within reasonable timelines.
                </li>

                <li>
                  Delays caused by the client may impact delivery schedules
                  without liability on Webeside Technology.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                6. Revisions & Additional Work
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Revisions are limited to what is specified in the approved
                  scope.
                </li>

                <li>
                  Any additional features, redesigns, or functionality changes
                  will be charged separately.
                </li>

                <li>
                  Requests beyond the agreed scope will require a revised
                  quotation.
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                7. SEO, Ads & Marketing Disclaimer
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                SEO and digital marketing results depend on market conditions,
                competition, platform algorithms, and user behavior. Webeside
                Technology does not guarantee rankings, traffic, leads, sales,
                or revenue. Changes in Google, Meta, or other platform policies
                are beyond our control.
              </p>
            </section>

            {/* 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                8. Intellectual Property Rights
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  All designs, code, creatives, and assets remain the property
                  of Webeside Technology until full payment is received.
                </li>

                <li>
                  Upon full payment, ownership is transferred as per agreement
                  terms.
                </li>

                <li>
                  We reserve the right to showcase completed work in our
                  portfolio and marketing materials.
                </li>
              </ul>
            </section>

            {/* 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                9. Confidentiality
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to maintain confidentiality of all sensitive
                information, credentials, business data, and proprietary
                materials exchanged during the engagement.
              </p>
            </section>

            {/* 10 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                10. Service Termination
              </h2>

              <p className="text-muted-foreground mb-4">
                Webeside Technology reserves the right to terminate services if:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Payments are delayed or defaulted</li>
                <li>Terms are violated</li>
                <li>
                  Illegal, abusive, or unethical activity is identified
                </li>
              </ul>

              <p className="text-muted-foreground mt-4">
                No refunds will be issued upon termination.
              </p>
            </section>

            {/* 11 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                11. Limitation of Liability
              </h2>

              <p className="text-muted-foreground mb-4">
                Webeside Technology shall not be liable for:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Loss of data, revenue, or profits</li>

                <li>
                  Third-party service failures (hosting, APIs, ad platforms)
                </li>

                <li>
                  Downtime due to external technical issues
                </li>
              </ul>

              <p className="text-muted-foreground mt-4">
                Our liability, if any, is strictly limited to the amount paid
                for the specific service.
              </p>
            </section>

            {/* 12 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                12. Governing Law & Jurisdiction
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions are governed by the laws of India.
                Any disputes shall be subject to the jurisdiction of Faridabad,
                Haryana courts only.
              </p>
            </section>

            {/* Contact */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Us
              </h2>

              <div className="bg-muted/50 rounded-2xl p-6 space-y-3">
                <p>
                  <strong>Company:</strong> Webeside Technology
                </p>

                <p>
                  <strong>Phone:</strong> +91 88-6087-6087
                </p>

                <p>
                  <strong>Email:</strong> Info@webeside.in
                </p>

                <p>
                  <strong>Address:</strong> 3H-47, NIT 3, Near DAV College,
                  Faridabad, Haryana, India
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TermsOfService