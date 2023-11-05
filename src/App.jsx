import { useState, useEffect } from 'react'
import { Table, Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import EditButton from './components/EditButton';
import DeleteButton from './components/DeleteButton';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';

function App() {

  const [data, setData] = useState([]);
  const [name, setName] = useState("")

  useEffect(() => {
    console.log("running")
    const fetchData = async () => {
      try {
        const response = await fetch("/api")
        const d = await response.json();
        setData(d);
      }
      catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [])


  const handleSave = (index) => {
    const currentObj = data[index];
    const updatedObj = { ...currentObj, name: name }; // create a new object with updated name
    const updatedData = [...data]; // create a new array
    updatedData[index] = updatedObj; // update the object at the specified index
    setData(updatedData); // update the state with the new array
    console.log(updatedData[index]);
  }

  const handleDelete = (index) => {
    const newArr = data.filter((item, i) => {
      return i !== index;
    })

    setData(newArr)
  }

  return (
    <div className='m-[30px] flex justify-center'>
      <Table.Root variant='surface' className='w-[1000px]'>
        <TableHeader />
        <TableBody handleSave={handleSave} handleDelete={handleDelete} data={data} setName={setName} />
      </Table.Root>
    </div>
  )
}

export default App
