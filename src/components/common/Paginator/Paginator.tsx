import React from "react";
import { useState } from "react";
import styles from './Paginator.module.css';

let Paginator: React.FC<PropsTypes> = ({totalItemsCount, pageSize, currentPage=1, onPageChanged, portionSize=10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = (pagesCount/portionSize);
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionPageNumber = (portionNumber - 1)*portionSize + 1;
    const rightPortionPageNumber = (portionSize*portionNumber);

    return <div className={styles.paginator}>
        {portionNumber>1 && <button onClick={() => {setPortionNumber(portionNumber-1)} }>PREV</button>}
           
            {pages
            .filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={currentPage === p ? `${styles.page} ${styles.page__current}` : `${styles.page}`}
                    key={p}
                    onClick={(e) => { onPageChanged(p) }} > {p} </span>
            })}
        {portionNumber<portionCount && <button onClick={() => {setPortionNumber(portionNumber+1)} }>NEXT</button>}
        </div>
}

export default Paginator;

type PropsTypes = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize?: number,
}