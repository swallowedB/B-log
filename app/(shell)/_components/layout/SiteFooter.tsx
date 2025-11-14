import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="flex gap-5 items-center">
      <Link href="/" aria-label="홈으로 이동">
        Logo
      </Link>
      <p>© {new Date().getFullYear()} CHOI BOA · All Rights Reserved</p>
      <a href="https://github.com/swallowedB" target="_blank" rel="noreferrer" className="flex gap-2 items-center">
        <FaGithub />
        <span>@swallowedB</span>
      </a>
    </footer>
  );
}
