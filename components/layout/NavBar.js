export default function NavBar() {
  return (
    <nav>
      <ul>
        <NavLink href='/discover'>Discover</NavLink>
        <NavLink href='/experiences'>Experiences</NavLink>
        <NavLink href='/explore'>Explore</NavLink>
        <NavLink href='/help'>Help</NavLink>
      </ul>
    </nav>
  );
}
