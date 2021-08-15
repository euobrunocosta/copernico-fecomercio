export const formatCurrency = (number: number) => {
  const formatter = new Intl.NumberFormat(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    }
  )

  return formatter.format(number)
}

export const formatDecimalNumber = (number: number) => {
  const formatter = new Intl.NumberFormat(
    'pt-BR',
    {
      style: 'decimal',
      maximumFractionDigits: 2
    }
  )

  return formatter.format(number)
}

export const removeMaskGuides = (value: string) => (
  value
    .replace(/_/g, '')
    .replace(/-/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/ /g, '')
    .replace(/[^\d]+/g, '')
)