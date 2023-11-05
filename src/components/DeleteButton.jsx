import React from 'react'
import { Dialog , Button, Flex} from '@radix-ui/themes'

const DeleteButton = ({handleDelete, index}) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button color='purple' className='w-[100px]'>Delete </Button>
            </Dialog.Trigger>
            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Delete ({index + 1})</Dialog.Title>
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button className='w-[100px]' variant="soft" color="purple">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button color='purple' className='w-[100px]' onClick={() => handleDelete(index)}>Confirm</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}

export default DeleteButton