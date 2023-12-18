import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SpeedInsights } from "@vercel/speed-insights/next";

type TRootLayout = {
  readonly children: React.ReactNode;
};

export default function RootLayout({ children }: TRootLayout) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
