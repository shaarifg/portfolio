export const NavbarData: Navbar[] = [
  {
    name: "home",
    path: "",
    icon: null,
    current:true
  },
  {
    name: "about",
    path: "about",
    icon: null,
    current:false
  },
  {
    name: "blogs",
    path: "blogs",
    icon: null,
    current:false
  },
  {
    name: "contact",
    path: "contact",
    icon: null,
    current:false
  },
  
];

interface Navbar {
  name: string;
  path: string;
  icon: string | null;
  current:true | false | null
}
