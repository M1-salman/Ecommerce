import "../globals.css";

export const metadata = {
  title: "E-commerce",
  description: "This app is developed by @salman_code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
