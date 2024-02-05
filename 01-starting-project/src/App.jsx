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
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
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

// Komponen utama App yang memanggil Header
function App() {
  return (
    <div>
      {/* Memanggil komponen Header */}
      <Header/>
      <main>
        {/* Judul utama */}
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

// Ekspor komponen App agar dapat digunakan di file lain
export default App;
