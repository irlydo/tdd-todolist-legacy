const TodoList = require('../src/TodoList.js')

describe('TodoList', () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  const expectedDate = new Date(1921, 11, 15)

  it('creates a todo item', () => {
    // set up
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date: expectedDate
    }

    // execute
    const result = todoList.create('turn the heating on!', expectedDate)

    // verify
    expect(result).toEqual(expected)
  })

  it('returns items for a specific date', () => {
    // set up
    const item1 = todoList.create('turn the heating on!', expectedDate)
    const item2 = todoList.create('Do the washing up', new Date(1922, 0, 1)) // different date
    const expected = [item1]

    // execute
    const result = todoList.getItemsByDate(expectedDate)

    // verify
    expect(result).toEqual(expected)
  })

  it('returns an empty list for a date with no todos', () => {
    // set up
    const noTodoDate = new Date(1923, 0, 1)

    // execute
    const result = todoList.getItemsByDate(noTodoDate)

    // verify
    expect(result).toEqual([])
  })

  it('returns all items', () => {
    // set up
    const item1 = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date: expectedDate
    }
    const item2 = {
      id: 2,
      text: 'Do the washing up',
      status: 'incomplete',
      date: expectedDate
    }
    const expected = [item1, item2]

    // execute
    todoList.create('turn the heating on!', expectedDate)
    todoList.create('Do the washing up', expectedDate)

    // verify
    expect(todoList.showAll()).toEqual(expected)
  })

  it('sets item to be complete if found', () => {
    // set up
    const item1 = todoList.create('turn the heating on!', expectedDate)
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'complete',
      date: expectedDate
    }

    // execute
    const result = todoList.setComplete(item1.id)

    // verify
    expect(result).toEqual(expected)
  })

  it('throws error if not found', () => {
    // set up

    // execute, verify
    expect(() => todoList.setComplete(1)).toThrowError('Item not found')
  })

  it('gets incomplete items', () => {
    // set up
    const item1 = todoList.create('turn the heating on!', expectedDate)
    const item2 = todoList.create('Do the washing up', expectedDate)
    todoList.setComplete(item1.id)
    const expected = [item2]

    // execute
    const result = todoList.getByStatus('incomplete')

    // verify
    expect(result).toEqual(expected)
  })

  it('gets complete items', () => {
    // set up
    const item1 = todoList.create('turn the heating on!', expectedDate)
    const item2 = todoList.create('Do the washing up', expectedDate)
    todoList.setComplete(item1.id)
    const expected = [item1]

    // execute
    const result = todoList.getByStatus('complete')

    // verify
    expect(result).toEqual(expected)
  })

  it('finds item by id', () => {
    // set up
    const item1 = todoList.create('turn the heating on!', expectedDate)
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date: expectedDate
    }

    // execute
    const result = todoList.findBy(item1.id)

    // verify
    expect(result).toEqual(expected)
  })

  it('findBy throws error if not found', () => {
    // set up

    // execute, verify
    expect(() => todoList.findBy(1)).toThrowError('Item not found')
  })

  it('deletes item by id', () => {
    // set up
    const item1 = todoList.create('turn the heating on!', expectedDate)
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
      date: expectedDate
    }

    // execute
    const deletedItem = todoList.deleteBy(1)

    // verify
    expect(deletedItem).toEqual(expected)
    expect(todoList.showAll()).toEqual([])
  })

  it('delete throws error if not found', () => {
    // set up

    // execute, verify
    expect(() => todoList.deleteBy(1)).toThrowError('Item not found')
  })
})