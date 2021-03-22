class User {

    fetchAllUsers() {
        const url = 'https://reqres.in/api/users?page=2'
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE) {
                const users = JSON.parse(xhr.response);
                const cardContainer = document.getElementById('card-container')
                let postHtml = ''
                users.data.forEach((userItem) => {
                    postHtml += `<div class="col-xs-12 col-sm-6 col-lg-4 mt-4 mb-4">                 
                        <div class="card card-content">
                        <a href=single-user.html?id=${userItem.id} class="text-decoration-none">
                            <div class="card-body">
                                <img src=${userItem.avatar} class="card-img-top" alt="" />
                                <h5 class="card-title">${userItem.first_name} ${userItem.last_name}</h5>
                                <p class="card-text">${userItem.email}</p>
                                <button class="btn btn-primary btn-block mt-4"><i class="fas fa-user-plus mr-3"></i>FOLLOW</button>
                            </div>
                        </a>
                        </div>
                    </div>`;
                });
                cardContainer.innerHTML = postHtml;
            }
        }
        xhr.send()
    }
    fetchSingleUser() {
        const userCard = document.getElementById('card-container')
                const userId = new URLSearchParams(window.location.search).get('id');
                const url = `https://reqres.in/api/users/${userId}`;
                const xhr = new XMLHttpRequest()
                xhr.open('GET', url, true)
                xhr.onreadystatechange = function() {
                    if(xhr.readyState === XMLHttpRequest.DONE) {
                        const user = JSON.parse(xhr.response)
                        const showUserData = user.data
                        let dataHtml = `<div class="col-12 mt-4 mb-4">
                                    <div class="card card-content single-card-content">
                                        <div class="card-body">
                                            <img src="${showUserData.avatar}" class="card-img-top" alt="" />
                                            <h5 class="card-title">${showUserData.first_name} ${showUserData.last_name}</h5>
                                            <p class="card-text">${showUserData.email}</p>
                                            <button class="btn btn-primary btn-block mt-4"><i class="fas fa-user-plus mr-3"></i>FOLLOW</button>
                                        </div>
                                    </div>
                                </div>`;
                    userCard.innerHTML = dataHtml;  
                    }
                }
                xhr.send()
    }
} 

