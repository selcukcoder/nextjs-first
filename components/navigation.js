import Link from "next/link";

export default function About() {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Go home </a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </div>
  );
}
