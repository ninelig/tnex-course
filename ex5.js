const jediNames = ['Luke', 'Obi-Wan', 'Yoda', 'Anakin'];

const master = jediNames.find(name => name === 'Yoda');

if (master) {
  console.log('Master found!');
} else {
  console.log('Master not found.');
}