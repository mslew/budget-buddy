import NavLink from "./navlink"

export default function Nav(){
    return (
        <nav className="w-full h-[10%] flex flex-row justify-center items-center text-white">
            <div className="w-2/3 h-[90%] flex flex-row justify-between items-center pl-4 pr-4">
                <div className="h-3/4 w-1/4 flex flex-row justify-center items-center p-3">logo</div>
                <div className="h-3/4 w-1/2 flex flex-row-reverse gap-12 items-center">
                    <button className="border rounded-lg p-3">Create</button>
                    <NavLink href="/" text="Login" />
                    <NavLink href="/" text="Register" />
                </div>
            </div>
        </nav>
    )
}