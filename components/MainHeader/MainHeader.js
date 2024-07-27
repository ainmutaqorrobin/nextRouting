import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <ul>
        <p>
          <Link href="/">Main Page</Link>
        </p>
        <p>
          <Link href="/news">News Page</Link>
        </p>
      </ul>
    </>
  );
}
