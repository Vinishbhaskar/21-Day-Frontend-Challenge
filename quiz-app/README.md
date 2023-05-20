# Quiz App :question:

This is a Quiz app built with React. It allows users to take quizzes on different topics and provides results based on their answers.

## Features :rocket:

- Multiple quiz topics to choose from (HTML, CSS, JavaScript, ReactJs, NodeJs, Frontend).
- Timed quizzes with a countdown timer ⏲️.
- Progress tracking during the quiz 📊.
- Immediate feedback on correct and incorrect answers ✅❌.
- Results page displaying the number of correct answers and a list of all questions with their correct answers.
- Error page for handling invalid routes ⚠️.

## Table of Contents 📑

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation 💻

To install and run the Quiz app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the app in your browser at `http://localhost:3000`.

## Usage 📝

- Upon opening the app, the home page (`HomePage.js`) will be displayed, where users can choose a quiz topic.
- After selecting a quiz topic, users will be redirected to the quiz page (`QuizPage.js`), where they can answer multiple-choice questions within a specified time limit.
- The progress and remaining time are displayed in the progress box (`ProgressBox.js`) ⏳.
- After completing the quiz, users will be shown their results on the result page (`ResultPage.js`), including the number of correct answers and a list of all questions with their correct answers.
- In case of any errors or when accessing an invalid route, the error page (`ErrorPage.js`) will be displayed.

## File Structure 📁

The file structure of the Quiz app is organized as follows:

```
- src
  - components
    - LevelBox.js
    - ProgressBox.js
    - QuestionBox.js
    - AnswerOption.js
    - ResultBox.js
    - CheckAnswerBox.js
  - context
    - QuizContext.js
  - pages
    - HomePage.js
    - QuizPage.js
    - ResultPage.js
    - ErrorPage.js
  - App.js
  - index.js
  - styles.css
```

## Technology Used 💻

- React: A JavaScript library for building user interfaces.
- React Router: A library for handling routing in a React application.
- React Icons: A library providing popular icon packs as React components.
- JavaScript: The programming language used for the application's logic.
- HTML: The markup language for building the application's user interface.
- TailWind CSS: The styling language for customizing the application's appearance.

## Contributing 🤝

Contributions to the Quiz app are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License 📄

This Quiz app is open source and available under the [MIT License](LICENSE).


## 🎉 Conclusion

Completing Day 9 to Day 11 of the 21-day frontend development challenge was an exciting experience. Over the past three days, I dedicated my efforts to building a Quiz App using React, React Router, and Tailwind CSS. I'm thrilled to share my accomplishments during this period. 🎉

- **Day 9: Quiz App Structure and Layout**

  I focused on designing the structure and layout of my Quiz App using React components. Leveraging the power of React, I created reusable components such as the question container, answer options, and buttons. To style the app, I utilized the utility classes provided by Tailwind CSS, ensuring a visually appealing and responsive design. 💻🎨

- **Day 10: Implementing Quiz Logic**

  Day 10 was an exciting day as I implemented the logic of my Quiz App using React and JavaScript. I utilized React state and props to dynamically load questions, display them to the user, and handle user interactions such as selecting an answer and progressing to the next question. Additionally, I incorporated React Router to navigate between different sections of the app, providing a seamless user experience. ⚙️🔢

- **Day 11: Enhancements and Refinements**

  On Day 11, I focused on enhancing and refining my Quiz App further. Building upon the foundation, I utilized Tailwind CSS to add custom styles and components, making the app more visually appealing and user-friendly. I also fine-tuned the quiz logic, implemented features like a timer using React hooks, and optimized the app for performance. Thorough testing and debugging were conducted to ensure a smooth and reliable user experience. ✨🔧

I'm extremely proud of my achievements during these three days of work on the Quiz App. By utilizing the power of React, React Router, and Tailwind CSS, I successfully built a well-structured, interactive, and visually appealing app. I can't wait to showcase my progress, insights, and code breakdowns on LinkedIn, inspiring others in their frontend development journey. 🚀

Follow my 21-day frontend development challenge on LinkedIn: [https://www.linkedin.com/in/vinishbhaskar/]

Let's continue coding and learning together! 💻🌟

Happy coding! 💻🚀
