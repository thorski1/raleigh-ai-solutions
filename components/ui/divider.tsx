import React from 'react';

const Divider: React.FC = () => {
  return (
    <div className="my-10">
      <div className="w-full h-[2px] bg-gradient-to-r from-accent-light/20 via-accent to-accent-light/20"></div>
    </div>
  );
};

export default Divider;
