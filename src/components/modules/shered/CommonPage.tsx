const CommonPage = ({ title }: { title: string }) => {
  return (
    <div className="p-6 flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <h1 className="font-display font-bold text-2xl text-gray-800 mb-2">
          {title}
        </h1>
        <p className="text-gray-400 text-sm">Coming soon</p>
      </div>
    </div>
  );
};

export default CommonPage;
