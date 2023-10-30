import { render, screen } from "@testing-library/react";
import ProfileCard from "@/components/profile-card";

const profileCardProps = {
  avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
  fullname: "John Doe",
  username: "johndoe",
  location: "London, UK",
  bio: "Frontend Engineer",
  company: "Vercel",
  twitter: "johndoe_1",
  repos: 10,
  following: 223,
  followers: 430,
};

describe("ProfileCard", () => {
  it("Should have full name", () => {
    render(<ProfileCard {...profileCardProps} />);

    const nameEle = screen.getByText("John Doe");

    expect(nameEle).toBeInTheDocument();
  });

  it("Should have username", () => {
    render(<ProfileCard {...profileCardProps} />);

    const usernameEle = screen.getByText("johndoe");

    expect(usernameEle).toBeInTheDocument();
  });

  it("Should have location", () => {
    render(<ProfileCard {...profileCardProps} />);

    const locationEle = screen.getByText("London, UK");

    expect(locationEle).toBeInTheDocument();
  });

  it("Should have alt tag for Avatar", () => {
    render(<ProfileCard {...profileCardProps} />);

    const avatar = screen.getByRole("img");

    expect(avatar).toHaveAttribute("alt", "Avatar");
  });

  it("Should have bio", () => {
    render(<ProfileCard {...profileCardProps} />);

    const bioEle = screen.getByText("Frontend Engineer");

    expect(bioEle).toBeInTheDocument();
  });

  it("Should have company", () => {
    render(<ProfileCard {...profileCardProps} />);

    const companyEle = screen.getByText("Vercel");

    expect(companyEle).toBeInTheDocument();
  });

  it("Should have twitter", () => {
    render(<ProfileCard {...profileCardProps} />);

    const twitterEle = screen.getByTestId("twitter");

    expect(twitterEle).toHaveTextContent("johndoe_1");
  });

  it("Should have repos", () => {
    render(<ProfileCard {...profileCardProps} />);

    const reposEle = screen.getByTestId("repos");

    expect(reposEle).toHaveTextContent("10");
  });

  it("Should have followers", () => {
    render(<ProfileCard {...profileCardProps} />);

    const followersEle = screen.getByTestId("followers");

    expect(followersEle).toHaveTextContent("430 followers");
  });

  it("Should have following", () => {
    render(<ProfileCard {...profileCardProps} />);

    const followingEle = screen.getByTestId("following");

    expect(followingEle).toHaveTextContent("223 following");
  });
});
