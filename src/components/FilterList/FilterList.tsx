import React, { useState } from 'react';

const FilterList = () => {
  const mockAlerts = [
    { id: 1, title: 'Login attempt failed', severity: 'High' },
    { id: 2, title: 'New device connected', severity: 'Medium' },
    { id: 3, title: 'Software update available', severity: 'Low' },
    { id: 4, title: 'Multiple failed logins', severity: 'High' },
    { id: 5, title: 'Firewall rule changed', severity: 'Medium' },
  ];

  const [filter, setFilter] = useState<'All' | 'High' | 'Medium' | 'Low'>(
    'All'
  );

  const getColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'black';
    }
  };

  const filteredAlerts = mockAlerts.filter(
    (alert) => filter === 'All' || alert.severity === filter
  );

  return (
    <div className="container">
      <h2>Security Alerts</h2>

      {filteredAlerts.map((alert) => (
        <div key={alert.id} style={{ color: getColor(alert.severity) }}>
          {`[${alert.severity}] ${alert.title}`}
        </div>
      ))}

      <div style={{ marginTop: '16px' }}>
        <button onClick={() => setFilter('All')}>All Alerts</button>
        <button onClick={() => setFilter('High')}>High Alerts</button>
        <button onClick={() => setFilter('Medium')}>Medium Alerts</button>
        <button onClick={() => setFilter('Low')}>Low Alerts</button>
      </div>
    </div>
  );
};

export default FilterList;
