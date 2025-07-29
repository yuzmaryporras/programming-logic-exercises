function isPalindrome(text: string): boolean {
  const normalized = normalize(text);
  const reversed = reverse(normalized);
  return normalized === reversed;
}

function normalize(text: string):string {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function reverse(text:string):string {
  return text.split('').reverse().join('');
}

console.log(isPalindrome("Anita lava la tina"));
console.log(isPalindrome("La ruta natural"));
console.log(isPalindrome("Desarrollo web"));