export const App = () => {
  // TODO: add header with title
  return (
    <div className="bg-white grid grid-cols-1">
      <div className="bg-blue-500 text-white p-4">Header</div>
      <div className="flex lg:items-center flex-col p-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-neutral-900 font-nunito font-extrabold text-[52px]/[110%] tracking-[-2px] ">
            Healthy meals, zero fuss
          </div>
          <div className="text-neutral-800 font-nunito-sans text-[20px]/[150%] tracking-[-0.4px]">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </div>
        </div>
        <button className="btn bg-neutral-900 text-white w-49.5 h-15 rounded-lg">
          Start exploring
        </button>
      </div>
      <div className="bg-purple-500 text-white p-4">features section</div>
      <div className="bg-yellow-500 text-white p-4">real life section</div>
      <div className="bg-pink-500 text-white p-4">call to action section</div>
      <div className="bg-neutral-900 text-white p-4">footer section</div>
    </div>
  );
};
