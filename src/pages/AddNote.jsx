import React from 'react'
import Navbar from '../components/Navbar'
import moment from 'moment'
import { storeToLocal } from '../libs/storeToLocal'

const AddNote = () => {

    const handleSubmit = (event)=>{
        event.preventDefault()
        const {title, content} = event.target
        storeToLocal({
            id : Date.now(),
            title : title.value,
            content : content.value,
            createdAt : moment().format("dddd DD-MM-YYYY hh:mm")
        })
        .then(response => window.location.href = "/note")
    }

  return (
    <main className='w-screen min-h-screen flex flex-col p-6 bg-slate-100 gap-6'>
        <h1 className='text-gray-500 font-bold text-2xl'> Buat Catatan Kamu </h1>

        <form className='w-full h-full p-6 gap-6 flex flex-col' onSubmit={handleSubmit}>
            <div className='form_group flex flex-col w-full gap-4'>
                <label htmlFor="title" className='text-gray-500 font-thin uppercase'>Judul Note</label>
                <input type="text" name='title' id='title' className='p-2 font-serif text-xl bg-white' required/>
            </div>

            <div className='form_group flex flex-col w-full gap-4 rounded-full'>
                <label htmlFor="content" className='text-gray-500 font-thin uppercase'>Content</label>
                <textarea type="text" name='content' id='content' className='p-2 font-serif text-xl bg-white' required></textarea>
            </div>

            <div className='flex w-full gap-4 rounded-full'>
                <button type='submit' className='h-10 bg-green-500 text-white flex-1'>Tambah Note</button>
                <button type='reset' className='h-10 bg-gray-500 text-white flex-1'>Reset</button>
            </div>
        </form>

        <Navbar/>

    </main>
  )
}

export default AddNote