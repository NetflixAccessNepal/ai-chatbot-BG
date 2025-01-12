const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your API key
const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('userInput');

async function sendMessage() {
  const query = userInput.value;
  if (!query) return;

  // Display user message
  appendMessage("You", query);

  // Fetch AI response
  const response = await getAIResponse(query);
  appendMessage("AI", response);

  userInput.value = ""; // Clear input
}

function appendMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = `${sender}: ${message}`;
  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom
}

async function getAIResponse(query) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: query }]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
