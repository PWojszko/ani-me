const RotatedTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="fixed text-6xl -ml-2 top-12 rotate-90 origin-top-left opacity-25 whitespace-nowrap">
      {children}
    </h1>
  );
};

export default RotatedTitle;
