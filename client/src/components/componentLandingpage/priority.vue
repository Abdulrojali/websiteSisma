<template>
    <div class="container" id="priority">
      <h1>Mengapa Pilih <b>Kami</b></h1>
      <div class="grid">
        <div
          class="col"
          v-for="(data, index) in dataPriority"
          :key="index"
        >
          <h3 class="title">{{ data.judul }}</h3>
          <p class="description">{{ data.teks }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dataPriority: [
          {
            logo: '',
            judul: 'Fleksibel',
            teks: 'Anda punya kebijakan laporan absen yang berbeda-beda untuk setiap kelas? Presensi dapat mengatur berdasarkan grup dan pengaturan dengan mudah.',
          },
          {
            logo: '',
            judul: 'Meminimalisir Kecurangan',
            teks: 'Semua data laporan absensi mahasiswa akan tersimpan secara digital sehingga meminimalisir kecurangan dan manipulasi data.',
          },
          {
            logo: '',
            judul: 'Praktis',
            teks: 'Dengan presensi tidak perlu antri lagi untuk membuat laporan absen, mahasiswa dapat membuat laporan absensi melalui Smartphone masing-masing.',
          },
          {
            logo: '',
            judul: 'Rekap Absensi yang Baik',
            teks: 'Presensi mencatat otomatis riwayat laporan surat absensi mahasiswa yang lengkap, admin dapat melihat jumlah Hadir.',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  .container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 0;
    background-color: #f9f9f9;
  }
  
  h1 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 30px;
    color: #333;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
  }
  
  b {
    color: #007bff;
  }
  
  .grid {
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .col {
    padding: 25px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .col:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .title {
    font-size: 1.5em;
    color: #007bff;
    margin-bottom: 15px;
    font-weight: 600;
    text-transform: capitalize;
  }
  
  .description {
    font-size: 1em;
    color: #666;
    line-height: 1.6;
    font-weight: 400;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2em;
    }
  
    .grid {
      width: 95%;
    }
  }
  </style>
  