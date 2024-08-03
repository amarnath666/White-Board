import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
function Header() {
    return (
        <header className="bg-black">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-4 sm:px-6 lg:px-">
            {/* <Image src='/pencil.png' alt='logo'
    width={40}
    height={40}
    /> */}
      <h1 className="text-orange-400 font-extrabold">SKETCHBOARD</h1>
                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        {/* <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="text-white transition hover:text-gray-100/75" href="#"> About </a>
                            </li>

                            <li>
                                <a className="text-white transition hover:text-gray-100/75" href="#"> Careers </a>
                            </li>

                            <li>
                                <a className="text-white transition hover:text-gray-100/75" href="#"> History </a>
                            </li>

                            <li>
                                <a className="text-white transition hover:text-gray-100/75" href="#"> Services </a>
                            </li>

                            <li>
                                <a className="text-white transition hover:text-gray-100/75" href="#"> Projects </a>
                            </li>

                            <li>
                                <a className="text-white transition hover:text-gray-100/75" href="#"> Blog </a>
                            </li>
                        </ul> */}
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <LoginLink>
                                <Button className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition">
                                    Login
                                </Button>
                            </LoginLink>

                            <RegisterLink>
                                <Button className="hidden rounded-md bg-orange-400 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-500 sm:block">
                                    Register
                                </Button>
                            </RegisterLink>
                        </div>

                        <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
