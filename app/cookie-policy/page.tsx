"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

function RefundPolicy() {
  return (
    <div className="refund-policy-page bg-background min-h-screen py-12">

      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Refund Policy
          </h1>

          <p className="text-lg text-red-500 font-semibold">
            Strict No Refund Policy
          </p>

          <p className="text-muted-foreground mt-3">
            Effective From: 23 February 2018
          </p>
        </div>

        {/* Main Card */}
        <Card className="rounded-3xl shadow-lg border">
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

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-red-500 mb-4">
                1. No Refund Policy
              </h2>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Webeside Technology follows a strict NO REFUND policy.
                All payments made for the following services are final
                and non-refundable:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Website development</li>

                <li>Mobile app development</li>

                <li>Software development</li>

                <li>SEO services</li>

                <li>Paid advertising services</li>

                <li>Social media management</li>

                <li>Consultation or setup services</li>
              </ul>

              <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
                <p className="text-red-500 font-medium leading-relaxed">
                  Once a payment is made, it cannot be canceled,
                  reversed, or refunded under any circumstances.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                2. Service Assurance
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                While refunds are not provided, Webeside Technology is
                fully committed to delivering services as per the agreed
                project scope. Any genuine issues will be reviewed and
                resolved within the limitations of the project.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">
                3. Payment Disputes & Chargebacks
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Any chargeback, payment reversal, or dispute raised
                without prior communication will be treated as a
                violation of this policy. This may result in immediate
                service termination and potential legal action.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">
                4. Contact Information
              </h2>

              <div className="bg-muted/50 rounded-2xl p-6 space-y-4">

                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Email
                  </p>

                  <p className="font-medium">
                    📧 Info@webeside.in
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Phone
                  </p>

                  <p className="font-medium">
                    📞 +91 88-6087-6087
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Address
                  </p>

                  <p className="font-medium leading-relaxed">
                    📍 3H-47, NIT 3, Near DAV College,
                    Faridabad, Haryana, India
                  </p>
                </div>

              </div>
            </section>

          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground mt-8">
          © 2018 – Present | Webeside Technology | All Rights Reserved.
        </div>

      </div>
    </div>
  )
}

export default RefundPolicy