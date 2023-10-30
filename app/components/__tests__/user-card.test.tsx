import { render, screen } from "@testing-library/react";
import UserCard from "@/components/user-card";

const userCardProps = {
  avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
  fullname: "John Doe",
  username: "johndoe",
  location: "London, UK",
};

describe("UserCard", () => {
  it("Should have full name", () => {
    render(<UserCard {...userCardProps} />);

    const nameEle = screen.getByText("John Doe");

    expect(nameEle).toBeInTheDocument();
  });

  it("Should have username", () => {
    render(<UserCard {...userCardProps} />);

    const usernameEle = screen.getByText("johndoe");

    expect(usernameEle).toBeInTheDocument();
  });

  it("Should have location", () => {
    render(<UserCard {...userCardProps} />);

    const locationEle = screen.getByText("London, UK");

    expect(locationEle).toBeInTheDocument();
  });

  it("Should have alt tag for Avatar", () => {
    render(<UserCard {...userCardProps} />);

    const avatar = screen.getByRole("img");

    expect(avatar).toHaveAttribute("alt", "Avatar");
  });

  it("Should display username as name if name is empty", () => {
    const props = {
      fullname: null,
      username: "fanvsfan",
      location: "Bengaluru, IN",
      avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
    };
    render(<UserCard {...props} />);

    const nameEle = screen.getByTestId("fullname");

    expect(nameEle).toHaveTextContent("fanvsfan");
  });

  it("Should render placeholder text if location is empty", () => {
    const props = {
      fullname: "John Doe",
      username: "johndoe",
      location: null,
      avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
    };
    render(<UserCard {...props} />);

    const locationEle = screen.getByTestId("location");

    expect(locationEle).toHaveTextContent("--");
  });
});
