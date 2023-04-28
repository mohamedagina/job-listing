import './SkeletonLoader.css';

export const SkeletonLoader = ({ times }) => {
  const skeletons = new Array(times).fill(0);

  return (
    <>
      {skeletons.map((_, index) => (
        <div className="skeleton-loader" key={index}>
          <div className="shimmer"></div>
        </div>
      ))}
    </>
  );
};
