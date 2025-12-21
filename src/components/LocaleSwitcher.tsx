'use client'
import { useRef } from 'react'
import { Button } from './ui/button'
import { setUserLocale } from '@/services/locale'

interface Props {
  locales: string[]
}

export function LocaleSwitcher({ locales }: Readonly<Props>) {

  const index = useRef(0)

  function switcher() {
    const locale = locales[index.current++] 
      ?? locales[
        index.current = 0
      ]
    
    setUserLocale(locale)
    console.log(locale)
  }

  return <Button variant="outline" onClick={switcher}>
    <span className="icon-[carbon--language] size-5"/>
  </Button>
}
