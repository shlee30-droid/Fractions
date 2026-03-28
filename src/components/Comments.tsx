import React, { useEffect } from 'react';

const Comments: React.FC = () => {
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
      <div id="comments"></div>
    </div>
  );
};

export default Comments;