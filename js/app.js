const lambdaUrl = 'https://hkpady66fukal7i4qgfpzkzgmu0bxkpt.lambda-url.us-east-1.on.aws/';

function updateVisitorCount(count) {
    const visitorsElement = document.getElementById('visitors');
    if (visitorsElement) {
        visitorsElement.textContent = `Visitor Counter : ${count}`;
    }
}

fetch(lambdaUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(visitorCount => {
    console.log('Visitor Count:', visitorCount);
    updateVisitorCount(visitorCount);
  })
  .catch(error => {
    console.error('Error fetching data from Lambda function:', error);
  });