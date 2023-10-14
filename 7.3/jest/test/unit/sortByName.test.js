const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const resalt = sorting.sortByName(input);

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    expect(resalt).toEqual(expected);
  });

  test("Should catch the exception", () => {
    expect(() => sorting.sortByName()).toThrow();
});

  test("Books names should not be sorted", () => {
    const input = [
      "Гарри Поттер",
      "Гарри Поттер",
      ];

    const resalt = sorting.sortByName(input);

    const expected = [
      "Гарри Поттер",
      "Гарри Поттер",
    ];
    expect(resalt).toEqual(expected);
  });
})
