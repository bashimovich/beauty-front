import React from 'react';

function CharacterLimitedParagraph({ content, maxCharacters }) {
  const truncatedContent = content.length > maxCharacters ? `${content.slice(0, maxCharacters)}...` : content;

  return <p className='card-desc'>{truncatedContent}</p>;
}

export default CharacterLimitedParagraph;
