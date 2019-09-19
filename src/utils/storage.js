export const isTimeLimitElapsed = date => {
  const timeLimitMinutes = 120
  const timeLimitMilliseconds = timeLimitMinutes * 60 * 1000

  return Date.now() - date > timeLimitMilliseconds
}
