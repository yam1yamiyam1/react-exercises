const users = [
  { id: 1, name: 'Alice', role: 'admin', isActive: true },
  { id: 2, name: 'Bob', role: 'user', isActive: false },
  { id: 3, name: 'Diana', role: 'admin', isActive: true },
];
const Badge = ({ children, color = 'gray' }) => {
  return <span className={`badge badge-${color}`}>{children}</span>;
};
const UserCard = ({ name, role, isActive }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <Badge color="blue">{role}</Badge>
      {isActive ? (
        <Badge color="green">Active</Badge>
      ) : (
        <Badge color="red">Inactive</Badge>
      )}
    </div>
  );
};

const UserList = () => {
  return (
    <div className="user-list">
      {users.map((u) => (
        <UserCard
          key={u.id}
          name={u.name}
          role={u.role}
          isActive={u.isActive}
        />
      ))}
    </div>
  );
};

export default UserList;
