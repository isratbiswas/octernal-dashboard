const Loader = () => {
  return (
    <div className="flex h-full min-h-[200px] lg:mt-80 w-full items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-lg opacity-20 animate-pulse" />

          <svg
            className="animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="spinner-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6366f1" /> {/* Indigo */}
                <stop offset="50%" stopColor="#a855f7" /> {/* Purple */}
                <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
              </linearGradient>
            </defs>
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="url(#spinner-gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="60 30"
            />
          </svg>
        </div>

        <span className="text-sm font-bold  tracking-widest uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Loading Experience
        </span>
      </div>
    </div>
  );
};

export default Loader;
