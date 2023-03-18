import { createEmotionCache, EmotionCache } from "@mantine/core";

let cache: EmotionCache | undefined;

export const emotionCache = () => {
  if (!cache) {
    cache = createEmotionCache({
      key: "mantine",
      prepend: false,
    });
  }
  return cache;
};
