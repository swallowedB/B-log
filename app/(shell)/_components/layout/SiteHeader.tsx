"use client";

import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between ">
      <div className="flex gap-8">
        <Link href="/" aria-label="홈으로 이동">
          B-log
        </Link>

        <nav aria-label="주요 페이지">
          <ul className="flex gap-5">
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/guestbook">Guestbook</Link>
            </li>
            <li>
              <Link href="/lab">Lab</Link>
            </li>
          </ul>
        </nav>
      </div>

      <button type="button" aria-label="테마 변경" className="cursor-pointer">
        테마
      </button>
    </header>
  );
}
