import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  // const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] =
  //   useState<string>("");
  const [recentValueFromCurrentRender, queueRerenderWithNewRecentValue] =
    useState<string[]>([]);
  const arrayToList = (emoji: string): JSX.Element => {
    return <li>{emoji}</li>;
  };
  let emojiToShow: string[] = [];
  if (recentValueFromCurrentRender.length <= 5) {
    emojiToShow = recentValueFromCurrentRender;
  } else {
    emojiToShow = recentValueFromCurrentRender.slice(
      recentValueFromCurrentRender.length - 5
    );
  }

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your most recent emojis:</p>
      <ol>{emojiToShow.map(arrayToList)}</ol>
      <p>
        Your current emoji:{" "}
        {recentValueFromCurrentRender[recentValueFromCurrentRender.length - 1]}
      </p>
      <button
        onClick={() => {
          // queueRerenderWithNewEmojiValue("😀");
          queueRerenderWithNewRecentValue((prev) => [...prev, "😀"]);
        }}
      >
        😀
      </button>
      <button
        onClick={() => {
          // queueRerenderWithNewEmojiValue("😠");
          queueRerenderWithNewRecentValue((prev) => [...prev, "😠"]);
        }}
      >
        😠
      </button>
      <button
        onClick={() => {
          // queueRerenderWithNewEmojiValue("🍉");
          queueRerenderWithNewRecentValue((prev) => [...prev, "🍉"]);
        }}
      >
        🍉
      </button>
      <button
        onClick={() => {
          // queueRerenderWithNewEmojiValue("⚽");
          queueRerenderWithNewRecentValue((prev) => [...prev, "⚽"]);
        }}
      >
        ⚽
      </button>
      <button
        onClick={() => {
          // queueRerenderWithNewEmojiValue("🗼");
          queueRerenderWithNewRecentValue((prev) => [...prev, "🗼"]);
        }}
      >
        🗼
      </button>
    </>
  );
}
