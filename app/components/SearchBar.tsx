import React, { ChangeEvent, FormEvent, useState } from 'react'

interface SearchBarProps {
    onSearch: (query:string) => void;
}

const SearchBar = ({onSearch}:SearchBarProps) => {
    const [query, setQuery] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value)
    }
    const handleSubmit = (e: FormEvent)=>{
        e.preventDefault();
        onSearch(query);
    }
  return (
    <form onSubmit={handleSubmit} className='flex items-center w-screen max-w-3xl'>
        <input type="text" 
        value={query} 
        onChange={handleChange} 
        className='border border-gray-300 rounded-1 py-2 px-4 w-full focus:outline-none focus:border-blue-500'/>
        <button type='submit' className='rounded-r py-2 px-6 bg-slate-200'>Search</button>
    </form>
  )
}

export default SearchBar
