/**
 * @title Ransom Note
 * @statement check dictionaries-ex_0-ransom-note.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function checkMagazine(magazine, note) {
  let response = 'Yes';
  if (!magazine || !note) return console.log('No');
  const dict = {};
  magazine.forEach(word =>
    dict[word] ? (dict[word] += 1) : (dict[word] = 1)
  );
  for (let i = 0; i < note.length; i++) {
    const word = note[i];
    if (!dict[word] || dict[word] === 0) {
      response = 'No';
      break;
    } else {
      dict[word] -= 1;
    }
  }
  console.log(response);
}

//Example
const note1 = ['Attack', 'at', 'dawn'];
const magazine1 = ['attack', 'at', 'dawn'];
const note2 = ['Attack', 'at', 'dawn'];
const magazine2 = ['Attack', 'at', 'dawn'];
const magazine3 = ['give', 'me', 'one', 'grand', 'today', 'night'];
const note3 = ['give', 'one', 'grand', 'today'];
const magazine4 = ['two', 'times', 'three', 'is', 'not', 'four'];
const note4 = ['two', 'times', 'two', 'is', 'four'];
checkMagazine(magazine1, note1);
checkMagazine(magazine2, note2);
checkMagazine(magazine3, note3);
checkMagazine(magazine4, note4);
