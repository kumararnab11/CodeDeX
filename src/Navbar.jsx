import logo from './assets/logo.png';

function Navbar() {
  return (
    <div className="bg-white mb-2 sticky top-0 z-50">
      <img src={logo} alt="Logo" className="w-60 h-14" />
      <div className="h-[0.8px]  bg-gradient-to-r from-white from-25% via-orange-500 to-white"></div>
    </div>
  );
}

export default Navbar;
