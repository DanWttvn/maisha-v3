import { useEffect, useRef, useState, MutableRefObject } from 'react'

function useIntersection(
  first = true,
  distance = '100px',
  initialValue?: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): { isNear: boolean; elementRef: MutableRefObject<any> } {
  const [isNear, setNear] = useState(initialValue || false)
  const elementRef = useRef()

  useEffect(() => {
    const element = elementRef.current

    const onChange: IntersectionObserverCallback = (entries, observer) => {
      const el = entries[0]
      if (!!el?.isIntersecting) {
        setNear(true)
        if (first) observer.disconnect()
      } else {
        if (!first) setNear(false)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })

    if (element) observer.observe(element)

    return () => observer && observer.disconnect()
  })

  return { isNear, elementRef }
}

export default useIntersection
