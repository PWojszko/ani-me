const Watermark = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="absolute inset-0 text-9xl font-bold -z-10 opacity-10 rotate-45 text-center">
      {children}
    </span>
  );
};

export default Watermark;
