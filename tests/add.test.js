const add = require('../app');

describe('Test de la fonction add', () => {
  test('doit retourner 3 si on passe 1 et 2 en paramètres', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('doit retourner -1 si on passe 2 et -3 en paramètres', () => {
    expect(add(2, -3)).toBe(-1);
  });

  test('doit retourner NaN si on passe une chaîne de caractères et un nombre en paramètres', () => {
    expect(() => add('hello', 2)).toThrow('Les paramètres doivent être des nombres');
    expect(() => add(2, 'hello')).toThrow('Les paramètres doivent être des nombres');
    expect(() => add('hello', 'world')).toThrow('Les paramètres doivent être des nombres');
  });
});
