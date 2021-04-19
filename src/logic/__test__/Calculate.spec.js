import Calculate from "../Calculate";

describe("Calculate returns proper values:", () => {
  it("returns null when clicking on AC", () => {
    expect(Calculate({ total: 9, next: 6, operation: "+" }, "AC")).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it("changes the sign of total and next when clicking on +/-", () => {
    expect(Calculate({ total: -3, next: 6, operation: "+/-" }, "+/-")).toEqual({
      total: 3,
      next: -6,
      operation: "+/-",
    });
  });
  it("concatenates a '.' if there is no one", () => {
    expect(Calculate({ total: null, next: 3, operation: null }, ".")).toEqual({
      total: null,
      next: "3.",
      operation: null,
    });
  });
  it("doesn't concatenates a '.' if there is one", () => {
    expect(Calculate({ total: null, next: 3, operation: null }, ".")).toEqual({
      total: null,
      next: "3.",
      operation: null,
    });
  });
  it("returns null when clicking on =", () => {
    expect(Calculate({ total: 3, next: 2, operation: "+" }, "=")).toEqual({
      total: "5",
      next: "5",
      operation: null,
    });
  });
  it("concatenates a number if you press it", () => {
    expect(Calculate({ total: 3, next: 3, operation: null }, "3")).toEqual({
      total: 3,
      next: 33,
      operation: null,
    });
  });
  it("assign number from next to total when clicking +", () => {
    expect(Calculate({ total: null, next: 4, operation: null }, "+")).toEqual({
      total: "4",
      next: null,
      operation: "+",
    });
  });
  it("assign number from next to total when clicking -", () => {
    expect(Calculate({ total: null, next: 4, operation: null }, "-")).toEqual({
      total: "4",
      next: null,
      operation: "-",
    });
  });
  it("assign number from nex to total when clicking x", () => {
    expect(Calculate({ total: null, next: 4, operation: null }, "x")).toEqual({
      total: "4",
      next: null,
      operation: "x",
    });
  });
  it("assign number from nex to total when clicking ÷", () => {
    expect(Calculate({ total: null, next: 4, operation: null }, "÷")).toEqual({
      total: "4",
      next: null,
      operation: "÷",
    });
  });
});
