type SkeletonProps = {
  children?: React.ReactNode;
  className: string;
};

const Skeleton = ({ children, className }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-neutral-700 max-w-full max-h-full ${className}`}
    >
      {children && children}
    </div>
  );
};

export default Skeleton;
