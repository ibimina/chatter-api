import * as bcrypt from 'bcrypt';
import * as CryptoJS from 'crypto-js';

export const toPromise = <T>(data: T): Promise<T> => {
  return new Promise<T>((resolve) => {
    resolve(data);
  });
};

export function validatePassword(
  password: string,
  hashedPassword: string,
): boolean {
  return bcrypt.compareSync(password, hashedPassword);
}

export function hashPassword(password: string): string {
  let hash: any;
  if (password) {
    const salt = bcrypt.genSaltSync(10);
    hash = bcrypt.hashSync(password, salt);
  }
  return hash;
}

export function encrypt(word: string) {
  const hash = process.env.JWT_SECRET;
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify({ word }),
    hash,
  ).toString();
  const encodedUri = encodeURIComponent(encrypted);
  return encodedUri;
}

export function decrypt(encoded: string) {
  const encrypted = decodeURIComponent(encoded);
  const hash = process.env.JWT_SECRET;
  const decrypt = JSON.parse(
    CryptoJS.AES.decrypt(encrypted, hash).toString(CryptoJS.enc.Utf8),
  );
  const word = decrypt.word;
  return word;
}
