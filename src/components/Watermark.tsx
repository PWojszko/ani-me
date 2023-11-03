const Watermark = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="flex items-center fixed inset-0 text-[20rem] -z-10 opacity-5 rotate-[15deg] text-center">
      {children}
    </span>
  );
};

export default Watermark;
