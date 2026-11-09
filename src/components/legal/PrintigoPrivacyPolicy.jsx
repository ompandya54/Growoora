import React from "react";
import Link from "next/link";
import GrowooraLogo from "@/components/common/GrowooraLogo";
import {
  ShieldCheck,
  Printer,
  Bluetooth,
  Camera,
  Wifi,
  Bell,
  Lock,
  Trash2,
  Users,
  Mail,
  ExternalLink,
  CheckCircle2,
  ArrowLeft,
  Server,
  FileCheck,
  Building,
  Smartphone,
  Calendar,
} from "lucide-react";

export default function PrintigoPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F8FAF7] text-[#111817]">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#E5E9E2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-black transition-colors">
            <GrowooraLogo className="w-8 h-8" textClassName="text-lg font-bold text-[#111817]" />
          </Link>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#8FE63B]/20 text-[#155e1d] border border-[#8FE63B]/40">
              <Printer className="w-3.5 h-3.5" />
              Printigo POS
            </span>
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header Hero */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E9E2] shadow-xs mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#111817] text-[#8FE63B] mb-5">
            <ShieldCheck className="w-4 h-4 text-[#8FE63B]" />
            Official Legal Document
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111817] mb-4">
            Privacy Policy for Printigo
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-500 font-mono mb-6 pb-6 border-b border-zinc-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              Effective Date: <strong className="text-zinc-800">November 9, 2026</strong>
            </span>
            <span className="hidden sm:inline text-zinc-300">•</span>
            <span className="flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-zinc-400" />
              Last Updated: <strong className="text-zinc-800">November 9, 2026</strong>
            </span>
          </div>

          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
            This Privacy Policy describes how <strong className="text-zinc-900">Growoora</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, stores, and protects information when you use our mobile application <strong className="text-zinc-900">Printigo</strong> (the &ldquo;App&rdquo;).
          </p>
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mt-3">
            We are committed to protecting your privacy and ensuring your business and personal data remains secure.
          </p>
        </div>

        {/* Sections Wrapper */}
        <div className="space-y-6">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E9E2] shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0 border border-emerald-100">
                01
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111817] mb-2">
                  1. Information We Collect
                </h2>
                <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                  To provide point-of-sale (POS) billing, receipt printing, and account synchronization, we may collect the following information:
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-100">
                    <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2 mb-1.5">
                      <Users className="w-4 h-4 text-emerald-600" />
                      Account &amp; Personal Information
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      When you register or sign in via Firebase Authentication or Google Sign-In, we collect your name, email address, phone number, and unique account ID.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-100">
                    <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2 mb-1.5">
                      <Building className="w-4 h-4 text-emerald-600" />
                      Business &amp; Store Profile
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Business name, store address, GST/Tax numbers, currency, and custom receipt notes configured for your invoices.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-100">
                    <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2 mb-1.5">
                      <Server className="w-4 h-4 text-emerald-600" />
                      Product &amp; Sales Data
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Product catalog details (item names, categories, pricing, stock levels), customer khata/credit ledger entries, sales summaries, and invoices generated by your business.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-100">
                    <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2 mb-1.5">
                      <Camera className="w-4 h-4 text-emerald-600" />
                      Photos &amp; Media (Optional)
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      If you choose to upload product photos or your shop logo for receipts, we access selected images via your device storage or camera. We do not access any unrelated photos or files.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-100">
                    <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2 mb-1.5">
                      <Smartphone className="w-4 h-4 text-emerald-600" />
                      Device &amp; Diagnostics Data
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Non-personal technical information such as device model, operating system version, and performance logs to ensure app stability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E9E2] shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0 border border-emerald-100">
                02
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111817] mb-2">
                  2. Device Permissions Used
                </h2>
                <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                  Printigo requires specific Android device permissions solely to support core POS features:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-100 flex flex-col">
                    <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm mb-1.5">
                      <Bluetooth className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Bluetooth Permissions</span>
                    </div>
                    <code className="text-[11px] font-mono text-zinc-500 mb-2">BLUETOOTH_CONNECT, BLUETOOTH_SCAN</code>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Required to scan, connect, and transmit print commands to external ESC/POS Bluetooth thermal printers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-100 flex flex-col">
                    <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm mb-1.5">
                      <Camera className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Camera &amp; Photo Library</span>
                    </div>
                    <code className="text-[11px] font-mono text-zinc-500 mb-2">CAMERA, READ_MEDIA_IMAGES</code>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Used strictly when you capture or pick a product picture or shop logo for your billing catalog.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-100 flex flex-col">
                    <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm mb-1.5">
                      <Wifi className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Internet &amp; Network State</span>
                    </div>
                    <code className="text-[11px] font-mono text-zinc-500 mb-2">INTERNET, ACCESS_NETWORK_STATE</code>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Used to authenticate your account, sync cloud backups via Firebase, and verify subscription status.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-100 flex flex-col">
                    <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm mb-1.5">
                      <Bell className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Notifications</span>
                    </div>
                    <code className="text-[11px] font-mono text-zinc-500 mb-2">POST_NOTIFICATIONS</code>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Used to alert you about subscription status, sync updates, or important system notifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E9E2] shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0 border border-emerald-100">
                03
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111817] mb-2">
                  3. How We Use Your Information
                </h2>
                <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                  We use your information exclusively to:
                </p>

                <ul className="space-y-2.5 mb-6">
                  {[
                    "Create and authenticate your merchant account.",
                    "Process sales transactions, calculate taxes, and generate PDF/thermal receipts.",
                    "Synchronize your retail records and khata ledger across authorized devices via Google Cloud Firestore.",
                    "Provide customer support, troubleshooting, and license activation.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 rounded-xl bg-[#8FE63B]/10 border border-[#8FE63B]/30 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                  <p className="text-xs sm:text-sm font-semibold text-emerald-950">
                    We never sell, rent, or trade your personal or business data to third-party advertisers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E9E2] shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0 border border-emerald-100">
                04
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111817] mb-2">
                  4. Third-Party Service Providers
                </h2>
                <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                  Printigo integrates with reputable industry-standard infrastructure providers:
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900">
                        Google Firebase (Authentication, Cloud Firestore, Cloud Storage)
                      </h3>
                      <p className="text-xs text-zinc-600 mt-1">
                        Provides secure authentication, cloud sync, and database hosting. Data is handled under the Google Privacy Policy.
                      </p>
                    </div>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 shrink-0 w-fit"
                    >
                      Google Privacy Policy
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <h3 className="text-sm font-bold text-zinc-900">
                      Google Sign-In
                    </h3>
                    <p className="text-xs text-zinc-600 mt-1">
                      Facilitates simple, secure authentication using your existing Google account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E9E2] shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0 border border-emerald-100">
                05
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111817] mb-2">
                  5. Data Security
                </h2>
                <div className="space-y-3 text-sm text-zinc-700 leading-relaxed">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-zinc-900 mb-0.5">Encrypted in Transit</p>
                      <p className="text-xs text-zinc-600">
                        All communications between the App and our backend cloud infrastructure are encrypted in transit using industry-standard Transport Layer Security (TLS/HTTPS).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-zinc-900 mb-0.5">Sandboxed Device Storage</p>
                      <p className="text-xs text-zinc-600">
                        Offline data stored locally on your device resides in protected application sandboxes accessible only by Printigo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 - Crucial for Google Play */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E9E2] shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center font-bold text-sm shrink-0 border border-red-100">
                06
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111817] mb-2">
                  6. Data Retention &amp; Account Deletion Policy
                </h2>
                <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                  You have full control over your data. You may request deletion of your account and all associated cloud-stored data (products, sales records, business profile) at any time.
                </p>

                <div className="p-5 rounded-2xl bg-zinc-900 text-white">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                    <Trash2 className="w-4 h-4 text-red-400" />
                    How to Request Account &amp; Data Deletion:
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                    To request complete account and data deletion, email us at{" "}
                    <a href="mailto:growoora.info@gmail.com" className="text-[#8FE63B] font-mono underline hover:text-white transition-colors">
                      growoora.info@gmail.com
                    </a>{" "}
                    with the subject line <strong className="text-white">&ldquo;Account Deletion Request&rdquo;</strong> from your registered account email.
                  </p>
                  <p className="text-xs text-zinc-400 border-t border-zinc-800 pt-3">
                    Your data will be permanently removed from our active database within <strong className="text-zinc-200">30 days</strong>.
                  </p>

                  <div className="mt-4">
                    <a
                      href="mailto:growoora.info@gmail.com?subject=Account%20Deletion%20Request"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#8FE63B] text-[#111817] hover:bg-[#a6f05b] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Email Deletion Request
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E9E2] shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0 border border-emerald-100">
                07
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111817] mb-2">
                  7. Children&apos;s Privacy
                </h2>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Printigo is a commercial retail Point of Sale tool designed exclusively for businesses and adults (aged 18 and older). We do not knowingly collect personal information from children under the age of 13.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E9E2] shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0 border border-emerald-100">
                08
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111817] mb-2">
                  8. Changes to This Privacy Policy
                </h2>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E9E2] shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0 border border-emerald-100">
                09
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111817] mb-2">
                  9. Contact Us
                </h2>
                <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                  If you have any questions or feedback regarding this Privacy Policy or your data, please contact us at:
                </p>

                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-zinc-500 font-mono text-xs uppercase">Company:</span>
                    <strong className="text-zinc-900">Growoora</strong>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-zinc-500 font-mono text-xs uppercase">Product:</span>
                    <span className="text-zinc-900 font-medium">Printigo POS</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-zinc-500 font-mono text-xs uppercase">Support:</span>
                    <a
                      href="mailto:growoora.info@gmail.com"
                      className="text-emerald-700 hover:text-emerald-800 font-medium underline flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      growoora.info@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-zinc-500 font-mono text-xs uppercase">Deletion:</span>
                    <a
                      href="mailto:growoora.info@gmail.com"
                      className="text-emerald-700 hover:text-emerald-800 font-medium underline flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      growoora.info@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Dedicated Page Footer */}
        <footer className="mt-12 pt-8 border-t border-[#E5E9E2] text-center text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Growoora. All rights reserved.</p>
          <p className="mt-1">Printigo POS — Mobile Point of Sale &amp; Billing Solution</p>
        </footer>
      </main>
    </div>
  );
}

