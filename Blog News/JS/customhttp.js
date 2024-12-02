
// server request
class CustomHttp { 
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    if (response.status >= 400) {
                        return reject(response.status);
                    }

                    return response.json();
                })
                .then((data) => resolve(data))
        })
    }
}    

