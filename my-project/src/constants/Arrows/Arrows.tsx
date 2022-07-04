import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { ArrowsType } from "."

export const SampleNextArrow = ({ ...props }: ArrowsType) => {
    const { className, onClick } = props
    return (
      <div
            className={className}
            style={{
                color: 'white',
                fontSize: '25px',
            }}
            onClick={onClick}
        >
            <RightOutlined />
        </div>
    )
}
  
export const SamplePrevArrow = ({ ...props }: ArrowsType) => {
    const { className, onClick } = props
    
    return (
        <div
            className={className}
            style={{
                color: 'white',
                fontSize: '25px',
            }}
            onClick={onClick}
        >
            <LeftOutlined />
        </div>
    )
}