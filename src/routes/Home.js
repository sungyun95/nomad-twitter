import { dbService } from "fbase";
import { useEffect, useState } from "react";
import Twit from "components/Twit";
import TwitFactory from "components/TwitFactory";

const Home = ({ userObj }) => {
  const [twits, setTwits] = useState([]);
  // console.log("userObj :", userObj);

  // 구식
  // const getTwits = async () => {
  //   const dbTwits = await dbService.collection("twit").get();
  //   // console.log("dbTwits :", dbTwits); SnapShot 반환
  //   dbTwits.forEach((document) => {
  //     const twitObj = {
  //       ...document.data(),
  //       id: document.id,
  //     };
  //     setTwits((prev) => [twitObj, ...prev]);
  //   });
  // };

  useEffect(() => {
    dbService.collection("twit").onSnapshot((snapshot) => {
      console.log("snapshot.docs :", snapshot.docs);
      const twitArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("twitArray :", twitArray);
      setTwits(twitArray);
    });
  }, []);

  return (
    <div className="container">
      <TwitFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {twits.map((twit) => (
          <Twit
            key={twit.id}
            twitObj={twit}
            isOwner={twit.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
