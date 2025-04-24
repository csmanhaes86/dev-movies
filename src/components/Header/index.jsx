import Logo from "../../assets/logo.png";

function Header() {
  return (
    <div>
      <h2>Header</h2>
      <img src={Logo} alt="logo-dev-movies" style={{ width: 500 }} />
    </div>
  )
}

export default Header