import CreateButton from "./createbutton";

export default function Hero() {
  return (
    <div className="w-full h-[80%] flex flex-col items-center justify-center">
      <div className="w-full md:w-3/4 h-1/2 text-center text-white flex flex-col items-center gap-10">
        <div className="lg:text-7xl text-5xl font-bold">
          <p>Welcome to Budget Buddy!</p>
          <p>The best place for you to create a budget!</p>
        </div>
        <CreateButton textSize="lg:text-4xl text-2xl gap-3" height="lg:h-10 h-6">
          Create a Budget
        </CreateButton>
      </div>
    </div>
  );
}
