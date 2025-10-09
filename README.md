# Adventure Game Framework

#### By **Samantha Callie** and **Jason**

## Description

This is a simple framework for making button-based adventure games. It provides support for functions like an inventory, dynamic and/or scrolling scene text, and condition logic for available options.

## Setup/Installation Requirements

1. Press the green <> Code button and select Download ZIP
2. Unzip file
3. In the top directory, open your terminal (e.g., Terminal or GitBash) and run the command `npm i` (requires npm)
4. follow along with [these lessons](https://fidgetechcode.org/v1.1/react/react-with-nosql/4-4-0-9-setting-up-a-firebase-project-firestore-database-and-web-app) to set up firebase
5. then run one of these commands

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Using this framework

To make your own adventure, all that is required is to modify `StoryData.json` and `ItemData.json`. The former holds information on scenes and options, while the latter is for items. Here is a commented example:
```js
// Scene id, used to point to scene object.
"1": {
    // Text property composed of line objects for the purpose of conditional text rendering. This will be compiled into your scene text.
    "text": [
      {
        // Line property containing a string of text to be displayed.
        "line": "You stand at the mouth of a cave"
      },
      {
        // The conditions to render this line of text. The first element can be either HAS or LACKS, and the second is the inventory item to check against. Optional.
        // In this case, the line will only appear if the player has the item with key foobar-item in their inventory.
        "conditions": [
          [
            "HAS",
            "foobar-item"
          ]
        ],
        "line": ", foobar in hand"
      },
      {
        "line": ". You ponder your options."
      }
    ],
    // Image property. Currently does nothing.
    "image": "Placeholder",
    // Options to appear as button which the player can click to go to other scenes.
    "options": [
      {
        // Conditions for which to show this option as a possible choice. Same syntax as line rendering conditions. Optional.
        "conditions": [
          [
            "LACKS",
            "foobar-item"
          ]
        ],
        // Text for the button to have
        "text": "Take Foobar",
        // Change which should be made to the inventory when the option is selected. The first element is the type of change, which can be ADD, REMOVE, or CLEAR.
        // Both ADD and REMOVE then require a second element, the id pointing to the item. This is all optional.
        "inventoryChange": {
          "changeType": "ADD",
          "itemId": "foobar-item"
        },
        // The id of the next scene to be displayed.
        "nextSceneId": "2"
      },
      {
        "conditions": [
          [
            "HAS",
            "foobar-item"
          ]
        ],
        "text": "Drop Foobar",
        "inventoryChange": {
          "changeType": "REMOVE",
          "itemId": "foobar-item"
        },
        "nextSceneId": "3"
      },
      {
        "conditions": [
          [
            "HAS",
            "foobar-item"
          ]
        ],
        "text": "Continue Deeper",
        "nextSceneId": "4"
      }
    ]
  },
```

## License

Copyright (c) 2025 Samantha Callie and Jason [last name here]

[GNU](LICENSE)