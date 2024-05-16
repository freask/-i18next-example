// @ts-nocheck
import './i18n/config';
import { useTranslation } from 'react-i18next';
import './style.css';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => () => i18n.changeLanguage(lng);
  const errorCode = 403;
  const name = 'John';

  return (
    <div className="App">
      <div className="App-header">
        <button
          type="button"
          onClick={changeLanguage('ru')}
          className={i18n.language === 'ru' ? 'active' : ''}
        >
          RU
        </button>
        <button
          type="button"
          onClick={changeLanguage('en')}
          className={i18n.language === 'en' ? 'active' : ''}
        >
          EN
        </button>
      </div>

      <p>{t('title', { name: name })}</p>
      <p>
        {t('description.part1')}
        <br />
        {t('description.part2')}
      </p>

      <h3>Плюрализация</h3>
      <p>{t('userMessagesUnread', { count: 0 })}</p>
      <p>{t('userMessagesUnread', { count: 1 })}</p>
      <p>{t('userMessagesUnread', { count: 3 })}</p>
      <p>{t('userMessagesUnread', { count: 25 })}</p>

      <h3>Проверка наличия</h3>
      <p>
        {i18n.exists(`error.${errorCode}`)
          ? t(`error.${errorCode}`)
          : t('error.other', { code: errorCode })}
      </p>

      <h3>Вложенность</h3>
      <p>{t('nesting', { name: name })}</p>

      <h3>Контекстные выражения</h3>
      <p>{t('read_message', { context: 'male', name: 'Иван' })}</p>
      <p>{t('read_message', { context: 'female', name: 'Василиса' })}</p>
    </div>
  );
}

export default App;
