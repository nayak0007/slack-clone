import React from "react";
import { useState } from "react";
import "./ChatInput.css";
import db from "../../../firebase";
import { useStateValue } from "../../../StateProvider";
import firebase from "firebase";

function ChatInput({ channelName, channelId }: { channelName:any, channelId:any }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue() as any;

  const sendMessage = (e:any) => {
    e.preventDefault();

    if (!input) return false;

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: (firebase as any).firestore.FieldValue.serverTimestamp(),
        userName: user.displayName,
        userImage: user.photoURL,
        roomId: channelId
      });
    }

    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Send a message to #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
