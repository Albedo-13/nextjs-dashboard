import "@/app/ui/global.css";

type TRootLayout = {
  readonly children: React.ReactNode;
};

export default function RootLayout({ children }: TRootLayout) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
