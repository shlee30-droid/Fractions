import React, { useEffect, useState } from 'react';

const Comments: React.FC = () => {
  const [reviews, setReviews] = useState<string[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('reviews');
    if (stored) {
      setReviews(JSON.parse(stored));
    }
  }, []);

  const submitReview = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    const next = [trimmed, ...reviews];
    setReviews(next);
    localStorage.setItem('reviews', JSON.stringify(next));
    setText('');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'shlee30-droid/Fractions');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const commentsContainer = document.getElementById('comments');
    if (commentsContainer) {
      commentsContainer.appendChild(script);
    }

    return () => {
      if (commentsContainer && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '15px' }}>
      <h3 style={{ color: '#00d4ff', fontSize: '1.8rem', marginBottom: '1rem' }}>💬 Share Your Thoughts</h3>
      <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>
        Leave a comment about the Fractions website! Your feedback helps improve it for everyone.
      </p>
      <form onSubmit={submitReview} style={{ marginBottom: '1rem' }}>
        <textarea
          placeholder="Write your review here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '100%', minHeight: '100px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '0.75rem', background: 'rgba(0,0,0,0.45)', color: 'white', padding: '0.75rem' }}
        />
        <button type="submit" style={{ padding: '0.75rem 1.5rem', borderRadius: '10px', background: '#00d4ff', color: 'black', fontWeight: 700 }}>
          Submit Review
        </button>
      </form>

      {reviews.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ color: '#a855f7', marginBottom: '0.5rem' }}>Recent Reviews</h4>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {reviews.map((review, i) => (
              <li key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '0.8rem', marginBottom: '0.6rem' }}>
                {review}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div id="comments"></div>
    </div>
  );
};

export default Comments;