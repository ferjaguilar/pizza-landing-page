import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';

type NavbarProps = {
  toggle: any
}

const Navbar = ({toggle}: NavbarProps) => {
  return (
    <>
      <Nav>
        <NavLink to ='/'>Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar
