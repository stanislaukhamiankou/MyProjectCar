import { Form, Input, Space, Typography } from 'antd'
import cn from 'classnames'
import { FormAddData } from 'src/api'
import { ButtonDefault } from 'src/components/_atoms'

import { FormDefaultType } from '.'

export const FormDefault = ({onFinish, className, itemForm, autoComplete, children, classNameHeader, classNameItem, classNameButton}: FormDefaultType) => (
    <div className={cn('form-default', className)}>
        <Form<FormAddData>
            name="basic"
            labelCol={{ span: 30 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete={autoComplete}
        >
            <Typography className={cn('form-header-default', classNameHeader)}>{children}</Typography>
            <Space direction="vertical" className={cn('form-item-default', classNameItem)}>
                {itemForm.map((item) => {
                    return(
                        <Form.Item
                            label={item}
                            name={item}
                        >
                            <Input />
                        </Form.Item>
                    )
                })}
            </Space>
            <Form.Item wrapperCol={{ offset: 4, span: 16 }} className={classNameButton}>
                <ButtonDefault>{children}</ButtonDefault>
            </Form.Item>
        </Form>
    </div>
)