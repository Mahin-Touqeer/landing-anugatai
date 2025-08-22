function Navbar() {
  return (
    <nav className="relative z-50 px-6 py-4 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-[#e6f5ff] px-4 py-3 rounded-2xl shadow">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10  flex items-center justify-center">
            <img src="./logo.png" className="" alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#212121] ">Anugat AI</h1>
            {/* <p className="text-xs text-blue-600/70 -mt-1">
              Intelligent Solutions
            </p> */}
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {/* <button
            onClick={() => {
              const el = document.getElementById("products");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-[#212121] hover:text-blue-900 font-medium transition-colors bg-transparent border-none outline-none cursor-pointer"
            type="button"
          >
            Products
          </button> */}
          {/* <a
            href="#about"
            className="text-[#212121] hover:text-blue-900 font-medium transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-[#212121] hover:text-blue-900 font-medium transition-colors"
          >
            Contact
          </a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
