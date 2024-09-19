import Link from 'next/link';

export const metadata = {
  title: 'CouchSurfing Social App',
  description: 'This is a social media app for Couch Surfing by Noel Serrato',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/posts">Posts</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}