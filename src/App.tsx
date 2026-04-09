export const App = () => {
  // TODO: add header with title
  return (
    <div className="bg-[#f6f5f1] grid grid-cols-1">
      <div className="bg-blue-500 text-white p-4">Header</div>
      <div className="flex lg:items-center flex-col px-4 pt-12 gap-8">
        <div className="flex flex-col lg:items-center gap-4">
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
      <div className="flex lg:items-center flex-col px-4 pt-16 gap-8">
        <h1 className="text-neutral-900 font-nunito font-extrabold text-[40px]/[120%] tracking-[-2px]">
          What you'll get
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-5">
            <div className="bg-white w-15 h-15 rounded-lg px-4.5 py-1 flex items-center shadow-sm">
              <img
                src="/assets/images/icon-whole-food-recipes.svg"
                alt="whole-food recipes icon"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-neutral-900 font-nunito font-bold text-[32px]/[130%] tracking-[-1px] mt-4">
                Whole-food recipes
              </p>
              <p className="text-neutral-800 font-nunito-sans text-[20px]/[150%] tracking-[-0.4px]">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-white w-15 h-15 rounded-lg px-3 py-1 flex items-center shadow-sm">
              <img
                src="/assets/images/icon-minimum-fuss.svg"
                alt="minimum fuss icon"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-neutral-900 font-nunito font-bold text-[32px]/[130%] tracking-[-1px] mt-4">
                Minimum fuss
              </p>
              <p className="text-neutral-800 font-nunito-sans text-[20px]/[150%] tracking-[-0.4px]">
                All recipes are designed to make eating healthy quick and easy.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-white w-15 h-15 rounded-lg px-2 py-1 flex items-center shadow-sm">
              <img
                src="/assets/images/icon-search-in-seconds.svg"
                alt="search in seconds icon"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-neutral-900 font-nunito font-bold text-[32px]/[130%] tracking-[-1px] mt-4">
                Search in seconds
              </p>
              <p className="text-neutral-800 font-nunito-sans text-[20px]/[150%] tracking-[-0.4px]">
                Filter by name or ingredient and jump straight to the recipe you
                need.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 text-white p-4">real life section</div>
      <div className="bg-pink-500 text-white p-4">call to action section</div>
      <div className="bg-neutral-900 text-white p-4">footer section</div>
    </div>
  );
};
