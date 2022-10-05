## Описание

Web-страница с формой для заявки. Поля формы: «ФИО конструктора» (выбрать из списка), «Наименование документа» (текст, вводится вручную). Заполнив форму, можно отправить эти данные в Базу Данных. Разные конструкторы могут отправить заявки на один и тот же документ (по наименованию документа) и заявки будут учтены в Базе Данных. Если один и тот же конструктор пытается отправить в Базу Данных заявку на документ повторно (т. е. он ранее отправлял заявку с таким же наименованием документа, и она уже учтена в Базе Данных), то отправка игнорируется – выдается ошибка, что «Вы уже отправляли заявку на этот документ, она уже была учтена». 

Web-страницa с таблицей с полями: «Наименование документа» (текст), «Количество заявок» (число). В таблице отражены текущие данные: на какой документ сколько конструкторов оставили заявки. Таблица отсортирована по полю «Количество заявок» от большего к меньшему.

Войти в систему может только авторизованный пользователь.

1. Логин: test@mail.ru
2. Пароль: qwerty

## Технологии

1. React
2. TypeScript
3. Redux (thunk, redux-toolkit)
4. JSON-server
5. CSS modules
6. React-router-dom 6
7. Axious
8. Classnames

## Что было сделано: 

1. JSON-server использовался для создания сервера, к которому будут делаться запросы. Запросы делала с помощью middleware - thunk. Store создавала с помощью Redux-toolkit.

2. Базу данных сформирована в соответствие с потребностями.

Есть поле *authorization* в котором записаны логин и пароль.

Есть поле *name_constructors*, которое содержит массив с именами конструкторов. 

Поле *collections*, содержит массив объектов. 

```
  {
      "name": "Иванов И. И.",
      "document": "ГОСТ 123",
      "id": "Иванов И. И.ГОСТ 123"
  }
```

3. Вспомогательная функция api, которая позволят создовать объект axios с нужными заголовками.

```
export const api = (): AxiosInstance => {
  return axios.create({
    baseURL: getBackendURL(),
  });
};
```

В thunk нужно просто вызывать эту функцию. Это позволяет избежать дублирования кода.

4. Все приложение обернуто в Error Boundary, который рендерит специальный компонент, если возникают ошибки. Это позволяет избежать возможный крах приложения.

Используется общий компонент для 404 ERROR и для ошибок, которые ловятся в Error Boundary. Этот универсальный компонент принимает разные props и в зависимости от этого отображается нужный текст. Это позволяет избежать дублирования кода.

5. Приватные роуты.

Есть страница на которой отображаются данные, но эти данные может посмотреть только авторизованный пользователь, если он не авторизован, то его перебрасывает на страницу с авторизацией.

`` <Route path={ROUTES.home.path} element={ <PrivateRoute> <TablePage /> </PrivateRoute> }/> ``

В данном примере я оборачиваю компонент TablePage (является страницей) в компонент PrivateRoute, который внутри себя проверяет авторизацию и если ее нет, то на страницу TablePage вход не происходит.

6. TypeScript позволяет использовать Record, что очень удобно при создании роутов, так как мы заранее определяем в объекте какие страницы будут, это позволяет избежать ошибок.

7. Валидация *input* на ввод неверного пароля или логина. 

Если вводится неверный логин или пароль, то с помощью classnames меняется стиль input.

```
 const className = classnames(styles.wrapper_form, {
    [styles.error_form]: auth === 'no',
  });
```

8. Так как в приложении две страницы, то пользователь может зайти только на одну и не зайти на другую, в таком случае нет смысла сразу подгружать эти две страницы.

Использую **React.lazy**, чтобы страница загружалась в том случае, если пользователь на нее зашел. Это позволяет уменьшить размер первоначального bundle и сделать загрузку приложения быстрее. 

```
 const FormPostPage = lazy(() => import('pages/FormPostPage'));
 const TablePage = lazy(() => import('pages/TablePage'));
```

9. Loader при загрузке страницы. 

Вместе с **React.lazy** используется **React.Suspense**, у него есть свойство fallback, в которое записывается компонент (или что-то), что будет отражаться пока страница не загрузилась. 

```
const Loader = () => {
  return <Spiner />;
};
``` 

*Svg* я импортирую как ReactComponent. 

## Как запустить

1. Клонируете репозиторий

`` git clone https://github.com/IrinRer/Form_constructor.git ``

2. Устанавливаете зависимости

`` npm i ``

3. Запускаете проект

`` npm run dev ``

Данная команда запустит также JSON-server.

Версия node: **v14.17.3**.
