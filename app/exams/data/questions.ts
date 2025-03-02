const questionsData: Record<number, { 
  question: string; 
  options: string[]; 
  correctAnswer: string; 
}[]> = {  // 📌 Módulo 101: Getting Started: The English Alphabet and Numbers
  101: [
    { question: "What is the first letter of the English alphabet?", options: ["A", "B", "C", "D"], correctAnswer: "A" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
    { question: "Which of these is an even number?", options: ["1", "3", "5", "2"], correctAnswer: "2" },
    { question: "How many vowels are in the English alphabet?", options: ["5", "6", "4", "7"], correctAnswer: "5" },
  ],

  // 📌 Módulo 102: Greetings and Basic Politeness
  102: [
    { question: "How do you say 'hello' in English?", options: ["Hola", "Hello", "Bonjour", "Ciao"], correctAnswer: "Hello" },
    { question: "Which phrase is polite?", options: ["Give me that", "Please, may I have that?", "Move!", "Do it now"], correctAnswer: "Please, may I have that?" },
    { question: "What do you say when you meet someone for the first time?", options: ["See you!", "What's up?", "Nice to meet you", "Bye"], correctAnswer: "Nice to meet you" },
  ],

  // 📌 Módulo 103: Introducing Yourself and Others
  103: [
    { question: "How do you introduce yourself?", options: ["I'm name", "My name is...", "I name...", "Call me is..."], correctAnswer: "My name is..." },
    { question: "Which question is used to ask about someone's name?", options: ["How are you?", "What is your name?", "Where are you from?", "How old are you?"], correctAnswer: "What is your name?" },
    { question: "How do you respond to 'Nice to meet you'?", options: ["Me too", "You too", "Nice to meet you too", "Goodbye"], correctAnswer: "Nice to meet you too" },
  ],

  // 📌 Módulo 104: The Verb to Be in Depth
  104: [
    { question: "'I ___ a student.' What is the correct verb?", options: ["is", "are", "am", "be"], correctAnswer: "am" },
    { question: "'She ___ happy today.' What is the correct verb?", options: ["am", "is", "are", "be"], correctAnswer: "is" },
    { question: "Which sentence is correct?", options: ["They am friends", "He is my brother", "She are a teacher", "I be tired"], correctAnswer: "He is my brother" },
  ],

  // 📌 Módulo 105: Everyday Objects and Basic Adjectives
  105: [
    { question: "Which is an adjective?", options: ["Run", "Happy", "Table", "Speak"], correctAnswer: "Happy" },
    { question: "What is the opposite of 'big'?", options: ["Small", "Fast", "Round", "Heavy"], correctAnswer: "Small" },
    { question: "Which of these is an object?", options: ["Angry", "Chair", "Running", "Quickly"], correctAnswer: "Chair" },
  ],

  // 📌 Módulo 106: Talking About Places and Directions
  106: [
    { question: "Which of these is a place?", options: ["Dog", "Park", "Happy", "Run"], correctAnswer: "Park" },
    { question: "What is the opposite of 'left'?", options: ["Up", "Down", "Right", "Straight"], correctAnswer: "Right" },
    { question: "How do you say 'gira a la derecha' in English?", options: ["Turn right", "Go left", "Turn up", "Go down"], correctAnswer: "Turn right" },
  ],

  // 📌 Módulo 107: Colors, Numbers (21-100), and Dates
  107: [
    { question: "What color is the sky?", options: ["Red", "Blue", "Green", "Yellow"], correctAnswer: "Blue" },
    { question: "What number comes after 29?", options: ["28", "31", "30", "32"], correctAnswer: "30" },
    { question: "Which of these is a date?", options: ["Red", "Friday", "21st September", "Hot"], correctAnswer: "21st September" },
  ],

  // 📌 Módulo 108: Describing People and Things
  108: [
    { question: "Which word describes a person?", options: ["Table", "Kind", "Walk", "Jump"], correctAnswer: "Kind" },
    { question: "What is the opposite of 'tall'?", options: ["Short", "Fast", "Thin", "Dark"], correctAnswer: "Short" },
    { question: "Which of these words describes a thing?", options: ["Soft", "Quickly", "Think", "Loudly"], correctAnswer: "Soft" },
  ],

  // 📌 Módulo 109: Talking About Your Routine
  109: [
    { question: "What do you say when you wake up?", options: ["Good night", "Good morning", "Good evening", "Goodbye"], correctAnswer: "Good morning" },
    { question: "Which activity is part of a daily routine?", options: ["Sleeping", "Flying", "Painting", "Hiking"], correctAnswer: "Sleeping" },
    { question: "What do people usually do before sleeping?", options: ["Eat lunch", "Watch TV", "Go to school", "Go to bed"], correctAnswer: "Go to bed" },
  ],

  // 📌 Módulo 110: Practical Phrases: Shopping and Ordering Food
  110: [
    { question: "How do you ask for the price of something?", options: ["What is the cost?", "Where is the price?", "Can I have this?", "How much is this?"], correctAnswer: "How much is this?" },
    { question: "What do you say when ordering food?", options: ["Give me this", "I want food", "I'd like a burger, please", "This is mine"], correctAnswer: "I'd like a burger, please" },
    { question: "What do you say when paying?", options: ["Here's my money", "I take this", "Can I pay with card?", "Put it on my bill"], correctAnswer: "Can I pay with card?" },
  ],

  // 📌 Módulo 111: Common Questions and Responses
  111: [
    { question: "How do you ask someone’s name?", options: ["What is your name?", "How old are you?", "Where are you?", "Who is that?"], correctAnswer: "What is your name?" },
    { question: "What is a common response to 'How are you'?", options: ["Yes", "I'm fine, thanks", "Go away", "What's up"], correctAnswer: "I'm fine, thanks" },
    { question: "Which is a polite question?", options: ["Give me that", "Can you help me, please?", "Do this now", "Move"], correctAnswer: "Can you help me, please?" },
  ],
};

export default questionsData;
