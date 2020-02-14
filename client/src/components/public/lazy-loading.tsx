import React, { Suspense, lazy } from "react";
import Loading from "./loading";

const LazyLoading = (
  component: () => Promise<{ default: React.ComponentType<{}> }>
) => {
  const Component = lazy(component);
  const LazyLoad = () => {
    return (
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    );
  };

  return LazyLoad;
};

export default LazyLoading;
