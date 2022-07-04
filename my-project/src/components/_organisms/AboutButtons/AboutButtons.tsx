import { AppstoreAddOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import cn from 'classnames'

import { FormAddCar, ModalDefault } from 'src/components/_molecules'
import { ButtonDefault } from 'src/components/_atoms'
import { INTERACTION_CAR } from 'src/constants'
import { FormEditCar } from '../FormEditCar'
import { AboutButtonsType } from '.'


export const AboutButtons = ({className, classNamModal, functionDelete}: AboutButtonsType) => (
    <div className={cn('about-buttons', className)}>
        <ButtonDefault
            className="button-delete-car"
            icon={<DeleteOutlined />}
            onClick={functionDelete}
        >
            {INTERACTION_CAR.DELETE_CAR}
        </ButtonDefault>
        <ModalDefault
            nameButton={INTERACTION_CAR.ADD_CAR}
            className="button-delete-car"
            icon={<AppstoreAddOutlined />}
            formDefault={<FormAddCar />}
            titleDefault={INTERACTION_CAR.ADD_CAR}
            classNamModal={classNamModal}
        />
        <ModalDefault
            nameButton={INTERACTION_CAR.EDIT_CAR}
            className="button-delete-car"
            icon={<EditOutlined />}
            formDefault={<FormEditCar/>}
            titleDefault={INTERACTION_CAR.EDIT_CAR}
            classNamModal={classNamModal}
        />
    </div>
)