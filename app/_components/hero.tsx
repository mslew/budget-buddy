export default function Hero(){
    return(
        <div className="w-full h-[80%] flex flex-col items-center pt-20">
            <div className="w-3/4 h-1/2 text-center text-white flex flex-col">
                <div className="text-7xl">
                    <p>Welcome to Budget Buddy!</p>
                    <p>Your one stop shop for all your budgeting needs.</p>
                </div>
            </div>
            <button className="p-2 border text-white rounded-lg">Create a Budget!</button>
        </div>
    )
}