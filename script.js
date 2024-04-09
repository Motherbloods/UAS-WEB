// Memperoleh elemen tombol dan div cart
var cartButton = document.getElementById("cart-button");
var cartDiv = document.getElementById("cart");
var closeButton = document.getElementById("close");
var btnSuccess = document.getElementsByClassName("btnSuccess");
// Menambahkan event listener untuk klik tombol cart
cartButton.addEventListener("click", function () {
  toggleCart();
});

// Menambahkan event listener untuk klik tombol close
closeButton.addEventListener("click", function () {
  toggleCart();
});

function toggleCart() {
  // Memeriksa apakah div cart sudah memiliki kelas "active"
  var isActive = cartDiv.classList.contains("active");

  // Jika div cart belum aktif, tambahkan kelas "active" untuk memunculkannya dari kanan
  // Jika div cart sudah aktif, hapus kelas "active" untuk menyembunyikannya
  if (!isActive) {
    cartDiv.classList.add("active");
  } else {
    cartDiv.classList.remove("active");
  }
}
function addItem(name, price, imageSrc) {
  // Membuat elemen baru untuk item
  var itemRow = document.createElement("tr");
  var itemName = document.createElement("td");
  var itemPrice = document.createElement("td");
  var itemImage = document.createElement("img");

  // Mengatur isi dan atribut elemen
  itemName.innerText = name;
  itemPrice.innerText = "Rp" + price;
  itemImage.src = imageSrc;
  itemImage.classList.add("cart-item-image"); // Menambahkan kelas CSS

  // Menambahkan elemen ke dalam keranjang belanja
  itemRow.appendChild(itemImage);
  itemRow.appendChild(itemName);
  itemRow.appendChild(itemPrice);
  document.getElementById("cart-items").appendChild(itemRow);

  // Menghitung total harga
  var totalPrice = 0;
  var priceElements = document.querySelectorAll("#cart-items td:nth-child(3)");
  for (var i = 0; i < priceElements.length; i++) {
    var priceText = priceElements[i].innerText;
    var priceValue = parseFloat(priceText.replace("Rp", ""));
    totalPrice += priceValue;
  }

  // Menampilkan total harga
  document.getElementById("total-price").innerText = totalPrice.toFixed(2);

  // Mengubah ukuran gambar di keranjang belanja
  var cartItemImages = document.getElementsByClassName("cart-item-image");
  for (var j = 0; j < cartItemImages.length; j++) {
    cartItemImages[j].style.width = "50px"; // Mengubah lebar gambar menjadi 50 piksel
    cartItemImages[j].style.height = "auto"; // Menyesuaikan tinggi gambar secara otomatis
  }
  alertSuccess();
}

function alertSuccess() {
  var alertDiv = document.createElement("div");
  alertDiv.className = "alert";
  alertDiv.innerText = "Produk Berhasil dimasukkan kedalam Keranjang";
  document.body.appendChild(alertDiv);

  setTimeout(function () {
    alertDiv.style.display = "block";
  }, 100);

  setTimeout(function () {
    alertDiv.style.display = "none";
    document.body.removeChild(alertDiv);
  }, 5000);
}

// Caresoul
// Ambil elemen carousel dan gambar-gambar
var carousel = document.querySelector(".carousel");
var images = carousel.querySelectorAll("img");

// Ambil elemen penanda (carousel indicators)
var indicators = document.querySelector(".carousel-indicators");

// Set indeks gambar saat ini
var currentIndex = 0;

// Tampilkan gambar pertama saat halaman dimuat
images[currentIndex].style.display = "block";

// Fungsi untuk menampilkan gambar berikutnya
function showNextImage() {
  // Sembunyikan gambar saat ini
  images[currentIndex].style.display = "none";

  // Sembunyikan penanda saat ini
  indicators.children[currentIndex].classList.remove("active");

  // Perbarui indeks gambar saat ini
  currentIndex = (currentIndex + 1) % images.length;

  // Tampilkan gambar berikutnya
  images[currentIndex].style.display = "block";

  // Tampilkan penanda untuk gambar saat ini
  indicators.children[currentIndex].classList.add("active");
}

// Inisialisasi penanda
for (var i = 0; i < images.length; i++) {
  var indicator = document.createElement("li");
  indicator.addEventListener("click", function () {
    // Sembunyikan gambar saat ini
    images[currentIndex].style.display = "none";

    // Sembunyikan penanda saat ini
    indicators.children[currentIndex].classList.remove("active");

    // Perbarui indeks gambar saat ini
    currentIndex = parseInt(this.getAttribute("data-index"));

    // Tampilkan gambar yang sesuai dengan penanda yang diklik
    images[currentIndex].style.display = "block";

    // Tampilkan penanda yang sesuai dengan gambar yang ditampilkan
    indicators.children[currentIndex].classList.add("active");
  });

  // Tambahkan atribut data-index pada penanda
  indicator.setAttribute("data-index", i);

  // Tambahkan penanda ke elemen penanda (carousel indicators)
  indicators.appendChild(indicator);
}

// Tampilkan penanda untuk gambar pertama
indicators.children[currentIndex].classList.add("active");

// Mulai otomatisasi carousel dengan memanggil showNextImage setiap 3 detik
setInterval(showNextImage, 3000);

var marquee = document.getElementById("myMarquee");
var text = marquee.innerHTML;
var newText = "";

// Duplikasi teks sebanyak yang Anda inginkan
for (var i = 0; i < 50; i++) {
  newText += text + "   "; // Tambahkan spasi untuk jarak antar teks
}

marquee.innerHTML = newText;

// ULASAN
