import StyledComponentsRegistry from "@/lib/registry";
import { Antonio, League_Spartan } from "@next/font/google";

const antonio = Antonio({
  weight: ["400", "500"],
  subsets: ["latin"],
});
const spartan = League_Spartan({
  weight: ["400", "600"],
  subsets: ["latin"],
});
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
      <body className={`${antonio.className} ,${spartan.className}`}>
        {" "}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
