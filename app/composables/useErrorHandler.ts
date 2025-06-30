export const useErrorHandler = () => {
  const error = ref<string | null>(null)
  const isError = computed(() => !!error.value)

  const setError = (message: string) => {
    error.value = message
  }

  const clearError = () => {
    error.value = null
  }

  const handleError = (err: unknown) => {
    if (err instanceof Error) {
      setError(err.message)
    } else if (typeof err === 'string') {
      setError(err)
    } else {
      setError('An unexpected error occurred')
    }
  }

  return {
    error: readonly(error),
    isError,
    setError,
    clearError,
    handleError
  }
} 