import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={user.profilePricture} alt="" />
        <span className="SidebarFriendName"> {user.username} </span>
      </li>
    </>
  );
}
