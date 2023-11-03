const Spinner = () => {
  return (
    <div className="absolute inset-0 flex place-items-center place-content-center">
      <div className="w-8 h-8 border-2 border-transparent border-t-red-700 border-r-red-700 rounded-full animate-spin" />
    </div>
  );
};

export default Spinner;
