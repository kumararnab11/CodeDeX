import logo from './assets/logo.png';

function Navbar() {
  return (
    <div className="bg-white mb-2">
      <img src={logo} alt="Logo" className=" w-60 h-14" />
      <div className="h-[.8px] w-screen bg-gradient-to-r from-white from-25% via-orange-500 to-white"></div>
      </div>
  );
}

export default Navbar;
