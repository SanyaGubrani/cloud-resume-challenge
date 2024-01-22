// Replace 'your-lambda-function-url' with the actual URL of your Lambda function
const lambdaUrl = 'https://hkpady66fukal7i4qgfpzkzgmu0bxkpt.lambda-url.us-east-1.on.aws/';

// Function to update the visitor count in the HTML
function updateVisitorCount(count) {
    const visitorsElement = document.getElementById('visitors');
    if (visitorsElement) {
        visitorsElement.textContent = `Visitor Counter : ${count}`;
    }
}

// Use the fetch function to make a GET request to your Lambda function
fetch(lambdaUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(visitorCount => {
    // Log the visitor count to the console
    console.log('Visitor Count:', visitorCount);

    // Update the HTML with the visitor count
    updateVisitorCount(visitorCount);
  })
  .catch(error => {
    // Log any errors that occurred during the fetch operation
    console.error('Error fetching data from Lambda function:', error);
  });