## 🍋 Part 1: Change the island

1. In `App.js` we are rendring the `IslandList.js` and `IslandForm.js`.
2. Create a state called `island` that holds the island to be shown with an intial value of an empty string.

```javascript
const [island, setIsland] = useState('');
```

3. In `App.js` pass our state to the `IslandForm.js`.

```javascript
<div className="homePage">
  <IslandList />
  <IslandForm island={island} />
</div>
```

4. Pass this `setIsland` to `IslandList.js`.

```javascript
<div className="homePage">
  <IslandList setIsland={setIsland} />
  <IslandForm island={island} />
</div>
```

5. From `IslandList.js` let's pass it again to `Island.js`.

```javascript
let islandsArray = IslandsData.filter((island) =>
  island.name.includes(query)
).map((island) => <Island island={island} setIsland={setIsland} />);
```

6. In `Island.js` add an `onClick` function to the whole `div` that calls our `setIsland` and give it the current island.

```javascript
<div onClick={() => setIsland(island)} className="Island">
  <h3>{island.name}</h3>
  {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
  <p>Visitors 0</p>
  <img src={island.img} alt="" />
</div>
```

## 🤼 Part 2: Form

1. Validate that the phone number field accepts only phone numbers.
2. When clicking (book now) button in `IslandForm`, show a [confirm message](https://www.w3schools.com/jsref/met_win_confirm.asp) to confirm if the user really wants to book the trip with the following message: "Are you sure you want to book to `{ISLAND_NAME}` with the Name: `{NAME}`, phone: `{PHONE_NUMBER}`"

## Book Now

1. When clicking book now button in `IslandForm.js` show an alert that says the trip is booked.

```javascript
<button className="book" onClick={() => alert('Booked!')}>
  Book for today!
</button>
```

## 🤼 Part 2: Form

1. Validate that the phone number field accepts only phone numbers
2. When clicking (book now) button in `IslandForm`, show a [confirm message](https://www.w3schools.com/jsref/met_win_confirm.asp) (In react we replace it with `window.comfirm()`) to confirm if the user really wants to book the trip with the following message: "Are you sure you want to book to `{ISLAND_NAME}` with the Name: `{NAME}`, phone: `{PHONE_NUMBER}`"

- First let's create two states that will hold our 2 variables `name` and `phone`.

```javascript
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
```

- Now in each form field we will extract the value and store it in the state.

```javascript
      <input placeholder="Type Full Name" onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Type Phone Number"  onChange={(e)=>setPhone(e.target.value)}/>
```

- Now on the `onClick` property of the book now button, call `window.confirm` and pass it the message you want to display.

```javascript
<button
  className="book"
  onClick={() => {
    window.confirm(
      `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${phone}`
    );
  }}
>
  Book for today!
</button>
```
