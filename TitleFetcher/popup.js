document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fetchTitle');
    const titleDiv = document.getElementById('title');

    button.addEventListener('click', () => {
        // Query for the active tab in the current window
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) {
                titleDiv.textContent = 'No active tab found.';
                return;
            }

            const currentTab = tabs[0];
            const title = currentTab.title;

            // Display the title in the popup
            titleDiv.textContent = `Title: ${title}`;
        });
    });
});
