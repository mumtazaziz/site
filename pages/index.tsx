import type { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale.
      messages: (await import(`@/messages/${locale ?? 'en'}.json`)).default
    }
  }
}
export default function Home (): JSX.Element {
  const t = useTranslations('About')
  return <h1>{t('title')}</h1>
}
