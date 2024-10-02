import React from 'react';

const CalendarSection: React.FC = () => {
  return (
    <div className="w-full h-[600px] overflow-hidden rounded-lg">
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WN9mK_b5zJHizjCuPYT82YYehXacCX_lqh2TKTkY-vbkMba-a1wBN10TQUq9gK7deleQ_0oO6?gv=true"
        style={{
          border: '2px solid hsl(var(--primary))',
          borderRadius: '8px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
        }}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default CalendarSection;
