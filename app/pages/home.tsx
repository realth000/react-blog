import { Button } from "@heroui/react";
import { NavLink } from "react-router";

export default function Home() {
  return (
    <>
      <h1>Hello world!</h1>
      <NavLink to="/" end>
        {" "}
        Home
      </NavLink>
      <Button>Press me</Button>
    </>
  );
}
