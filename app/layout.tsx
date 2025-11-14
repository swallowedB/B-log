import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B-log",
  description: "boa's dev blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
