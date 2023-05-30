function HomeNav() {
    return (
            <nav className = "bg-white border-gray-200 md:block md:w-auto">
                    <ul className="flex flex-row place-content-center bg-gray-100 rounded-lg">
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#news">Clubs News</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#huts">Huts</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#nights">Club Nights</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#mag">ASC Magazine</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#events">Club Events</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#history">History</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#rules">Club Rules</a>
                        </li>
                    </ul>
            </nav >
    );
}
export default HomeNav;