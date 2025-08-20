import { describe, expect, test } from "vitest";
import { snakeCaseToWords } from "./snakeCaseToWords";

describe("snakeCaseToWords", () => {
  test("converts snake_case to words with only first word capitalized", () => {
    expect(snakeCaseToWords("hello")).toBe("Hello");
    expect(snakeCaseToWords("hello_world")).toBe("Hello world");
    expect(snakeCaseToWords("first_name_last_name")).toBe(
      "First name last name"
    );
  });

  test("handles empty string", () => {
    expect(snakeCaseToWords("")).toBe("");
  });

  test("handles words with numbers", () => {
    expect(snakeCaseToWords("user_id_123")).toBe("User id 123");
    expect(snakeCaseToWords("api_v2")).toBe("Api v2");
  });

  test("preserves case for non-first words", () => {
    expect(snakeCaseToWords("HELLO_WORLD")).toBe("HELLO WORLD");
    expect(snakeCaseToWords("Hello_World")).toBe("Hello World");
    expect(snakeCaseToWords("first_NAME")).toBe("First NAME");
  });

  test("handles words with special characters", () => {
    expect(snakeCaseToWords("user_email_address")).toBe("User email address");
    expect(snakeCaseToWords("data_point_1")).toBe("Data point 1");
  });

  test("handles trailing underscore", () => {
    expect(snakeCaseToWords("hello_world_")).toBe("Hello world ");
  });

  test("handles single characters", () => {
    expect(snakeCaseToWords("a")).toBe("A");
    expect(snakeCaseToWords("a_b")).toBe("A b");
    expect(snakeCaseToWords("a_b_c")).toBe("A b c");
  });

  test("handles long snake_case strings", () => {
    const longString = "this_is_a_very_long_snake_case_string_with_many_words";
    const expected = "This is a very long snake case string with many words";
    expect(snakeCaseToWords(longString)).toBe(expected);
  });

  test("only capitalizes the first word, leaves others unchanged", () => {
    expect(snakeCaseToWords("hello_WORLD")).toBe("Hello WORLD");
    expect(snakeCaseToWords("First_second_THIRD")).toBe("First second THIRD");
  });

  test("does not modify capitalization of non-first words", () => {
    expect(snakeCaseToWords("my_Variable_Name")).toBe("My Variable Name");
    expect(snakeCaseToWords("test_HTML_parser")).toBe("Test HTML parser");
  });

  test("handles empty words from multiple underscores correctly", () => {
    expect(snakeCaseToWords("test__word")).toBe("Test  word");
    expect(snakeCaseToWords("a__b__c")).toBe("A  b  c");
  });
});
