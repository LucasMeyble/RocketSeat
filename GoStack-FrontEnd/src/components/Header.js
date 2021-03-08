import React from 'react';

export default function Header({title, aladin, children}){
  return(
    <header>
      <h1>{title}</h1>
      {children}
  <h2>{aladin}</h2>
    </header>
  );
}