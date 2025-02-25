import "./globals.css";

import { ToastContainer } from "react-toastify";
import { GoogleAnalytics } from "@next/third-parties/google";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className="bg-slate-100">
        {process.env.GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
        )}
        
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
