const ProfileCard = () => {
  const bio = 'Test';
  const username = 'Test';
  const isFollowing = false;
  const isPremium = true;
  const memberSince = null;
  return (
    <div className="profile-card">
      <img src="https://placehold.co/80x80" alt="profile avatar" />
      <h2>{username}</h2>
      <p>{bio}</p>
      <span>{bio.length}</span>
      {memberSince !== null && <p>Member since {memberSince}</p>}
      {isPremium && <span className="premium-badge">⭐ Premium</span>}
      <button>{isFollowing ? 'Unfollow' : 'Follow'}</button>
    </div>
  );
};

export default ProfileCard;
