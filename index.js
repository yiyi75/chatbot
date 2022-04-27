document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;
  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'
  let text = input.toLowerCase();

  if (index == 0 && text.length > 0 && prompts.includes(text)) {
      product = questions[index];
      addChat(input, product);
      index += 1;
      console.log(index);
    }
  else if (index == 1 && text.length > 0) {
      product = text + ', ' + questions[index];
      addChat(input, product);
      index += 1;
    }
  else if (index == 2 && text.length > 0) {
      product = text + ', interesting. I never thought of that.\n' + questions[index];
      addChat(input, product);
      index += 1;
    }
  else if (index == 3 && text.length > 0) {
      product = questions[index];
      addChat(input, product);
      index += 1;
    }
  else if (index == 4 && text.length > 0) {
      product = "I'm sorry to hear about your stressors. Well I'm here for you. Hopefully our training session can help with your stress.\n" + questions[index];
      addChat(input, product);
      index += 1;
    }
  else if (index == 5) {
    product = questions[index];
    addChat(input, product);
    index += 1;
  }
  else if (index == 6) {
    product = questions[index];
    addChat(input, product);
    index += 1;
  }
  else if (index == 7) {
    product = questions[index];
    chatbot_introduce(product);
    index += 1;
  }
  else if (index == 8) {
    product = questions[index];
    addChat(input, product);
    index += 1;
  }
  else if (index == 9) {
    product = "Thank you for choosing our "+ text + " training." + questions[index];
    addChat(input, product);
    index += 1;
  }
  else if (index == 10) {
    product = questions[index];
    chatbot_introduce(product);
    index += 1;
  }
  else if (index == 11) {
    product = "Cool! I'll send you email everyday at " + text + '.' + questions[index];
    addChat(input, product);
    index += 1;
  }
  else if (index == 12) {
    product = questions[index] + text + '.';
    addChat(input, product);
    index += 1;
  }
  else if (index == 13) {
    product = questions[index][Math.floor(Math.random()*questions[index].length)];
    addChat(input, product);
  }
  else if (index == 14) {
    product = "You may close the window now.";
    chatbot_introduce(product);
  }
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000)

}
function chatbot_introduce(product) {
  const messagesContainer = document.getElementById("messages");

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000)
}
