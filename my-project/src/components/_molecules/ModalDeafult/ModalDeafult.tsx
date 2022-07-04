import React, { useState } from 'react'
import { Modal } from 'antd'
import cn from 'classnames'

import { ButtonDefault } from 'src/components/_atoms'
import { ModalDeafultType } from '.'

export const ModalDefault = ({ className, nameButton, icon, formDefault, titleDefault, classNamModal }: ModalDeafultType) => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleOk = () => {
        setIsModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    return (
        <div className={cn('modal-default', className)}>
            <ButtonDefault onClick={showModal} icon={icon}>
                {nameButton}
            </ButtonDefault>
            <Modal
                title={titleDefault}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                className={classNamModal}
            >
                {formDefault}
            </Modal>
        </div>
    )
}