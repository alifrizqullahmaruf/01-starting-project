export default function TabLayout({ children ,onSelect}) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
