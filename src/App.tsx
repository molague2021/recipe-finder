export const App = () => {
  // TODO: add header with title
  return (
    <div className="bg-white grid grid-cols-1">
      <div className="bg-blue-500 text-white p-4">Header</div>
      <div className="flex lg:items-center flex-col px-4 pt-12 gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-neutral-900 font-nunito font-extrabold text-[52px]/[110%] tracking-[-2px] ">
            Healthy meals, zero fuss
          </p>
          <p className="text-neutral-800 font-nunito-sans text-[20px]/[150%] tracking-[-0.4px]">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
        </div>
        <button className="btn bg-neutral-900 text-white w-49.5 h-15 rounded-lg font-nunito text-[20px]/[140%] tracking-[-0.5px]">
          Start exploring
        </button>
        <img
          src="/assets/images/image-home-hero-small.webp"
          alt="hero image"
          className="w-full"
        />
      </div>
      <div className="flex lg:items-center flex-col p-4 gap-8">
        features section
      </div>
      <div className="bg-yellow-500 text-white p-4">real life section</div>
      <div className="bg-pink-500 text-white p-4">call to action section</div>
      <div className="bg-neutral-900 text-white p-4">footer section</div>
    </div>
  );
};
