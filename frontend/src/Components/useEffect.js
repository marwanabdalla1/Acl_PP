import React, { useEffect, useState } from 'react';

export function MyComponent() {
  const [test, setTest] = useState('');
    console.log('Hello There')

    
  useEffect(() => {
    fetch('http://www.localhost:3500/api/instructor/getCourses')
      .then(response => response.json())
      .then(data => setTest(data));
  }, []);

  return (
    <div>
      <h1>My Courses</h1>
      <ul>
        {test.map((course, index) => (
          <li key={index}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}
 