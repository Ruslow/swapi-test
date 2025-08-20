import { describe, expect, test } from "vitest";
import { getQueryParams } from "./getQueryParams";

describe("getQueryParams", () => {
  test("converts simple params object to query string", () => {
    const params = { name: "john", age: "25" };
    expect(getQueryParams(params)).toBe("name=john&age=25");
  });

  test("handles single parameter", () => {
    const params = { search: "test" };
    expect(getQueryParams(params)).toBe("search=test");
  });

  test("handles multiple parameters", () => {
    const params = { q: "search term", page: "1", limit: "10" };
    expect(getQueryParams(params)).toBe("q=search+term&page=1&limit=10");
  });

  test("filters out empty strings", () => {
    const params = { name: "john", age: "", city: "london" };
    expect(getQueryParams(params)).toBe("name=john&city=london");
  });

  test("filters out all empty values", () => {
    const params = { empty1: "", empty2: "", empty3: "" };
    expect(getQueryParams(params)).toBe("");
  });

  test("handles object with only empty values", () => {
    const params = { empty: "" };
    expect(getQueryParams(params)).toBe("");
  });

  test("handles special characters in values", () => {
    const params = { query: "hello world", email: "test@example.com" };
    expect(getQueryParams(params)).toBe(
      "query=hello+world&email=test%40example.com"
    );
  });

  test("handles special characters in keys", () => {
    const params = { "user-name": "john", "email.address": "test@test.com" };
    expect(getQueryParams(params)).toBe(
      "user-name=john&email.address=test%40test.com"
    );
  });

  test("handles encoded characters", () => {
    const params = { symbol: "&=$+", unicode: "ñáéíóú" };
    expect(getQueryParams(params)).toBe(
      "symbol=%26%3D%24%2B&unicode=%C3%B1%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA"
    );
  });

  test("handles numeric string values", () => {
    const params = { id: "123", price: "99.99" };
    expect(getQueryParams(params)).toBe("id=123&price=99.99");
  });

  test("handles boolean string values", () => {
    const params = { active: "true", verified: "false" };
    expect(getQueryParams(params)).toBe("active=true&verified=false");
  });

  test("handles empty object", () => {
    const params = {};
    expect(getQueryParams(params)).toBe("");
  });

  test("handles spaces and plus signs correctly", () => {
    const params = { phrase: "hello+world again", search: "test+me" };
    expect(getQueryParams(params)).toBe(
      "phrase=hello%2Bworld+again&search=test%2Bme"
    );
  });

  test("returns empty string when all values are empty", () => {
    const params = { param1: "", param2: "", param3: "" };
    expect(getQueryParams(params)).toBe("");
  });

  test("mixed valid and empty values", () => {
    const params = { keep: "this", remove: "", alsoKeep: "that" };
    expect(getQueryParams(params)).toBe("keep=this&alsoKeep=that");
  });
});
