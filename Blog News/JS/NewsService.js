const http = new CustomHttp();

// class for working with the server
class NewsService {
    constructor() {
        // адреса для запроса сервера
        this.apiUrl = 'https://newsapi.org/v2';
        this.apiKey ='054b76f98ea44adb9308755c686e1ba8';
        this.country = 'ua';
        this.category = 'technology';        
    }
  
    // Get all news
    getTopHeadlinesNews(category = this.category, country = this.country) {
        return new Promise((resolve, reject) => {
            http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`)
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
    }
        
    // Get all news upon request from search     
    getEverythingNews(bitcoint) {
        return new Promise ((resolve, reject) => {
            http.get(`${this.apiUrl}/everything?q=${bitcoint}&apiKey=${this.apiKey}`)
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
}

