import { SearchOutlined } from "@ant-design/icons"
import { ColumnsType } from "antd/lib/table"
import { InputDefault } from "src/components/_atoms"
import { IUser } from "src/redux"

export const columnsUsersList: ColumnsType<IUser> = [
    {
      title: 'User name',
      dataIndex: 'user_name',
      key: 'user_name',
    }
    //   filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
    //     return (
    //       <>
    //         <InputDefault
    //           placeholder="Search username"
    //           value={selectedKeys[0]}
    //           onChange={(e) => {
    //             setSelectedKeys(e.target.value ? [e.target.value] : [])
    //             confirm({ closeDropdown: false })
    //           }}
    //           onPressEnter={() => {
    //             confirm()
    //           }}
    //           onBlur={() => {
    //             confirm()
    //           }}
    //         />
    //       </>
    //     )
    //   },
    //   filterIcon: () => {
    //     return <SearchOutlined />
    //   },
    //   onFilter: (value, record: IUsers) => {
    //     return record.user_name
    //       .toLowerCase()
    //       .includes(value.toString().toLowerCase())
    //   },
    // },
    // {
    //   title: 'Full name',
    //   children: [
    //     {
    //       title: 'First Name',
    //       dataIndex: 'first_name',
    //       key: 'first_name',
    //       sorter: (a, b: IUsers) => a.first_name.localeCompare(b.first_name),
    //     },
    //     {
    //       title: 'Last Name',
    //       dataIndex: 'last_name',
    //       key: 'last_name',
    //       sorter: (a, b: IUsers) => a.last_name.localeCompare(b.last_name),
    //     },
    //   ],
    // },
    // {
    //   title: 'Role',
    //   dataIndex: 'role',
    //   key: 'role',
    // },
    // {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   key: 'age',
    //   sorter: (a, b: IUsers) => a.age - b.age,
    // },
    // {
    //   title: 'Email',
    //   dataIndex: 'email',
    //   key: 'email',
    // },
    // {
    //   title: 'Created at',
    //   dataIndex: 'created_at',
    //   key: 'created_at',
    //   defaultSortOrder: 'descend',
    //   sorter: (a, b: IUsers) => a.created_at?.localeCompare(b.created_at),
    //   render: (date: string) => getDateFormat(date),
    // },
    // {
    //   title: 'Delete Users',
    //   dataIndex: 'delete',
    //   render: (text, record, index) => DeleteButton(record.id),
    // },
  ]