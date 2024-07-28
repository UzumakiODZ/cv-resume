import React from 'react';

const PrintableComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1>My Printable Content</h1>
      <p>This content will be printed.</p>
      {/* Add more content here */}
    </div>
  );
});

export default PrintableComponent;
