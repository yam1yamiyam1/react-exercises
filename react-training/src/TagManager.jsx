import { useState } from 'react';

const TagManager = () => {
  const [tags, setTags] = useState([
    { id: 1, label: 'React' },
    { id: 2, label: 'JavaScript' },
    { id: 3, label: 'CSS' },
  ]);
  return (
    <div className="tag-manager">
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>
            {tag.label}
            <button
              onClick={() =>
                setTags((prevTags) =>
                  prevTags.filter(({ id }) => id !== tag.id)
                )
              }
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setTags((prevTags) => [
            ...prevTags,
            { id: Date.now(), label: `New Tag` },
          ])
        }
      >
        Add Tag
      </button>
    </div>
  );
};

export default TagManager;
