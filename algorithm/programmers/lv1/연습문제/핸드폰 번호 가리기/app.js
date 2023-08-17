function solution(phone_number) {
  const length = phone_number.length;
  const last4Digits = phone_number.slice(length - 4);
  const hiddenPart = '*'.repeat(length - 4);

  return hiddenPart + last4Digits;
}
