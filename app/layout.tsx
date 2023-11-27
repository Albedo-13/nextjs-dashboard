import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

type TRootLayout = {
  readonly children: React.ReactNode;
};

export default function RootLayout({ children }: TRootLayout) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
