import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '../ui/input'

const SearchInput = () => {
  return (
    <div className="relative hidden sm:block">
        <Search className="absolute left-4 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input className="w-64 pl-10 bg-primary/10" placeholder="Search" />
    </div>
  )
}

export default SearchInput