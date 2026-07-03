export function yearsSince(dateString: string, now: Date = new Date()): number {
  const start = new Date(dateString);
  let years = now.getFullYear() - start.getFullYear();

  const beforeAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());

  if (beforeAnniversary) years -= 1;

  return years;
}
