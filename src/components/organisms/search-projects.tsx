'use client'

import { forwardRef, HTMLAttributes, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Input } from '@/components/atoms/input'
import { cn, cva, VariantProps } from '@/utils/theme'
import { SearchIcon, XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const styles = {
  root: cva('grid grid-cols-[1fr_auto_auto] gap-2')
}

type SearchProjectsRef = HTMLFormElement
type SearchProjectsProps = HTMLAttributes<SearchProjectsRef> &
  VariantProps<typeof styles.root> & {
    queries: string[]
  }

type SearchForm = { query: string }

const SearchProjects = forwardRef<SearchProjectsRef, SearchProjectsProps>((props, ref) => {
  const { queries, className, ...rest } = props
  const { push } = useRouter()

  const queryString = queries.join(' ').trim()
  const hasQueries = !!queryString

  const { reset, register, handleSubmit } = useForm<SearchForm>({
    defaultValues: { query: queryString }
  })

  const handleSubmitForm = useCallback(
    (form: SearchForm) => {
      const { query } = form
      push(`/works${query ? `?query=${query}` : ''}`)
    },
    [push]
  )

  const handleClearForm = useCallback(() => {
    reset({ query: '' })
    push(`/works`)
  }, [push, reset])

  return (
    <form
      ref={ref}
      className={cn(styles.root({ className }))}
      onSubmit={handleSubmit(handleSubmitForm)}
      {...rest}
    >
      <Input placeholder={'Search Projects'} {...register('query')} />
      {hasQueries && (
        <Button type="button" onClick={handleClearForm}>
          <Icon icon={XIcon} /> Clear
        </Button>
      )}
      <Button type="submit">
        <Icon icon={SearchIcon} /> Search
      </Button>
    </form>
  )
})
SearchProjects.displayName = 'SearchProjects'

export { SearchProjects }
export type { SearchProjectsProps, SearchProjectsRef }
