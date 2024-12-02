

// Class for working with markup
class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }


    // adding news
    addNews(news) {
        const template = NewsUI.newsTemplate(news);
        this.newsContainer.insertAdjacentHTML("afterbegin", template);        
    }


    // clears the news container
    clearContainer() {
      this.newsContainer.innerHTML = '';
    }

    // Returns a markup template

    static newsTemplate (news) {
        return`
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="${news.urlToImage}">
              
            </div>
            <div class="card-content">
              <span class="card-title">${news.title || ''}</span>
              <p>${news.description || ''}</p>
            </div>
            <div class="card-action">
              <a href="${news.url}" target="_blank">Read more</a>
            </div>
          </div>
          `;        
    }
}


