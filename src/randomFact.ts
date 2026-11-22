// Leave at least one choice available if the list is reduced to one or two facts.
export function selectRandomFact(count: number, recent: readonly number[], random = Math.random) {
  if (count < 1) return null
  const historySize = Math.min(Math.ceil(count / 1.5), count - 1)
  const excluded = new Set(historySize ? recent.slice(-historySize) : [])
  const eligible = Array.from({ length: count }, (_, index) => index).filter((index) => !excluded.has(index))
  const index = eligible[Math.floor(random() * eligible.length)]
  return { index, recent: historySize ? [...recent, index].slice(-historySize) : [] }
}
