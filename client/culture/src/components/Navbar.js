
/*import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-scroll"

export default function Navbar(){
    const [navbarActive, setNavbarActive] = useState(false)
    const navigate = useNavigate()

    const handleMobileNavbarApply = ()=>{
        setNavbarActive(false)
        navigate("/apply")
    }

    return(
        <nav className="bg-primary px-5 py-5 flex max-md:justify-between justify-around items-center fixed w-[100%] font-outfit top-0 z-0 max:md ">
            <img onClick={() => navigate("/")} src="culture (1).png" className="h-[40px] w-[40px] text-complementary text-5xl font-bold hover:cursor-pointer"></img>
            <h1 className="text-5xl text-center text-secondary font-bold">Cultural <span className=" text-complementary"></span> </h1>
            <div className="flex gap-11 justify-center items-center max-md:hidden">
                {<Link smooth = {true} duration = {500} to ="Home" className=" text-secondary text-md hover:border-b-2  hover:border-secondary hover:cursor-pointer">Home</Link> }
                {<Link smooth = {true} duration = {500} to ="About" className=" text-secondary text-md hover:border-b-2  hover:border-secondary hover:cursor-pointer">About</Link> }
            </div>

            <img onClick={()=>setNavbarActive(!navbarActive)} src="" className="h-8 w-8 md:hidden hover:cursor-pointer"></img>
            { mobile menu }

            {
                navbarActive &&
                (
                    <div className="flex flex-col gap-8 h-screen absolute top-24 bg-primary w-[100%] px-4 transition duration-300">
                        {<Link onClick={()=>setNavbarActive(false)} smooth = {true} duration = {500} to ="Home" className=" text-secondary text-md hover:border-b-2 max-md:border-none max-md:hover:underline  hover:border-secondary hover:cursor-pointer">Home</Link> }
                        {<Link onClick={()=>setNavbarActive(false)} smooth = {true} duration = {500} to ="About" className=" text-secondary text-md hover:border-b-2 max-md:border-none max-md:hover:underline  hover:border-secondary hover:cursor-pointer">About</Link> }
                    </div>
                )
            }
            
        </nav>
    )
}*/
import React, { useState } from 'react';

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const searchOptions = [
        "United States Of America", "India", "Turkey", "Pakistan", "China"
    ];

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (value.length > 0) {
            const filteredSuggestions = searchOptions.filter(option =>
                option.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSearchSelect = (value) => {
        setSearchQuery(value);
        setSuggestions([]);
    };

    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src='culture.png' className="h-16" alt="Logo"></img>
                    <ul className="flex list-none">
                        <li className="nav-item">
                            <a href="#" className="px-3 py-3 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75">Home</a>
                        </li>
                    </ul>
                    <button
                        className="text-white lg:hidden border border-white p-3 rounded"
                        onClick={() => setIsNavExpanded(!isNavExpanded)}
                        aria-label="Toggle navigation"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 rounded text-black"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{ color: 'black' }}
                    />
                    <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100">
                        Search
                    </button>
                    {suggestions.length > 0 && (
                        <ul className="absolute bg-white border rounded w-52 top-full left-0 mt-1 z-10 text-black">
                            {suggestions.map(suggestion => (
                                <li
                                    key={suggestion}
                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleSearchSelect(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </form>
            </div>
        </nav>
    );
}
