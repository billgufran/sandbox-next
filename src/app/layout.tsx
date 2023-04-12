// 'use client'
// import { createTheme, ThemeProvider } from "@brikl/design-storefront";
import "./globals.css";

// const theme = createTheme({
//   "brks-global-brand-color-500": "#FF6D00",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <ThemeProvider theme={theme}>{children}</ThemeProvider> */}
        {children}
      </body>
    </html>
  );
}
