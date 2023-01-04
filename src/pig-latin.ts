export function pigLatin(words :string) : string
{
  return words
        .split(" ")
        .filter(word => word.length > 1)
        .map(word => `${word.substring(1)}${word.substring(0,1)}ay`).join(' ');
}