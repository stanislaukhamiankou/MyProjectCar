import { ModalDefault } from "src/components/_molecules"
import { ContentLottery } from "src/components/_molecules/ContentLottery"
import { ModalLotteryType } from "."

export const ModalLottery = ({nameButton}: ModalLotteryType) => {
    return (
        <div>
            <ModalDefault 
                nameButton={nameButton}
                formDefault={
                <ContentLottery 
                    nameButton={nameButton}
                />}
            />
        </div>
    )
}