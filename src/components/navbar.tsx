import Link from "next/link";

type NavLink = {
  route: string;
  name: string;
};

const navLinks: NavLink[] = [
  { name: "Home", route: "/" },
  { name: "Counter", route: "/counter" },
  { name: "Tours", route: "/tours" },
  { name: "Actions", route: "/actions" },
];

export default function NavBar () {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4">
      {navLinks.map((l, index) => (
        <Link key={`nav-bar-link-${l.name}-${index}`} href={l.route}>
          {l.name}
        </Link>
      ))}
    </nav>
  );
};
