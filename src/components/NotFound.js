import React from 'react';

export default function NotFound(props) {
  return (
    <div className="mt-72 not-found-container">
      <img 
        src={require(`../images/404_image.png`)} 
        alt="404 illustration"
      />
      <h2>The page you were looking for doesn’t exist.</h2>
    </div>
  )
}
