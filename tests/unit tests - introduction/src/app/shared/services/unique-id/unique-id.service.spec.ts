import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  const prefix = 'app';
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniquesIds.name}
   should return the number od generated IDs when called
  `, () => {
    service.generateUniqueIdWithPrefix(prefix);
    service.generateUniqueIdWithPrefix(prefix);
    expect(service.getNumberOfGeneratedUniquesIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const uniqueId = service.generateUniqueIdWithPrefix(prefix);
    expect(uniqueId.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniquesIds.name}
    should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    const maxIds = 50;

    for (let i = 0; i < maxIds; i++) {
      ids.add(service.generateUniqueIdWithPrefix(prefix));
    }
    expect(ids.size).toBe(maxIds);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw when called with empty
  `, () => {
    const emptyValues = [null, undefined, '', '0', '1'];
    emptyValues.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value: ${emptyValue}`)
        .toThrow();
    });
  });
});
