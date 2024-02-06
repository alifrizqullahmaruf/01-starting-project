import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'
import jsxImg from './assets/jsx-ui.png'
import configImg from './assets/config.png'
import stateImg from './assets/state-mgmt.png'

// Array berisi kata-kata yang digunakan untuk deskripsi header
const ListWord = ['Fundamental', 'Crucial', 'Core']

// Fungsi untuk menghasilkan nomor acak dari 0 hingga nilai maksimum
function genRandomNum(max){
  return Math.floor(Math.random() * (max + 1));
}

// Komponen Header yang menampilkan judul, deskripsi dinamis, dan gambar
function Header(){
  // Mengambil deskripsi acak dari ListWord menggunakan fungsi genRandomNum
  const description = ListWord[genRandomNum(2)];

  return (
    <header>
      {/* Gambar yang ditampilkan */}
      <img src={reactImg} alt="Stylized atom" />
      {/* Judul Header */}
      <h1>React Essentials</h1>
      {/* Paragraf dengan deskripsi dinamis */}
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props){
  return <li>
    <img src={props.img} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
}

// Komponen utama App yang memanggil Header
function App() {
  return (
    <div>
      {/* Memanggil komponen Header */}
      <Header/>
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        <CoreConcept
          title = "Components"
          description = "The core Ut building block compose the usar interface by combining multiple"
          img ={componentsImg}
        />
        <CoreConcept
          title = "JSX"
          description = "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered"
          img ={jsxImg}
        />
        <CoreConcept
          title = "Props"
          description = "Make components configurable (and therefore rausable) by passing input dato to them"
          img ={configImg}
        />
        <CoreConcept
          title = "State"
          description = "React-managed data which, whim changed, causes the component to re render & the U to update"
          img ={stateImg}
        />

        </ul>
      </section>
      </main>
    </div>
  );
}

// Ekspor komponen App agar dapat digunakan di file lain
export default App;
