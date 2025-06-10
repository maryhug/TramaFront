import React from "react";

const MagnifyingGlassIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
        aria-hidden="true"
    >
      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>
    </svg>
);

const Header = () => {
  return (
      <header className="flex items-center justify-between whitespace-nowrap border-b border-b-[#223649] bg-[#0f1c2e] px-10 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1 text-white">
            <a href="https://postimg.cc/gw828S5K" target="_blank" rel="noopener noreferrer">
              <img
                  src="https://i.postimg.cc/gw828S5K/Dise-o-sin-t-tulo-4.png"
                  alt="Logo Trama"
                  style={{ width: "50px", height: "auto" }}
              />
            </a>
            <a href="https://postimg.cc/MXbfhT9Y" target="_blank" rel="noopener noreferrer">
              <img
                  src="https://i.postimg.cc/MXbfhT9Y/Dise-o-sin-t-tulo-3.png"
                  alt="Texto Trama"
                  className="h-6"
              />
            </a>
          </div>
          <nav className="flex items-center gap-9">
            {["Home", "Descubrir", "Mis Listas"].map((item) => (
                <a
                    key={item}
                    href="#"
                    className="text-white text-sm font-medium font-playfair"
                >
                  {item}
                </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <label className="flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex w-full items-center rounded-xl bg-[#223649] h-full">
              <div className="text-[#90aecb] flex items-center justify-center pl-4">
                <MagnifyingGlassIcon />
              </div>
              <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 bg-[#223649] text-white border-none focus:outline-none placeholder:text-[#90aecb] px-2 font-playfair"
              />
            </div>
          </label>
          <div
              className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10"
              style={{
                backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAayfI3oFaUAbHybyULX2713_sI1-UTAGhwp9qYaE6bVlSDkxAS4aW7SF9DuHtkW8XGEbVHvQJL7QnAu25tnZHlOw1sSoQLWmJXfS3NdiWJeATSG_oJIO4JSSDnnkdyFotzcrCXqz9mIOZjjpN5gsbahIuMviWsMjhauuOWqruGAoRbdXOlFvira2NRtN-ntWtzt9QqrLzsQo5kmHUY7ZpSmDqoL5MfFfriYcJgcdyuUAGBJ8aIRBNHzkpwU7dQV6F-u5shoJe6lUd7')"
              }}
          ></div>
        </div>
      </header>
  );
};

export default Header;
