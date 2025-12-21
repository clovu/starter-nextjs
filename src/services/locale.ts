'use server'

import { Locale } from 'next-intl'
import { cookies } from 'next/headers'

const COOKIE_NAME = 'NEXT_LOCAL'

export async function getUserLocale() {
  const store = await cookies()
  return store.get(COOKIE_NAME)?.value
}

export async function setUserLocale(locale: Locale) {
  const store = await cookies()
  store.set(COOKIE_NAME, locale)
}
