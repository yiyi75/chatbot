let index = 0;

const prompts = ["yes", "ok", "sure", "yeah", "i guess", "maybe", "would love to", "of course", "why not", "definitely", "certainly"]

// ordered questions
questions = [
  ["Excellent!\nWhat does the term 'mindfulness' mean to you?"], //0
  ["that's a cool definition!\nHow would you define 'stress mindset'?"], //1
  ["What does 'stress' mean to you?"], //2
  ["I see.\nWhat do you think is causing your stress these days (e.g., mood, family, living environment, financial, health, etc.)?"], //3
  ["Now let me introduce our training modules."], //4
  ["We offer two training modules: mindfulness vs. stress mindset."], //5
  ["Mindfulness training would introduce you to the world of mind and language, help you make room for different feelings, sensations..."], //6
  ["On the other hand, Stress Mindset training would show you the power of mindset, and help you practice stress management exercises..."], //7
  ["Which one would you like to attend?"], //8
  ["\nOur online training will last for 3 weeks, with 2 longer sessions(12min) and 5 check-in sessions(2min) per week.\n When to complete the daily session is totally up to you."], //9
  ["In order to better assist you in favor of your time, please let me know when you hope to receive the daily reminder via email. Format: Hr:Mn (e.g., 17:00)"], //10
  ["\nWhat is your email address?"], //11
  ["Excellent. I'll send you daily reminder at: "], //12
  ["Nice talking to you! Bye bye for now :)", "I really enjoyed our conversation. See you soon :)", "Thank you for chatting with me today. See you soon :)"] //13
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]
