import React from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { MdEditNote } from "react-icons/md";
import SearchInput from "./SearchInput";
import Notifications from "./Notifications";
import UserButton from "./UserButton";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="sticky top-0 border-b border-b-muted-foreground z-50 bg-white dark:bg-slate-950">
      <Container>
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-1 cursor-pointer">
            <MdEditNote size={26} />
            <div className="font-bold">WEBDEV.blog</div>
          </div>
          <SearchInput />
          <div className="flex items-center gap-5 sm:gap-8 ">
            <ThemeToggle />
            <Notifications />
            <UserButton />
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
