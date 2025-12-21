import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

import { DEFAULT_LOCALE, getMessageLoader } from './config'
import { getUserLocale } from '@/services/locale'
 
export default getRequestConfig(async () => {
  const locale = await getUserLocale() ?? DEFAULT_LOCALE
  const loader = getMessageLoader(locale)

  const messages = await Promise.try(loader)
  
  return {
    locale,
    messages: messages ?? {},
  }
})

