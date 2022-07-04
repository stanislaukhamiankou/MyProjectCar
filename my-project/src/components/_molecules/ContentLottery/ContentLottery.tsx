import { Typography, Image } from 'antd'

import { LOTTERY } from 'src/constants'
import { ContentLotteryType } from '.'

export const ContentLottery = ({ nameButton }: ContentLotteryType) => {
    const winNumbers = Number(nameButton)
    
    return (
        <div>
            <Image
                width={450}
                src={winNumbers === 132 ? 
                    "https://paultan.org/cn/image/2017/03/104494_All_new_Honda_Civic_Type_R_races_into_view_at_Geneva-e1488874861539.jpg" : 
                    ''
                }
                />
            <Typography className="description-img">
                {winNumbers === 132 ? LOTTERY.WIN_TITLE : LOTTERY.BAD_LUCK}
            </Typography>
        </div>
    )
}