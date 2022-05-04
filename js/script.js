// * Nama : Nasruddin
// * NIM : 200180020
// * Prodi : A1 Sistem Informasi
// * MK : Pemogramman Web II

function tampilakanSemuaData() {
    $.getJSON('../data/produk.json', function (data) {
        // console.log(data); // menampilkan data dari json
        let menu = data.menu;
        $.each(menu, function (i, data) {
            $('#daftar-menu').append(`
                <div class="col-md-4">
                    <div class="card mb-3">
                    <li class="nav" id="cart">
                        <a class="nav-link" aria-current="page" href="#"><i class="bi bi-cart-plus-fill"></i></a>
                    </li>
                        <img src="../img/menu/${data.gambar}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.nama}</h5>
                            <p class="card-text">${data.deskripsi}</p>
                            <h5 class="card-title">&#36; ${data.harga}</h5>
                            <a href="https://wa.me/+6282164161283?text=Halo,%20Apakah%20Product%20Masih%20%20Ada" target="_blank" class="btn btn-dark">Pesan Sekarang</a>
                        </div>
                    </div>
                </div>
            `);
        })
    });
}

tampilakanSemuaData();

// untuk di click di menu yang ada di navbar di akrifkan class active
$('.menuItem').on('click', function () {
    $('.menuItem').removeClass('active');
    $(this).addClass('active');

    // unutk mengambil nilai dari id yang ada di navbar
    let kategori = $(this).html();
    $('#menu-list').html(kategori);

    // untuk menu all menu biyar di awal pas dikembalikan ada nampil semua menu
    if (kategori == 'All Menu') {
        tampilakanSemuaData();
        return;
    }

    // untuk menu suyapa nampilkan menu-menu kategori
    $.getJSON('../data/produk.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori === kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"> <li class="nav" id="cart"><a class="nav-link" aria-current="page" href="#"><i class="bi bi-cart-plus-fill"></i></a></li><img src="../img/menu' + data.gambar + '" class="card-img-top" alt="american-favourite"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">&#36; ' + data.harga + '</h5><a href="https://wa.me/+6282164161283?text=Halo,%20Apakah%20Product%20Masih%20%20Ada" target="_blank" class="btn btn-dark">Pesan Sekarang</a></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });

});

// cari menu berdasarkan nama menu yang di cari di inputan di search bar
$('#cari').on('keyup', function () {
    let search = $(this).val();
    $.getJSON('../data/produk.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.nama.toLowerCase().includes(search.toLowerCase())) {
                content += '<div class="col-md-4"><div class="card mb-3"> <li class="nav" id="cart"><a class="nav-link" aria-current="page" href="#"><i class="bi bi-cart-plus-fill"></i></a></li><img src="img/menu' + data.gambar + '" class="card-img-top" alt="american-favourite"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">&#36; ' + data.harga + '</h5><a href="https://wa.me/+6282164161283?text=Halo,%20Apakah%20Product%20Masih%20%20Ada" target="_blank" class="btn btn-dark">Pesan Sekarang</a></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });
});
