import { CloudSun, MoonIcon, SunDimIcon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";
    return (
        <header className="sticky top-0 z-50 border-b supports-[backdrop-filter]:bg-background/60 backdrop-blur">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
                <Link
                    to={"/"}
                    className="flex text-2xl gap-2"
                >
                    <CloudSun className="h-10 w-10 text-orange-500" />
                    <div className="flex justify-center items-center font-bold">
                        <h2 className="text-orange-500">Atmos</h2>
                        <h2 className={`${isDark ? "text-white" : "text-gray-800"}`}>Tracker</h2>
                    </div>
                </Link>
                <div className="flex justify-center items-center gap-3">
                    <CitySearch />
                    <button
                        className={`text-yellow-500 transition-transform duration-500 ${isDark ? "bg-gray-800 rotate-180" : "bg-gray-200 rotate-0"} p-2 rounded-full cursor-pointer`}
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                    >
                        {
                            isDark ? <SunDimIcon className="h-6 w-6 rotate-0 transition-all" />
                                : <MoonIcon className="h-6 w-6 rotate-0 transition-all" />
                        }
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;