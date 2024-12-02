// Class - Controller
const newsService = new NewsService();
const newsUI = new NewsUI();

const notificationUI = new NotificationUI();


// UI Elements - выбираем элементы из формы для запросов к серверу
const form = document.forms['newsControlForm'];
const coununtrySelect = form['country'];
const categorySelect = form['category'];

const inputSearch = document.getElementById('search');

// Select category and country
function onSelectChange(e) {
    const country = coununtrySelect.value;
    const category = categorySelect.value;


newsService.getTopHeadlinesNews(category, country)
    .then(({articles}) => {
        newsUI.clearContainer();
        articles.forEach((news) => newsUI.addNews(news));
     })
        .catch((err) => console.log(err));
}

// search change request 
function searchLength() {
    if (3 <= inputSearch.value.length) {
        newsService.getEverythingNews(inputSearch.value)
            .then( ({ articles }) => {
                notificationUI.clearAlert();
                newsUI.clearContainer();
                articles.forEach((news) => newsUI.addNews(news));
            })
            .catch((err) => {
                newsUI.clearContainer();
                notificationUI.addNotification(err);
            });
    }
}

// Изменение категории и страны
coununtrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
inputSearch.addEventListener('keyup', searchLength);

