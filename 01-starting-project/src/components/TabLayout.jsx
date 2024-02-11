export default function TabLayout({ children ,onSelect}) {

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
