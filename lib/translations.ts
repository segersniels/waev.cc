import English from 'resources/en.json';
import rosetta from 'rosetta';

const translations = rosetta({
  en: English,
});

translations.locale('en');

export default translations;
