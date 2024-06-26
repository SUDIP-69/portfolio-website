import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">Sudip Chanda</h1>
      <nav>
        <a href="#about" className="mx-2">About</a>
        <a href="#education" className="mx-2">Education</a>
        <a href="#experience" className="mx-2">Experience</a>
        <a href="#projects" className="mx-2">Projects</a>
        <a href="#contact" className="mx-2">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
