import React from 'react'
import { Dialog, Button, Flex, TextField } from '@radix-ui/themes'

const EditButton = ({handleSave, item, index, setName}) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button className='w-[100px]' color='purple'>Edit</Button>
            </Dialog.Trigger>
            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Edit Name</Dialog.Title>
                <Flex direction="column" gap="3">
                    <TextField.Input
                        onChange={(e) => setName(e.target.value)}
                        defaultValue={item.name}
                        placeholder="Enter your full name"
                    />
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button color='purple' className='w-[100px]' variant="soft">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button color='purple' className='w-[100px]' onClick={() => handleSave(index)}>Save</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}

export default EditButton