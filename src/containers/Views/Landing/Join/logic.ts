import { useEffect, useState } from 'react'
import useIntersection from 'hooks/useIntersection'

export function useLogic() {
  const [selectedAmount, setSelectedAmount] = useState<number>()
  const [customAmount, setCustomAmount] = useState(0)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSmallerThanMin, setIsSmallerThanMin] = useState(false)
  const [isCTAVisible, setIsCTAVisible] = useState(true)
  const { isNear, elementRef } = useIntersection(false, '350px', true)

  useEffect(() => {
    setIsCTAVisible(isNear)
  }, [isNear])

  const handleSelectAmount = (value: number) => {
    setSelectedAmount(value)
    if (value !== 0) setIsError(false)
  }

  const handleInputChange = (value: string) => {
    setCustomAmount(Number(value))
    handleSelectAmount(Number(value))
    setIsSmallerThanMin(false)
  }

  const handleOpenForm = () => {
    if (!selectedAmount || selectedAmount === 0) return setIsError(true)
    if (selectedAmount < 5) return setIsSmallerThanMin(true)
    setIsError(false)
    setIsFormModalOpen(true)
  }

  return {
    handleSelectAmount,
    selectedAmount,
    customAmount,
    isError,
    isSmallerThanMin,
    handleOpenForm,
    handleInputChange,
    elementRef,
    isFormModalOpen,
    setIsFormModalOpen,
    isCTAVisible,
  }
}
