import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getExpensesData } from "../../src/expenses-list/fetch-expenses.js";

global.fetch = vi.fn(); // mock fetch: geen echte API

describe("GET expenses", () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  it("haalt expenses op met GET", async () => {
    const fakeExpenses = [{ id: 1, name: "Mark" }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => fakeExpenses,
    });

    const result = await getExpensesData();
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/expenses");
    expect(result).toEqual(fakeExpenses);
  });

  it("gooit een fout bij GET failure", async () => { //throw error 
    fetch.mockResolvedValueOnce({ ok: false });
    await expect(getExpensesData()).rejects.toThrow("couldn't get data");
  });

})