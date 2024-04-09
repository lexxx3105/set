import Character from '../Character';
import Team from '../Team';

let ivan;

test('Метод validateUsername существует и работает корректно', () => {
  expect(new Character()).toBeDefined();

  ivan = new Character('Ivan');

  expect(ivan.name).toBe('Ivan');
});

test('class "Team" exists', () => {
  expect(new Team()).toBeDefined();
});

const team = new Team();

test('класс "Team" имеет свойство "members" с установленным объектом', () => {
  expect(team.members).toBeDefined();
  expect(team.members instanceof Set).toBeTruthy();
});

test('класс "Team" имеет рабочий метод "add"', () => {
  expect(typeof team.add).toBe('function');

  team.add(ivan);

  expect(team.members).toEqual(new Set([ivan]));

  const error = () => team.add(ivan);

  expect(error).toThrow(`Ошибка. Объект ${ivan} уже добавлен!`);
});

test('класс "Team" имеет рабочий метод "addAll"', () => {
  expect(typeof team.addAll).toBe('function');

  const aleksandr = new Character('Aleksandr');
  const valera = new Character('Valera');

  team.addAll(aleksandr, valera);

  expect(team.members).toEqual(new Set([ivan, aleksandr, valera]));

  const error = () => team.addAll(ivan);

  expect(error).toThrow(`Ошибка. Объект ${ivan} уже добавлен!`);
});

test('класс "Team" имеет рабочий метод "toArray"', () => {
  expect(Array.from(team.members)).toEqual(team.toArray());
});