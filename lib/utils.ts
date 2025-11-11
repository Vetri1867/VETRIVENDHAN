export function cn(...inputs: (string | undefined | null | false | { [key: string]: boolean })[]) {
  return inputs
    .flatMap((item) => {
      if (!item) return []
      if (typeof item === "string") return [item]
      return Object.entries(item)
        .filter(([, value]) => value)
        .map(([key]) => key)
    })
    .join(" ")
}
