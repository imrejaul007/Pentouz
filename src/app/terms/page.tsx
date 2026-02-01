import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactInfo } from "@/data/content";

export const metadata = {
  title: "Terms of Use | The Pentouz",
  description: "Terms of Use for The Pentouz luxury accommodations.",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#f8f7f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-4 sm:mb-6">
            Legal
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light">
            Terms of <em className="italic">Use</em>
          </h1>
          <p className="text-sm text-brand-muted mt-4">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  By accessing and using The Pentouz website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  2. Reservations and Bookings
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-4">
                  All reservations are subject to availability and confirmation. By making a reservation, you agree to:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-brand-body space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Be at least 18 years of age</li>
                  <li>Pay all charges at the rates in effect when incurred</li>
                  <li>Be responsible for all persons included in your reservation</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  3. Cancellation Policy
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-4">
                  Our standard cancellation policy is as follows:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-brand-body space-y-2 ml-4">
                  <li>Free cancellation up to 48 hours before check-in</li>
                  <li>50% charge for cancellations within 48 hours of check-in</li>
                  <li>Full charge for no-shows or same-day cancellations</li>
                  <li>Special rates may have different cancellation terms</li>
                </ul>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mt-4">
                  Specific cancellation policies may vary by property and rate type. Please review the terms at the time of booking.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  4. Check-in and Check-out
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-4">
                  Standard times are as follows:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-brand-body space-y-2 ml-4">
                  <li>Check-in: 2:00 PM onwards</li>
                  <li>Check-out: 11:00 AM</li>
                  <li>Early check-in and late check-out subject to availability</li>
                  <li>Valid government-issued ID required at check-in</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  5. House Rules
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-4">
                  Guests are expected to:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-brand-body space-y-2 ml-4">
                  <li>Respect quiet hours (10:00 PM - 7:00 AM)</li>
                  <li>Not smoke in non-smoking areas</li>
                  <li>Not bring pets unless previously approved</li>
                  <li>Not engage in illegal activities on the premises</li>
                  <li>Report any damages or issues immediately</li>
                  <li>Treat staff and other guests with respect</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  6. Liability
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  The Pentouz is not liable for loss, theft, or damage to guest property unless caused by our negligence. Guests are responsible for any damage caused to the property during their stay. We recommend travel insurance for all bookings.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  7. Intellectual Property
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  All content on this website, including text, images, logos, and design, is the property of The Pentouz and is protected by copyright laws. You may not reproduce, distribute, or use our content without prior written permission.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  8. Website Use
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-4">
                  When using our website, you agree not to:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-brand-body space-y-2 ml-4">
                  <li>Use the site for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Transmit viruses or malicious code</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  9. Changes to Terms
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  10. Governing Law
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  These Terms of Use are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  11. Contact
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  For questions about these Terms of Use, please contact us:
                </p>
                <div className="mt-4 p-6 bg-[#f8f7f5]">
                  <p className="text-sm text-brand-body">
                    <strong>Email:</strong> {contactInfo.email}
                  </p>
                  <p className="text-sm text-brand-body mt-2">
                    <strong>Phone:</strong> {contactInfo.phones[0]}
                  </p>
                  <p className="text-sm text-brand-body mt-2">
                    <strong>Address:</strong> {contactInfo.address}, {contactInfo.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
