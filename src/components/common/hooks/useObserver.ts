import React, { useEffect, useRef } from "react";

export const useObserver = (ref: any, canLoad: boolean, isFetching: boolean, callback: () => void) => {
    const observer: React.MutableRefObject<any> = useRef();
    useEffect(() => {
        if(isFetching) return;
        if(observer.current) observer.current.disconnect();
        let cb = function(entries: any, observer: any) {
          
          if(entries[0].isIntersecting && canLoad  ) {
            callback();
          }
      };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);
      }, [isFetching])
}