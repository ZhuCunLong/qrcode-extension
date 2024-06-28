declare class QRCode {
  constructor(element: HTMLElement, options: any);

  makeCode(data: string): void;
  clear(): void;

  static CorrectLevel: { L: 'L'; M: 'M'; Q: 'Q'; H: 'H' }
}
