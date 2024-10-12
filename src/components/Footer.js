import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} Heart Disease Prediction App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
