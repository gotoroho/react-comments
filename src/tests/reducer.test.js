import {comments} from '../reducers'

test('increasing comments list', () => {
  // level 1
  expect(
    comments([], {
      type: 'CREATE_COMMENT',
      name: 'test_name',
      text: 'test_text',
      id: 1,
    })
  ).toStrictEqual([{
    name: 'test_name',
    text: 'test_text',
    id: 1,
  }])

  // level 2
  expect(
    comments([{
      name: 'test_name',
      text: 'test_text',
      id: 1,
    }], {
      type: 'CREATE_COMMENT',
      name: 'test_name2',
      text: 'test_text2',
      id: 2,
    })
  ).toStrictEqual([
    {
      name: 'test_name',
      text: 'test_text',
      id: 1,
    },
    {
      name: 'test_name2',
      text: 'test_text2',
      id: 2,
    },
  ])

  // same comments
  expect(
    comments([{
      name: 'test_name',
      text: 'test_text',
      id: 1,
    },
    {
      name: 'test_name2',
      text: 'test_text2',
      id: 2,
    }], {
      type: 'CREATE_COMMENT',
      name: 'test_name',
      text: 'test_text',
      id: 1,
    })
  ).toStrictEqual([
    {
      name: 'test_name',
      text: 'test_text',
      id: 1,
    },
    {
      name: 'test_name2',
      text: 'test_text2',
      id: 2,
    },
    {
      name: 'test_name',
      text: 'test_text',
      id: 1,
    },
  ])
})

test('decreasing comments list', () => {
  // same comments
  expect(
    comments([
      {
        name: 'test_name',
        text: 'test_text',
        id: 1,
      },
      {
        name: 'test_name2',
        text: 'test_text2',
        id: 2,
      },
      {
        name: 'test_name',
        text: 'test_text',
        id: 1,
      },
    ], {
      type: 'DELETE_COMMENT',
      id: 1,
    })
  ).toStrictEqual([
    {
      name: 'test_name2',
      text: 'test_text2',
      id: 2,
    },
  ])

  // level 2
  expect(
    comments([
      {
        name: 'test_name',
        text: 'test_text',
        id: 1,
      },
      {
        name: 'test_name2',
        text: 'test_text2',
        id: 2,
      },
    ], {
      type: 'DELETE_COMMENT',
      id: 2,
    })
  ).toStrictEqual([{
    name: 'test_name',
    text: 'test_text',
    id: 1,
  }])
  
  // level 1
  expect(
    comments([{
      name: 'test_name',
      text: 'test_text',
      id: 1,
    }], {
      type: 'DELETE_COMMENT',
      id: 1,
    })
  ).toStrictEqual([])
})

test('extra argumets', () => {
  expect(
    comments([], {
      type: 'CREATE_COMMENT',
      name: 'test_name',
      text: 'test_text',
      id: 1,
      some: 'extra',
      arguments: '',
    })
  ).toStrictEqual([{
    name: 'test_name',
    text: 'test_text',
    id: 1,
  }])
})

test('determinism', () => {
  for (let i = 0; i < 5; i++) {
    expect(
      comments([], {
        type: 'CREATE_COMMENT',
        name: 'test_name',
        text: 'test_text',
        id: 1,
      })
    ).toStrictEqual([{
      name: 'test_name',
      text: 'test_text',
      id: 1,
    }])
  }
})