### Steps

Fork and clone [this repo](https://github.com/JoinCODED/TASK-React-KuwaitIslands-Details) into your `Development` folder

## Description

In this website, whenever a user presses on an island, it will appear on the right side, with 'Failaka' being the default island when you first open the app.

For the bonus 🎁, a user can book a trip to the island they choose by typing their information, and confirming their booking.

## 🍋 Part 1: Change the island

1. In `App.js` we are rendring the `IslandList` and `IslandForm`.
2. Create a state called `island` that holds the island to be shown with an intial value of an empty string.
3. In `App.js` pass our state to the `IslandForm`.
4. Pass this `setIsland` to `IslandList`.
5. From `IslandList` let's pass it again to `Island`.
6. In `Island` add an `onClick` function to the whole `div` that calls our `setIsland` and give it the current island.

## 🤼 Part 2: Form

1. Validate that the phone number field accepts only phone numbers
2. When clicking (book now) button in `IslandForm`, show a [confirm message](https://www.w3schools.com/jsref/met_win_confirm.asp) to confirm if the user really wants to book the trip with the following message: "Are you sure you want to book to `{ISLAND_NAME}` with the Name: `{NAME}`, phone: `{PHONE_NUMBER}`"
