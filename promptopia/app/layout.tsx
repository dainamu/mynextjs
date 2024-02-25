import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "promtopi",
  description: "Discover & Share AI Prompt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
