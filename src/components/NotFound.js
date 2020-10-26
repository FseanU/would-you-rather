import React from 'react';

export default function NotFound(props) {
  return (
    <div>
      <img 
        src={require(`../images/404_image.png`)} 
        alt="404 illustration"
      />
      <p>The page you were looking for doesn’t exist</p>
    </div>
  )
}
