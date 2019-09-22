export const isCacheingTimeElapsed = clientDate => {
  const cacheingTimeMilliseconds = process.env.REACT_APP_API_CACHEING_TIME_MINUTES * 60 * 1000

  return Date.now() - clientDate > cacheingTimeMilliseconds
}
