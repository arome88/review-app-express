let review = document.getElementsByClassName("button");
let trash = document.getElementsByClassName("fa-trash-o");

Array.from(review).forEach(function(element) {
      element.addEventListener('click', function(){
        const review = this.parentNode.querySelector("input").value
        const restaurant = this.parentNode.querySelector("span").innerText

        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'review': review,
            'restaurant': restaurant
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const restaurant = this.parentNode.parentNode.childNodes[1].innerText
    const review = this.parentNode.parentNode.childNodes[3].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'review': review,
        'restaurant': restaurant
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
