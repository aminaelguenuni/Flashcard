# Web Development Project 2 - Flashcard web app

Submitted by: **Amina El Guenuni**

This web app: **A flashcard-style quiz app that helps users test their knowledge on world geography facts. Users can flip each card to reveal the answer and navigate through random questions.**

Time spent: **5 hours spent in total**

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
- [ ] Cards have different visual styles such as color based on their category

The following **additional** features are implemented:

* [] Custom dark mode theme for better contrast and readability
* [x] Smooth card hover and flip animation for improved UX
* [x] Responsive layout centered on all screen sizes

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='/src/unit2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with LICEcap

## Notes

Challenges I encountered:
- Styling issues with dark mode and white text being unreadable on a white card
- Remembering the logic for flipping cards and tracking state across random selections

This project helped reinforce my understanding of `useState`, JSX conditionals, and basic component styling in React.

## License

    Copyright 2025 Amina El Guenuni

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
