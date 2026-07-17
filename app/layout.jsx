import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://your-domain.com"), // replace with your actual domain
  title: "VAIDIK VIDYAPEETH | School In Gothatar, Kathmandu",
  description:
    "VAIDIK VIDYAPEETH in Gothatar, Kathmandu, offering values-led learning, clear academics, and a caring school environment.",
  icons: {
    icon: [
      { url: "/icon.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico?v=2", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: ["/favicon.ico?v=2"],
    apple: [{ url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "VAIDIK VIDYAPEETH | School In Gothatar, Kathmandu",
    description:
      "VAIDIK VIDYAPEETH in Gothatar, Kathmandu, offering values-led learning, clear academics, and a caring school environment.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "VAIDIK VIDYAPEETH School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
