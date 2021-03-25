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
