declare module 'csprng' {
  function rand(bits: number, radix: number): string;
  export = rand;
}
