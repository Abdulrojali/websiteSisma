<template>
    <div class="about" id="about">
      <h1 class="headingAbout">About <b>Website</b></h1>
      <div class="aboutTeks">
        <div class="content1">
          <h2 class="heading">Visi</h2>
          <h3 class="subheading">{{ heading }}</h3>
          <p class="description">{{ paragraf }}</p>
        </div>
        <div class="content2">
          <h2 class="heading" style="text-align: center;">Misi</h2>
          <ol class="mission-list">
            <li v-for="(data, index) in misi" :key="index" class="mission-item">{{ data }}</li>
          </ol>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        heading: 'Mewujudkan sistem absensi digital yang efektif, efisien, dan transparan, guna mendukung produktivitas serta akuntabilitas kinerja di lingkungan kerja atau pendidikan.',
        paragraf: 'Tujuan utama dari platform sisma ini, yaitu menciptakan sebuah sistem yang efektif dan efisien dalam mencatat dan mengelola kehadiran. Dengan efektif, sistem tersebut mampu memenuhi kebutuhan pengguna dalam mencatat absensi dengan cara yang akurat dan tepat waktu. Sementara efisiennya adalah prosesnya tidak memakan waktu lama, mudah dilakukan, serta mampu mengurangi beban administrasi manual.',
        misi: [
          'Menghadirkan solusi absensi yang mudah digunakan, dapat diakses kapan saja dan di mana saja melalui perangkat digital.',
          'Menyediakan fitur pemantauan kehadiran secara real-time yang dapat diintegrasikan dengan sistem manajemen SDM.',
          'Meningkatkan keandalan data absensi dengan keamanan yang terjamin dan perlindungan privasi pengguna.',
          'Memberikan pengalaman pengguna yang optimal dengan antarmuka yang intuitif dan responsif di berbagai perangkat.'
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  .about {
    padding: 20px;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to right, #f8f9fa, #e9ecef);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .headingAbout {
    font-size: 2.8em;
    color: #2f2fc2;
    margin-bottom: 30px;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
    font-weight: 700;
  }
  
  .aboutTeks {
    width: 100%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .content1,
  .content2 {
    padding: 20px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .content1:hover,
  .content2:hover {
    transform: translateY(-5px);
  }
  
  .heading {
    font-size: 2em;
    color: #343a40;
    margin-bottom: 10px;
  }
  
  .subheading {
    font-size: 1.2em;
    color: #495057;
    margin-bottom: 20px;
    font-weight: 500;
  }
  
  .description {
    font-size: 1em;
    color: #6c757d;
    line-height: 1.6;
  }
  
  .mission-list {
    text-align: left;
    padding-left: 1.5rem;
    font-size: 1em;
    color: #495057;
  }
  
  .mission-item {
    margin-bottom: 10px;
    padding-left: 10px;
    position: relative;
    line-height: 1.6;
  }
  
  .mission-item:before {
    content: "•";
    color: #2f2fc2;
    position: absolute;
    left: 0;
    font-size: 1.2em;
  }
  
  b {
    color: #2f2fc2;
    font-weight: 600;
  }
  
  @media only screen and (max-width: 768px) {
    .about {
      padding: 20px;
    }
  
    .aboutTeks {
      display: flex;
      flex-direction: column;
    }
  
    .headingAbout {
      font-size: 2.5em;
    }
  
    .heading {
      font-size: 1.8em;
    }
  }
  </style>
  