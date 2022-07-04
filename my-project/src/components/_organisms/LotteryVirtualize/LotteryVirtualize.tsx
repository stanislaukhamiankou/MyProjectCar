import { useEffect, useRef, useState } from 'react'
import { ModalLottery } from '..'

import { LotteryVirtualizeType } from './LotteryVirtualizeType'
import './style.scss'

export const LotteryVirtualize = ({ data, rowHeight, visibleRows, className }: LotteryVirtualizeType) => {
    const rootRef = useRef<any>()
    const [start, setStart] = useState(0)
    
    function getTopHeight() {
      return rowHeight * start;
    }
    function getBottomHeight() {
      return rowHeight * (data.length - (start + visibleRows + 1));
    }
    
    useEffect(() => {
      function onScroll(e: any) {
        setStart(Math.min(
          data.length - visibleRows - 1,
          Math.floor(e.target.scrollTop / rowHeight)
        ));
      }
      rootRef.current.addEventListener('scroll', onScroll);
  
      return () => {
        rootRef.current.removeEventListener('scroll', onScroll);
      }
    }, [data.length, visibleRows, rowHeight]);
    
    return (
      <div style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }} ref={rootRef}>
      <div style={{ height: getTopHeight() }} />
        <table>
            <tbody>
            {data.slice(start, start + visibleRows + 1).map((row: any, rowIndex: any) => (
                <tr
                style={{ height: rowHeight }}
                key={start + rowIndex}
                >
                    {row.map((text: number, colIndex: any) => (
                        <td key={start + '' + rowIndex + colIndex}>
                            <ModalLottery 
                              nameButton={String(text)}
                            />
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
      <div style={{ height: getBottomHeight() }} />  
      </div>
    )
  }