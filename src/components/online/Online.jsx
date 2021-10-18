import "./online.css";

export default function Online({ user }) {
  return (
    <>
      <li className="rightBarFriend">
        <div className="rightBarProfileImgContainer">
          <img
            className="rightbarProfileImg"
            src={user.profilePricture}
            alt=""
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rigbtbarusername">{user.username}</span>
      </li>
    </>
  );
}
