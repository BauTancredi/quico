export default function Header() {
  return (
    <header className="">
      <nav
        className="bg-transparent items-center justify-between absolute inset-x-0 top-0 right-0 left-0 z-50 opacity-190  backdrop-filter backdrop-blur-lg"
        aria-label="Global"
      >
        <div className="text-left">
          <a href="#" className="-m-1.5 p-1.5 ">
            <p className="font-bold text-2xl pl-5 text-white">GUILLEM BRANDING</p>
          </a>
        </div>
      </nav>
    </header>
  );
}
