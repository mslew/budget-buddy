export default function Hero(){
    return(
        <div className="w-full h-[80%] flex flex-col items-center pt-20">
            <div className="w-3/4 h-1/2 text-center text-white flex flex-col items-center gap-10">
                <div className="lg:text-7xl text-3xl font-bold">
                    <p>Welcome to Budget Buddy!</p>
                    <p>The best place for you to create a budget!</p>
                </div>
                <button className="p-4 border text-white rounded-3xl w-min whitespace-nowrap text-4xl bg-slate-500">Create a Budget!</button>
            </div>
        </div>
    )
}