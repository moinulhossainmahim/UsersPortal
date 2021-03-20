(function() {

    const url = 'https://reqres.in/api/users?page=2'
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            const postItems = JSON.parse(xhr.response)        
            showposts(postItems)
        }
    }
    xhr.send()

    const cardContainer = document.getElementById('card-container')

    const showposts = (postItems) => {
        let postHtml = ''
        postItems.data.forEach((postItem) => {
            postHtml += `<div class="card card-content" style="width: 18rem;">
            <div class="card-body">
              <img src=${postItem.avatar} class="card-img-top" alt="" />
              <h5 class="card-title">${postItem.first_name} ${postItem.last_name}</h5>
              <p class="card-text">${postItem.email}</p>
              <div class="social-icon">
                <a href="#"><i class="fab fa-facebook facebook-icon"></i></a>
                <a href="#"><i class="fab fa-twitter twitter-icon"></i></a>
                <a href="#"><i class="fab fa-linkedin-in linkedin-icon"></i></a>
              </div>
            </div>
          </div>`
        });

        cardContainer.innerHTML = postHtml;
    }

})()