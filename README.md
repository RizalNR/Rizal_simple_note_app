# Simple Note App Dengan React

Okay kali ini kita akan membuat sebuah aplikasi sederhana dengan react.

Konsepnya adalah user bisa membuat ,mengedit ,menghapus note yang mereka buat

- Mobile First

# Installasi Project React

```bash
npx create-react-app simple_note_app
cd simple_note_app 
code .
```

# 1. Persiapan Project React

- Mengedit file index.html yang ada di dalam folder /public
    
    Ubah Title, icon dan Meta Description.
    

- Silahkan gunakan icon dari lorem icon [https://logoipsum.com/](https://logoipsum.com/)
- Jangan lupa edit file manifest.json yang ada di dalam folder public
- install tailwind css [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)
- Konfigurasi tailwind cs, edit tailwind.config dan tambahkan inport code tailwind di index.css
- Ubah file App.js menjadi App.jsx dan reset code
- Untuk mempercepat code react panggil **rafce** untuk membuat code react functional component

## 2. Routing dengan react-router-dom

Kita akan menggunakan **react router dom** untuk kebutuhan routing aplikasi kita ,silahkan install dahulu  :

```bash
npm install react-router-dom
```

Default routing file akan kita letakkan di file **App.jsx** silahkan buat skema terlebih dahulu pada file tersebut.

```jsx
//src/App.jsx
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<h1>home</h1>}/>
        <Route path='note' element={<h1>list note</h1>}/>
      
      </Routes>
    </BrowserRouter>

  )
}

export default App
```

Langkah diatas pertama kita mengimport BrowserRouter, Routes, Route ke file App.jsx

Selanjutnya BrowserRouter bersifat parent dari semua component yang kita puya.

# 3. Buat Struktur Folder di /src

Silahkan buat beberapa folder di dalam src dengan nama :

- components
    
    Folder yang akan kita isi dengan UI components pada aplikasi kita
    
- pages
    
    Folder yang berisi component page yang nantinya aka di panggil di App.jsx
    
- libs
    
    Folder yang berisi Library yang akan kita buat sendiri. Misalnya untuk logic aplikasi kita.
    
- constants
    
    Folder yang berisi constanta atau data dummy untuk kebutuhan aplikasi kita.
    
- assets
    
    Folder yang berisi assets bisa image atau file yang lain.
    

# 4. Page File

Kita akan buat file berberapa file di dalam folder /src/pages yang akan berisi page seluruh aplikasi kita.

- Home.jsx
    
    Page utama dari aplikasi yang berisi splash screen / halaman pembuka 
    

Silahkan update Route pada file App.jsx dan import component page Home.jsx

```jsx
// /src/pages/Home.jsx/
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"

const Home = () => {
  return (
    <main className='w-screen h-screen flex flex-col p-12 bg-gradient-to-t from-green-600 to-green-400 justify-center gap-6'>
      <div className='flex gap-2'>
        <img src={logo} alt="logo Rizal note App" className='h-8 '/>
        <h1 className='text-white font-light '>Rizal Note App</h1>
      </div>
      <h1 className='text-white font-bold text-6xl leading-24'>Aplikasi Simple Note App Gratisss</h1>
      <Link to="/note">
        <button className='h-12 bg-blue-500 text-white text-xl w-full rounded-full gap-4 flex justify-center items-center'>Buat Note Sekarang</button>
      </Link>
    </main>
  )
}

export default Home
```

Kita bisa lihat di atas untuk kebutuhan link di button, kita tidak menggunakan tag <a> akan tetapi kita menggunakan component bernama **Link** 

! Perhatikan juga Code

```jsx
import logo from "../assets/logo.svg"
```

```jsx
<img src={logo} alt="logo Rizal note App" className='h-8 '/>
```

Kita bisa lihat bahwa source file untuk kebutuhan image pada react menggunakan variable yang di import dari lokasi image itu berada .

Setelah semua code pada file Home.jsx selesai, silahkan import component Home ke file App.jsx untuk kita tempatkan di route. sehingga code jadi seperti ini :

```jsx
//src/App.jsx
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='note' element={<h1>list note</h1>}/>
      
      </Routes>
    </BrowserRouter>

  )
}

export default App
```

! Perhatikan :

```jsx
import Home from './pages/Home'
```

Component pada react di import dengan cara seperti ini dan jangan lupa selalu **huruf kapital**

dan perhatikan juga import component bisa dilakukan larena pada file Home.jsx kita telah menambahan code export :

```jsx
export default Home
```

Sehingga component Home di panggil di manapun,termasuk di file App.jsx

```jsx
<Route path='/' element={<Home/>}/>
```

Selanjutnya kita tinggal tempatkan component Home pada Route 

Pemanggilan component pada react adalah dengan menempatkan nama component yang diletakkan di dalam **TAG JSX 

- Note.jsx
    
    Page note berisi semua list data note yang sudah di buat user
    

```jsx
// /src/pages/Note.jsx/
import React from 'react'

const Note = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col p-6'>
        <h1 className='text-gray-500 text-4xl font-serif '>Your'e Note</h1>
    </div>
  )
}

export default Note
```

Jangan Lupa update file App.jsx tambahkan Note.jsx ke dalam route “/note”.sehingga seperti ini:

```jsx
//src/App.jsx
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Note from './pages/Note'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='note' element={<Note />}/>
      
      </Routes>
    </BrowserRouter>

  )
}

export default App
```

kita sudah mempunyai 2 route yaitu Home.jsx dan Note.jsx yang akan di arahkan langsung ke komponent tersebut.

sekarang kita jalankan dengan cara :

```bash
npm run start
```

Kita akan menggunakan icon dari sebuah package bernama react-icons, Silahkan baca dokumentasi react-icons pada [https://react-icons.github.io/](https://react-icons.github.io/) dan silahkan install dengan cara : 

```bash
npm install react-icons
```

- AddNote.jsx
    
    File ini akan menambahkan note users berisi form
    

Kita akan menggunakan **localstorage** sebagai penyimpanan note yang di buat oleh user.

```jsx
// /src/pages/AddNote.jsx/
import React from 'react'

const AddNote = () => {
  return (
    <main className='w-screen min-h-screen flex flex-col p-6 bg-slate-100 gap-6'>
        <h1 className='text-gray-500 font-bold text-2xl'> Buat Catatan Kamu </h1>

        <form className='w-full h-full p-6 gap-6 flex flex-col'>
            <div className='form_group flex flex-col w-full gap-4'>
                <label htmlFor="title" className='text-gray-500 font-thin uppercase'>Judul Note</label>
                <input type="text" name='title' id='title' className='p-2 font-serif text-xl bg-white' />
            </div>

            <div className='form_group flex flex-col w-full gap-4'>
                <label htmlFor="title" className='text-gray-500 font-thin uppercase'>Content</label>
                <textarea type="text" name='title' id='title' className='p-2 font-serif text-xl bg-white'></textarea>
            </div>

            <div className='flex w-full gap-4 rounded-full'>
                <button type='submit' className='h-10 bg-green-500 text-white flex-1'>Tambah Note</button>
                <button type='submit' className='h-10 bg-gray-500 text-white flex-1'>Reset</button>
            </div>
        </form>
    </main>
  )
}

export default AddNote
```

Dan silahkan tambahkan pada route di App.jsx , Sehingga file App.jsx kita jadi seperti ini :

```jsx
//src/App.jsx
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddNote from './pages/AddNote'
import Home from './pages/Home'
import Note from './pages/Note'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='note' element={<Note/>}/>
        <Route path='addnote' element={<AddNote/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

Okay kita sudah berhasil membuat beberapa page dan routingnya , tetapi masih ada kekurangan yaitu kita belum memppunyai sebuah komponent untuk berpindah pindah page yaitu **Navbar**.  Berbeda dengan komponen page yang kita letakkan di dalam App.jsx file file compnent kita letakkan di komponen lainnya

Okay kita akan buat component di dalam folder /src/components nantinya akan kita import 

# 5. Components

- Navbar.jsx
    
    Navbar akan berisi navigasi ke setiap route yang kita punya.
    

```jsx
//src/components.Navbar.jsx
import React from 'react'
import { FiHome, FiUpload, FiDelete } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-20 flex flex-col justify-center items-center fixed bottom-0 left-0 p-4'>

        <nav className='w-full h-full bg-green-500 text-white flex justify-beetwen items-center rounded-full'>
            <Link to={"/note"} className='flex-1 h-full flex justify-center items-center text-white'>
                <FiHome/>
            </Link>

            <Link to={"/addnote"} className='flex-1 h-full flex justify-center items-center text-white'>
                <FiUpload/>
            </Link>

            <div className='flex-1 h-full flex justify-center items-center text-white'>
                <FiDelete/>
            </div>
        </nav>

    </div>
  )
}

export default Navbar
```

Langkah selanjutnya kita panggil komponen navbar di masing masing file pages, jika ingin ada navbar.

# 6. Library

Library adalah logical code yang kita buat untuk menjalankan perintah dari aplikasi kita.

kita meltakkan file library di dalam sebuah folder bernama libs.

- storeToLocal.js
    
    File ini berisi function untuk menambahkan data ke localstorage.
    
    ```jsx
    // src/libs/storeToLocal.js
    export const storeToLocal = async (data)=>{
        try {
            const lastData = await localStorage.getItem("note_app_data")
    
            if(!lastData){
                console.info("Belum ada data, dan data akan dibuat")
                let createLocal = localStorage.setItem("note_app_data", "[]")
            }
    
            let prevArray = await JSON.parse(localStorage.getItem("note_app_data"))
            let storeNewData = await prevArray.push(data)
            let newData = await localStorage.setItem("note_app_data", JSON.stringify(prevArray))
    
            return prevArray
    
        } catch (error) {
            return error
        }
    }
    ```
    
    Okay kita bisa lihat code di atas ,kita membuat function untuk menambahkan data ke localstorage.
    
    Selanjutnya kita akan import library /function tersebut ke file AddNote.jsx seperti di bawah ini :
    
    ```jsx
    // /src/pages/AddNote.jsx/
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
                cratedAt : moment().format("dddd DD-MM-YYYY hh:mm")
            })
    				.then(response => window.location.href = "/note")
        }
    
      return (
        <main className='w-screen min-h-screen flex flex-col p-6 bg-slate-100 gap-6 pb-32'>
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
                    <button type='submit' className='h-10 bg-gray-500 text-white flex-1'>Reset</button>
                </div>
            </form>
    
            <Navbar/>
            
        </main>
      )
    }
    
    export default AddNote
    ```
    
    ! Perhatikan
    
    ```jsx
    import { storeToLocal } from '../libs/storeToLocal'
    ```
    
    Mengapa cara import nya menggunakan object literal atau membungkus dengan object jawabanya adalah , kita melakukan proses export di dalam file storeToLocal.js tanpa menambahkan export default. seperti di bawah ini :
    
    ```jsx
    export const storeToLocal = async (data)=>{
    ...
    ```
    
    Kita juga membuat function di dalam komponen AddNote , untuk menghandle data yang dikirimkan dari form.
    
    ```jsx
    ... 
     const handleSubmit = (event)=>{
            event.preventDefault()
            const {title, content} = event.target
            storeToLocal({
                id : Date.now(),
                title : title.value,
                content : content.value,
                cratedAt : moment().format("dddd DD-MM-YYYY hh:mm")
            })
    				.then(response => window.location.href = "/note")
        }
    ...
    ```
    
    Dan di element form kita tambahka event listener, seperti di bawah :
    
    ```jsx
    ...
    <form className='w-full h-full p-6 gap-6 flex flex-col' onSubmit={handleSubmit}>
    ...
    ```
    
    Sekarang kita bisa melihat di console browser pada tab application dan sub localstorage ada sebuah key bernama “note_app_data” yang sudah berisi data string yang diinput oleh user.
    
    ![Screenshot (2).png](Simple%20Not%2039d9c/Screenshot_(2).png)
    
    # Mapping data dari localstorage ke komponen di react
    
    Okay selanjutnya adalah melakukan mapping data dari localstorage ke komponent react kita,
    
    agar user bisa melihat data yang sudah di masukkan.
    
    Untuk langkah pertama kita akan membuat sebuah library baru untuk mendapatkan data dari localstorage.
    
    - getLocalData()
        
        Library ini akan berisi logis yang mereturn data dari localstorage , menjadi data JSON yang bisa dimengerti oleh react.
        
    
    ```jsx
    export const getLocalData = async ()=>{
        try {
            const localData = await localStorage.getItem("note_app_data")
            return JSON.parse(localData)
    
        } catch (error) {
            return error
        }
    }
    ```
    
    Bisa dilihat code diatas , kita membuat sebuah function bernama getLocalData yang akan mereturn data LocalStorage bernama “note_app_data”, dan menjadikannya ke JSON. Hal ini dilakukan karena kita akan melakukan proses mapping data diamana react hanya akan mengerti code JavaScript bukan string.
    
    Untuk lebih memahami kita lihat data yang ada di localstorage :
    
    ```jsx
    [{"id":1648116686752,"title":"Cupidatat veniam do","content":"Enim ab voluptate fu","cratedAt":"Thursday 24-03-2022 05:11"}]
    ```
    
    Setelah di lakukan proses JSON.parse() :
    
    ```jsx
    [{
    	id:1648116686752,
    	title:"Cupidatat veniam do",
    	content:"Enim ab voluptate fu",
    	cratedAt:"Thursday 24-03-2022 05:11"
    }]
    ```
    
    selanjutnya kita modifikasi file note.jsx seperti ini : 
    
    ```jsx
    // src/pages/Notes.jsx
    import React, {useEffect, useState} from 'react'
    import Navbar from '../components/Navbar'
    import { getLocalData } from '../libs/getLocalData'
    
    const Note = () => {
    
      const [state, setState] = useState([])
    
      useEffect(()=>{
    
        getLocalData()
        .then(response => setState(response))
    
      }, [])
    
      return (
        <div className='w-screen min-h-screen flex flex-col p-10 bg-slate-100 gap-6 '>
            <h1 className='text-gray-500 text-4xl font-serif '>Your'e Note</h1>
            
            {state.map((e)=>{
              return (
                <div className='w-full p-4 flex flex-col bg-white gap-2'>
                  <h1 className='text-gray-500 font-serif'>
                    {e.title}
                  </h1>
    
                  <p className='text-gray-500 font-light'>
                    {e.content}
                  </p>
                  
                  <small className='text-gray-500 font-light'>
                    {e.createdAt}
                  </small>
                
                </div>
              )
            })}
            
            <Navbar/>
    
        </div>
      )
    }
    
    export default Note
    ```