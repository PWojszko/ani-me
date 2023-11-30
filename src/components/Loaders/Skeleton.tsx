const Skeleton = ({ className }: { className: string }) => {
  return (
    <div
      className={`animate-pulse bg-neutral-700 max-w-full max-h-full ${className}`}
    />
  );
};

export default Skeleton;
