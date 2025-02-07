export default function CurrentDay() {
  const today = new Date().toLocaleDateString();
  return <time>{today}</time>;
}
