import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] =
    useState<string>('');
  const [recentValueFromCurrentRender, queueRerenderWithNewRecentValue] =
    useState<string>('');

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Previously selected emoji: {recentValueFromCurrentRender}</p>
      <p>Selected emoji: {emojiValueFromCurrentRender}</p>
      <button onClick={() => {queueRerenderWithNewEmojiValue("😀");
      queueRerenderWithNewRecentValue(emojiValueFromCurrentRender);}}>😀</button>
      <button onClick={() => {queueRerenderWithNewEmojiValue("😠");
      queueRerenderWithNewRecentValue(emojiValueFromCurrentRender);}}>😠</button>
      <button onClick={() => {queueRerenderWithNewEmojiValue("🍉");
      queueRerenderWithNewRecentValue(emojiValueFromCurrentRender);}}>🍉</button>
      <button onClick={() => {queueRerenderWithNewEmojiValue("⚽");
      queueRerenderWithNewRecentValue(emojiValueFromCurrentRender);}}>⚽</button>
      <button onClick={() => {queueRerenderWithNewEmojiValue("🗼");
      queueRerenderWithNewRecentValue(emojiValueFromCurrentRender);}}>🗼</button>
    </>
  );
}
