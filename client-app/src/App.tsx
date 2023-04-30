import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {activities.map(({ id, title }: any) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
