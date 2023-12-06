export const NavbarData: Navbar[] = [
  {
    name: "home",
    path: "",
    icon: null,
  },
  {
    name: "about",
    path: "about",
    icon: null,
  },
  {
    name: "blogs",
    path: "blogs",
    icon: null,
  },
  {
    name: "contact",
    path: "contact",
    icon: null,
  },
  
];

interface Navbar {
  name: string;
  path: string;
  icon: string | null;
}
