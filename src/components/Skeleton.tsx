const Skeleton = ({ className }: { className: string }) => {
  return <div className={`animate-pulse bg-neutral-700 ${className}`} />;
};

export default Skeleton;
