import { LockOutlined, MailOutlined } from "@ant-design/icons"
import { Button, Form, Input, Space, Typography } from "antd"

import { FormDataRegister, RegisterData } from "src/api"
import { requestRegister } from "src/redux/users/action"
import { routes } from "src/router/Config/config.routes"
import { useAppDispatch } from "src/redux/hooks"
import useRouter from "src/hooks/useRouter"
import { REGISTER } from "src/constants"

const UtilsRegister = (formData: FormDataRegister): RegisterData => ({
    username: formData.username,
    email: formData.email,
    password: formData.password,
  })

export const Register = () => {
    const dispatch = useAppDispatch()
    const { push } = useRouter()

  
    const onFinish = (values: FormDataRegister) => {
      dispatch(requestRegister({ dataRegister: UtilsRegister(values) }))
      push(routes.homepage)
    }
  
    return (
      <Form<FormDataRegister>
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className="signin-form"
      >
        <Typography className="main-label">{REGISTER.TITLE_REGISTER}</Typography>
        <Space direction="vertical" className="inputs-sign-in">
            <Form.Item
                label="Username"
                name="username"
            >
            <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Enter username"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Enter username"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Enter password"
              autoComplete="new-password"
            />
          </Form.Item>
        </Space>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="sign-in-button">
            {REGISTER.TITLE_REGISTER}
          </Button>
        </Form.Item>
      </Form>
    )
  }