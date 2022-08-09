import { dbService, storeageService } from "fbase";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Twit = ({ twitObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTwit, setNewTwit] = useState(twitObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this twit?");
    console.log("ok? :", ok);
    if (ok) {
      await dbService.doc(`twit/${twitObj.id}`).delete();
      await storeageService.refFromURL(twitObj.attachmentUrl).delete();
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("twitObj, newTwit :", twitObj, newTwit);
    await dbService.doc(`twit/${twitObj.id}`).update({
      text: newTwit,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewTwit(value);
  };

  return (
    <div className="nweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container nweetEdit">
            <input
              type="text"
              placeholder="Edit your twit"
              value={newTwit}
              required
              onChange={onChange}
              autoFocus
              className="formInput"
            />
            <input type="submit" value="Update Twit" className="formBtn" />
          </form>
          <span onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
          </span>
        </>
      ) : (
        <>
          <h4>{twitObj.text}</h4>
          {twitObj.attachmentUrl && <img src={twitObj.attachmentUrl} alt="" />}
          {isOwner && (
            <div className="nweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Twit;
