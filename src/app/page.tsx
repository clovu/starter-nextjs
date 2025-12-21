import { useTranslations } from 'next-intl'

import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import { availableLocales } from '@/i18n'
import Link from 'next/link'

export default function Home() {
  const t = useTranslations()

  return (
    <main className="text-center text-gray-700 dark:text-gray-200">
      <p>
        <a rel="noreferrer" href="https://github.com/clovu/tarter-nextjs" target="_blank"> Starter </a>
      </p>
      <p>{t('intro.desc')}</p>
      <div className="py-4"></div>
      <Input autoComplete="false" placeholder={t('intro.whats-your-name')} className="px-4 py-2 w-[250px]" />
      <div>
        <Button className="m-3 text-sm">{t('button.go')}</Button>
      </div>

      <nav className="mt-6 justify-center text-xl gap-4">
        <LocaleSwitcher locales={availableLocales} />

        <Link
          href="https://github.com/clovu/starter-nextjs.git"
          target="_blank" 
          className={buttonVariants({ variant: 'default' })}
        >
          <span className="icon-[carbon--logo-github] size-5"></span>
        </Link>
      </nav>
    </main>
  )
}
