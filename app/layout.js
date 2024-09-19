import Link from "next/link";
import Image from "next/image";
import "./global.css";

export const metadata = {
  title: "CouchSurfing Social App",
  description: "This is a social media app for Couch Surfing by Noel Serrato",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <nav className="bg-primary p-4 text-black">
          <div className="container mx-auto flex justify-between items-center">
            {" "}
            <Link href="/">
              <Image
                src="/images/couchsurfinglogo.png"
                width={100}
                height={100}
                alt="Couch Surfing Logo"
              ></Image>
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-blue-200">
                Home
              </Link>
              <Link href="/profile" className="hover:text-blue-200">
                Profile
              </Link>
              <Link href="/posts" className="hover:text-blue-200">
                Posts
              </Link>
              <Link href="/friends" className="hover:text-blue-200">
                My Friends
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto mt-8 p-4">{children}</main>
      </body>
    </html>
  );
}
