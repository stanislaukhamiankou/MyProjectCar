import { Form } from "antd"
import { CarEditData, FormEditData } from "src/api";

import { ButtonDefault, InputDefault } from "src/components/_atoms"
import { ICar } from "src/redux";
import { requestEditCar } from "src/redux/cars/action";
import { useAppDispatch } from "src/redux/hooks";

const prepareCarEdit = (formData: FormEditData): CarEditData => ({
    make: formData.make,
    model: formData.model,
    fuel_type: formData.fuel_type,
    drive: formData.drive,
    cylinders: formData.cylinders,
    min_city_mpg: formData.min_city_mpg,
    max_city_mpg: formData.max_city_mpg,
    min_hwy_mpg: formData.min_hwy_mpg,
    max_hwy_mpg: formData.max_hwy_mpg,
    img: formData.img,
  })

export const FormEditCar = () => {
    const dispatch = useAppDispatch()

    const onFinish = (values: FormEditData) => {
        dispatch(requestEditCar({car: prepareCarEdit(values), id: '1' }))
    }

    return(
        <Form<FormEditData>
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
        <Form.Item
            label="Make"
            name="make"
        >
            <InputDefault />
        </Form.Item>

        <Form.Item
            label="Model"
            name="model"
        >
            <InputDefault />
        </Form.Item>

        <Form.Item
            label="Fuel_type"
            name="fuel_type"
        >
            <InputDefault />
        </Form.Item>

        <Form.Item
            label="Drive"
            name="drive"
        >
            <InputDefault />
        </Form.Item>

        <Form.Item
            label="Cylinders"
            name="cylinders"
        >
            <InputDefault />
        </Form.Item>

        <Form.Item
            label="Max_city_mpg"
            name="max_city_mpg"
        >
            <InputDefault />
        </Form.Item>

        <Form.Item
            label="Min_hwy_mpg"
            name="min_hwy_mpg"
        >
            <InputDefault />
        </Form.Item>

        <Form.Item
            label="Max_hwy_mpg"
            name="max_hwy_mpg"
        >
            <InputDefault />
        </Form.Item>

        <Form.Item
            label="Img"
            name="img"
        >
            <InputDefault />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <ButtonDefault>
                Submit
            </ButtonDefault>
        </Form.Item>
        </Form>
    )
}