import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Footer } from "components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "SmartCV - Free Open-source Resume Builder",
  description:
    "SmartCV is a free, open-source, and powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
