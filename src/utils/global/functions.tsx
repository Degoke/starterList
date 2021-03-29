import { useEffect, useRef } from 'react'

export const useCombinedRefs = (
  ...refs: React.Ref<HTMLDivElement>[]
): React.Ref<HTMLDivElement> => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(targetRef.current)
      } else {
        ref.current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}

export const parseDate = (d: string | undefined): string => {
  if (d === undefined) {
    return ''
  }
  const date = new Date(d)

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const dow = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const year = date.getFullYear()
  const month = months[date.getMonth()]
  const day = date.getDate()
  const weekDay = dow[date.getDay()]

  return `${weekDay}, ${day} ${month}, ${year}`
}
