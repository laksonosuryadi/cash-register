# cash-register

This is the final project of phase2 in Hacktiv8 Coding Bootcamp, which is a mix of knowledge that I gained in this phase.

I made a **restaurant cash register app**, that retrieve foods data from database and also writes transactions data to database.

## Steps to use this app

**Client Side**
```
npm install
npm run dev
```

**Server Side**
```
npm install
npm start
```

<br>

I also included my own `npm package`, namely [number-to-words-rupiah](https://www.npmjs.com/package/number-to-words-rupiah) to this project. It will display the total amount of a transaction in words, in Indonesian Rupiah (IDR) format.



## List of Endpoints

#### Transaction
|Routes | HTTP Method | Description |
|------|:----:|-------------|
|`/transactions` | POST | Add new Transaction to Database |
|`/transactions` | GET | Get all Transactions from Database |

<br>

#### Foods
|Routes | HTTP Method | Description |
|------|:----:|-------------|
|`/foods` | POST | Add new Food to Database |
|`/foods` | GET | Get all Foods from Database |
|`/foods/:foodId` | PUT | Edit 1 Food info in Database |
|`/foods/:foodId` | DELETE | Delete 1 Food from Database |
