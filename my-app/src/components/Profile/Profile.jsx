import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <div className={s.ProfileInfo}>
        <ProfileInfo />
      </div>
      <div className={s.MyPosts}>
        <MyPosts 
          posts={props.profilePage.posts}
          addPost={props.addPost}
          newPostText={props.profilePage.newPostText}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </>
  );
};

export default Profile;
