import React from 'react';
import Preloader from '../common/preloader/Preloader';



export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>)  {
  //не стрелочная функция как везде т.к. <всп> в ней воспринимается как тег
  return (props: WCP) => {
    <React.Suspense fallback={<Preloader />}>
      <WrappedComponent {...props} />
    </React.Suspense>
  };
}
