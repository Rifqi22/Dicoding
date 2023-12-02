/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

const itActsAsFavoriteRestoIdbModel = (FavoriteRestoIdb) => {
  it('should return the restaurant that has been added', async () => {
    FavoriteRestoIdb.putResto({ id: 1 });
    FavoriteRestoIdb.putResto({ id: 2 });

    expect(await FavoriteRestoIdb.getResto(1)).toEqual({ id: 1 });
    expect(await FavoriteRestoIdb.getResto(2)).toEqual({ id: 2 });
    expect(await FavoriteRestoIdb.getResto(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    FavoriteRestoIdb.putResto({ aProperty: 'property' });

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('can return all of the restaurant that have been added', async () => {
    FavoriteRestoIdb.putResto({ id: 1 });
    FavoriteRestoIdb.putResto({ id: 2 });

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    FavoriteRestoIdb.putResto({ id: 1 });
    FavoriteRestoIdb.putResto({ id: 2 });
    FavoriteRestoIdb.putResto({ id: 3 });

    await FavoriteRestoIdb.deleteResto(1);
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    FavoriteRestoIdb.putResto({ id: 1 });
    FavoriteRestoIdb.putResto({ id: 2 });
    FavoriteRestoIdb.putResto({ id: 3 });

    await FavoriteRestoIdb.deleteResto(4);
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

export { itActsAsFavoriteRestoIdbModel };
