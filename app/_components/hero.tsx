export default function Hero(){
    return(
        <div className="w-full h-[80%] flex flex-col items-center pt-20">
            <div className="w-3/4 h-1/2 text-center text-white flex flex-col items-center gap-10">
                <div className="lg:text-7xl text-3xl font-bold">
                    <p>Welcome to Budget Buddy!</p>
                    <p>The best place for you to create a budget!</p>
                </div>
                <a className="flex flex-row gap-4 items-center p-4 border text-white rounded-3xl w-min whitespace-nowrap text-4xl bg-slate-500 group">
                    Create a Budget
                    <svg className="stroke -mr-1 ml-2 mt-0.5 h-10 stroke-current stroke-1" fill="none" viewBox="0 0 10 10" aria-hidden="true"> 
                        <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path> 
                        <path className="transition group-hover:translate-x-[2px]" d="M1 1l4 4-4 4"></path> 
                    </svg>
                </a>
            </div>
        </div>
    )
}