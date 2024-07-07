'use client'

import * as React from 'react'
import { Laptop, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import {
   ToggleGroup,
   ToggleGroupItem,
} from '~/registry/default/ui/toggle-group'

export default function ModeToggleGroup() {
   const { setTheme, theme } = useTheme()
   const [currentTheme, setCurrentTheme] = useState<string>('')

   useEffect(() => {
      if (theme === 'system')
         setCurrentTheme('system')
      else if (theme === 'dark')
         setCurrentTheme('dark')
      else if (theme === 'light')
         setCurrentTheme('light')
   }, [theme])

   return (
      <ToggleGroup type="single" variant="outline" className="scale-90 rounded-full border p-1" value={currentTheme}>
         <ToggleGroupItem
            value="light"
            onClick={() => setTheme('light')}
            disabled={theme === 'light'}
            className="rounded-full disabled:bg-accent disabled:opacity-100"
         >
            <Sun className="h-5 w-5" />
         </ToggleGroupItem>
         <ToggleGroupItem
            value="system"
            onClick={() => setTheme('system')}
            disabled={theme === 'system'}
            className="rounded-full disabled:bg-accent disabled:opacity-100"
         >
            <Laptop className="h-5 w-5" />
         </ToggleGroupItem>
         <ToggleGroupItem
            value="dark"
            onClick={() => setTheme('dark')}
            disabled={theme === 'dark'}
            className="rounded-full disabled:bg-accent disabled:opacity-100"
         >
            <Moon className="h-5 w-5" />
         </ToggleGroupItem>
      </ToggleGroup>
   )
}
