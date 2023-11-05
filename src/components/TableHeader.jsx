import React from 'react'
import { Table } from '@radix-ui/themes'

const TableHeader = () => {
    return (
        <Table.Header>
            <Table.Row className='bg-[#EAEAEA]'>
                <Table.ColumnHeaderCell style={{
                    boxShadow: "none"
                }}>S. No.</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell style={{
                    boxShadow: "none"
                }}>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell style={{
                    boxShadow: "none"
                }}>Age</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell style={{
                    boxShadow: "none"
                }}>City</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell style={{
                    boxShadow: "none"
                }}>Pincode</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell style={{
                    boxShadow: "none"
                }}>Actions</Table.ColumnHeaderCell>
            </Table.Row>
        </Table.Header>
    )
}

export default TableHeader