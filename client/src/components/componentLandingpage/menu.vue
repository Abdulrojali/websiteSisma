<template>
    <div class="menu" id="menu">
      <h1>Jenis <b>Fitur</b></h1>
      <div class="grid-container">
        <div class="grid-item" v-for="(data, index) in fitur" :key="index">
          <i :class="`${data.url}`"></i>
          <p>{{ data.deskripsi }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fitur: [
          {
            url: 'fa-solid fa-file-circle-plus',
            deskripsi: 'Fitur ini digunakan untuk membuat surat bagi mahasiswa yang akan mengajukan izin',
          },
          {
            url: 'fa-solid fa-file-import',
            deskripsi: 'Fitur ini digunakan untuk mengupload surat izin',
          },
          {
            url: 'fa-solid fa-clock-rotate-left',
            deskripsi: 'Fitur ini digunakan untuk melihat history buat surat dan permohonan surat, serta status surat',
          },
          {
            url: 'fa-solid fa-check',
            deskripsi: 'Fitur ini digunakan oleh dosen untuk menyetujui surat izin yang telah dibuat mahasiswa',
          },
          {
            url: 'fa-solid fa-cloud-arrow-down',
            deskripsi: 'Fitur ini digunakan untuk mendownload surat izin yang telah dibuat',
          }
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
  
  .menu {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    padding: 20px 0;
  }
  
  h1 {
    font-size: 2.8em;
    margin-bottom: 30px;
    color: #333;
    text-align: center;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
  }
  
  b {
    color: #007bff;
  }
  
  .grid-container {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
    margin: auto;
  }
  
  .grid-item {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .grid-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  i {
    font-size: 2.5em;
    color: #007bff;
  }
  
  p {
    margin-top: 20px;
    font-size: 1em;
    color: #666;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2.2em;
    }
  
    .grid-container {
      width: 95%;
    }
  }
  
  @media (max-width: 480px) {
    h1 {
      font-size: 1.8em;
    }
  
    .grid-container {
      width: 100%;
    }
  }
  </style>
  