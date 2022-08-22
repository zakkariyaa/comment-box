const form = document.querySelector('form');
const buttonsDiv = document.querySelector('.buttons');
const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('.reset-btn');
const comment = document.querySelector('textarea');

const maximumCharLength = 140;

// create span element to display character count and insert it before the buttons
const characterSpan = document.createElement('span');
characterSpan.textContent = `Characters ${comment.value.length}/140`;
form.insertBefore(characterSpan, buttonsDiv);

// Track user input as they type and update character count and box style
comment.addEventListener('input', (e) => {
    // remove whitespaces from input value to count only the characters
    const charLength = comment.value.split(' ').join('').length;

    if (charLength > maximumCharLength) {
        comment.classList.add('maximum-char-styles');
    } else {
        comment.classList.remove('maximum-char-styles');
    }

    characterSpan.textContent = `Characters ${charLength}/${maximumCharLength}`;
});


// Get user input when they click submit and display it on the page
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const displayInfo = document.querySelector('.display-info');

    // form info
    let name = document.querySelector('#name').value;
    name = name.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ');

    const email = document.querySelector('#email').value;
    const commentInput = comment.value;

    const date = Date().split(' ').slice(0, 5).join(' ');

    // DOM manipulation to display info on the page
    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.textContent = name;

    const paragraphEmail = document.createElement('p');
    paragraphEmail.textContent = email;
    paragraphEmail.classList.add('email');

    const paragraphDate = document.createElement('p');
    paragraphDate.textContent = date;

    const paragraphComment = document.createElement('p');
    paragraphComment.textContent = commentInput;

    article.append(h3);
    article.append(paragraphEmail);
    article.append(paragraphDate);
    article.append(paragraphComment);

    displayInfo.append(article);

    // Reset form values and start count from zero again
    resetBtn.click();
    characterSpan.textContent = `Characters ${comment.value.length}/140`;
});
