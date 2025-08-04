
export const prettier = () => {
  const getRandomEmoji = () => {
    const start = 0x1F600; 
    const end = 0x1F64F;
    const codePoint = Math.floor(Math.random() * (end - start + 1)) + start;
    return String.fromCodePoint(codePoint);
  }

  const hasEmoji = (text) => {
    const emojiRegex = /[\u{1F600}-\u{1F6FF}]/u;
    return emojiRegex.test(text);
  }

  return {
    getRandomEmoji,
    hasEmoji
  }
}

