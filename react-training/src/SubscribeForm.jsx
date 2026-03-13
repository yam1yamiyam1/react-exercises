import { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
  };
  return (
    <div className="subscribe-form">
      {isSubmitted ? (
        <p>Thanks for Subscribing</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default SubscribeForm;
