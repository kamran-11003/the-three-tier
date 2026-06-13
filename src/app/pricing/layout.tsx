import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — The Three Tier",
  description:
    "Simple, honest pricing for enterprise AI infrastructure. No seat fees. No hidden overages. Start free and scale when you're ready.",
  alternates: { canonical: "https://www.thethreetier.com/pricing" },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
