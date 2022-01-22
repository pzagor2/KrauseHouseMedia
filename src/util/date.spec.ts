import { dateObjectToString, getMonthFromIndex } from "./date";

describe("getMonthFromIndex", () => {
  it("should return proper month", () => {
    const month: string = getMonthFromIndex(0);
    expect(month).toBe("January");

    const month2: string = getMonthFromIndex(6);
    expect(month2).toBe("July");

    const month3: string = getMonthFromIndex(11);
    expect(month3).toBe("December");
  });
});

describe("dateObjectToString", () => {
  it("should return proper month", () => {
    const date: Date = new Date(2020, 0, 1);
    const dateString: string = dateObjectToString(date);
    expect(dateString).toBe("Jan 1, 2020");

    const date2: Date = new Date(2020, 6, 1);
    const dateString2: string = dateObjectToString(date2);
    expect(dateString2).toBe("Jul 1, 2020");

    const date3: Date = new Date(2020, 11, 1);
    const dateString3: string = dateObjectToString(date3);
    expect(dateString3).toBe("Dec 1, 2020");
  });
});
