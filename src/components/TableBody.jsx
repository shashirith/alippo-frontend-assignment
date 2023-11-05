import React from 'react'
import { Table } from '@radix-ui/themes'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

const TableBody = ({data, setName, handleSave, handleDelete}) => {
    return (
        <Table.Body className='mt-[20px]'>
            {
                data.map((item, index) => {
                    return (
                        <Table.Row style={{
                            margin: '20px'
                        }} key={index}>
                            <Table.Cell style={{
                                boxShadow: "none",
                            }}>{index + 1}</Table.Cell>
                            <Table.Cell style={{
                                boxShadow: "none",
                            }}>{item.name === null ? "Not Available" : item.name}</Table.Cell>
                            <Table.Cell style={{
                                boxShadow: "none",
                            }}>{item.age === null ? "Not Available" : item.age}</Table.Cell>
                            <Table.Cell style={{
                                boxShadow: "none",
                            }}>{item.city === null ? "Not Available" : item.city}</Table.Cell>
                            <Table.Cell style={{
                                boxShadow: "none",
                            }}>{item.pinCode === null ? "Not Available" : item.pinCode}</Table.Cell>
                            <Table.Cell style={{
                                boxShadow: "none",
                            }} className='flex flex-row gap-[20px] justify-start items-center'>
                                <EditButton item={item} index={index} setName={setName} handleSave={handleSave} />
                                <DeleteButton handleDelete={handleDelete} index={index} />
                            </Table.Cell>
                        </Table.Row>
                    )
                })
            }
        </Table.Body>
    )
}

export default TableBody