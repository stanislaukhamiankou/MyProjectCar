import { LockOutlined, MailOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input, Space, Typography } from "antd"

import { routes } from "src/router/Config/config.routes"
import { requestSignIn } from "src/redux/users/action"
import { FormDataSigIn, SignInData } from "src/api"
import { useAppDispatch } from "src/redux/hooks"
import useRouter from "src/hooks/useRouter"
import { SIGN_IN } from "src/constants"
import './style.scss'

const UtilsSignIn = (formData: FormDataSigIn): SignInData => ({
    email: formData.email,
    password: formData.password,
  })

export const SignIn = () => {
    const dispatch = useAppDispatch()
    const { push } = useRouter()
    
    const onFinish = (values: FormDataSigIn) => {
      dispatch(requestSignIn({ dataLogin: UtilsSignIn(values) }))
      push(routes.homepage)
    }
  
    return (
      <Form<FormDataSigIn>
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className="signin-form"
      >
        <Typography className="main-label">{SIGN_IN.TITLE_SIGN_IN}</Typography>
        <Space direction="vertical" className="inputs-sign-in">
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
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
          className="remember-sign-up"
        >
            <Checkbox>{SIGN_IN.REMEMBER_ME}</Checkbox>
            <a className="login-form-forgot">
                {SIGN_IN.FORGOT_PASSWORD}
            </a>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="sign-in-button">
            {SIGN_IN.TITLE_SIGN_IN}
          </Button>
        </Form.Item>
      </Form>
    )
  }