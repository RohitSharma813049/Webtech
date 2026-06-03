"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page bg-background min-h-screen py-12">

      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>

          <p className="text-muted-foreground text-base lg:text-lg">
            Effective From: 23 February 2018
          </p>
        </div>

        {/* Main Card */}
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
                1. Information We Collect
              </h2>

              <p className="text-muted-foreground mb-4">
                We may collect the following information from our users and
                clients:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name, email address, and phone number</li>

                <li>Business and company details</li>

                <li>Billing and payment information</li>

                <li>Website/app usage data</li>

                <li>Communication and support records</li>
              </ul>
            </section>

            {/* 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                2. Use of Information
              </h2>

              <p className="text-muted-foreground mb-4">
                Your information is used for the following purposes:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and manage our services</li>

                <li>
                  To communicate updates, support, and notifications
                </li>

                <li>
                  To process payments, billing, and invoices
                </li>

                <li>
                  To improve performance and user experience
                </li>

                <li>
                  To comply with legal and regulatory obligations
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                3. Data Security
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We follow industry-standard security measures to protect your
                personal and business data. Confidential information is never
                sold, rented, or misused.
              </p>
            </section>

            {/* 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                4. Third-Party Services
              </h2>

              <p className="text-muted-foreground mb-4">
                We may use third-party providers such as:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Hosting companies</li>

                <li>Payment gateways</li>

                <li>Analytics tools</li>

                <li>Advertising platforms</li>
              </ul>

              <p className="text-muted-foreground mt-4 leading-relaxed">
                Their data usage is governed by their own privacy policies.
              </p>
            </section>

            {/* 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                5. Cookies
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies to improve user experience and
                analyze performance. Users may choose to disable cookies through
                their browser settings.
              </p>
            </section>

            {/* 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                6. Data Retention
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We retain personal and business information only as long as
                necessary for service delivery, ongoing operations, or legal
                compliance.
              </p>
            </section>

            {/* 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                7. User Rights
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Users may request access, correction, or deletion of their
                personal data by contacting us at Info@webeside.in, subject to
                legal requirements.
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

export default PrivacyPolicy