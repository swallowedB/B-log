import { render, screen } from "@testing-library/react";
import SiteHeader from "../SiteHeader";

describe("SiteHeader", () => {
  test("로고가 렌더링된다", () => {
    render(<SiteHeader />);

    expect(screen.getByText(/b-log/i)).toBeInTheDocument();
  });

  test("주요 네비게이션 메뉴가 렌더링된다", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Resume" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Guestbook" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Lab" })).toBeInTheDocument();
  });

  test("테마 토글 버튼이 렌더링된다", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("button", { name: /테마 변경/i })).toBeInTheDocument()
  })
});
