function readMore() {
    const contentDiv = document.querySelector('.content');
  
    // Check if the additional paragraph already exists
    if (!document.querySelector('.extra-paragraph')) {
      // Create a new paragraph
      const newParagraph = document.createElement('p');
      newParagraph.classList.add('extra-paragraph');
      newParagraph.textContent = `
        Dr. A.P.J. Abdul Kalam's dedication to education and youth development 
        was unmatched. As a scientist, he was instrumental in developing India's 
        ballistic missile and satellite launch vehicle programs. As a leader, 
        he inspired millions through his vision for a self-reliant India. His 
        famous speech, "You have to dream before your dreams can come true," 
        continues to motivate countless individuals to pursue their aspirations 
        with determination and courage.
      `;
  
      // Append the new paragraph to the content div
      contentDiv.appendChild(newParagraph);
  
      // Change the button text to indicate no further content
      const button = document.querySelector('button');
      button.textContent = 'Read Less';
      button.onclick = readLess;
    }
  }
  
  function readLess() {
    const extraParagraph = document.querySelector('.extra-paragraph');
    const button = document.querySelector('button');
  
    if (extraParagraph) {
      extraParagraph.remove(); // Remove the extra paragraph
      button.textContent = 'Read More'; // Reset button text
      button.onclick = readMore; // Reset button functionality
    }
  }
  