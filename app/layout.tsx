import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "My Happy Life Routine — Natascha Wright",
  description:
    "10 small habits Natascha Wright lives by — little things that help her feel happier, healthier and a little more balanced.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {/* Kit's own form-enhancement script — progressively upgrades any
            [data-sv-form] form on the page into an inline-success/inline-
            error AJAX submit, per Kit's official embed snippet. */}
        <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
