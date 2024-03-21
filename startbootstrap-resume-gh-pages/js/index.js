const counter = document.querySelector(".counter-number");

async function fetchAndUpdateCounter() {
    try {
        let response = await fetch("https://3eubvra67egqee6hd6z5uipcfy0jwiuu.lambda-url.us-east-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error("Error fetching counter data:", error);
    }
}

fetchAndUpdateCounter(); // Call the function to initiate the fetch operation.
