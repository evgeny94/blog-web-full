  $(".clickable").on("click", function(){
    
    // console.log('Clicked element id:', this.id);
    const elementId = this.id;
    // Send the clicked element's ID to the server
    fetch('/log-click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ elementId })
    })
    .then(response => response.json())
    .then(data => {
      if (data.redirectUrl) {
        // Redirect to the URL provided by the server
        window.location.href = data.redirectUrl;
      }
    })
    .catch(error => console.error('Error:', error));
})