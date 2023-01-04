import { pigLatin } from "./pig-latin";
describe("test pigLatin function", () => {
  it('should return "" for "" input', () => {
    expect(pigLatin("")).toBe("");
  });

  it('should return "" for "a" input', () => {
    expect(pigLatin("a")).toBe("");
  });

  it('should return "uidQay" for "Quid" input', () => {
    expect(pigLatin("Quid")).toBe("uidQay");
  });

  it('should return "uidQay ropay uoQay" for "Quid pro Quo" input', () => {
    expect(pigLatin("Quid pro Quo")).toBe("uidQay ropay uoQay");
  });  
});