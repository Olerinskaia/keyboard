const keyboard = [
  { ru: 'ё', eng: '`', keyCode: 'Backquote' },
  { ru: '1', eng: '1', keyCode: 'Digit1' },
  { ru: '2', eng: '2', keyCode: 'Digit2' },
  { ru: '3', eng: '3', keyCode: 'Digit3' },
  { ru: '4', eng: '4', keyCode: 'Digit4' },
  { ru: '5', eng: '5', keyCode: 'Digit5' },
  { ru: '6', eng: '6', keyCode: 'Digit6' },
  { ru: '7', eng: '7', keyCode: 'Digit7' },
  { ru: '8', eng: '8', keyCode: 'Digit8' },
  { ru: '9', eng: '9', keyCode: 'Digit9' },
  { ru: '0', eng: '0', keyCode: 'Digit0' },
  { ru: '-', eng: '-', keyCode: 'Minus' },
  { ru: '=', eng: '=', keyCode: 'Equal' },
  { ru: 'Backspace', eng: 'Backspace', keyCode: 'Backspace' },
  { ru: 'Tab', eng: 'Tab', keyCode: 'Tab' },
  { ru: 'й', eng: 'q', keyCode: 'KeyQ' },
  { ru: 'ц', eng: 'w', keyCode: 'KeyW' },
  { ru: 'у', eng: 'e', keyCode: 'KeyE' },
  { ru: 'к', eng: 'r', keyCode: 'KeyR' },
  { ru: 'е', eng: 't', keyCode: 'KeyT' },
  { ru: 'н', eng: 'y', keyCode: 'KeyY' },
  { ru: 'г', eng: 'u', keyCode: 'KeyU' },
  { ru: 'ш', eng: 'i', keyCode: 'KeyI' },
  { ru: 'щ', eng: 'o', keyCode: 'KeyO' },
  { ru: 'з', eng: 'p', keyCode: 'KeyP' },
  { ru: 'х', eng: '[', keyCode: 'BracketLeft' },
  { ru: 'ъ', eng: ']', keyCode: 'BracketRight' },
  { ru: '\\', eng: '\\', keyCode: 'Backslash' },
  { ru: 'DEL', eng: 'DEL', keyCode: 'Delete' },
  { ru: 'Caps Lock', eng: 'Caps Lock', keyCode: 'CapsLock' },
  { ru: 'ф', eng: 'a', keyCode: 'KeyA' },
  { ru: 'ы', eng: 's', keyCode: 'KeyS' },
  { ru: 'в', eng: 'd', keyCode: 'KeyD' },
  { ru: 'а', eng: 'f', keyCode: 'KeyF' },
  { ru: 'п', eng: 'g', keyCode: 'KeyG' },
  { ru: 'р', eng: 'h', keyCode: 'KeyH' },
  { ru: 'о', eng: 'j', keyCode: 'KeyJ' },
  { ru: 'л', eng: 'k', keyCode: 'KeyK' },
  { ru: 'д', eng: 'l', keyCode: 'KeyL' },
  { ru: 'ж', eng: ';', keyCode: 'Semicolon' },
  { ru: 'э', eng: "'", keyCode: 'Quote' },
  { ru: 'ENTER', eng: 'ENTER', keyCode: 'Enter' },
  { ru: 'Shift', eng: 'Shift', keyCode: 'ShiftLeft' },
  { ru: 'я', eng: '\\', keyCode: 'IntlBackslash' },
  { ru: 'ч', eng: 'z', keyCode: 'KeyZ' },
  { ru: 'с', eng: 'x', keyCode: 'KeyX' },
  { ru: 'м', eng: 'c', keyCode: 'KeyC' },
  { ru: 'и', eng: 'v', keyCode: 'KeyV' },
  { ru: 'т', eng: 'b', keyCode: 'KeyB' },
  { ru: 'ь', eng: 'n', keyCode: 'KeyN' },
  { ru: 'б', eng: 'm', keyCode: 'KeyM' },
  { ru: 'ю', eng: ',', keyCode: 'Comma' },
  { ru: '.', eng: '.', keyCode: 'Period' },
  { ru: ' ', eng: '/', keyCode: 'Slash' },
  { ru: 'ArrowUp', eng: 'ArrowUp', keyCode: 'ArrowUp' },
  { ru: 'Shift', eng: 'Shift', keyCode: 'ShiftRight' },
  { ru: 'Ctrl', eng: 'Ctrl', keyCode: 'ControlLeft' },
  { ru: 'Win', eng: 'Win', keyCode: 'MetaLeft' },
  { ru: 'Alt', eng: 'Alt', keyCode: 'AltLeft' },
  { ru: ' ', eng: ' ', keyCode: 'Space' },
  { ru: 'Alt', eng: 'Alt', keyCode: 'AltRight' },
  { ru: 'Ctrl', eng: 'Ctrl', keyCode: 'ControlRight' },
  { ru: 'ArrowLeft', eng: 'ArrowLeft', keyCode: 'ArrowLeft' },
  { ru: 'ArrowDown', eng: 'ArrowDown', keyCode: 'ArrowDown' },
  { ru: 'ArrowRight', eng: 'ArrowRight', keyCode: 'ArrowRight' },
];
// create elements
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

const input = document.createElement('input');
input.classList.add('input');
input.type = 'text';
wrapper.append(input);

const board = document.createElement('div');
board.classList.add('keyboard');
wrapper.append(board);

const createButtons = (language = 'eng') => {
  const creatKeyboard = keyboard.map((e) => {
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button');
    if (language == 'ru') {
      buttonDiv.textContent = e.ru;
    }
    if (language == 'eng') {
      buttonDiv.textContent = e.eng;
    }
    board.append(buttonDiv);
    return { name: e.keyCode, element: buttonDiv, ru: e.ru, eng: e.eng };
  });
  return creatKeyboard;
};
const realKeyboard = createButtons();

//events
Array.from(board.children).forEach((div) => {
  div.addEventListener('mousedown', (e) => {
    e.target.classList.add('active');

    // input.add(value);
  });
});
Array.from(board.children).forEach((div) => {
  div.addEventListener('mouseup', (e) => {
    e.target.classList.remove('active');
  });
});

document.addEventListener('keydown', (e) => {
  const activeButton = realKeyboard.filter((item) => item.name == e.code);
  if (activeButton.length > 0) {
    const element = activeButton[0].element;
    element.classList.add('active');
  }
});
document.addEventListener('keyup', (e) => {
  const activeButton = realKeyboard.filter((item) => item.name == e.code);
  if (activeButton.length > 0) {
    const element = activeButton[0].element;
    element.classList.remove('active');
  }
});

// function changeLanguage(keyboard) {
//   keyboard.forEach(key) => {
//     if (key.element.textContent === key.ru) {
//       key.element.textContent = key.eng
//     } else {
//       key.element.textContent = key.ru
//     }
//   }
// }
