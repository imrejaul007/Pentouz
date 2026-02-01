import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactInfo } from "@/data/content";

export const metadata = {
  title: "Privacy Policy | The Pentouz",
  description: "Privacy Policy for The Pentouz luxury accommodations.",
};

export default function PrivacyPolicyPage() {
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
            Privacy <em className="italic">Policy</em>
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
                  1. Information We Collect
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-4">
                  At The Pentouz, we collect information that you provide directly to us when making reservations, inquiries, or signing up for our services. This includes:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-brand-body space-y-2 ml-4">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Payment and billing information</li>
                  <li>Booking preferences and special requests</li>
                  <li>Government-issued ID for check-in purposes</li>
                  <li>Communication history with our team</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-brand-body space-y-2 ml-4">
                  <li>Process and manage your reservations</li>
                  <li>Communicate with you about your stay</li>
                  <li>Provide personalized services and experiences</li>
                  <li>Send promotional offers (with your consent)</li>
                  <li>Improve our services and guest experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our business, such as payment processors and booking platforms. We may also disclose information when required by law or to protect our rights.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  4. Data Security
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  5. Cookies and Tracking
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  6. Your Rights
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-brand-body space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  7. Data Retention
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl sm:text-2xl font-light mb-4">
                  9. Contact Us
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
