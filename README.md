| Component          | Type     | Description                                                               |
|--------------------|----------|---------------------------------------------------------------------------|
| **Properties**     |          |                                                                           |
| id                 | Number   | Unique identifier for each todo item, incremented with each new item.     |
| items              | Array    | A list of todo items.                                                     |
| **Methods**        |          |                                                                           |
| create             | Function | Adds a new todo item with text and date, returns the new item.            |
| getItemsByDate     | Function | Returns all items for a specified date.                                   |
| showAll            | Function | Returns all items, truncating text to 20 characters if necessary.         |
| setComplete        | Function | Marks a specified item as complete, returns the updated item.             |
| getByStatus        | Function | Returns all items with a specified status.                                |
| findBy             | Function | Finds an item by id, throws an error if not found.                        |
| deleteBy           | Function | Deletes an item by id, throws an error if not found.                      |
| **Test Scenarios** |          |                                                                           |
| create             | Test     | Verifies that a new item is correctly added with the given text and date. |
| getItemsByDate     | Test     | Checks retrieval of items by specific dates.                              |
| showAll            | Test     | Ensures all items are returned with appropriate text length.              |
| setComplete        | Test     | Tests marking an item as complete.                                        |
| getByStatus        | Test     | Verifies filtering items by status.                                        |
| findBy             | Test     | Confirms finding an item by id and error handling.                        |
| deleteBy           | Test     | Tests deletion of an item by id and error handling.                       |
