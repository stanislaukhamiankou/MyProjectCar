import { makeTableData } from 'src/constants/MakeVirtualize/MakeVirtualize'
import { LotteryVirtualize } from 'src/components/_organisms'
import './style.scss'
import { Typography } from 'antd'
import { MENU_ITEM } from 'src/constants'

export const Lottery = () => (
    <div className="lottery-block">
        <Typography className="lottery-header">
            {MENU_ITEM.ITEM_LOTTERY}
        </Typography>
        <LotteryVirtualize 
            data={makeTableData(5, 40)}
            rowHeight={56}
            visibleRows={9}
        />
    </div>
)