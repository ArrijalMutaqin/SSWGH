const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./sswghtabi-firebase-adminsdk-fbsvc-29ebe26472.json');

// Inisialisasi Firebase Admin
initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// Isi data defaultPages Anda di bawah ini
const defaultPages = [
  // ... data defaultPages Anda ...
  {
        pageNumber: 1,
        title: "Penerbangan - Umum & Keamanan",
        content: [
          {
            jp: "<ruby>一般<rt>いっぱん</rt></ruby>",
            id: "Umum atau Secara Umum",
            type: "title"
          },
          {
            jp: "A(Ａ). <ruby>航空<rt>こうくう</rt></ruby><ruby>会社<rt>がいしゃ</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>",
            id: "Bagian A. Keselamatan Maskapai Penerbangan",
            type: "subtitle"
          },
          {
            jp: "<ruby>航空<rt>こうくう</rt></ruby><ruby>会社<rt>がいしゃ</rt></ruby>は、<ruby>旅客<rt>りょかく</rt></ruby>や<ruby>貨物<rt>かもつ</rt></ruby>を<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>目的地<rt>もくてきち</rt></ruby>に<ruby>到着<rt>とうちゃく</rt></ruby>させなければならない。",
            id: "Maskapai penerbangan harus mengantarkan penumpang dan kargo dengan selamat sampai tiba di tempat tujuan.",
            type: "paragraph"
          },
          {
            jp: "この<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>到着<rt>とうちゃく</rt></ruby>させ、すなわち<ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こさないことが、<ruby>航空<rt>こうくう</rt></ruby><ruby>会社<rt>がいしゃ</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>であり、<ruby>最<rt>もっと</rt></ruby>も<ruby>重要<rt>じゅうよう</rt></ruby>なところである。",
            id: "Mengantarkan dengan selamat ini, dengan kata lain tidak menyebabkan kecelakaan pesawat terbang, merupakan keselamatan maskapai penerbangan dan merupakan bagian yang paling penting.",
            type: "paragraph"
          },
          {
            jp: "また、<ruby>航空<rt>こうくう</rt></ruby><ruby>会社<rt>がいしゃ</rt></ruby>は、<ruby>乗客<rt>じょうきゃく</rt></ruby>が<ruby>航空機<rt>こうくうき</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>することで<ruby>運賃<rt>うんちん</rt></ruby>を<ruby>得<rt>え</rt></ruby>ているが、そこには、<ruby>他<rt>た</rt></ruby><ruby>産業<rt>さんぎょう</rt></ruby>とは<ruby>異<rt>こと</rt></ruby>なり「<ruby>乗客<rt>じょうきゃく</rt></ruby>の<ruby>命<rt>いのち</rt></ruby>を<ruby>預<rt>あず</rt></ruby>かる」という<ruby>大変<rt>たいへん</rt></ruby><ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>責任<rt>せきにん</rt></ruby>が<ruby>与<rt>あた</rt></ruby>えられている。",
            id: "Selain itu, maskapai penerbangan memperoleh pendapatan dari penumpang yang menggunakan pesawat terbang, namun berbeda dengan industri lainnya, di sana terdapat tanggung jawab yang sangat penting yaitu dititipkan nyawa penumpang.",
            type: "paragraph"
          },
          {
            jp: "<ruby>航空<rt>こうくう</rt></ruby><ruby>に<rt>に</rt></ruby><ruby>関係<rt>かんけい</rt></ruby>する<ruby>仕事<rt>しごと</rt></ruby>をするすべての<ruby>人<rt>ひと</rt></ruby>は、この「<ruby>安全<rt>あんぜん</rt></ruby>」「<ruby>乗客<rt>じょうきゃく</rt></ruby>の<ruby>命<rt>いのち</rt></ruby>」を<ruby>常<rt>つね</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えて、あらゆる<ruby>業務<rt>ぎょうむ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うことが<ruby>大切<rt>たいせつ</rt></ruby>である。",
            id: "Sangat penting bagi semua orang yang melakukan pekerjaan terkait penerbangan untuk selalu memikirkan keselamatan dan nyawa penumpang ini dalam menjalankan segala tugas pekerjaannya.",
            type: "paragraph"
          }
        ],
        vocab: [
          { kanji: "航空会社", furigana: "こうくうがいしゃ", arti: "Maskapai penerbangan" },
          { kanji: "旅客", furigana: "りょかく", arti: "Penumpang" },
          { kanji: "貨物", furigana: "かもつ", arti: "Barang kargo" },
          { kanji: "無事に", furigana: "ぶじに", arti: "Dengan selamat" },
          { kanji: "目的地", furigana: "もくてきち", arti: "Tempat tujuan / Destinasi" },
          { kanji: "到着", furigana: "とうちゃく", arti: "Tiba / Kedatangan" },
          { kanji: "航空機", furigana: "こうくうき", arti: "Pesawat terbang" },
          { kanji: "事故", furigana: "じこ", arti: "Kecelakaan" },
          { kanji: "安全", furigana: "あんぜん", arti: "Keselamatan" },
          { kanji: "最も", furigana: "もっとも", arti: "Paling" },
          { kanji: "重要", furigana: "じゅうよう", arti: "Penting" },
          { kanji: "乗客", furigana: "じょうきゃく", arti: "Penumpang" },
          { kanji: "利用", furigana: "りよう", arti: "Penggunaan / Menggunakan" },
          { kanji: "運賃", furigana: "うんちん", arti: "Tarif / Ongkos" },
          { kanji: "得る", furigana: "える", arti: "Mendapatkan" },
          { kanji: "他産業", furigana: "たさんぎょう", arti: "Industri lain" },
          { kanji: "異なる", furigana: "ことなる", arti: "Berbeda" },
          { kanji: "命", furigana: "いのち", arti: "Nyawa" },
          { kanji: "預かる", furigana: "あずかる", arti: "Menitipkan / Bertanggung jawab atas" },
          { kanji: "責任", furigana: "せきにん", arti: "Tanggung jawab" },
          { kanji: "与える", furigana: "あたえる", arti: "Memberikan" },
          { kanji: "関係", furigana: "かんけい", arti: "Hubungan / Terkait" },
          { kanji: "仕事", furigana: "しごと", arti: "Pekerjaan" },
          { kanji: "常に", furigana: "つねに", arti: "Selalu" },
          { kanji: "業務", furigana: "ぎょうむ", arti: "Tugas / Operasional" },
          { kanji: "行う", furigana: "おこなう", arti: "Melakukan / Menjalankan" },
          { kanji: "大切", furigana: "たいせつ", arti: "Penting" }
        ],
        quizzes: [
          {
            question: "<ruby>航空<rt>こうくう</rt></ruby><ruby>会社<rt>がいしゃ</rt></ruby>は、<ruby>旅客<rt>りょかく</rt></ruby> や <ruby>貨物<rt>かもつ</rt></ruby>を<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>目的地<rt>もくてきち</rt></ruby>に<ruby>到着<rt>とうちゃく</rt></ruby>させなければならない。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Ini adalah pernyataan yang sama persis dengan teks dalam materi modul."
          },
          {
            question: "この<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>到着<rt>とうちゃく</rt></ruby>させ、すなわち<ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こさないことが、<ruby>航空<rt>こうくう</rt></ruby><ruby>会社<rt>がいしゃ</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>であり、<ruby>最<rt>もっと</rt></ruby>も<ruby>重要<rt>じゅうよう</rt></ruby>ではないところである。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Bagian akhir diubah menjadi 最も重要ではない (Paling tidak penting). Padahal, di dalam teks aslinya tertulis 最も重要なところである (Bagian yang paling penting)."
          },
          {
            question: "また、<ruby>航空<rt>こうくう</rt></ruby><ruby>会社<rt>がいしゃ</rt></ruby>は、<ruby>乗客<rt>じょうきゃく</rt></ruby>が、<ruby>航空機<rt>こうくうき</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>することで<ruby>運賃<rt>うんちん</rt></ruby>を<ruby>得<rt>え</rt></ruby>ているが、そこには、<ruby>他<rt>た</rt></ruby><ruby>産業<rt>さんぎょう</rt></ruby>とは<ruby>異<rt>こと</rt></ruby>なり「<ruby>乗客<rt>じょうきゃく</rt></ruby>の<ruby>命<rt>いのち</rt></ruby>を<ruby>預<rt>あず</rt></ruby>かる」という<ruby>大変<rt>たいへん</rt></ruby><ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>責任<rt>せきにん</rt></ruby>が、<ruby>与<rt>あた</rt></ruby>えられている。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Pernyataan ini verbatim sama persis dengan penjelasan tanggung jawab maskapai penerbangan pada materi."
          },
          {
            question: "<ruby>航空<rt>こうくう</rt></ruby><ruby>に<rt>に</rt></ruby><ruby>関係<rt>かんけい</rt></ruby>する<ruby>仕事<rt>しごと</rt></ruby>をするすべての<ruby>人<rt>ひと</rt></ruby>は、この「<ruby>安全<rt>あんぜん</rt></ruby>」「<ruby>乗客<rt>じょうきゃく</rt></ruby>の<ruby>命<rt>いのち</rt></ruby>」を<ruby>常<rt>つね</rt></ruby>に<ruby>考えなくて<rt>かんがえなくて</rt></ruby、あらゆる<ruby>業務<rt>ぎょうむ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うことが<ruby>大切<rt>たいせつ</rt></ruby>である。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Kata 常に考えて (selalu memikirkan) diubah sedikit menjadi 常に考えなくて (tidak memikirkan). Faktualnya, keselamatan harus selalu dipikirkan."
          },
          {
            question: "この<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>到着<rt>とうちゃく</rt></ruby>させ、すなわち<ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こさないことが、<ruby>航空<rt>こうくう</rt></ruby><ruby>会社<rt>がいしゃ</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>である。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Ini adalah rangkuman esensi dari keselamatan penerbangan yang sesuai dengan teks."
          }
        ]
      },
      {
        pageNumber: 2,
        title: "安全運航の目的 (Tujuan Pengoperasian yang Aman)",
        content: [
          {
            jp: "<ruby>安全<rt>あんぜん</rt></ruby><ruby>運航<rt>うんこう</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>",
            id: "Tujuan Pengoperasian yang Aman",
            type: "title"
          },
          {
            jp: "もしも、<ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>、<ruby>次<rt>つぎ</rt></ruby>のような<ruby>問題<rt>もんだい</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる。",
            id: "Jika kecelakaan pesawat terbang terjadi, masalah-masalah berikut ini akan timbul.",
            type: "paragraph"
          },
          {
            jp: "① <ruby>何<rt>なに</rt></ruby>ものにも<ruby>代<rt>か</rt></ruby>えられない<ruby>命<rt>いのち</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>う。",
            id: "Nomor satu, merenggut nyawa yang tidak dapat digantikan oleh apa pun.",
            type: "paragraph"
          },
          {
            jp: "<ruby>大<rt>おお</rt></ruby>きな<ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>は<ruby>死亡<rt>しぼう</rt></ruby><ruby>事故<rt>じこ</rt></ruby>になることが<ruby>多<rt>おお</rt></ruby>い。<ruby>死亡<rt>しぼう</rt></ruby><ruby>事故<rt>じこ</rt></ruby>にならなくても<ruby>乗客<rt>じょうきゃく</rt></ruby>の<ruby>身体<rt>しんたい</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>傷<rt>きず</rt></ruby>、<ruby>心理<rt>しんり</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>傷<rt>きず</rt></ruby>は<ruby>深<rt>ふか</rt></ruby>いものとなる。このことは、<ruby>事故<rt>じこ</rt></ruby>が、<ruby>起<rt>お</rt></ruby>こってから<ruby>理解<rt>りかい</rt></ruby>しても<ruby>遅<rt>おそ</rt></ruby>い。<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>事故<rt>じこ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こしてはならない<ruby>理由<rt>りゆう</rt></ruby>を、<ruby>一人一人<rt>ひとりひとり</rt></ruby>しっかりと<ruby>覚<rt>おぼ</rt></ruby>えておくことが<ruby>大切<rt>たいせつ</rt></ruby>である。",
            id: "Kecelakaan pesawat terbang yang besar sering kali menjadi kecelakaan fatal (kematian). Walaupun tidak sampai menyebabkan kematian, luka fisik dan luka psikologis penumpang akan sangat mendalam. Hal ini sudah terlambat jika baru disadari setelah kecelakaan terjadi. Sangat penting bagi setiap individu untuk mengingat dengan kuat alasan mengapa kecelakaan sama sekali tidak boleh dibiarkan terjadi.",
            type: "paragraph"
          },
          {
            jp: "② <ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>は、ほとんどが<ruby>大<rt>だい</rt></ruby><ruby>事故<rt>じこ</rt></ruby>となるため、<ruby>社会<rt>しゃかい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>不安<rt>不安</rt></ruby><ruby>感<rt>かん</rt></ruby>を<ruby>与<rt>あた</rt></ruby>える。",
            id: "Nomor dua, karena sebagian besar kecelakaan pesawat terbang menjadi kecelakaan besar, hal itu menimbulkan kecemasan sosial yang luar biasa di masyarakat.",
            type: "paragraph"
          },
          {
            jp: "③ <ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>を<ruby>処理<rt>しょり</rt></ruby>するために、たくさんの<ruby>費用<rt>ひよう</rt></ruby>がかかる。",
            id: "Nomor tiga, memerlukan biaya yang sangat banyak untuk menangani dampak kecelakaan pesawat terbang.",
            type: "paragraph"
          },
          {
            jp: "例(たと)えば、<ruby>乗客<rt>じょうきゃく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>賠償<rt>ばいしょう</rt></ruby>、<ruby>補償<rt>ほしょう</rt></ruby>や<ruby>事故<rt>じこ</rt></ruby><ruby>現場<rt>げんば</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>、<ruby>社員<rt>しゃいん</rt></ruby>の<ruby>派遣<rt>はけん</rt></ruby><ruby>費<rt>ひ</rt></ruby>などかなりの<ruby>金額<rt>きんがく</rt></ruby>になり、<ruby>経営<rt>けいえい</rt></ruby>の<ruby>危機<rt>きき</rt></ruby>になる。",
            id: "Misalnya, ganti rugi dan kompensasi terhadap penumpang, penanganan lokasi kecelakaan, hingga biaya pengiriman staf akan menjadi jumlah uang yang sangat besar, sehingga menyebabkan krisis manajemen.",
            type: "paragraph"
          },
          {
            jp: "④ <ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>損失<rt>そんしつ</rt></ruby>は、<ruby>会社<rt>がいしゃ</rt></ruby>の<ruby>経営<rt>けいえい</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きく<ruby>影響<rt>えいきょう</rt></ruby>する。",
            id: "Nomor empat, kerugian kehilangan pesawat terbang berdampak sangat besar bagi manajemen operasional perusahaan.",
            type: "paragraph"
          },
          {
            jp: "スケジュール<ruby>通<rt>どお</rt></ruby>りの<ruby>運航<rt>うんこう</rt></ruby>が<ruby>不可能<rt>ふかのう</rt></ruby>となり、また、<ruby>需要<rt>じゅよう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>便<rt>びん</rt></ruby>の<ruby>提供<rt>ていきょう</rt></reason>もできなくなる。",
            id: "Pengoperasian penerbangan sesuai jadwal menjadi tidak memungkinkan, dan penyediaan jadwal penerbangan untuk memenuhi permintaan pelanggan juga tidak dapat dilakukan.",
            type: "paragraph"
          }
        ],
        vocab: [
          { kanji: "安全運航", furigana: "あんぜんうんこう", arti: "Pengoperasian penerbangan yang aman" },
          { kanji: "目的", furigana: "もくてき", arti: "Tujuan" },
          { kanji: "発生", furigana: "はっせい", arti: "Terjadi / Kemunculan" },
          { kanji: "場合", furigana: "ばあい", arti: "Apabila / Jika / Kasus" },
          { kanji: "問題", furigana: "もんだい", arti: "Masalah / Persoalan" },
          { kanji: "生じる", furigana: "しょうじる", arti: "Timbul / Terjadi" },
          { kanji: "代える", furigana: "かえる", arti: "Menggantikan" },
          { kanji: "奪う", furigana: "うばう", arti: "Merenggut / Merebut" },
          { kanji: "死亡事故", furigana: "しぼうじこ", arti: "Kecelakaan fatal / Kematian" },
          { kanji: "身体的", furigana: "しんたいてき", arti: "Secara fisik" },
          { kanji: "心理的", furigana: "しんりてき", arti: "Secara psikologis" },
          { kanji: "深い", furigana: "ふかい", arti: "Dalam / Mendalam" },
          { kanji: "理解", furigana: "りかい", arti: "Pemahaman / Memahami" },
          { kanji: "絶対に", furigana: "ぜったいに", arti: "Sama sekali / Mutlak" },
          { kanji: "理由", furigana: "りゆう", arti: "Alasan" },
          { kanji: "一人一人", furigana: "ひとりひとり", arti: "Masing-masing orang / Setiap individu" },
          { kanji: "覚える", furigana: "おぼえる", arti: "Mengingat / Menghafal" },
          { kanji: "大事故", furigana: "だいじこ", arti: "Kecelakaan besar" },
          { kanji: "社会的", furigana: "しゃかいてき", arti: "Secara sosial" },
          { kanji: "不安感", furigana: "ふ안かん", arti: "Rasa cemas / Kekhawatiran" },
          { kanji: "処理", furigana: "しょり", arti: "Penanganan / Pemrosesan" },
          { kanji: "費用", furigana: "ひよう", arti: "Biaya" },
          { kanji: "賠償", furigana: "ばいしょう", arti: "Ganti rugi / Kompensasi" },
          { kanji: "現場", furigana: "げんば", arti: "Lokasi / Tempat Kejadian" },
          { kanji: "派遣費", furigana: "はけんひ", arti: "Biaya pengiriman staf" },
          { kanji: "経営の危機", furigana: "けいえいのきき", arti: "Krisis manajemen" },
          { kanji: "損失", furigana: "そんしつ", arti: "Kerugian" },
          { kanji: "影響", furigana: "えいきょう", arti: "Dampak / Pengaruh" },
          { kanji: "不可能", furigana: "ふかのう", arti: "Tidak memungkinkan / Mustahil" },
          { kanji: "Hubungan", furigana: "じゅよう", arti: "Permintaan / Demand" },
          { kanji: "提供", furigana: "ていきょう", arti: "Penyediaan / Penawaran" }
        ],
        quizzes: [
          {
            question: "<ruby>大<rt>おお</rt></ruby>きな<ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>は<ruby>死亡<rt>しぼう</rt></ruby><ruby>事故<rt>じこ</rt></ruby>になることが<ruby>多<rt>おお</rt></ruby>い。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Kalimat di atas verbatim sesuai dengan isi butir pertama penjelasan risiko kecelakaan."
          },
          {
            question: "<ruby>死亡<rt>しぼう</rt></ruby><ruby>事故<rt>じこ</rt></ruby>にならなくても<ruby>乗客<rt>じょうきゃく</rt></ruby>の<ruby>身体<rt>しんたい</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>傷<rt>きず</rt></ruby>、<ruby>心理<rt>しんり</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>傷<rt>きず</rt></ruby>は<ruby>浅<rt>あさ</rt></ruby>いものとなる。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Bagian akhir diubah menjadi 浅いものとなる (menjadi dangkal). Padahal teks menyatakan mendalam/sangat hebat (深いものとなる)."
          },
          {
            question: "<ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>は、ほとんどが<ruby>大<rt>だい</rt></ruby><ruby>事故<rt>じこ</rt></ruby>となるため、<ruby>社会<rt>しゃかい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>不安<rt>ふ안</rt></ruby><ruby>感<rt>かん</rt></ruby>を<ruby>与<rt>あた</rt></ruby>える。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Sesuai teks secara persis tanpa perubahan makna."
          },
          {
            question: "たとえば、<ruby>乗客<rt>じょうきゃく</rt></ruby><ruby>に<rt>に</rt></ruby><ruby>対<rt>たい</rt></ruby>する<ruby>賠償<rt>ばいしょう</rt></ruby>、<ruby>補償<rt>ほしょう</rt></ruby>や<ruby>事故<rt>じこ</rt></ruby><ruby>現場<rt>げんば</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>、<ruby>社員<rt>しゃいん</rt></ruby>の<ruby>派遣<rt>はけん</rt></ruby><ruby>費<rt>ひ</rt></ruby>などかなりの<ruby>金額<rt>きんがく</rt></ruby>になり、<ruby>経営<rt>けいえい</rt></ruby>の<ruby>危機<rt>きき</rt></ruby>にはならない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Teks aslinya menyatakan bahwa hal tersebut 経営の危機になる (menyebabkan krisis manajemen)."
          },
          {
            question: "<ruby>航空機<rt>こうくうき</rt></ruby><ruby>の<rt>の</rt></ruby><ruby>損失<rt>そんしつ</rt></ruby>は、<ruby>会社<rt>がいしゃ</rt></ruby>の<ruby>経営<rt>けいえい</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きく<ruby>影響<rt>えいきょう</rt></ruby>する。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Pernyataan verbatim sesuai poin nomor 4 dari materi."
          }
        ]
      },
      {
        pageNumber: 2,
        title: "安全運航の目的 (Tujuan Pengoperasian yang Aman)",
        content: [
          {
            jp: "<ruby>安全<rt>あんぜん</rt></ruby><ruby>運航<rt>うんこう</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>",
            id: "Tujuan Pengoperasian yang Aman",
            type: "title"
          },
          {
            jp: "もしも、<ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>、<ruby>次<rt>つぎ</rt></ruby>のような<ruby>問題<rt>もんだい</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる。",
            id: "Jika kecelakaan pesawat terbang terjadi, masalah-masalah berikut ini akan timbul.",
            type: "paragraph"
          },
          {
            jp: "① <ruby>何<rt>なに</rt></ruby>ものにも<ruby>代<rt>か</rt></ruby>えられない<ruby>命<rt>いのち</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>。 ",
            id: "Nomor satu, merenggut nyawa yang tidak dapat digantikan oleh apa pun.",
            type: "paragraph"
          },
          {
            jp: "<ruby>大<rt>おお</rt></ruby>きな<ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>は<ruby>死亡<rt>しぼう</rt></ruby><ruby>事故<rt>じこ</rt></ruby>になることが<ruby>多<rt>おお</rt></ruby>い。<ruby>死亡<rt>しぼう</rt></ruby><ruby>事故<rt>じこ</rt></ruby>にならなくても<ruby>乗客<rt>じょうきゃく</rt></ruby>の<ruby>身体<rt>しんたい</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>傷<rt>きず</rt></ruby>、<ruby>心理<rt>しんり</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>傷<rt>きず</rt></ruby>は<ruby>深<rt>ふか</rt></ruby>いものとなる。このことは、<ruby>事故<rt>じこ</rt></ruby>が、<ruby>起<rt>お</rt></ruby>こってから<ruby>理解<rt>りかい</rt></ruby>しても<ruby>遅<rt>おそ</rt></ruby>い。<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>事故<rt>じこ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こしてはならない<ruby>理由<rt>りゆう</rt></ruby>を、<ruby>一人一人<rt>ひとりひとり</rt></ruby>しっかりと<ruby>覚<rt>おぼ</rt></ruby>えておくことが<ruby>大切<rt>たいせつ</rt></ruby>である。",
            id: "Kecelakaan pesawat terbang yang besar sering kali menjadi kecelakaan fatal (kematian). Walaupun tidak sampai menyebabkan kematian, luka fisik dan luka psikologis penumpang akan sangat mendalam. Hal ini sudah terlambat jika baru disadari setelah kecelakaan terjadi. Sangat penting bagi setiap individu untuk mengingat dengan kuat alasan mengapa kecelakaan sama sekali tidak boleh dibiarkan terjadi.",
            type: "paragraph"
          },
          {
            jp: "② <ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>は、ほとんどが<ruby>大<rt>だい</rt></ruby><ruby>事故<rt>じこ</rt></ruby>となるため、<ruby>社会<rt>しゃかい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>不安<rt>ふan</rt></ruby><ruby>感<rt>かん</rt></ruby>を<ruby>与<rt>あた</rt></ruby>える。",
            id: "Nomor dua, karena sebagian besar kecelakaan pesawat terbang menjadi kecelakaan besar, hal itu menimbulkan kecemasan sosial yang luar biasa di masyarakat.",
            type: "paragraph"
          },
          {
            jp: "③ <ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>を<ruby>処理<rt>しょり</rt></ruby>するために、たくさんの<ruby>費用<rt>ひよう</rt></ruby>がかかる。",
            id: "Nomor tiga, memerlukan biaya yang sangat banyak untuk menangani dampak kecelakaan pesawat terbang.",
            type: "paragraph"
          },
          {
            jp: "例(たと)えば、<ruby>乗客<rt>じょうきゃく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>賠償<rt>ばいしょう</rt></ruby>、<ruby>補償<rt>ほしょう</rt></ruby> ya <ruby>事故<rt>じこ</rt></ruby><ruby>現場<rt>げんば</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>、<ruby>社員<rt>しゃいん</rt></ruby>の<ruby>派遣<rt>はけん</rt></ruby><ruby>費<rt>ひ</rt></ruby>などかなりの<ruby>金額<rt>きんがく</rt></ruby>になり、<ruby>経営<rt>けいえい</rt></ruby>の<ruby>危機<rt>きき</rt></ruby>になる。",
            id: "Misalnya, ganti rugi dan kompensasi terhadap penumpang, penanganan lokasi kecelakaan, hingga biaya pengiriman staf akan menjadi jumlah uang yang sangat besar, sehingga menyebabkan krisis manajemen.",
            type: "paragraph"
          },
          {
            jp: "④ <ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>損失<rt>そんしつ</rt></ruby>は、<ruby>会社<rt>がいしゃ</rt></ruby>の<ruby>経営<rt>けいえい</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きく<ruby>影響<rt>えいきょう</rt></ruby>する。",
            id: "Nomor empat, kerugian kehilangan pesawat terbang berdampak sangat besar bagi manajemen operasional perusahaan.",
            type: "paragraph"
          },
          {
            jp: "スケジュール<ruby>通<rt>どお</rt></ruby>りの<ruby>運航<rt>うんこう</rt></ruby>が<ruby>不可能<rt>ふかのう</rt></ruby>となり、また、<ruby>需要<rt>じゅよう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>便<rt>びん</rt></ruby>の<ruby>提供<rt>ていきょう</rt></ruby> juga tidak bisa dilakukan.",
            id: "Pengoperasian penerbangan sesuai jadwal menjadi tidak memungkinkan, dan penyediaan jadwal penerbangan untuk memenuhi permintaan pelanggan juga tidak dapat dilakukan.",
            type: "paragraph"
          }
        ],
        vocab: [
          { kanji: "発生", furigana: "はっせい", arti: "Terjadi / Muncul" },
          { kanji: "場合", furigana: "ばあい", arti: "Kasus / Situasi / Apabila" },
          { kanji: "問題", furigana: "もんだい", arti: "Masalah" },
          { kanji: "生じる", furigana: "しょうじる", arti: "Timbul / Muncul" },
          { kanji: "代える", furigana: "かえられる", arti: "Menggantikan (Bentuk potensial: 代えられない = Tidak bisa digantikan)" },
          { kanji: "奪う", furigana: "うばう", arti: "Merenggut / Merebut" },
          { kanji: "死亡事故", furigana: "しぼうじこ", arti: "Kecelakaan fatal (menyebabkan kematian)" },
          { kanji: "身体的", furigana: "しんたいてき", arti: "Secara fisik / Fisik" },
          { kanji: "傷", furigana: "きず", arti: "Luka" },
          { kanji: "心理的", furigana: "しんりてき", arti: "Secara psikologis / Mental" },
          { kanji: "理解", furigana: "りかい", arti: "Memahami / Pemahaman" },
          { kanji: "遅い", furigana: "おそい", arti: "Terlambat / Lambat" },
          { kanji: "絶対", furigana: "ぜったい", arti: "Mutlak / Sama sekali / Pasti" },
          { kanji: "理由", furigana: "りゆう", arti: "Alasan" },
          { kanji: "一人一人", furigana: "ひとりひとり", arti: "Masing-masing orang / Setiap orang" },
          { kanji: "覚える", furigana: "おぼえる", arti: "Mengingat" },
          { kanji: "社会的", furigana: "しゃかいてき", arti: "Secara sosial / Sosial" },
          { kanji: "不安感", furigana: "ふあんかん", arti: "Rasa cemas / Kegelisahan" },
          { kanji: "処理", furigana: "しょり", arti: "Penanganan / Pemrosesan" },
          { kanji: "費用", furigana: "ひよう", arti: "Biaya" },
          { kanji: "賠償", furigana: "ばいしょう", arti: "Ganti rugi / Kompensasi" },
          { kanji: "補償", furigana: "ほしょう", arti: "Kompensasi / Jaminan" },
          { kanji: "現場", furigana: "げんば", arti: "Lokasi kejadian / Tempat kejadian" },
          { kanji: "社員", furigana: "しゃいん", arti: "Karyawan / Pegawai" },
          { kanji: "派遣費", furigana: "はけんひ", arti: "Biaya pengiriman / penugasan staf" },
          { kanji: "金額", furigana: "きんがく", arti: "Jumlah uang" },
          { kanji: "危機", furigana: "きき", arti: "Krisis" },
          { kanji: "損失", furigana: "そんしつ", arti: "Kerugian" },
          { kanji: "影響", furigana: "えいきょう", arti: "Pengaruh / Dampak" },
          { kanji: "運航", furigana: "うんこう", arti: "Pengoperasian (penerbangan/pelayaran)" },
          { kanji: "不可能", furigana: "ふかのう", arti: "Mustahil / Tidak mungkin" },
          { kanji: " need ", furigana: "じゅよう", arti: "Permintaan (pasar) / Demand" },
          { kanji: "便", furigana: "びん", arti: "Penerbangan / Jadwal penerbangan" },
          { kanji: "提供", furigana: "ていきょう", arti: "Penyediaan / Menyediakan" }
        ],
        quizzes: [
          {
            question: "<ruby>大<rt>おお</rt></ruby>きな<ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>は<ruby>死亡<rt>しぼう</rt></ruby><ruby>事故<rt>じこ</rt></ruby>になることが<ruby>多<rt>おお</rt></ruby>い。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Kalimat di atas verbatim sesuai dengan isi butir pertama penjelasan risiko kecelakaan."
          },
          {
            question: "<ruby>死亡<rt>しぼう</rt></ruby><ruby>事故<rt>じこ</rt></ruby>にならなくても<ruby>乗客<rt>じょうきゃく</rt></ruby>の<ruby>身体<rt>しんたい</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>傷<rt>きず</rt></ruby>、<ruby>心理<rt>しんり</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>傷<rt>きず</rt></ruby>は<ruby>浅<rt>あさ</rt></ruby>いものとなる。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Bagian akhir diubah menjadi 浅いものとなる (menjadi dangkal). Padahal teks menyatakan mendalam/sangat hebat (深いものとなる)."
          },
          {
            question: "<ruby>航空機<rt>こうくうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>は、ほとんどが<ruby>大<rt>だい</rt></ruby><ruby>事故<rt>じこ</rt></ruby>となるため、<ruby>社会<rt>しゃかい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>不安<rt>ふあん</rt></ruby><ruby>感<rt>かん</rt></ruby>を<ruby>与<rt>あた</rt></ruby>える。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Sesuai teks secara persis tanpa perubahan makna."
          },
          {
            question: "たとえば、<ruby>乗客<rt>じょうきゃく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>賠償<rt>ばいしょう</rt></ruby>、<ruby>補償<rt>ほしょう</rt></ruby> ya <ruby>事故<rt>じこ</rt></ruby><ruby>現場<rt>げんば</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>、<ruby>社員<rt>しゃいん</rt></ruby>の<ruby>派遣<rt>はけん</rt></ruby><ruby>費<rt>ひ</rt></ruby>などかなりの<ruby>金額<rt>きんがく</rt></ruby>になり、<ruby>経営<rt>けいえい</rt></ruby>の<ruby>危機<rt>きき</rt></ruby>にはならない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Teks aslinya menyatakan bahwa hal tersebut 経営の危機になる (menyebabkan krisis manajemen)."
          },
          {
            question: "<ruby>航空機<rt>こうくうき</rt></ruby><ruby>の<rt>の</rt></ruby><ruby>損失<rt>そんしつ</rt></ruby>は、<ruby>会社<rt>がいしゃ</rt></ruby>の<ruby>経営<rt>けいえい</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きく<ruby>影響<rt>えいきょう</rt></ruby>する。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Pernyataan verbatim sesuai poin nomor 4 dari materi."
          }
        ]
      },
      {
        pageNumber: 3,
        title: "航空機の安全 (Keselamatan Pesawat Terbang)",
        content: [
          {
            jp: "2. <ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>",
            id: "Dua, Keselamatan Pesawat Terbang",
            type: "title"
          },
          {
            jp: "A. <ruby>航空機<rt>こうくうき</rt></ruby><ruby>優先<rt>ゆうせん</rt></ruby>",
            id: "Bagian A. Prioritas Pesawat Terbang",
            type: "subtitle"
          },
          {
            jp: "<ruby>制限<rt>せいげん</rt></ruby><ruby>区域<rt>くいき</rt></ruby><ruby>内<rt>ない</rt></ruby>においては、<ruby>常<rt>つね</rt></ruby>に<ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>運航<rt>うんこう</rt></ruby>が<ruby>最<rt>さい</rt></ruby><ruby>優先<rt>ゆうせん</rt></ruby>であり、いかなる<ruby>車両<rt>しゃりょう</rt></ruby>なども<ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>運航<rt>うんこう</rt></ruby>を<ruby>妨<rt>さまた</rt></ruby>げる<ruby>行為<rt>こうい</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>ってはならない。",
            id: "Di dalam area terbatas, pengoperasian pesawat terbang selalu menjadi prioritas utama, dan kendaraan apa pun dilarang mengganggu jalannya pengoperasian pesawat.",
            type: "paragraph"
          },
          {
            jp: "その<ruby>理由<rt>りゆう</rt></ruby>として、<ruby>下記<rt>かき</rt></ruby>の<ruby>項目<rt>こうもく</rt></ruby><ruby>等<rt>など</rt></ruby>が<ruby>挙<rt>あ</rt></ruby>げられる。",
            id: "Sebagai alasannya, poin-poin berikut ini dikemukakan:",
            type: "paragraph"
          },
          {
            jp: "① <ruby>構造<rt>こうぞう</rt></ruby><ruby>上<rt>じょう</rt></ruby><ruby>動<rt>うご</rt></ruby>きが<ruby>機敏<rt>きびん</rt></ruby>でない。",
            id: "Nomor satu, berdasarkan struktur konstruksinya, pergerakannya tidak lincah.",
            type: "paragraph"
          },
          {
            jp: "② <ruby>視界<rt>しかい</rt></ruby>が、<ruby>非常に悪い<rt>ひじょうにわるい</rt></ruby>。",
            id: "Nomor dua, jarak pandang sangat buruk.",
            type: "paragraph"
          },
          {
            jp: "③ <ruby>多量<rt>たりょう</rt></ruby>の<ruby>可燃<rt>かねん</rt></ruby><ruby>物質<rt>ぶっしつ</rt></ruby>（<ruby>燃料<rt>ねんりょう</rt></ruby>など）を<ruby>搭載<rt>とうさい</rt></ruby>している。",
            id: "Nomor tiga, membawa bahan mudah terbakar dalam jumlah banyak seperti bahan bakar.",
            type: "paragraph"
          },
          {
            jp: "④ <ruby>高価<rt>こうか</rt></ruby>である。",
            id: "Nomor empat, harganya sangat mahal.",
            type: "paragraph"
          },
          {
            jp: "(1) <ruby>航空機<rt>こうくうき</rt></ruby>からの<ruby>視界<rt>しかい</rt></ruby>",
            id: "Sub bagian satu, Pandangan dari Pesawat Terbang",
            type: "section"
          },
          {
            jp: "コクピットからの<ruby>視界<rt>しかい</rt></ruby>には<ruby>死角<rt>しかく</rt></ruby>が<ruby>多くあり<rt>おおくあり</rt></ruby>、<ruby>機体<rt>きたい</rt></ruby>の<ruby>直近<rt>ちょっきん</rt></ruby>の<ruby>視界<rt>しかい</rt></ruby>は<ruby>非常に悪く<rt>ひじょうにわるく</rt></ruby>、<ruby>安全<rt>あんぜん</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>が<ruby>重要<rt>じゅうよう</rt></ruby>である。",
            id: "Ada banyak titik buta dari dalam kokpit, dan pandangan di area terdekat badan pesawat sangat buruk, oleh karena itu konfirmasi keselamatan sangatlah penting.",
            type: "paragraph"
          },
          {
            jp: "ボーイング777-200<ruby>型機<rt>がたき</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>から<ruby>見<rt>み</rt></ruby>える<ruby>範囲<rt>はんい</rt></ruby>は、次のようになっている。(Figure 1)",
            id: "Jangkauan yang dapat dilihat dari kursi kemudi pesawat Boeing 777-200 adalah sebagai berikut, seperti pada Gambar 1.",
            image: "https://i.pinimg.com/736x/7c/c7/a6/7cc7a6536f03c2fe69e86db4a5c399cb.jpg",
            type: "paragraph"
          },
          {
            jp: "① <ruby>操縦<rt>そうじゅう</rt></ruby><ruby>姿勢<rt>しせい</rt></ruby>では、<ruby>右<rt>みぎ</rt></ruby><ruby>翼端<rt>よくたん</rt></ruby>、<ruby>左<rt>ひだり</rt></ruby><ruby>翼端<rt>よくたん</rt></ruby>は<ruby>確認<rt>かくにん</rt></ruby>できない。",
            id: "Nomor satu, dalam posisi mengemudi standar, ujung sayap kanan dan ujung sayap kiri tidak dapat terlihat.",
            type: "paragraph"
          },
          {
            jp: "② <ruby>操縦<rt>そうじゅう</rt></ruby><ruby>席<rt>せき</rt></ruby>からは、<ruby>前方<rt>ぜんぽう</rt></ruby> <ruby>約<rt>やく</rt></ruby>15m <ruby>以上<rt>いじょう</rt></ruby><ruby>離<rt>はな</rt></ruby>れなければ、<ruby>地上<rt>ちじょう</rt></ruby>の<ruby>障害<rt>しょうがい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>は<ruby>確認<rt>かくにん</rt></ruby>できない。",
            id: "Nomor dua, dari ruang kemudi, rintangan di darat tidak dapat dilihat kecuali berjarak minimal sekitar lima belas meter ke arah depan.",
            type: "paragraph"
          },
          {
            jp: "③ <ruby>機長<rt>きちょう</rt></ruby><ruby>席<rt>せき</rt></ruby>から<ruby>右側<rt>みぎがわ</rt></ruby>は、<ruby>前方<rt>ぜんぽう</rt></ruby> 10m <ruby>以上<rt>いじょう</rt></ruby><ruby>離<rt>はな</rt></ruby>れなければ、<ruby>地上<rt>ちじょう</rt></ruby>の<ruby>障害<rt>しょうがい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>は<ruby>確認<rt>かくにん</rt></ruby>できない。",
            id: "Nomor tiga, dari kursi kapten ke arah kanan, rintangan di darat tidak dapat dilihat kecuali berjarak minimal sepuluh meter ke depan.",
            type: "paragraph"
          },
          {
            jp: "④ <ruby>実験<rt>じっけん</rt></ruby>によると、<ruby>操縦<rt>そうじゅう</rt></ruby><ruby>席<rt>せき</rt></ruby>から<ruby>見<rt>み</rt></ruby>て<ruby>翼端<rt>よくたん</rt></ruby>とその<ruby>付近<rt>ふきん</rt></ruby>にある<ruby>障害<rt>しょうがい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>の<ruby>間隔<rt>かんかく</rt></ruby>（クリアランス）を<ruby>目測<rt>もくそく</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>、3m <ruby>前後<rt>ぜんご</rt></ruby>の<ruby>誤差<rt>ごさ</rt></ruby>が、<ruby>認<rt>みと</rt></ruby>められたという。",
            id: "Nomor empat, berdasarkan eksperimen, ketika mengukur jarak aman antara ujung sayap dan rintangan di sekitarnya secara visual dari ruang kemudi, ditemukan margin kesalahan sekitar tiga meter.",
            type: "paragraph"
          },
          {
            jp: "すなわち、<ruby>Narrow<rt>せま</rt></ruby>い<ruby>場所<rt>ばしょ</rt></ruby>では、<ruby>航空機<rt>こうくうき</rt></ruby>が、<ruby>安全<rt>あんぜん</rt></ruby><ruby>通過<rt>つうか</rt></ruby>できるかどうか、<ruby>乗員<rt>じょういん</rt></ruby>のみでは<ruby>判定<rt>はんてい</rt></ruby>できない。",
            id: "Dengan kata lain, di tempat yang sempit, tidaklah mungkin hanya mengandalkan kru pesawat sendiri untuk menentukan apakah pesawat dapat melintas dengan aman.",
            type: "paragraph"
          },
          {
            jp: "⑤ <ruby>地上<rt>ちじょう</rt></ruby><ruby>走行<rt>そうこう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>の<ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>前方<rt>ぜんぽう</rt></ruby>40m <ruby>以内<rt>いない</rt></ruby>には、マーシャラによる<ruby>誘導<rt>ゆうどう</rt></ruby>がない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>車両<rt>しゃりょう</rt></ruby>、<ruby>障害<rt>しょうがい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>などがあってはならない。",
            id: "Nomor lima, selama pesawat taxiing di darat, tidak boleh ada kendaraan atau rintangan dalam jarak empat puluh meter di depan pesawat, kecuali jika ada panduan langsung dari petugas marshaller.",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "<ruby>制限<rt>せいげん</rt></ruby><ruby>区域<rt>くいき</rt></ruby><ruby>内<rt>ない</rt></ruby>においては、<ruby>常<rt>つね</rt></ruby>に<ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>運航<rt>うんこう</rt></ruby>が、<ruby>最<rt>さい</rt></ruby><ruby>優先<rt>ゆうせん</rt></ruby>であり、いかなる<ruby>車両<rt>しゃりょう</rt></ruby>なども<ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>運航<rt>うんこう</rt></ruby>を<ruby>妨<rt>さまた</rt></ruby>げる<ruby>行為<rt>こうい</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>ってはならない。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Ini adalah pernyataan verbatim mengenai prioritas keselamatan pesawat di area terbatas."
          },
          {
            question: "<ruby>操縦<rt>そうじゅう</rt></ruby><ruby>姿勢<rt>しせい</rt></ruby>では、<ruby>右<rt>みぎ</rt></ruby><ruby>翼端<rt>よくたん</rt></ruby>、<ruby>左<rt>ひだり</rt></ruby><ruby>翼端<rt>よくたん</rt></ruby>は<ruby>確認<rt>かくにん</rt></ruby>できる。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Sesuai isi dokumen, dalam posisi mengemudi standar, ujung sayap kanan dan kiri TIDAK dapat terlihat (確認できない)."
          },
          {
            question: "<ruby>操縦<rt>そうじゅう</rt></ruby><ruby>席<rt>せき</rt></ruby>からは、<ruby>前方<rt>ぜんぽう</rt></ruby><ruby>約<rt>やく</rt></ruby>15m<ruby>以上<rt>いじょう</rt></ruby><ruby>離<rt>はな</rt></ruby>れなければ、<ruby>地上<rt>ちじょう</rt></ruby>の<ruby>障害<rt>しょうがい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>は<ruby>確認<rt>かくにん</rt></ruby>できない。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Pernyataan verbatim sesuai fakta yang diukur pada Boeing 777-200."
          },
          {
            question: "<ruby>実験<rt>じっけん</rt></ruby>によると、<ruby>操縦<rt>そうじゅう</rt></ruby><ruby>席<rt>せき</rt></ruby>から<ruby>見<rt>み</rt></ruby>て<ruby>翼端<rt>よくたん</rt></ruby>とその<ruby>付近<rt>ふきん</rt></ruby>にある<ruby>障害<rt>しょうがい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>の<ruby>間隔<rt>かんかく</rt></ruby>を<ruby>目測<rt>もくそく</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>、<ruby>誤差<rt>ごさ</rt></ruby>はまったく<ruby>認<rt>みと</rt></ruby>められなかったという。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Seharusnya terdapat margin kesalahan sekitar 3 meter (3m前後の誤差が認められたという)."
          },
          {
            question: "<ruby>地上<rt>ちじょう</rt></ruby><ruby>走行<rt>そうこう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>の<ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>前方<rt>ぜんぽう</rt></ruby>40m<ruby>以内<rt>いない</rt></ruby>には、マーシャラによる<ruby>誘導<rt>ゆうどう</rt></ruby>がない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>車両<rt>しゃりょう</rt></ruby>、<ruby>障害<rt>しょうがい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>などがあってはならない。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Pernyataan ini verbatim sesuai dengan aturan keselamatan taxiing di darat."
          }
        ]
      },
      {
        pageNumber: 4,
        title: "適切な合図 & 出発発見 (Isyarat & Poin Keberangkatan)",
        content: [
          {
            jp: "(2) <ruby>適切<rt>てきせつ</rt></ruby>な<ruby>合図<rt>あいず</rt></ruby>",
            id: "Bagian dua, Isyarat yang Sesuai",
            type: "title"
          },
          {
            jp: "ウォッチ<ruby>作業<rt>さぎょう</rt></ruby>は、ウォッチマンと<ruby>他<rt>ほか</rt></ruby>の<ruby>担当者<rt>たんとうしゃ</rt></ruby>（<ruby>乗員<rt>じょういん</rt></ruby>・<ruby>整備士<rt>せいびし</rt></ruby>・マーシャラ・<ruby>航空機<rt>こうくうき</rt></ruby><ruby>牽引<rt>けんいん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>・<ruby>ドライバー<rt>どらいばー</rt></ruby>等）が、<ruby>合図<rt>あいず</rt></ruby>を<ruby>通<rt>つう</rt></ruby>じて、<ruby>航空機<rt>こうくうき</rt></ruby><ruby>を<rt>を</rt></ruby><ruby>安全<rt>あんぜん</rt></ruby>に<ruby>目標<rt>もくひょう</rt></ruby><ruby>場所<rt>ばしょ</rt></ruby>へ<ruby>移動<rt>いどう</rt></ruby>できるよう<ruby>監視<rt>かんし</rt></ruby>し、<ruby>導<rt>みちび</rt></ruby>く<ruby>作業<rt>さぎょう</rt></ruby>である。(Figure 2)",
            id: "Pekerjaan pengawasan (watch) adalah pekerjaan memantau dan mengarahkan agar pesawat dapat dipindahkan dengan aman ke lokasi target melalui sinyal isyarat antara petugas watchman dengan penanggung jawab lainnya (seperti kru pesawat, mekanik, marshaller, pengemudi kendaraan penarik pesawat, pengemudi kendaraan darat, dll).",
            image: "https://i.pinimg.com/736x/da/9c/ef/da9cef2e10af88c7198081c65ab3807a.jpg",
            type: "paragraph"
          },
          {
            jp: "ウォッチマンは、<ruby>基本<rt>きほん</rt></ruby>の<ruby>動作<rt>どうさ</rt></ruby>･<ruby>合図<rt>あいず</rt></ruby>で<ruby>他<rt>ほか</rt></ruby>の<ruby>担当者<rt>たんとうしゃ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>し、「<ruby>意図<rt>いと</rt></ruby>することが<ruby>正確<rt>せいかく</rt></ruby>に<ruby>伝達<rt>でんたつ</rt></ruby>されるよう」 <ruby>適宜<rt>てきぎ</rt></ruby>、<ruby>適切<rt>てきせつ</rt></ruby>に<ruby>正確な<rt>せいかくな</rt></ruby><ruby>動作<rt>どうさ</rt></ruby>や<ruby>合図<rt>あいず</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うように<ruby>心掛<rt>こころが</rt></ruby>ける。",
            id: "Petugas watchman harus berusaha untuk selalu melakukan gerakan dan isyarat yang tepat, sesuai, serta akurat pada waktunya kepada penanggung jawab lain menggunakan gerakan dan isyarat dasar, agar maksud dan tujuannya dapat tersampaikan dengan benar.",
            type: "paragraph"
          },
          {
            jp: "<ruby>各<rt>かく</rt></ruby><ruby>空港<rt>くうこう</rt></ruby>で<ruby>実施<rt>じっし</rt></ruby>されるウォッチマンの<ruby>動作<rt>どうさ</rt></ruby>は、<ruby>基準<rt>きじゅん</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づいた<ruby>統一<rt>とういつ</rt></ruby>されたものでなければならない。",
            id: "Gerakan watchman yang dipraktikkan di setiap bandara harus distandardisasi dan disatukan berdasarkan kriteria standar baku.",
            type: "paragraph"
          },
          {
            jp: "(3) <ruby>出発<rt>しゅっぱつ</rt></ruby><ruby>発見<rt>はっけん</rt></ruby>の<ruby>着眼<rt>ちゃくがん</rt></ruby><ruby>点<rt>てん</rt></ruby>",
            id: "Sub bagian tiga, Poin Penting untuk Mendeteksi Keberangkatan",
            type: "subtitle"
          },
          {
            jp: "<ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>出発<rt>しゅっぱつ</rt></ruby>を<ruby>事前<rt>じぜん</rt></ruby>に<ruby>発見<rt>はっけん</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>としての<ruby>着眼<rt>ちゃくがん</rt></ruby><ruby>点<rt>てん</rt></ruby>は、次のものがある。",
            id: "Poin-poin penting sebagai cara untuk mendeteksi keberangkatan pesawat terbang terlebih dahulu adalah sebagai berikut:",
            type: "paragraph"
          },
          {
            jp: "① <ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>衝突<rt>しょうとつ</rt></ruby><ruby>防止<rt>ぼうし</rt></ruby><ruby>灯<rt>とう</rt></ruby>（アンチコリジョン・ライト）が、<ruby>点灯<rt>てんとう</rt></ruby>しているか。",
            id: "① Apakah lampu anti-tabrakan (anti-collision light) pesawat terbang menyala?",
            type: "paragraph"
          },
          {
            jp: "② <ruby>航空機<rt>こうくうき</rt></ruby>のエンジンが、<ruby>始動<rt>しどう</rt></ruby>しているか。",
            id: "② Apakah mesin pesawat terbang sudah dihidupkan (start)?",
            type: "paragraph"
          },
          {
            jp: "③ PBB（パッセンジャ・ボーディング・ブリッジ）が、<ruby>航空機<rt>こうくうき</rt></ruby>より<ruby>離<rt>はな</rt></ruby>されているか。",
            id: "③ Apakah jembatan penghubung penumpang (passenger boarding bridge / garbarata) telah dijauhkan dari pesawat?",
            type: "paragraph"
          },
          {
            jp: "④ <ruby>車両<rt>しゃりょう</rt></ruby>（パッセンジャ・ステップ<ruby>車<rt>しゃ</rt></ruby>、グラウンドパワー<ruby>車<rt>しゃ</rt></ruby>、エア・スタータ<ruby>車<rt>しゃ</rt></ruby>）の<ruby>有無<rt>うむ</rt></ruby>。",
            id: "④ Keberadaan kendaraan pendukung darat (seperti kendaraan tangga penumpang, mobil generator daya darat, mobil kompresor starter udara, dll).",
            type: "paragraph"
          },
          {
            jp: "⑤ <ruby>航空機<rt>こうくうき</rt></ruby><ruby>牽引<rt>けんいん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>の<ruby>黄色<rt>きいろ</rt></ruby><ruby>回転<rt>かいてん</rt></ruby><ruby>灯<rt>とう</rt></ruby>が、<ruby>点灯<rt>てんとう</rt></ruby>しているか。",
            id: "⑤ Apakah lampu rotasi kuning pada kendaraan penarik pesawat terbang menyala?",
            type: "paragraph"
          },
          {
            jp: "⑥ <ruby>車輪<rt>しゃりん</rt></ruby><ruby>止<rt>ど</rt></ruby>め（チョック）が、<ruby>外<rt>はず</rt></ruby>されているか。",
            id: "⑥ Apakah pengganjal roda pesawat (chock) sudah dilepaskan?",
            type: "paragraph"
          },
          {
            jp: "⑦ ウォッチマンが、オールクリアの<ruby>合図<rt>あいず</rt></ruby>をしているか。",
            id: "⑦ Apakah petugas watchman memberikan isyarat bahwa semuanya telah aman (all clear)?",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "<ruby>各<rt>かく</rt></ruby><ruby>空港<rt>くうこう</rt></ruby>で<ruby>実施<rt>じっし</rt></ruby>されるウォッチマンの<ruby>動作<rt>どうさ</rt></ruby>は、それぞれ<ruby>自由<rt>じゆう</rt></ruby>に<ruby>作成<rt>さくせい</rt></ruby>したものでもよい。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Teks menyatakan bahwa gerakan tersebut harus diseragamkan (統一されたものでなければならない) berdasarkan standar."
          },
          {
            question: "<ruby>航空機<rt>こうくうき</rt></ruby><ruby>衝突<rt>しょうとつ</rt></ruby><ruby>防止<rt>ぼうし</rt></ruby><ruby>灯<rt>とう</rt></ruby>（アンチコリジョン・ライト）が、<ruby>点灯<rt>てんとう</rt></ruby>しているかが、<ruby>出発<rt>しゅっぱつ</rt></ruby>を<ruby>事前<rt>じぜん</rt></ruby>に<ruby>発見<rt>はっけん</rt></ruby>する<ruby>着眼<rt>ちゃくがん</rt></ruby><ruby>点<rt>てん</rt></ruby>の１つである。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Ini adalah pernyataan verbatim yang sesuai dengan daftar pendeteksian keberangkatan poin nomor 1."
          },
          {
            question: "PBB（パッセンジャ・ボーディング・ブリッジ）が、<ruby>航空機<rt>こうくうき</rt></ruby>にまだ<ruby>接続<rt>せつぞく</rt></ruby>されたままであるかが、<ruby>出発<rt>しゅっぱつ</rt></ruby>を<ruby>事前<rt>じぜん</rt></ruby>に<ruby>発見<rt>はっけん</rt></ruby>する<ruby>着眼<rt>ちゃくがん</rt></ruby><ruby>点<rt>てん</rt></ruby>の１つである。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Deteksi keberangkatan yang benar adalah jembatan tersebut harus dilepas / dijauhkan (離されているか)."
          },
          {
            question: "<ruby>車輪<rt>しゃりん</rt></ruby><ruby>止<rt>ど</rt></ruby>め（チョック）が、<ruby>装着<rt>そうちゃく</rt></ruby>されたままであるかが、<ruby>出発<rt>しゅっぱつ</rt></ruby>を<ruby>事前<rt>じぜん</rt></ruby>に<ruby>発見<rt>はっけん</rt></ruby>する<ruby>着眼<rt>ちゃくがん</rt></ruby><ruby>点<rt>てん</rt></ruby>の１つである。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Deteksi keberangkatan yang benar adalah jika pengganjal roda sudah dilepas (外されているか)."
          },
          {
            question: "<ruby>航空機<rt>こうくうき</rt></ruby><ruby>牽引<rt>けんいん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>の<ruby>黄色<rt>きいろ</rt></ruby><ruby>回転<rt>かいてん</rt></ruby><ruby>灯<rt>とう</rt></ruby>が、<ruby>点灯<rt>てんとう</rt></ruby>しているかが、<ruby>出発<rt>しゅっぱつ</rt></ruby>を<ruby>事前<rt>じぜん</rt></ruby>に<ruby>発見<rt>はっけん</rt></ruby>する<ruby>着眼<rt>ちゃくがん</rt></ruby><ruby>点<rt>てん</rt></ruby>の１つである。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Sesuai dengan materi poin nomor 5 secara verbatim."
          }
        ]
      },
      {
        pageNumber: 5,
        title: "エンジンへの注意・危険区域 (Perhatian Mesin & Zona Bahaya)",
        content: [
          {
            jp: "B. <ruby>エンジン<rt>えんじん</rt></ruby>への<ruby>注意<rt>ちゅうい</rt></ruby>（<ruby>危険<rt>きけん</rt></ruby><ruby>区域<rt>くいき</rt></ruby>）",
            id: "Bagian B. Perhatian Terhadap Mesin (Zona Bahaya)",
            type: "title"
          },
          {
            jp: "<ruby>航空機<rt>こうくうき</rt></ruby>が、<ruby>地上<rt>ちじょう</rt></ruby>でエンジンを<ruby>作動<rt>さどう</rt></ruby>している<ruby>間<rt>あいだ</rt></ruby>は、ブラスト（<ruby>排気<rt>はいき</rt></ruby>）やインテーク（<ruby>吸気<rt>きゅうき</rt></ruby>）による<ruby>危険<rt>きけん</rt></ruby><ruby>区域<rt>くいき</rt></ruby>が、ある。",
            id: "Selama pesawat mengaktifkan mesinnya di darat, terdapat area rawan/zona bahaya yang disebabkan oleh blast (semburan udara pembuangan) dan intake (isapan udara masuk).",
            type: "paragraph"
          },
          {
            jp: "(1) ブラスト（<ruby>排気<rt>はいき</rt></ruby>: EXHAUST）の<ruby>危険<rt>きけん</rt></ruby>",
            id: "Sub-bagian 1. Bahaya Semburan Pembuangan (Blast / Exhaust)",
            type: "subtitle"
          },
          {
            jp: "ジェット<ruby>機<rt>き</rt></ruby>のエンジン・ブラストの<ruby>問題<rt>もんだい</rt></ruby>として<ruby>温度<rt>おんど</rt></ruby>と<ruby>風速<rt>ふうそく</rt></ruby>があり、どちらも<ruby>人体<rt>じんたい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>影響<rt>えいきょう</rt></ruby>が、ある。",
            id: "Masalah utama dari semburan mesin jet adalah temperatur suhu yang tinggi dan kecepatan angin, di mana keduanya memiliki pengaruh fatal terhadap tubuh manusia.",
            type: "paragraph"
          },
          {
            jp: "ブラストは<ruby>目<rt>め</rt></ruby>に<ruby>見<rt>み</rt></ruby>えず、<ruby>風速<rt>ふうそく</rt></ruby>25m/s のブラストは<ruby>台風<rt>たいふう</rt></ruby>なみであり、<ruby>注意<rt>ちゅうい</rt></ruby>していないと<ruby>吹<rt>ふ</rt></ruby>き<ruby>飛<rt>と</rt></ruby>ばされる<ruby>危険<rt>きけん</rt></ruby>がある。",
            id: "Engine blast ini tidak kasat mata, dan hembusan berkekuatan kecepatan angin 25 meter per detik (25m/s) setara dengan kekuatan badai topan. Jika tidak waspada, terdapat risiko fatal terhempas/terbang tertiup angin.",
            type: "paragraph"
          },
          {
            jp: "(2) インテーク（<ruby>吸気<rt>きゅうき</rt></ruby>: INLET）<ruby>側<rt>がわ</rt></ruby>の<ruby>危険<rt>きけん</rt></ruby>",
            id: "Sub-bagian 2. Bahaya Sesi Isap Udara (Intake / Inlet)",
            type: "subtitle"
          },
          {
            jp: "エンジンのブラストと<ruby>同様<rt>どうよう</rt></ruby>に、ジェット・エンジンの<ruby>前方<rt>ぜんぽう</rt></ruby>、すなわち<ruby>空気<rt>くうき</rt></ruby>が、<ruby>吸<rt>す</rt></ruby>い<ruby>込<rt>こ</rt></ruby>まれる<ruby>側<rt>がわ</rt></ruby>も<ruby>大変<rt>たいへん</rt></ruby><ruby>危険<rt>きけん</rt></ruby>である。",
            id: "Sama halnya dengan bahaya engine blast, area di depan mesin jet, yaitu sisi bagian di mana udara diisap masuk ke dalam mesin, juga merupakan area yang sangat berbahaya.",
            type: "paragraph"
          },
          {
            jp: "<ruby>注意<rt>ちゅうい</rt></ruby>！ <ruby>作業<rt>さぎょう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>に<ruby>帽子<rt>ぼうし</rt></ruby>が、<ruby>飛<rt>と</rt></ruby>ばされ、それを<ruby>取<rt>と</rt></ruby>りにエンジンの<ruby>前方<rt>ぜんぽう</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っていった<ruby>場合<rt>ばあい</rt></ruby>、エンジンに<ruby>吸<rt>す</rt></ruby>い<ruby>込<rt>こ</rt></ruby>まれるおそれがあり、<ruby>極<rt>きわ</rt></ruby>めて<ruby>危険<rt>きけん</rt></ruby>であるので<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>取<rt>と</rt></ruby>りに<ruby>行<rt>い</rt></ruby>ってはいけない。",
            id: "PERINGATAN UTAMA! Jika topi Anda terbang tertiup angin saat bekerja, lalu Anda mendekat ke area depan mesin untuk mengambilnya, ada risiko fatal Anda akan terisap masuk ke dalam mesin. Tindakan ini teramat sangat berbahaya, jadi Anda SAMA SEKALI TIDAK BOLEH PERGI MENGAMBILNYA.",
            type: "warning"
          },
          {
            jp: "<ruby>身<rt>み</rt></ruby>の<ruby>回<rt>まわ</rt></ruby>りに、エンジンに<ruby>吸<rt>す</rt></ruby>い<ruby>込<rt>こ</rt></ruby>まれるおそれのあるものがないか、まず<ruby>確認<rt>かくにん</rt></ruby>してから<ruby>作業<rt>さぎょう</rt></ruby>にのぞむことと、<ruby>危険<rt>きけん</rt></ruby><ruby>区域<rt>くいき</rt></ruby>の<ruby>十分<rt>じゅうぶん</rt></ruby>な<ruby>認識<rt>にんしき</rt></ruby>を<ruby>持<rt>も</rt></ruby>たなければならない。",
            id: "Sebelum memulai tugas pekerjaan, pastikan terlebih dahulu bahwa tidak ada benda-benda longgar di sekitar tubuh Anda yang berisiko terisap masuk ke dalam mesin, dan Anda harus memiliki kesadaran penuh serta pemahaman mendalam tentang batasan zona bahaya tersebut.",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "ブラストは<ruby>非常<rt>ひじょう</rt></ruby>にはっきりと<ruby>目<rt>め</rt></ruby>に<ruby>見<rt>み</rt></ruby>え、<ruby>風速<rt>ふうそく</rt></ruby>25m/sのブラストはたいしたことないため、<ruby>注意<rt>ちゅうい</rt></ruby>しなくてもよい。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Kenyataannya engine blast itu tidak kasat mata (目に見えない) dan setara badai topan (台風なみ) sehingga sangat berbahaya."
          },
          {
            question: "<ruby>作業<rt>さぎょう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>に<ruby>帽子<rt>ぼうし</rt></ruby>が、<ruby>飛<rt>と</rt></ruby>ばされ、それを<ruby>取<rt>と</rt></ruby>りにエンジンの<ruby>前方<rt>ぜんぽう</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っていった<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>素早<rt>すばや</rt></ruby>く<ruby>取<rt>と</rt></ruby>りに<ruby>行<rt>い</rt></ruby>ってよい。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Di dalam dokumen ditulis sangat tegas: \"絶対に取りに行ってはいけない\" (Sama sekali tidak boleh pergi mengambilnya) karena risiko fatal terisap mesin."
          },
          {
            question: "<ruby>エンジン<rt>えんじん</rt></ruby>のブラストと<ruby>同様<rt>どうよう</rt></ruby>に、ジェット・エンジンの<ruby>前方<rt>ぜんぽう</rt></ruby>、すなわち<ruby>空気<rt>くうき</rt></ruby>が、<ruby>吸<rt>す</rt></ruby>い<ruby>込<rt>こ</rt></ruby>まれる<ruby>側<rt>がわ</rt></ruby>も<ruby>大変<rt>たいへん</rt></ruby><ruby>危険<rt>きけん</rt></ruby>である。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Pernyataan verbatim yang menjelaskan bahaya sisi intake."
          },
          {
            question: "<ruby>航空<rt>こうくう</rt></ruby><ruby>機<rt>き</rt></ruby>が、<ruby>地上<rt>ちじょう</rt></ruby>でエンジンを<ruby>作動<rt>さどう</rt></ruby>している<ruby>間<rt>あいだ</rt></ruby>は、ブラスト（<ruby>排気<rt>はいき</rt></ruby>）やインテーク（<ruby>吸気<rt>きゅうき</rt></ruby>）による<ruby>危険<rt>きけん</rt></ruby><ruby>区域<rt>くいき</rt></ruby>がある。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Pernyataan verbatim sesuai pengantar awal sub-bab bahaya mesin."
          },
          {
            question: "<ruby>身<rt>み</rt></ruby>の<ruby>回<rt>まわ</rt></ruby>りに、エンジンに<ruby>吸<rt>す</rt></ruby>い<ruby>込<rt>こ</rt></ruby>まれるおそれのあるものがないか、まず<ruby>確認<rt>かくにん</rt></ruby>してから<ruby>作業<rt>さぎょう</rt></ruby>にのぞむことと、<ruby>危険<rt>きけん</rt></ruby><ruby>区域<rt>くいき</rt></ruby>の<ruby>十分<rt>じゅうぶん</rt></ruby>な<ruby>認識<rt>にんしき</rt></ruby>を<ruby>持<rt>も</rt></ruby>たなければならない。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Kalimat ini merupakan himbauan wajib verbatim penutup materi halaman ini."
          }
        ]
      },
      {
        pageNumber: 6,
        title: "危険物輸送 & ウエイト・アンド・バランス",
        content: [
          {
            jp: "C. <ruby>危険物<rt>きけんぶつ</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>",
            id: "Bagian C. Transportasi Barang Berbahaya",
            type: "subtitle"
          },
          {
            jp: "<ruby>航空機<rt>こうくうき</rt></ruby>に<ruby>爆発物<rt>ばくはつぶつ</rt></ruby>、<ruby>発火<rt>はっか</rt></ruby>・<ruby>引火<rt>いんか</rt></ruby>しやすいもの、<ruby>銃砲刀剣類<rt>じゅうほうとうけんるい</rt></ruby>などの<ruby>危険物<rt>きけんぶつ</rt></ruby>を<ruby>搭載<rt>とうさい</rt></ruby>することは、<ruby>特例<rt>とくれい</rt></ruby>を<ruby>除<rt>のぞ</rt></ruby>いて<ruby>法律<rt>ほうりつ</rt></ruby>で<ruby>禁止<rt>きんし</rt></ruby>されている。",
            id: "Memuat barang berbahaya ke dalam pesawat terbang, seperti bahan peledak, bahan yang mudah menyala atau terbakar, senjata api, dan pedang, dilarang oleh hukum kecuali ada pengecualian khusus.",
            type: "paragraph"
          },
          {
            jp: "これは、<ruby>機体<rt>きたい</rt></ruby>を<ruby>爆破<rt>ばくは</rt></ruby>したり、<ruby>損傷<rt>そんしょう</rt></ruby>させる<ruby>恐<rt>おそ</rt></ruby>れがあるからである。",
            id: "Hal ini karena terdapat risiko bahan-bahan tersebut dapat meledakkan atau merusak badan pesawat.",
            type: "paragraph"
          },
          {
            jp: "ため、<ruby>航空機<rt>こうくうき</rt></ruby><ruby>運航<rt>うんこう</rt></ruby>に<ruby>際<rt>さい</rt></ruby>しては、<ruby>手荷物<rt>てにもつ</rt></ruby>のみの<ruby>運送<rt>うんそう</rt></ruby>を<ruby>禁止<rt>きんし</rt></ruby>したり、<ruby>保安<rt>ほあん</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>（X-Ray<ruby>検査<rt>けんさ</rt></ruby>）の<ruby>実施<rt>じっし</rt></ruby>をすること、また、<ruby>貨物<rt>かもつ</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>においては<ruby>荷送人<rt>におくりにん</rt></ruby>との<ruby>確認<rt>かくにん</rt></ruby><ruby>項目<rt>こうもく</rt></ruby>を<ruby>義務<rt>ぎむ</rt></ruby>づけることなど、<ruby>安全<rt>あんぜん</rt></ruby><ruby>運航<rt>うんこう</rt></ruby>を<ruby>保<rt>たも</rt></ruby>つよう<ruby>規定<rt>きてい</rt></ruby>されている。",
            id: "Oleh karena itu, dalam pengoperasian pesawat terbang, peraturan ditetapkan untuk menjaga keselamatan penerbangan, seperti melarang pengangkutan barang bawaan saja, mewajibkan pelaksanaan pemeriksaan keamanan (pemeriksaan X-Ray), serta mewajibkan item konfirmasi dengan pengirim barang dalam transportasi kargo.",
            type: "paragraph"
          },
          {
            jp: "D. ウエイト・アンド・バランス",
            id: "Bagian D. Weight dan Balance (Berat dan Keseimbangan)",
            type: "subtitle"
          },
          {
            jp: "<ruby>重量<rt>じゅうりょう</rt></ruby><ruby>超過<rt>ちょうか</rt></ruby>は、<ruby>離着陸<rt>りちゃくりく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>・<ruby>距離<rt>きょり</rt></ruby>の<ruby>増大<rt>ぞうだい</rt></ruby、<ruby>航続<rt>こうぞく</rt></ruby><ruby>距離<rt>きょり</rt></ruby>の<ruby>低下<rt>ていか</rt></ruby>、<ruby>燃料<rt>ねんりょう</rt></ruby><ruby>消費量<rt>しょうひりょう</rt></ruby>の<ruby>増大<rt>ぞうだい</rt></ruby>など<ruby>飛行<rt>ひこう</rt></ruby>のあらゆる<ruby>段階<rt>だんかい</rt></ruby>で<ruby>性能<rt>せいのう</rt></ruby>に<ruby>悪影響<rt>あくえいきょう</rt></ruby>を<ruby>及<rt>およ</rt></ruby>ぼす。",
            id: "Kelebihan berat (overweight) memberikan dampak buruk pada performa di setiap tahap penerbangan, seperti peningkatan kecepatan dan jarak lepas landas/pendaratan, penurunan jarak tempuh penerbangan, serta peningkatan konsumsi bahan bakar.",
            type: "paragraph"
          },
          {
            jp: "そのため<ruby>重量<rt>じゅうりょう</rt></ruby>を<ruby>正確<rt>せいかく</rt></ruby>に<ruby>把握<rt>はあく</rt></ruby>し、かつ<ruby>重量<rt>じゅうりょう</rt></ruby>が<ruby>規定値<rt>きていち</rt></ruby>を<ruby>超過<rt>ちょうか</rt></ruby>していないことを<ruby>確認<rt>かくにん</rt></ruby>することは<ruby>非常<rt>ひじょう</rt></ruby>に<ruby>重要<rt>じゅうよう</rt></ruby>であり、<ruby>航空法<rt>こうくうほう</rt></ruby><ruby>施行<rt>きそく</rt></ruby>により<ruby>義務<rt>ぎむ</rt></ruby>付<ruby>づ<rt>づ</rt></ruby>けられている。",
            id: "Oleh karena itu, sangat penting untuk mengetahui berat secara akurat dan memastikan bahwa berat tidak melebihi nilai yang ditentukan, dan hal ini diwajibkan oleh Peraturan Pelaksanaan Undang-Undang Penerbangan.",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "<ruby>航空機<rt>こうくうき</rt></ruby><ruby>に<rt>に</rt></ruby><ruby>危険物<rt>きけんぶつ</rt></ruby>を<ruby>搭載<rt>とうさい</rt></ruby>することは、<ruby>特例<rt>とくれい</rt></ruby>を<ruby>除<rt>のぞ</rt></ruby>いて<ruby>法律<rt>ほうりつ</rt></ruby>で<ruby>許可<rt>きょか</rt></ruby>されている。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Memuat barang berbahaya ke dalam pesawat dilarang oleh hukum (法律で禁止されている), bukan diizinkan (許可されている)."
          },
          {
            question: "<ruby>貨物<rt>かもつ</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>においては<ruby>荷送人<rt>におくりにん</rt></ruby>との<ruby>確認<rt>かくにん</rt></ruby><ruby>項目<rt>こうもく</rt></ruby>を<ruby>義務<rt>ぎむ</rt></ruby>づけることなど、<ruby>安全<rt>あんぜん</rt></ruby><ruby>運航<rt>うんこう</rt></ruby>を<ruby>保<rt>たも</rt></ruby>つよう<ruby>規定<rt>きてい</rt></ruby>されている。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Sesuai dengan materi, hal ini diwajibkan untuk menjaga keselamatan penerbangan."
          },
          {
            question: "<ruby>重量<rt>じゅうりょう</rt></ruby><ruby>超過<rt>ちょうか</rt></ruby>は、<ruby>燃料<rt>ねんりょう</rt></ruby><ruby>消費量<rt>しょうひりょう</rt></ruby>の<ruby>減少<rt>げんしょう</rt></ruby>など<ruby>飛行<rt>ひこう</rt></ruby>に<ruby>良<rt>よ</rt></ruby>い<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>及<rt>およ</rt></ruby>ぼす。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Kelebihan berat justru menyebabkan peningkatan konsumsi bahan bakar (増大) dan berdampak buruk pada performa (悪影響を及ぼす)."
          },
          {
            question: "<ruby>重量<rt>じゅうりょう</rt></ruby>が<ruby>規定値<rt>きていち</rt></ruby>を<ruby>超過<rt>ちょうか</rt></ruby>していないことを<ruby>確認<rt>かくにん</rt></ruby>することは、<ruby>航空法<rt>こうくうほう</rt></ruby><ruby>施行<rt>きそく</rt></ruby>により<ruby>義務<rt>ぎむ</rt></ruby>付<ruby>づ<rt>づ</rt></ruby>けられている。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Ini diwajibkan oleh Peraturan Pelaksanaan Undang-Undang Penerbangan."
          }
        ]
      },
      {
        pageNumber: 7,
        title: "航空保安 (Keamanan Penerbangan)",
        content: [
          {
            jp: "E. <ruby>航空保安<rt>こうくうほあん</rt></ruby>",
            id: "Bagian E. Keamanan Penerbangan",
            type: "title"
          },
          {
            jp: "<ruby>乗客<rt>じょうきゃく</rt></ruby>に<ruby>安全<rt>あんぜん</rt></ruby>で<ruby>快適<rt>かいてき</rt></ruby>なフライトを<ruby>提供<rt>ていきょう</rt></ruby>するために、<ruby>搭乗者<rt>とうじょうしゃ</rt></ruby>、<ruby>手荷物<rt>てにもつ</rt></ruby>および<ruby>預<rt>あず</rt></ruby>け<ruby>入<rt>い</rt></ruby>れ<ruby>荷物<rt>にもつ</rt></ruby>について<ruby>保安検査<rt>ほあんけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>っている。",
            id: "Untuk memberikan penerbangan yang aman dan nyaman bagi penumpang, dilakukan pemeriksaan keamanan terhadap penumpang, barang bawaan (kabin), dan bagasi tercatat.",
            type: "paragraph"
          },
          {
            jp: "これは、ハイジャックおよび<ruby>航空機爆破<rt>こうくうきばくは</rt></ruby>などの<ruby>不法<rt>ふほう</rt></ruby>な<ruby>行為<rt>こうい</rt></ruby>を<ruby>未然<rt>みぜん</rt></ruby>に<ruby>防止<rt>ぼうし</rt></ruby>するものである。",
            id: "Hal ini bertujuan untuk mencegah tindakan ilegal seperti pembajakan (hijack) dan peledakan pesawat terbang sebelum terjadi.",
            type: "paragraph"
          },
          {
            jp: "<ruby>特<rt>とく</rt></ruby>に、<ruby>搭乗手続<rt>とうじょうてつづ</rt></ruby>き<ruby>済<rt>ず</rt></ruby>み<ruby>旅客<rt>りょかく</rt></ruby>と<ruby>航空機<rt>こうくうき</rt></ruby>に<ruby>搭乗<rt>とうじょう</rt></ruby>した<ruby>旅客数<rt>りょかくすう</rt></ruby>に<ruby>不一致<rt>ふいっち</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じた<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>規定<rt>きてい</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づき<ruby>的確<rt>てきかく</rt></ruby>な<ruby>処置<rt>しょち</rt></ruby>をとらなければならない。",
            id: "Secara khusus, jika terjadi ketidaksesuaian antara jumlah penumpang yang telah melakukan proses lapor masuk (check-in) dengan jumlah penumpang yang naik ke pesawat, maka tindakan yang tepat harus diambil berdasarkan peraturan.",
            type: "paragraph"
          },
          {
            jp: "(1) <ruby>標準<rt>ひょうじゅん</rt></ruby>IDカードの<ruby>管理<rt>かんり</rt></ruby>",
            id: "Sub bagian 1. Manajemen Kartu ID Standar",
            type: "subtitle"
          },
          {
            jp: "<ruby>標準<rt>ひょうじゅん</rt></ruby>IDカードは<ruby>厳重<rt>げんじゅう</rt></ruby>に<ruby>管理<rt>かんり</rt></ruby>する。",
            id: "Kartu ID standar harus dikelola dengan sangat ketat.",
            type: "paragraph"
          },
          {
            jp: "① <ruby>許可<rt>きょか</rt></ruby>・<ruby>承認<rt>しょうにん</rt></ruby>された<ruby>区域外<rt>くいきがい</rt></ruby>での<ruby>使用<rt>しよう</rt></ruby>、<ruby>目的外<rt>もくてきがい</rt></ruby>の<ruby>使用<rt>しよう</rt></ruby>をしてはいけない。",
            id: "Nomor 1, tidak boleh menggunakannya di luar area yang diizinkan atau disetujui, serta menggunakannya di luar tujuan yang sebenarnya.",
            type: "paragraph"
          },
          {
            jp: "② <ruby>他人<rt>たにん</rt></ruby>への<ruby>貸与<rt>たいよ</rt></ruby>や<ruby>譲渡<rt>じょうと</rt></ruby>をしてはいけない。",
            id: "Nomor 2, tidak boleh meminjamkan atau memindahtangankan kepada orang lain.",
            type: "paragraph"
          },
          {
            jp: "(2) <ruby>標準<rt>ひょうじゅん</rt></ruby>IDカードの<ruby>表示<rt>ひょうじ</rt></ruby>",
            id: "Sub bagian 2. Penampilan (Pemakaian) Kartu ID Standar",
            type: "subtitle"
          },
          {
            jp: "<ruby>制限区域<rt>せいげんくいき</rt></ruby>に<ruby>立入<rt>たちい</rt></ruby>る<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>標準<rt>ひょうじゅん</rt></ruby>IDカードを<ruby>外部<rt>がいぶ</rt></ruby>から<ruby>容易<rt>ようい</rt></ruby>に<ruby>見<rt>み</rt></ruby>えるよう<ruby>表示<rt>ひょうじ</rt></ruby>し、<ruby>係員<rt>かかりいん</rt></ruby>の<ruby>要求<rt>ようきゅう</rt></ruby>があった<ruby>場合<rt>ばあい</rt></ruby>はそれを<ruby>提示<rt>ていじ</rt></ruby>しなければならない。",
            id: "Jika memasuki area terbatas, kartu ID standar harus dipasang agar mudah terlihat dari luar, dan jika diminta oleh petugas berwenang, maka wajib ditunjukkan atau diperlihatkan.",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "<ruby>他人<rt>たにん</rt></ruby>へIDカードの<ruby>貸与<rt>たいよ</rt></ruby>や<ruby>譲渡<rt>じょうと</rt></ruby>をしてもよい。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Kartu ID standar dilarang keras dipinjamkan atau dipindahtangankan kepada orang lain (他人への貸与や譲渡をしてはいけない)."
          },
          {
            question: "<ruby>搭乗手続<rt>とうじょうてつづ</rt></ruby>き<ruby>済<rt>ず</rt></ruby>み<ruby>旅客<rt>りょかく</rt></ruby>と<ruby>航空機<rt>こうくうき</rt></ruby>に<ruby>搭乗<rt>とうじょう</rt></ruby>した<ruby>旅客数<rt>りょかくすう</rt></ruby>に<ruby>不一致<rt>ふいっち</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じた<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>規定<rt>きてい</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づき<ruby>的確<rt>てきかく</rt></ruby>な<ruby>処置<rt>しょち</rt></ruby>をとらなければならない。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Sesuai dengan materi, jika jumlah penumpang check-in dan boarding tidak cocok, petugas wajib mengambil tindakan yang tepat sesuai peraturan."
          },
          {
            question: "<ruby>制限区域<rt>せいげんくいき</rt></ruby>に<ruby>立入<rt>たちい</rt></ruby>る<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>標準<rt>ひょうじゅん</rt></ruby>IDカードをポケットなどに<ruby>隠<rt>かく</rt></ruby>しておかなければならない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Saat berada di area terbatas, kartu ID tidak boleh disembunyikan. Ia harus dipasang agar mudah terlihat dari luar (外部から容易に見えるよう表示し)."
          }
        ]
      },
      {
        pageNumber: 8,
        title: "作業の安全 (Keselamatan Kerja)",
        content: [
          {
            jp: "3. <ruby>作業<rt>さぎょう</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>",
            id: "3. Keselamatan Kerja",
            type: "title"
          },
          {
            jp: "A. <ruby>規定<rt>きてい</rt></ruby>の<ruby>遵守<rt>じゅんしゅ</rt></ruby>について",
            id: "Bagian A. Tentang Kepatuhan pada Peraturan",
            type: "subtitle"
          },
          {
            jp: "<ruby>航空機<rt>こうくうき</rt></ruby><ruby>運航<rt>うんこう</rt></ruby>に<ruby>係<rt>かか</rt></ruby>varu<ruby>運航<rt>うんこう</rt></ruby><ruby>関係<rt>かんけい</rt></ruby>の<ruby>規程<rt>きてい</rt></ruby>ならびにランプ<ruby>内<rt>ない</rt></ruby><ruby>作業<rt>さぎょう</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>係<rt>かか</rt></ruby>わる<ruby>運送<rt>うんそう</rt></ruby><ruby>関係<rt>かんけい</rt></ruby>の<ruby>規程<rt>きてい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>しては、「<ruby>安全<rt>あんぜん</rt></ruby><ruby>第一<rt>だいいち</rt></ruby>」のために<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>守<rt>まも</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がある。",
            id: "Mengenai peraturan terkait operasi penerbangan serta peraturan terkait transportasi yang berhubungan dengan keselamatan kerja di dalam apron (ramp), sangat mutlak diperlukan untuk mematuhinya demi \"Keselamatan Pertama\" (Safety First).",
            type: "paragraph"
          },
          {
            jp: "B. <ruby>天候<rt>てんこう</rt></ruby>",
            id: "Bagian B. Cuaca",
            type: "subtitle"
          },
          {
            jp: "<ruby>空港<rt>くうこう</rt></ruby>のランプ<ruby>内<rt>ない</rt></ruby>は<ruby>高<rt>たか</rt></ruby>い<ruby>建物<rt>たてもの</rt></ruby><ruby>等<rt>など</rt></ruby>がないため<ruby>悪天候<rt>あくてんこう</rt></ruby>（<ruby>強風<rt>きょうふう</rt></ruby>・<ruby>雷<rt>かみなり</rt></ruby>・<ruby>台風<rt>たいふう</rt></ruby>・<ruby>降雪<rt>こうせつ</rt></ruby>）が<ruby>作業<rt>さぎょう</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>える<ruby>場合<rt>ばあい</rt></ruby>がある。",
            id: "Karena tidak ada bangunan tinggi dan sejenisnya di dalam area apron bandara, cuaca buruk (angin kencang, petir, badai topan, hujan salju) dapat mempengaruhi pekerjaan.",
            type: "paragraph"
          },
          {
            jp: "<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うことが<ruby>危険<rt>きけん</rt></ruby>と<ruby>判断<rt>はんだん</rt></ruby>され<ruby>作業<rt>さぎょう</rt></ruby><ruby>中断<rt>ちゅうだん</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>がされる<ruby>場合<rt>ばあい</rt></ruby>がある。その<ruby>際<rt>さい</rt></ruby>は<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>避難<rt>ひなん</rt></ruby>する。",
            id: "Ada kalanya dinilai berbahaya untuk melakukan pekerjaan dan instruksi untuk menangguhkan pekerjaan dikeluarkan. Jika hal itu terjadi, segera mengungsi (berlindung) ke tempat yang aman.",
            type: "paragraph"
          },
          {
            jp: "C. <ruby>作業員<rt>さぎょういん</rt></ruby>の<ruby>服装<rt>ふくそう</rt></ruby>",
            id: "Bagian C. Pakaian Pekerja",
            type: "subtitle"
          },
          {
            jp: "(1) <ruby>保護帽<rt>ほごぼう</rt></ruby>（ヘルメット）の<ruby>着用<rt>ちゃくよう</rt></ruby>",
            id: "Sub bagian 1. Pemakaian Topi Pelindung (Helm)",
            type: "section"
          },
          {
            jp: "<ruby>作業員<rt>さぎょういん</rt></ruby>は、<ruby>搭載<rt>とうさい</rt></ruby>、<ruby>取<rt>と</rt></ruby>り<ruby>降<rt>お</rt></ruby>ろし<ruby>作業<rt>さぎょう</rt></ruby>に<ruby>従事<rt>じゅうじ</rt></ruby>するときは、<ruby>保護帽<rt>ほごぼう</rt></ruby>を<ruby>着用<rt>ちゃくよう</rt></ruby>しなければならない。<ruby>保護帽<rt>ほごぼう</rt></ruby>はあご<ruby>紐<rt>ひも</rt></ruby>を<ruby>必<rt>かなら</rt></ruby>ずかけ、<ruby>正<rt>ただ</rt></ruby>しく<ruby>着用<rt>ちゃくよう</rt></ruby>しなければならない。",
            id: "Pekerja wajib memakai topi pelindung (helm) saat melakukan pekerjaan pemuatan (loading) dan pembongkaran (unloading). Topi pelindung harus dipakai dengan benar dan tali dagunya harus selalu dikaitkan.",
            type: "paragraph"
          },
          {
            jp: "<ruby>注意<rt>ちゅうい</rt></ruby>！ <ruby>保護具<rt>ほごぐ</rt></ruby><ruby>航空機<rt>こうくうき</rt></ruby><ruby>地上<rt>ちじょう</rt></ruby><ruby>作業<rt>さぎょう</rt></ruby>において、その<ruby>作業<rt>さぎょう</rt></ruby><ruby>内容<rt>ないよう</rt></ruby>により、<ruby>人身事故<rt>じんしんじこ</rt></ruby>を<ruby>未然<rt>みぜん</rt></ruby>に<ruby>防止<rt>ぼうし</rt></ruby>するため、さまざまな<ruby>防具<rt>ぼうぐ</rt></ruby>（<ruby>手袋<rt>てぶくろ</rt></ruby>・<ruby>安全<rt>あんぜん</rt></ruby>ベルト・ヘルメット・<ruby>帽子<rt>ぼうし</rt></ruby>・<ruby>耳栓<rt>みみせん</rt></ruby> <ruby>等<rt>など</rt></ruby>）が<ruby>使用<rt>しよう</rt></ruby>されている。<ruby>危険物<rt>きけんぶつ</rt></ruby>の<ruby>破損<rt>はそん</rt></ruby>や<ruby>感染症<rt>かんせんしょう</rt></ruby>の<ruby>対応<rt>たいおう</rt></ruby>などイレギュラー<ruby>処理<rt>しょり</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>際<rt>さい</rt></ruby>も<ruby>含<rt>ふk</rt></ruby>めて、<ruby>各種<rt>かくしゅ</rt></ruby>「<ruby>規程<rt>きてい</rt></ruby>」で<ruby>使用<rt>しよう</rt></ruby>することになっているものは、<ruby>必<rt>かなら</rt></ruby>ず<ruby>装着<rt>そうちゃく</rt></ruby>しなければならない。",
            id: "PERINGATAN! Alat Pelindung: Dalam pekerjaan di darat terkait pesawat terbang, berbagai perlengkapan pelindung (sarung tangan, sabuk pengaman, helm, topi, penutup telinga, dll.) digunakan tergantung pada isi pekerjaannya untuk mencegah kecelakaan diri sebelum terjadi. Anda wajib untuk selalu memakai apa yang telah ditetapkan untuk digunakan di dalam berbagai \"Peraturan\", termasuk ketika melakukan penanganan yang tidak biasa seperti menangani kerusakan barang berbahaya atau penanganan penyakit menular.",
            type: "warning"
          },
          {
            jp: "(2) <ruby>作業服<rt>さぎょうふく</rt></ruby>の<ruby>着用<rt>ちゃくよう</rt></ruby>",
            id: "Sub bagian 2. Pemakaian Baju Kerja",
            type: "section"
          },
          {
            jp: "<ruby>作業員<rt>さぎょういん</rt></ruby>は、<ruby>着用<rt>ちゃくよう</rt></ruby>している<ruby>作業服<rt>さぎょうふく</rt></ruby>のボタン、ファスナおよび<ruby>靴<rt>くつ</rt></ruby>の<ruby>紐<rt>ひも</rt></ruby>などを<ruby>正<rt>ただ</rt></ruby>しく<ruby>締<rt>し</rt></ruby>め、ベルト・コンベヤへの<ruby>巻<rt>ま</rt></ruby>き<ruby>込<rt>こ</rt></ruby>miや、<ruby>車両<rt>しゃりょう</rt></ruby>などの<ruby>突起物<rt>とっきぶつ</rt></ruby>にからむことがないか、<ruby>常<rt>つね</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>しなければならない。",
            id: "Pekerja harus selalu memperhatikan dan memastikan kancing, ritsleting dari baju kerja yang dikenakan, serta tali sepatu telah dikencangkan/ditutup dengan benar, agar tidak tergulung ke dalam sabuk konveyor (belt conveyor) atau tersangkut pada tonjolan/bagian menonjol dari kendaraan dan sejenisnya.",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "<ruby>航空機<rt>こうくうき</rt></ruby><ruby>運航<rt>うんこう</rt></ruby>に<ruby>係<rt>かか</rt></ruby>わる<ruby>規程<rt>きてい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>しては、「<ruby>安全<rt>あんぜん</rt></ruby><ruby>第一<rt>だいいち</rt></ruby>」のために<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>守<rt>まも</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がある。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Keselamatan pertama (Safety First) adalah prioritas mutlak yang harus dipatuhi sesuai peraturan."
          },
          {
            question: "<ruby>悪天候<rt>あくてんこう</rt></ruby>が<ruby>作業<rt>さぎょう</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>える<ruby>場合<rt>ばあい</rt></ruby>があるが、<ruby>作業<rt>さぎょう</rt></ruby><ruby>中断<rt>ちゅうだん</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>がされることはない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Jika dinilai berbahaya akibat cuaca buruk, instruksi untuk menghentikan pekerjaan (作業中断) BISA dikeluarkan."
          },
          {
            question: "<ruby>保護帽<rt>ほごぼう</rt></ruby>はあご<ruby>紐<rt>ひom</rt></ruby>を<ruby>必<rt>かなら</rt></ruby>ずかけ、<ruby>正<rt>ただ</rt></ruby>しく<ruby>着用<rt>ちゃくよう</rt></ruby>しなければならない。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Topi pelindung (helm) wajib dipakai dengan benar dan tali dagunya harus dikaitkan untuk keamanan."
          },
          {
            question: "<ruby>作業服<rt>さぎょうふく</rt></ruby>のボタンや<ruby>靴<rt>くつ</rt></ruby>の<ruby>紐<rt>ひも</rt></ruby>は、<ruby>作業<rt>さぎょう</rt></ruby>しやすければ<ruby>締<rt>し</rt></ruby>める<ruby>必要<rt>ひつよう</rt></ruby>はない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Tali sepatu, ritsleting, dan kancing WAJIB dikencangkan dengan benar agar tidak tersangkut ke mesin atau konveyor."
          },
          {
            question: "さまざまな<ruby>防具<rt>ぼうぐ</rt></ruby>（<ruby>手袋<rt>てぶくろ</rt></ruby>・<ruby>安全<rt>あんぜん</rt></ruby>ベルト・ヘルメット<ruby>等<rt>など</rt></ruby>）が、<ruby>人身事故<rt>じんしんじこ</rt></ruby>を<ruby>未然<rt>みぜん</rt></ruby>に<ruby>防止<rt>ぼうし</rt></ruby>するために<ruby>使用<rt>しよう</rt></ruby>されている。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Pernyataan ini sesuai dengan teks peringatan, peralatan pelindung (防具) dipakai untuk mencegah kecelakaan diri."
          }
        ]
      },
      {
        pageNumber: 9,
        title: "車両の運転 (Mengemudi Kendaraan)",
        content: [
          {
            jp: "D. <ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>運転<rt>うんてん</rt></ruby>",
            id: "Bagian D. Mengemudi Kendaraan",
            type: "title"
          },
          {
            jp: "<ruby>車両<rt>しゃりょう</rt></ruby>により<ruby>航空機<rt>こうくうき</rt></ruby>を<ruby>損傷<rt>そんしょう</rt></ruby>する<ruby>事故<rt>じこ</rt></ruby>は、<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>航空機<rt>こうくうき</rt></ruby>が<ruby>壊<rt>こわ</rt></ruby>れるだけでなく、<ruby>航空機<rt>こうくうき</rt></ruby><ruby>運航<rt>うんこう</rt></ruby>にも<ruby>支障<rt>ししょう</rt></ruby>をきたし、<ruby>乗客<rt>じょうきゃく</rt></ruby>にも<ruby>大<rt>おお</rt></ruby>きなご<ruby>迷惑<rt>めいわく</rt></ruby>をかけることになる。",
            id: "Kecelakaan di mana kendaraan merusak pesawat terbang, tidak hanya akan menghancurkan pesawat yang berharga, tetapi juga mengganggu operasi penerbangan, dan akan sangat merepotkan serta merugikan penumpang.",
            type: "paragraph"
          },
          {
            jp: "それ<ruby>以外<rt>いがい</rt></ruby>の<ruby>車両<rt>しゃりょう</rt></ruby><ruby>事故<rt>じこ</rt></ruby>も<ruby>会社<rt>かいしゃ</rt></ruby>にとって<ruby>大<rt>おお</rt></ruby>きな<ruby>損失<rt>そんしつ</rt></ruby>をもたらし、その<ruby>後<rt>ご</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>にも<ruby>大<rt>おお</rt></ruby>きな<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>打<rt>う</rt></ruby>つこととなる。",
            id: "Kecelakaan kendaraan lainnya di luar itu juga akan membawa kerugian besar bagi perusahaan, dan akan memberikan dampak yang sangat besar pada pekerjaan-pekerjaan selanjutnya.",
            type: "paragraph"
          },
          {
            jp: "(1) <ruby>車両<rt>しゃりょう</rt></ruby>、<ruby>機材<rt>きざい</rt></ruby><ruby>使用上<rt>しようじょう</rt></ruby>の<ruby>注意<rt>ちゅうい</rt></ruby>",
            id: "Sub bagian 1. Perhatian dalam Penggunaan Kendaraan dan Peralatan",
            type: "section"
          },
          {
            jp: "① <ruby>制限区域内<rt>せいげんくいきない</rt></ruby>において<ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>運転<rt>うんてん</rt></ruby>をしようとする<ruby>者<rt>もの</rt></ruby>は、「<ruby>車両<rt>しゃりょう</rt></ruby><ruby>安全<rt>あんぜん</rt></ruby><ruby>運転<rt>うんてん</rt></ruby><ruby>教本<rt>きょうほん</rt></ruby>」の<ruby>内容<rt>ないよう</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>した<ruby>後<rt>のち</rt></ruby>、<ruby>航空局<rt>こうくうきょく</rt></ruby>の<ruby>実施<rt>じっし</rt></ruby>する<ruby>講習<rt>こうしゅう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ke、<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>した<ruby>後<rt>のち</rt></ruby>、<ruby>標準<rt>ひょうじゅん</rt></ruby>IDカードに<ruby>車両<rt>しゃりょう</rt></ruby><ruby>運転<rt>うんてん</rt></ruby><ruby>許可<rt>きょか</rt></ruby>を<ruby>受<rt>う</rt></ruby>けなければならない。",
            id: "Nomor 1. Orang yang bermaksud untuk mengemudikan kendaraan di dalam area terbatas harus memahami isi dari 'Buku Panduan Mengemudi Aman Kendaraan', kemudian mengikuti pelatihan yang diselenggarakan oleh Biro Penerbangan (Otoritas Bandara), lulus ujian, dan setelah itu wajib menerima/mendapatkan cap Izin Mengemudi Kendaraan pada Kartu ID Standar miliknya.",
            type: "paragraph"
          },
          {
            jp: "さらに、<ruby>社内<rt>しゃない</rt></ruby>にて<ruby>一般<rt>いっぱん</rt></ruby><ruby>車両<rt>しゃりょう</rt></ruby><ruby>走行<rt>そうこう</rt></ruby><ruby>訓練<rt>くんれん</rt></ruby><ruby>を<rt>を</rt></ruby><ruby>修了<rt>しゅうりょう</rt></ruby>し、<ruby>認定<rt>にんてい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けなければならない。",
            id: "Lebih lanjut, ia harus menyelesaikan pelatihan mengemudi kendaraan umum di dalam perusahaannya sendiri, dan wajib mendapatkan sertifikasi kelayakan.",
            type: "paragraph"
          },
          {
            jp: "② <ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>運転<rt>うんてん</rt></ruby>は、<ruby>慎重<rt>しんちょう</rt></ruby>に<ruby>実施<rt>じっし</rt></ruby>し、<ruby>常<rt>つね</rt></ruby>に<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>を<ruby>払<rt>はら</rt></ruby>う。",
            id: "Nomor 2. Pelaksanaan mengemudi kendaraan harus dilakukan dengan sangat hati-hati, dan wajib selalu mencurahkan perhatian pada keselamatan.",
            type: "paragraph"
          },
          {
            jp: "③ <ruby>車両<rt>しゃりょう</rt></ruby>・<ruby>機材<rt>きざい</rt></ruby>は<ruby>原則<rt>げんそく</rt></ruby>として<ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>下側<rt>したがわ</rt></ruby>を<ruby>通過<rt>つうか</rt></ruby>したり、<ruby>放置<rt>ほうち</rt></ruby>してはならない。<ruby>認<rt>みと</rt></ruby>められた<ruby>車両<rt>しゃりょう</rt></ruby>・<ruby>機材<rt>きざい</rt></ruby>で<ruby>通過<rt>つうか</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>航空機<rt>こうくうき</rt></ruby>に<ruby>接触<rt>接触</rt></ruby>することがないように<ruby>十分<rt>じゅうぶん</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>する。",
            id: "Nomor 3. Pada prinsipnya, kendaraan dan peralatan tidak boleh melintas di bawah pesawat terbang atau ditinggalkan/dibiarkan begitu saja di sana. Apabila harus lewat dengan menggunakan kendaraan/peralatan yang memang telah diizinkan, maka harus sangat berhati-hati agar tidak sampai menyentuh pesawat terbang.",
            type: "paragraph"
          },
          {
            jp: "④ <ruby>車両<rt>しゃりょう</rt></ruby>・<ruby>機材<rt>きざい</rt></ruby>を<ruby>航空機<rt>こうくうき</rt></ruby>に<ruby>装着<rt>そうちゃく</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>機体<rt>きたい</rt></ruby>の<ruby>下降<rt>かこう</rt></ruby>・<ruby>上昇<rt>じょうしょう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>しておかねばならない。また、<ruby>装着<rt>そうちゃく</rt></ruby>した<ruby>後<rt>あと</rt></ruby>の<ruby>作業中<rt>さぎょうちゅう</rt></ruby>においても<ruby>常<rt>つね</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>を<ruby>払<rt>はら</rt></ruby>う。",
            id: "Nomor 4. Saat akan memasang/mendekatkan kendaraan atau peralatan ke pesawat terbang, Anda harus selalu memperhatikan adanya potensi pergerakan turun atau naiknya badan pesawat. Selain itu, Anda harus selalu berhati-hati selama proses pekerjaan berlangsung bahkan setelah kendaraan/alat itu dipasang.",
            type: "paragraph"
          },
          {
            jp: "⑤ <ruby>走行中<rt>そうこうちゅう</rt></ruby>に<ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>作業台<rt>さぎょうだい</rt></ruby>の<ruby>上下操作<rt>じょうげそうさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>ってはならない。",
            id: "Nomor 5. DILARANG KERAS melakukan pengoperasian menaik-turunkan anjungan platform kerja (tempat berpijak kerja) pada kendaraan saat kendaraan tersebut sedang berjalan.",
            type: "paragraph"
          },
          {
            jp: "⑥ <ruby>車両<rt>しゃりょう</rt></ruby>・<ruby>機材<rt>きざい</rt></ruby>への<ruby>乗車<rt>じょうしゃ</rt></ruby>にかかわる<ruby>禁止行為<rt>きんしこうい</rt></ruby>",
            id: "Nomor 6. Tindakan-Tindakan Terlarang Terkait Menaiki Kendaraan atau Peralatan:",
            type: "subtitle"
          },
          {
            jp: "a) カート<ruby>車<rt>しゃ</rt></ruby>およびフォークリフトのフォークおよびパレットの<ruby>上<rt>うえ</rt></ruby>に<ruby>作業員<rt>さぎょういん</rt></ruby>を<ruby>乗<rt>の</rt></ruby>せて<ruby>運行<rt>うんこう</rt></ruby>してはいけない。",
            id: "Bagian A. Tidak boleh mengoperasikan atau menjalankan kendaraan dengan cara menaikkan pekerja di atas kendaraan troli/cart, serta di atas garpu (fork) maupun palet dari forklift.",
            type: "paragraph"
          },
          {
            jp: "b) <ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>荷台<rt>にだい</rt></ruby>に<ruby>作業員<rt>さぎょういん</rt></ruby>を<ruby>乗<rt>の</rt></ruby>せて<ruby>運行<rt>うんこう</rt></ruby>してはいけない。ただし、<ruby>安全対策<rt>あんぜんたいさく</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>われている<ruby>場合<rt>ばあい</rt></ruby>は、この<ruby>限<rt>かぎ</rt></ruby>りではない。",
            id: "Bagian B. Tidak boleh mengoperasikan kendaraan dengan cara menaikkan pekerja di bak muatan barang (cargo bed) kendaraan. Namun, hal ini dikecualikan (diperbolehkan) apabila telah dilakukan tindakan langkah-langkah pengamanan yang memadai.",
            type: "paragraph"
          },
          {
            jp: "その他、<ruby>車両<rt>しゃりょう</rt></ruby>などの<ruby>座席以外<rt>ざせきいがい</rt></ruby>に<ruby>作業員<rt>さぎょういん</rt></ruby>を<ruby>乗<rt>の</rt></ruby>せて<ruby>運行<rt>うんこう</rt></ruby>してはいけない。",
            id: "Lain-Lain: Selain itu, secara umum Anda tidak boleh mengoperasikan kendaraan dengan menaikkan pekerja di tempat mana pun selain di tempat duduk (kursi penumpang) yang telah disediakan pada kendaraan dan sejenisnya.",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "<ruby>制限区域内<rt>せいげんくいきない</rt></ruby>において<ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>運転<rt>うんてん</rt></ruby>をしようとする<ruby>者<rt>もの</rt></ruby>は、<ruby>標準<rt>ひょうじゅん</rt></ruby>IDカードに<ruby>車両<rt>しゃりょう</rt></ruby><ruby>運転<rt>うんてん</rt></ruby><ruby>許可<rt>きょか</rt></ruby>を<ruby>受<rt>う</rt></ruby>け、<ruby>社内<rt>しゃない</rt></ruby>にて<ruby>認定<rt>にんてい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けなければならない。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Mengemudi di area terbatas membutuhkan izin khusus di kartu ID serta sertifikasi dari dalam perusahaan setelah melalui pelatihan."
          },
          {
            question: "<ruby>車両<rt>しゃりょう</rt></ruby>・<ruby>機材<rt>きざい</rt></ruby>は、<ruby>原則<rt>げんそく</rt></ruby>として<ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>下側<rt>したがわ</rt></ruby>を<ruby>自由<rt>じゆう</rt></ruby>に<ruby>通過<rt>つうか</rt></ruby>したり、<ruby>放置<rt>ほうち</rt></ruby>したりしてもよい。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Pada prinsipnya, melintas di bawah pesawat atau meninggalkan kendaraan di sana adalah hal yang dilarang (通過したり、放置してはならない)."
          },
          {
            question: "<ruby>走行中<rt>そうこうちゅう</rt></ruby>に<ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>作業台<rt>さぎょうだい</rt></ruby>の<ruby>上下操作<rt>じょうげそうさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>ってはならない。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Kesalahan menaik-turunkan platform / area kerja (seperti pada High Lift Loader) saat kendaraan bergerak adalah tindakan berbahaya dan sangat dilarang."
          },
          {
            question: "フォークリフトのフォークおよびパレットの<ruby>上<rt>うえ</rt></ruby>に<ruby>作業員<rt>さぎょういん</rt></ruby>を<ruby>乗<rt>の</rt></ruby>せて<ruby>運行<rt>うんこう</rt></ruby>してもよい。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Menyuruh pekerja naik di atas garpu (fork) atau palet forklift sangat dilarang karena berisiko jatuh (乗せて運行してはいけない)."
          },
          {
            question: "<ruby>車両<rt>しゃりょう</rt></ruby>・<ruby>機材<rt>きざい</rt></ruby>を<ruby>航空機<rt>こうくうき</rt></ruby>に<ruby>装着<rt>そうちゃく</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>機体<rt>きたい</rt></ruby>の<ruby>下降<rt>かこう</rt></ruby>・<ruby>上昇<rt>じょうしょう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>しておかなければならない。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Badan pesawat bisa bergerak naik/turun (karena memuat kargo/penumpang atau bahan bakar), sehingga harus selalu diperhatikan agar kendaraan tidak membentur pesawat."
          }
        ]
      },
      {
        pageNumber: 10,
        title: "車両の誘導 (Memandu Kendaraan)",
        content: [
          {
            jp: "(2) <ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>誘導<rt>ゆうどう</rt></ruby>",
            id: "Sub bagian 2. Memandu Kendaraan",
            type: "subtitle"
          },
          {
            jp: "<ruby>運転者<rt>うんてんしゃ</rt></ruby>1<ruby>名<rt>めい</rt></ruby>による<ruby>注意<rt>ちゅうい</rt></ruby>だけでは<ruby>不十分<rt>ふじゅうぶん</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>、また<ruby>車両<rt>しゃりょう</rt></ruby>・<ruby>機材上<rt>きざいじょう</rt></ruby>や<ruby>外<rt>そと</rt></ruby>に<ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>を<ruby>配置<rt>はいち</rt></ruby>しなければならない<ruby>場合<rt>ばあい</rt></ruby>もある。<ruby>運転者<rt>うんてんしゃ</rt></ruby>、<ruby>機材<rt>きざい</rt></ruby><ruby>操作者<rt>そうさしゃ</rt></ruby>は、この<ruby>方法<rt>ほうほう</rt></ruby>で<ruby>誘導<rt>ゆうどう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うことが<ruby>大切<rt>たいせつ</rt></ruby>である。",
            id: "Jika tingkat kehati-hatian dari satu orang pengemudi saja dirasa tidak cukup, ada kalanya pemandu (marshaller/guide) harus ditempatkan di atas atau di luar kendaraan/peralatan. Sangat penting bagi pengemudi dan operator peralatan untuk melaksanakan pemanduan dengan metode ini.",
            type: "paragraph"
          },
          {
            jp: "① <ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>",
            id: "Nomor 1. Posisi Pemandu",
            type: "section"
          },
          {
            jp: "a) <ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>は、<ruby>運転者<rt>うんてんしゃ</rt></ruby>にとって<ruby>進路<rt>しんろ</rt></ruby>、<ruby>停止位置<rt>ていしいち</rt></ruby>が<ruby>見<rt>み</rt></ruby>やすく、しかも<ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>の<ruby>手信号<rt>てしんごう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>できる<ruby>場所<rt>ばしょ</rt></ruby>とする。<ruby>後退時<rt>こうたいじ</rt></ruby>でも<ruby>真後<rt>まうし</rt></ruby>ろでの<ruby>誘導<rt>ゆうどう</rt></ruby>をしてはいけない。",
            id: "Bagian A. Posisi pemandu harus berada di tempat di mana arah laju dan posisi berhenti mudah dilihat oleh pengemudi, dan di mana pengemudi dapat mengkonfirmasi (melihat) isyarat tangan dari pemandu dengan jelas. Bahkan saat mundur, pemandu TIDAK BOLEH memandu persis dari area tepat di belakang kendaraan (karena merupakan area titik buta/blind spot).",
            type: "paragraph"
          },
          {
            jp: "b) <ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>は、<ruby>自分自身<rt>じぶんじしん</rt></ruby>が<ruby>安全<rt>あんぜん</rt></ruby>で、<ruby>緊急時<rt>きんきゅうじ</rt></ruby>でも<ruby>避難<rt>ひなん</rt></ruby>できる<ruby>場所<rt>ばしょ</rt></ruby>とする。",
            id: "Bagian B. Posisi pemandu harus berada di tempat di mana ia sendiri aman dan dapat mengevakuasi diri (berlindung) dengan cepat bahkan dalam keadaan darurat.",
            type: "paragraph"
          },
          {
            jp: "② <ruby>安全<rt>あんぜん</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>",
            id: "Nomor 2. Konfirmasi Keselamatan",
            type: "section"
          },
          {
            jp: "<ruby>次<rt>つぎ</rt></ruby>の<ruby>点<rt>てん</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>し、<ruby>安全<rt>あんぜん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>して<ruby>誘導<rt>ゆうどう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。",
            id: "Perhatikan poin-poin berikut ini, dan lakukan pemanduan setelah memastikan keamanan:",
            type: "paragraph"
          },
          {
            jp: "a) <ruby>車両運転<rt>しゃりょううんてん</rt></ruby>は、<ruby>基準<rt>きじゅん</rt></ruby>にそった<ruby>運転<rt>うんてん</rt></ruby>であるか。<br>b) <ruby>運転者<rt>うんてんしゃ</rt></ruby>は、<ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>の<ruby>信号<rt>しんごう</rt></ruby>、<ruby>合図<rt>あいず</rt></ruby>に<ruby>従<rt>したが</rt></ruby>っているか。<br>c) <ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>は<ruby>正<rt>ただ</rt></ruby>しいか。<br>d) <ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>進路上<rt>しんろじょう</rt></ruby>に<ruby>障害物<rt>しょうがいぶつ</rt></ruby>、<ruby>作業者<rt>さぎょうしゃ</rt></ruby>などはいないか。<br>e) <ruby>周囲<rt>しゅうい</rt></ruby>、<ruby>上下前後左右方向<rt>じょうげぜんごさゆうほうこう</rt></ruby>に<ruby>障害物<rt>しょうがいぶつ</rt></ruby>、<ruby>作業者<rt>さぎょうしゃ</rt></ruby>などはいないか。",
            id: "a) Apakah pengemudian kendaraan telah sesuai standar? <br>b) Apakah pengemudi mematuhi sinyal dan isyarat dari pemandu? <br>c) Apakah posisi pemandu sudah benar? <br>d) Apakah ada rintangan atau pekerja di jalur laju kendaraan? <br>e) Apakah ada rintangan atau pekerja di sekeliling area (atas, bawah, depan, belakang, kiri, kanan)?",
            type: "paragraph"
          },
          {
            jp: "③ <ruby>誘導<rt>ゆうどう</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>",
            id: "Nomor 3. Metode Pemanduan",
            type: "section"
          },
          {
            jp: "<ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>は、<ruby>安全<rt>あんぜん</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>の<ruby>後<rt>のち</rt></ruby>、<ruby>両手<rt>りょうて</rt></ruby>と<ruby>声<rt>こえ</rt></ruby>による<ruby>合図<rt>あいず</rt></ruby>により、<ruby>運転者<rt>うんてんしゃ</rt></ruby>が<ruby>確認<rt>かくにん</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>で<ruby>誘導<rt>ゆうどう</rt></ruby>する。<ruby>誘導<rt>ゆうどう</rt></ruby>の<ruby>合図<rt>あいず</rt></ruby>、<ruby>手信号<rt>てしんごう</rt></ruby>およびホイッスルの<ruby>要領<rt>ようりょう</rt></ruby>は（Figure 6）を<ruby>参照<rt>さんしょう</rt></ruby>。",
            id: "Setelah memastikan keamanan, pemandu mengarahkan kendaraan dengan metode yang dapat dikonfirmasi oleh pengemudi, yaitu menggunakan isyarat dengan kedua tangan dan panduan suara. Rujuklah (Figure 6) untuk tata cara isyarat pemanduan, sinyal tangan, dan peluit.",
            type: "paragraph"
          },
          {
            jp: "<ruby>注意<rt>ちゅうい</rt></ruby>！<br>I. <ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>は、<ruby>合図<rt>あいず</rt></ruby>・<ruby>信号<rt>しんごう</rt></ruby>・<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>正<rt>ただ</rt></ruby>しく<ruby>理解<rt>りかい</rt></ruby>し、これに<ruby>従<rt>したが</rt></ruby>って、<ruby>車両<rt>しゃりょう</rt></ruby>を<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>誘導<rt>ゆうどう</rt></ruby>する。<br>II. <ruby>危険<rt>きけん</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じた<ruby>場合<rt>ばあい</rt></ruby>は、すぐに<ruby>停止<rt>ていし</rt></ruby>させる。<br>ナローボディ<ruby>機<rt>き</rt></ruby>の<ruby>前方下部貨物室<rt>ぜんぽうかぶかもつしつ</rt></ruby>ドアなどに、<ruby>車両<rt>しゃりょう</rt></ruby>を<ruby>誘導<rt>ゆうどう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は、プロペラまたは、ジェット・エンジンと<ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>間隔<rt>かんかく</rt></ruby>を1m<ruby>以上<rt>いじょう</rt></ruby>あけた<ruby>位置<rt>いち</rt></ruby>に<ruby>誘導<rt>ゆうどう</rt></ruby>する。",
            id: "PERINGATAN!<br>I. Pemandu harus memahami dengan benar seluruh isyarat, sinyal, serta metode, dan memandu kendaraan dengan aman sesuai panduan tersebut.<br>II. Jika merasakan adanya bahaya, segera perintahkan untuk berhenti (stop).<br>Ketika memandu kendaraan menuju pintu kompartemen kargo bawah bagian depan pada pesawat berbadan sempit (narrow-body aircraft), arahkan kendaraan ke posisi di mana ada jarak aman setidaknya minimal 1 meter antara baling-baling (propeller) atau mesin jet dengan kendaraan tersebut.",
            type: "warning"
          }
        ],
        quizzes: [
          {
            question: "<ruby>後退時<rt>こうたいじ</rt></ruby>は、<ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>真後<rt>まうし</rt></ruby>ろから<ruby>誘導<rt>ゆうどう</rt></ruby>しなければならない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Bahkan saat kendaraan mundur, pemandu TIDAK BOLEH memandu persis dari area lurus di belakang kendaraan karena itu titik buta (後退時でも真後ろでの誘導をしてはいけない)."
          },
          {
            question: "<ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>は、<ruby>自分自身<rt>じぶんじしん</rt></ruby>が<ruby>安全<rt>あんぜん</rt></ruby>で、<ruby>緊急時<rt>きんきゅうじ</rt></ruby>でも<ruby>避難<rt>ひなん</rt></ruby>できる<ruby>場所<rt>ばしょ</rt></ruby>とする。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Sesuai dengan materi, pemandu harus memastikan posisinya aman dan mudah untuk evakuasi jika terjadi kondisi darurat."
          },
          {
            question: "<ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>は、<ruby>安全確認<rt>あんぜんかくにん</rt></ruby>の<ruby>後<rt>のち</rt></ruby>、<ruby>両手<rt>りょうて</rt></ruby>と<ruby>声<rt>こえ</rt></ruby>による<ruby>合図<rt>あいず</rt></ruby>により、<ruby>運転者<rt>うんてんしゃ</rt></ruby>が<ruby>確認<rt>かくにん</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>で<ruby>誘導<rt>ゆうどう</rt></ruby>する。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Pemanduan dilakukan dengan kombinasi suara dan isyarat kedua tangan agar mudah dikonfirmasi pengemudi."
          },
          {
            question: "<ruby>危険<rt>きけん</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じた<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>作業<rt>さぎょう</rt></ruby>が<ruby>終<rt>お</rt></ruby>わるまで<ruby>停止<rt>ていし</rt></ruby>させてはいけない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Jika merasa ada bahaya, kendaraan harus SEGERA dihentikan (すぐに停止させる)."
          },
          {
            question: "ナローボディ<ruby>機<rt>き</rt></ruby>の<ruby>前方下部貨物室<rt>ぜんぽうかぶかもつしつ</rt></ruby>ドアなどに、<ruby>車両<rt>しゃりょう</rt></ruby>を<ruby>誘導<rt>ゆうどう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は、エンジンと<ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>間隔<rt>かんかく</rt></ruby>を1m<ruby>以上<rt>いじょう</rt></ruby>あけた<ruby>位置<rt>いち</rt></ruby>に<ruby>誘導<rt>ゆうどう</rt></ruby>する。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Ini adalah aturan verbatim (persis) di mana wajib ada jarak setidaknya 1 meter antara kendaraan dengan mesin/baling-baling."
          }
        ]
      },
      {
        pageNumber: 11,
        title: "車両の誘導合図 (Isyarat Panduan Kendaraan)",
        content: [
          {
            jp: "11. <ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>誘導合図<rt>ゆうどうあいず</rt></ruby>とホイッスルの<ruby>信号<rt>しんごう</rt></ruby>",
            id: "11. Isyarat Panduan Kendaraan dan Sinyal Peluit",
            type: "title"
          },
          {
            jp: "<ruby>車両<rt>しゃりょう</rt></ruby>を<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>誘導<rt>ゆうどう</rt></ruby>するための、<ruby>誘導者<rt>ゆうどうしゃ</rt></ruby>（マーシャラー）による<ruby>合図<rt>あいず</rt></ruby>およびホイッスル（<ruby>笛<rt>ふえ</rt></ruby>）の<ruby>信号<rt>しんごう</rt></ruby>は<ruby>以下<rt>いか</rt></ruby>の<ruby>定<rt>さだ</rt></ruby>めに<ruby>従<rt>したが</rt></ruby>います。",
            id: "Isyarat dan sinyal peluit oleh pemandu (marshaller) untuk mengarahkan kendaraan dengan aman harus mengikuti ketentuan di bawah ini.",
            type: "paragraph"
          },
          {
            jp: `
              <div class="overflow-x-auto w-full scrollbar-thin mt-2">
                <table class="w-full min-w-[640px] table-fixed divide-y divide-slate-200 dark:divide-slate-800 text-left text-xs sm:text-sm">
                  <thead class="bg-slate-50 dark:bg-slate-900/50">
                    <tr>
                      <th scope="col" class="w-[180px] px-3 py-3 sm:px-4 font-bold text-slate-900 dark:text-white border-r border-slate-200 dark:border-slate-800">
                        <div class="flex flex-col items-center text-center">
                          <ruby>合図<rt>あいず</rt></ruby>
                          <span class="mt-1 text-[10px] sm:text-xs font-normal text-slate-550 dark:text-slate-400">
                            Makna Isyarat
                          </span>
                        </div>
                      </th>
                      <th scope="col" class="px-3 py-3 sm:px-4 font-bold text-slate-900 dark:text-white border-r border-slate-200 dark:border-slate-800">
                        <div class="flex flex-col items-center text-center">
                          <ruby>動作<rt>どうさ</rt></ruby>イメージ
                          <span class="mt-1 text-[10px] sm:text-xs font-normal text-slate-550 dark:text-slate-400">
                            Ilustrasi Visual
                          </span>
                        </div>
                      </th>
                      <th scope="col" class="w-[160px] px-3 py-3 sm:px-4 font-bold text-slate-900 dark:text-white">
                        <div class="flex flex-col items-center text-center">
                          ホイッスルの<ruby>信号<rt>しんごう</rt></ruby>
                          <span class="mt-1 text-[10px] sm:text-xs font-normal text-slate-550 dark:text-slate-400">
                            Sinyal Peluit
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-950/25">

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-4 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 text-center">
                        <ruby>前進<rt>ぜんしん</rt></ruby>・<ruby>後退<rt>こうたい</rt></ruby>せよ
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Maju / Mundur
                        </div>
                      </td>
                      <td class="px-3 py-3 sm:px-4 border-r border-slate-200 dark:border-slate-800">
                        <div class="flex items-center justify-center">
                          <div class="w-24 h-16 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-[10px] text-slate-400 dark:text-slate-550 font-sans tracking-wider select-none">
                            <svg class="w-5 h-5 mb-1 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>SOON</span>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4 sm:px-4 text-center font-bold text-amber-500 dark:text-amber-400 text-base sm:text-lg">
                        ピッピッ<br>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-normal">(Pi- pi-)</span>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-4 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 text-center">
                        <ruby>左<rt>ひだり</rt></ruby>に<ruby>寄<rt>よ</rt></ruby>れ<br>
                        <span class="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-normal">（<ruby>運転手<rt>うんてんしゅ</rt></ruby>から<ruby>見<rt>み</rt></ruby>て）</span>
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Belok Kiri<br>(Dari sudut pandang pengemudi)
                        </div>
                      </td>
                      <td class="px-3 py-3 sm:px-4 border-r border-slate-200 dark:border-slate-800">
                        <div class="flex items-center justify-center">
                          <div class="w-24 h-16 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-[10px] text-slate-400 dark:text-slate-550 font-sans tracking-wider select-none">
                            <svg class="w-5 h-5 mb-1 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>SOON</span>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4 sm:px-4 text-center font-bold text-amber-500 dark:text-amber-400 text-base sm:text-lg">
                        ピッピッ<br>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-normal">(Pi- pi-)</span>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-4 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 text-center">
                        <ruby>右<rt>みぎ</rt></ruby>に<ruby>寄<rt>よ</rt></ruby>れ<br>
                        <span class="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-normal">（<ruby>運転手<rt>うんてんしゅ</rt></ruby>から<ruby>見<rt>み</rt></ruby>て）</span>
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Belok Kanan<br>(Dari sudut pandang pengemudi)
                        </div>
                      </td>
                      <td class="px-3 py-3 sm:px-4 border-r border-slate-200 dark:border-slate-800">
                        <div class="flex items-center justify-center">
                          <div class="w-24 h-16 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-[10px] text-slate-400 dark:text-slate-550 font-sans tracking-wider select-none">
                            <svg class="w-5 h-5 mb-1 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>SOON</span>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4 sm:px-4 text-center font-bold text-amber-500 dark:text-amber-400 text-base sm:text-lg">
                        ピッピッ<br>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-normal">(Pi- pi-)</span>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-4 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 text-center">
                        <ruby>停車<rt>ていしゃ</rt></ruby>
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Berhenti (Normal)
                        </div>
                      </td>
                      <td class="px-3 py-3 sm:px-4 border-r border-slate-200 dark:border-slate-800">
                        <div class="flex items-center justify-center">
                          <div class="w-24 h-16 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-[10px] text-slate-400 dark:text-slate-550 font-sans tracking-wider select-none">
                            <svg class="w-5 h-5 mb-1 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>SOON</span>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4 sm:px-4 text-center font-bold text-rose-500 dark:text-rose-400 text-base sm:text-lg">
                        ぴーー ピッ！<br>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-normal">(Pii-- Pi!)</span>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-4 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 text-center">
                        <ruby>急停止<rt>きゅうていし</rt></ruby>
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Berhenti Darurat
                        </div>
                      </td>
                      <td class="px-3 py-3 sm:px-4 border-r border-slate-200 dark:border-slate-800">
                        <div class="flex items-center justify-center">
                          <div class="w-24 h-16 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-dashed border-rose-300 dark:border-rose-800 flex flex-col items-center justify-center text-[10px] text-rose-400 dark:text-rose-500 font-sans tracking-wider select-none">
                            <svg class="w-5 h-5 mb-1 text-rose-300 dark:text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span class="font-bold">SOON</span>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4 sm:px-4 text-center font-bold text-rose-600 dark:text-rose-400 text-base sm:text-lg">
                        ピッ！<br>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-normal">(Pi!)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `
          }
        ],
        quizzes: [
          {
            question: "Perhatikan gambar isyarat panduan berikut:<br><div class=\"w-full max-w-[120px] h-20 my-3 mx-auto bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-500\"><svg class=\"w-10 h-10\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 7l4-4m0 0l4 4m-4-4v18\" /></svg></div><br>Gambar di atas mengilustrasikan gerakan menuntun jalur lurus. Apakah makna dari isyarat tersebut?",
            options: [
              { text: "A. 左に寄れ (Belok Kiri)", isCorrect: false },
              { text: "B. 前進・後退せよ (Maju / Mundur)", isCorrect: true },
              { text: "C. 停車 (Berhenti)", isCorrect: false }
            ],
            explanation: "Benar. Isyarat gerakan lurus depan/belakang menandakan instruksi untuk maju atau mundur (前進・後退せよ)."
          },
          {
            question: "Perhatikan gambar isyarat berikut:<br><div class=\"w-full max-w-[120px] h-20 my-3 mx-auto bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-500\"><svg class=\"w-10 h-10\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 19l-7-7m0 0l7-7m-7 7h18\" /></svg></div><br>Isyarat lengan di atas mengarahkan kendaraan untuk <strong>左に寄れ (Belok Kiri)</strong>. Dari sudut pandang siapakah penentuan arah 'Kiri' ini?",
            options: [
              { text: "A. 誘導者から見て (Dari sudut pandang pemandu)", isCorrect: false },
              { text: "B. 管制塔から見て (Dari sudut pandang menara kontrol)", isCorrect: false },
              { text: "C. 運転手から見て (Dari sudut pandang pengemudi)", isCorrect: true }
            ],
            explanation: "Tepat. Untuk menghindari bahaya kesalahpahaman, arah kiri/kanan selalu ditentukan mutlak dari sudut pandang pengemudi kendaraan (運転手から見て)."
          },
          {
            question: "Perhatikan gambar isyarat tangan berbentuk X berikut:<br><div class=\"w-full max-w-[120px] h-20 my-3 mx-auto bg-rose-50 dark:bg-rose-900/30 rounded-xl border border-rose-200 dark:border-rose-800 flex items-center justify-center text-rose-500\"><svg class=\"w-10 h-10\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\" /></svg></div><br>Gambar di atas menandakan instruksi untuk menghentikan kendaraan secara normal di titik yang ditentukan. Disebut apakah isyarat ini?",
            options: [
              { text: "A. 急停止 (Kyuuteishi / Berhenti Darurat)", isCorrect: false },
              { text: "B. 停車 (Teisha / Berhenti)", isCorrect: true },
              { text: "C. 右に寄れ (Migi ni yore / Belok Kanan)", isCorrect: false }
            ],
            explanation: "Benar. Menyilangkan tangan di atas kepala (seperti membentuk huruf X) adalah isyarat visual universal untuk Berhenti secara normal / 停車 (Teisha)."
          },
          {
            question: "Perhatikan tanda peringatan keras berikut:<br><div class=\"w-full max-w-[120px] h-20 my-3 mx-auto bg-rose-100 dark:bg-rose-900/50 rounded-xl border border-rose-300 dark:border-rose-700 flex items-center justify-center text-rose-600\"><svg class=\"w-10 h-10\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" stroke-width=\"2.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\" /></svg></div><br>Isyarat ini melambangkan penghentian seketika karena adanya bahaya secara mendadak. Apakah sebutan untuk instruksi ini?",
            options: [
              { text: "A. 停車 (Berhenti Normal)", isCorrect: false },
              { text: "B. 前進・後退せよ (Maju / Mundur)", isCorrect: false },
              { text: "C. 急停止 (Berhenti Darurat)", isCorrect: true }
            ],
            explanation: "Tepat. Itu adalah isyarat untuk 急停止 (Berhenti Darurat), yang harus segera dipatuhi seketika itu juga untuk mencegah kecelakaan di apron."
          }
        ]
      },
      {
        pageNumber: 12,
        title: "航空輸送の品質 (Kualitas Transportasi Udara)",
        content: [
          {
            jp: "4. <ruby>航空<rt>こうくう</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>",
            id: "4. Kualitas Transportasi Udara",
            type: "title"
          },
          {
            jp: "<ruby>最近<rt>さいきん</rt></ruby>の<ruby>航空<rt>こうくう</rt></ruby><ruby>業界<rt>ぎょうかい</rt></ruby>は、<ruby>国内<rt>こくない</rt></ruby>・<ruby>外<rt>がい</rt></ruby>ともに<ruby>今<rt>いま</rt></ruby>までとは<ruby>違<rt>ちが</rt></ruby>った<ruby>厳<rt>きび</rt></ruby>しい<ruby>競争<rt>きょうそう</rt></ruby><ruby>時代<rt>じだい</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っている。<ruby>航空<rt>こうくう</rt></ruby><ruby>会社<rt>がいしゃ</rt></ruby>は<ruby>乗客<rt>じょうきゃく</rt></ruby>に<ruby>選<rt>えら</rt></ruby>ばれるために、サービスのいっそうの<ruby>向上<rt>こうじょう</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>んでいる。",
            id: "Baru-baru ini, industri penerbangan, baik domestik maupun internasional, telah memasuki era persaingan ketat yang berbeda dari sebelumnya. Maskapai penerbangan berusaha keras untuk lebih meningkatkan layanan agar dipilih oleh penumpang.",
            type: "paragraph"
          },
          {
            jp: "このサービスの<ruby>良<rt>よ</rt></ruby>さが<ruby>基準<rt>きじゅん</rt></ruby>にどれだけ<ruby>合<rt>あ</rt></ruby>っているかの<ruby>度合<rt>どあ</rt></ruby>い・<ruby>程度<rt>ていど</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>すものが<ruby>品質<rt>ひんしつ</rt></ruby>である。",
            id: "Hal yang menunjukkan tingkat atau sejauh mana kebaikan layanan ini memenuhi standar adalah kualitas.",
            type: "paragraph"
          },
          {
            jp: "<ruby>品質<rt>ひんしつ</rt></ruby>が<ruby>良<rt>よ</rt></ruby>いか<ruby>悪<rt>わる</rt></ruby>いかを<ruby>手がかり<rt>てがかり</rt></ruby>にする<ruby>目印<rt>めじるし</rt></ruby>として<ruby>航空<rt>こうくう</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>の<ruby>世界<rt>せかい</rt></ruby>では、「<ruby>安全性<rt>あんぜんせい</rt></ruby>」・「<ruby>定時性<rt>ていじせい</rt></ruby>」・「<ruby>快適性<rt>かいてきせい</rt></ruby>」という<ruby>目印<rt>めじるし</rt></ruby>がよく<ruby>使<rt>つか</rt></ruby>われる。",
            id: "Sebagai tolak ukur untuk menilai apakah kualitas itu baik atau buruk, dalam dunia transportasi udara, tolak ukur \"Keselamatan\", \"Ketepatan Waktu\", dan \"Kenyamanan\" sering digunakan.",
            type: "paragraph"
          },
          {
            jp: "① <ruby>安全性<rt>あんぜんせい</rt></ruby> : <ruby>航空機<rt>こうくうき</rt></ruby>を<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>飛<rt>と</rt></ruby>ばすことは、<ruby>航空業<rt>こうくうぎょう</rt></ruby>にとって、もっとも<ruby>大切<rt>たいせつ</rt></ruby>なことである。",
            id: "① Keselamatan: Menerbangkan pesawat dengan aman adalah hal yang paling penting bagi industri penerbangan.",
            type: "section"
          },
          {
            jp: "② <ruby>定時性<rt>ていじせい</rt></ruby> : あらかじめ<ruby>決<rt>き</rt></ruby>めておいた<ruby>時間<rt>じかん</rt></ruby><ruby>通<rt>どお</rt></ruby>りに<ruby>航空機<rt>こうくうき</rt></ruby>を<ruby>飛<rt>と</rt></ruby>ばすことは<ruby>大切<rt>たいせつ</rt></ruby>なことである。",
            id: "② Ketepatan Waktu: Menerbangkan pesawat tepat waktu sesuai dengan waktu yang telah ditentukan sebelumnya adalah hal yang penting.",
            type: "section"
          },
          {
            jp: "③ <ruby>快適性<rt>かいてきせい</rt></ruby> : きれいな<ruby>客室<rt>きゃくしつ</rt></ruby>や<ruby>静<rt>しず</rt></ruby>かな<ruby>機内<rt>きない</rt></ruby>は、<ruby>気持<rt>きも</rt></ruby>ちよく<ruby>旅行<rt>りょこう</rt></ruby>をするためには<ruby>大切<rt>たいせつ</rt></ruby>なことである。",
            id: "③ Kenyamanan: Kabin yang bersih dan interior pesawat yang tenang adalah hal penting untuk melakukan perjalanan dengan nyaman.",
            type: "section"
          },
          {
            jp: "A. <ruby>作業<rt>さぎょう</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>と<ruby>品質<rt>ひんしつ</rt></ruby>",
            id: "Bagian A. Keselamatan dan Kualitas Kerja",
            type: "subtitle"
          },
          {
            jp: "グランドハンドリング<ruby>作業<rt>さぎょう</rt></ruby>は、<ruby>屋外<rt>おくがい</rt></ruby>での<ruby>作業<rt>さぎょう</rt></ruby>や<ruby>車両<rt>しゃりょう</rt></ruby>の<ruby>運転<rt>うんてん</rt></ruby>・<ruby>機材<rt>きざい</rt></ruby>を<ruby>使<rt>つか</rt></ruby>った<ruby>作業<rt>さぎょう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くあり、しかも<ruby>飛行機<rt>ひこうき</rt></ruby>の<ruby>到着<rt>とうちゃく</rt></ruby><ruby>時刻<rt>じこく</rt></ruby>や<ruby>出発<rt>しゅっぱつ</rt></ruby><ruby>時刻<rt>じこく</rt></ruby>にあわせてこれらの<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>限<rt>かぎ</rt></ruby>られた<ruby>時間<rt>じかん</rt></ruby><ruby>内<rt>ない</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>必要<rt>ひつよう</rt></ruby>がある。",
            id: "Pekerjaan ground handling banyak melibatkan pekerjaan di luar ruangan, mengemudikan kendaraan, dan pekerjaan menggunakan peralatan, terlebih lagi perlu melakukan pekerjaan tersebut dalam waktu terbatas sesuai dengan waktu kedatangan dan keberangkatan pesawat.",
            type: "paragraph"
          },
          {
            jp: "<ruby>少<rt>すこ</rt></ruby>しでも<ruby>油断<rt>ゆだん</rt></ruby>すると、<ruby>人身<rt>じんしん</rt></ruby><ruby>災害<rt>さいがい</rt></ruby>、<ruby>航空機<rt>こうくうき</rt></ruby>の<ruby>損傷<rt>そんしょう</rt></ruby>、<ruby>車両<rt>しゃりょう</rt></ruby>・<ruby>機材<rt>きざい</rt></ruby>の<ruby>損傷<rt>そんしょう</rt></ruby>、<ruby>取<rt>と</rt></ruby>り<ruby>扱<rt>あつか</rt></ruby>い<ruby>貨物<rt>かもつ</rt></ruby>・<ruby>手荷物<rt>てにもつ</rt></ruby>・<ruby>郵便物<rt>ゆうびんぶつ</rt></ruby>の<ruby>損傷<rt>そんしょう</rt></ruby>・<ruby>誤送<rt>ごそう</rt></ruby>などの<ruby>不具合<rt>ふぐあい</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>する。",
            id: "Jika lengah sedikit saja, akan terjadi masalah seperti kecelakaan pada manusia, kerusakan pesawat terbang, kerusakan kendaraan/peralatan, serta kerusakan atau kesalahan pengiriman kargo, bagasi, dan surat yang ditangani.",
            type: "paragraph"
          },
          {
            jp: "たとえば<ruby>航空機<rt>こうくうき</rt></ruby>や<ruby>車両<rt>しゃりょう</rt></ruby>・<ruby>機材<rt>きざい</rt></ruby>の<ruby>損傷<rt>そんしょう</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>すると、その<ruby>修理<rt>しゅうり</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>になったり、<ruby>作業員<rt>さぎょういん</rt></ruby>が<ruby>怪我<rt>けが</rt></ruby>をすると<ruby>作業<rt>さぎょう</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れが<ruby>出<rt>で</rt></ruby>たりして、<ruby>飛行機<rt>ひこうき</rt></ruby>の<ruby>出発<rt>しゅっぱつ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れてしまう。",
            id: "Misalnya, jika pesawat terbang atau kendaraan/peralatan mengalami kerusakan, maka perbaikan akan diperlukan, atau jika pekerja terluka, maka akan terjadi keterlambatan dalam pekerjaan, yang menyebabkan tertundanya keberangkatan pesawat.",
            type: "paragraph"
          },
          {
            jp: "また、<ruby>手荷物<rt>てにもつ</rt></ruby>や<ruby>貨物<rt>かもつ</rt></ruby>の<ruby>取<rt>と</rt></ruby>り<ruby>扱<rt>あつか</rt></ruby>いを<ruby>間違<rt>まちが</rt></ruby>えると<ruby>乗客<rt>じょうきゃく</rt></ruby>に<ruby>迷惑<rt>めいわく</rt></ruby>をかけてしまう。<ruby>このよう<rt>このよう</rt></ruby>に、<ruby>作業<rt>さぎょう</rt></ruby>の<ruby>不具合<rt>ふぐあい</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>すると、<ruby>結果的<rt>けっかてき</rt></ruby>に<ruby>品質<rt>ひんしつ</rt></ruby>が<ruby>低下<rt>ていか</rt></ruby>することになる。",
            id: "Selain itu, jika terjadi kesalahan dalam penanganan bagasi atau kargo, hal itu akan merepotkan penumpang. Seperti ini, jika terjadi masalah dalam pekerjaan, pada akhirnya kualitas akan menurun.",
            type: "paragraph"
          },
          {
            jp: "したがって、<ruby>品質<rt>ひんしつ</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させるということは、<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>確実<rt>かくじつ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>い、<ruby>航空機<rt>こうくうき</rt></ruby>や<ruby>車両<rt>しゃりょう</rt></ruby>を<ruby>壊<rt>こわ</rt></ruby>さず、<ruby>作業員<rt>さぎょういん</rt></ruby>が<ruby>健康<rt>けんこう</rt></ruby>でいるということと<ruby>同<rt>おな</rt></ruby>じだといえる。",
            id: "Oleh karena itu, dapat dikatakan bahwa meningkatkan kualitas adalah sama halnya dengan melakukan pekerjaan dengan pasti, tidak merusak pesawat terbang atau kendaraan, dan pekerja tetap dalam kondisi sehat.",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "<ruby>航空<rt>こうくう</rt></ruby><ruby>会社<rt>がいしゃ</rt></ruby>は<ruby>乗客<rt>じょうきゃく</rt></ruby>に<ruby>選<rt>えら</rt></ruby>ばれるために、サービスのいっそうの<ruby>向上<rt>こうじょう</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>んでいる。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Sesuai dengan teks materi, maskapai penerbangan berusaha keras untuk meningkatkan layanan agar dipilih oleh penumpang."
          },
          {
            question: "<ruby>品質<rt>ひんしつ</rt></ruby>が<ruby>良<rt>よ</rt></ruby>いか<ruby>悪<rt>わる</rt></ruby>いかを<ruby>判断<rt>はんだん</rt></ruby>する<ruby>目印<rt>めじるし</rt></ruby>として、「<ruby>安全性<rt>あんぜんせい</rt></ruby>」・「<ruby>定時性<rt>ていじせい</rt></ruby>」・「<ruby>低価格<rt>ていかかく</rt></ruby>」という<ruby>目印<rt>めじるし</rt></ruby>がよく<ruby>使<rt>つか</rt></ruby>われる。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Tiga tolak ukur kualitas penerbangan yang benar adalah Keselamatan (安全性), Ketepatan Waktu (定時性), dan Kenyamanan (快適性), bukan Harga Murah (低価格)."
          },
          {
            question: "グランドハンドリング<ruby>作業<rt>さぎょう</rt></ruby>は、<ruby>時間<rt>じかん</rt></ruby>の<ruby>制限<rt>せいげん</rt></ruby>なくゆっくりと<ruby>行<rt>おこな</rt></ruby>うことができる。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Pekerjaan ground handling harus dilakukan dalam waktu yang terbatas (限られた時間内に行う必要がある) sesuai dengan waktu kedatangan/keberangkatan pesawat."
          },
          {
            question: "<ruby>作業<rt>さぎょう</rt></ruby>の<ruby>不具合<rt>ふぐあい</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>すると、<ruby>結果的<rt>けっかてき</rt></ruby>に<ruby>品質<rt>ひんしつ</rt></ruby>が<ruby>低下<rt>ていか</rt></ruby>することになる。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Kesalahan atau masalah dalam pekerjaan pada akhirnya akan menurunkan kualitas (品質が低下することになる)."
          },
          {
            question: "<ruby>品質<rt>ひんしつ</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させるということは、<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>確実<rt>かくじつ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>い、<ruby>航空機<rt>こうくうき</rt></ruby>や<ruby>車両<rt>しゃりょう</rt></ruby>を<ruby>壊<rt>こわ</rt></ruby>さず、<ruby>作業員<rt>さぎょういん</rt></ruby>が<ruby>健康<rt>けんこう</rt></ruby>でいるということと<ruby>同<rt>おな</rt></ruby>じだといえる。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Ini adalah kesimpulan mutlak dari hubungan antara keselamatan kerja, kesehatan pekerja, dan kualitas."
          }
        ]
      },
      {
        pageNumber: 13,
        title: "予防 (Pencegahan - Hiyari Hatto & 指差呼称)",
        content: [
          {
            jp: "5. <ruby>予防<rt>よぼう</rt></ruby>",
            id: "5. Pencegahan",
            type: "title"
          },
          {
            jp: "A. ヒヤリ・ハット・レポート",
            id: "Bagian A. Laporan Hiyari-Hatto (Near-Miss / Laporan Nyaris Celaka)",
            type: "subtitle"
          },
          {
            jp: "<ruby>事故<rt>じこ</rt></ruby>やインシデントが<ruby>発生<rt>はっせい</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に、それらにつながるエラーの<ruby>情報<rt>じょうほう</rt></ruby>があれば、<ruby>事故<rt>じこ</rt></ruby>の<ruby>未然防止<rt>みぜんぼうし</rt></ruby>に<ruby>役<rt>やく</rt></ruby>にたつ。",
            id: "Sebelum kecelakaan atau insiden terjadi, jika terdapat informasi mengenai error (kesalahan) yang dapat mengarah pada hal-hal tersebut, informasi itu akan sangat berguna untuk mencegah kecelakaan sebelum benar-benar terjadi.",
            type: "paragraph"
          },
          {
            jp: "このため「ヒヤリ・ハット・レポート」（エラー<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>報告<rt>ほうこく</rt></ruby>と<ruby>収集<rt>しゅうしゅう</rt></ruby>）が<ruby>重要<rt>じゅうよう</rt></ruby>になる。",
            id: "Oleh karena itu, 'Laporan Hiyari-Hatto' (pelaporan dan pengumpulan informasi kesalahan/kejadian nyaris celaka) menjadi sangat penting.",
            type: "paragraph"
          },
          {
            jp: "<ruby>実際<rt>じっさい</rt></ruby>には、エラーは<ruby>恥<rt>は</rt></ruby>ずかしいものという<ruby>感覚<rt>かんかく</rt></ruby>だとか、<ruby>処罰<rt>しょばつ</rt></ruby>される<ruby>恐<rt>おそ</rt></ruby>れがあるため、なかなか<ruby>報告<rt>ほうこく</rt></ruby>されない。",
            id: "Pada praktiknya, laporan ini sering kali tidak dilaporkan karena adanya perasaan bahwa berbuat kesalahan adalah hal yang memalukan, atau karena adanya rasa takut akan dihukum.",
            type: "paragraph"
          },
          {
            jp: "「ヒヤリ・ハット」を<ruby>報告<rt>ほうこく</rt></ruby>しやすくするためには、",
            id: "Untuk membuat insiden 'Hiyari-Hatto' ini lebih mudah dan nyaman untuk dilaporkan:",
            type: "paragraph"
          },
          {
            jp: "① <ruby>報告<rt>ほうこく</rt></ruby>されたエラー<ruby>情報<rt>じょうほう</rt></ruby>の<ruby>共有化<rt>きょうゆうか</rt></ruby>やエラーへの<ruby>対応<rt>たいおう</rt></ruby>などの<ruby>十分<rt>じゅうぶん</rt></ruby>なフィードバック",
            id: "Nomor 1, perlu adanya umpan balik (feedback) yang memadai, seperti berbagi informasi (sharing) mengenai kesalahan yang telah dilaporkan dan bagaimana cara penanganan terhadap kesalahan tersebut.",
            type: "paragraph"
          },
          {
            jp: "② エラーをかくす<ruby>必要<rt>ひつよう</rt></ruby>がないオープンで<ruby>明<rt>あか</rt></ruby>るい<ruby>職場<rt>しょくば</rt></ruby>の<ruby>雰囲気<rt>ふんいき</rt></ruby>などが<ruby>重要<rt>じゅうよう</rt></ruby>となる。",
            id: "Nomor 2, sangat penting untuk menciptakan suasana tempat kerja yang terbuka dan ceria, di mana para pekerja merasa tidak perlu untuk menyembunyikan kesalahan-kesalahan mereka.",
            type: "paragraph"
          },
          {
            jp: "B. <ruby>指差呼称<rt>しさこしょう</rt></ruby>および<ruby>危険予知<rt>きけんよち</rt></ruby>",
            id: "Bagian B. Pointing dan Calling (Menunjuk dan Menyebut) serta Prediksi Bahaya",
            type: "subtitle"
          },
          {
            jp: "ランプ<ruby>内<rt>ない</rt></ruby>で<ruby>前方<rt>ぜんぽう</rt></ruby>および<ruby>後方<rt>こうほう</rt></ruby>に<ruby>指<rt>ゆび</rt></ruby>を<ruby>差<rt>さ</rt></ruby>して「ヨーシ」と<ruby>声<rt>こえ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>しながら<ruby>安全確認<rt>あんぜんかくにん</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>しているのをよく<ruby>目<rt>め</rt></ruby>にする。",
            id: "Kita sering melihat orang-orang (petugas ground handling) melakukan konfirmasi keselamatan di dalam area apron dengan menunjuk ke arah depan dan ke arah belakang sambil menyerukan suara 'Yoshi!' (Oke!).",
            type: "paragraph"
          },
          {
            jp: "ただ、<ruby>指<rt>ゆび</rt></ruby>を<ruby>差<rt>さ</rt></ruby>しているのではなく、<ruby>同時<rt>どうじ</rt></ruby>に<ruby>声<rt>こえ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>すことで<ruby>意識<rt>いしき</rt></ruby>を<ruby>集中<rt>しゅうちゅう</rt></ruby>し、<ruby>目<rt>め</rt></ruby>で<ruby>見<rt>み</rt></ruby>ながら<ruby>不安全状態<rt>ふあんぜんじょうたい</rt></ruby>はないか、<ruby>安全<rt>あんぜん</rt></ruby>は<ruby>保<rt>たも</rt></ruby>たれているかを<ruby>確認<rt>かくにん</rt></ruby>する。",
            id: "Tindakan ini bukan sekadar menunjuk saja, namun dengan mengeluarkan suara di saat yang sama, hal tersebut memusatkan konsentrasi, sembari mengkonfirmasi melalui pengamatan mata apakah ada kondisi yang tidak aman, dan apakah keselamatan di sekitar telah benar-benar terjaga.",
            type: "paragraph"
          },
          {
            jp: "<ruby>作業<rt>さぎょう</rt></ruby><ruby>を<rt>を</rt></ruby><ruby>安全<rt>あんぜん</rt></ruby>に<ruby>誤<rt>あやま</rt></ruby>りなく<ruby>進<rt>すす</rt></ruby>めていくために、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>すべき<ruby>箇所<rt>かしょ</rt></ruby>を<ruby>指差<rt>ゆびさ</rt></ruby>しながら、「ヨーシ」と<ruby>声<rt>こえ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>して<ruby>確認<rt>かくにん</rt></ruby>することが<ruby>重要<rt>じゅうよう</rt></ruby>である。",
            id: "Agar pekerjaan dapat berjalan dengan aman dan tanpa kesalahan sama sekali, sangatlah penting untuk menunjuk pada area/bagian yang harus diperiksa oleh diri sendiri sambil menyerukan 'Yoshi!' (Oke!) untuk memastikannya.",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "「ヒヤリ・ハット・レポート」は、<ruby>事故<rt>じこ</rt></ruby>の<ruby>未然防止<rt>みぜんぼうし</rt></ruby>には<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>たない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Laporan ini justru sangat penting dan berguna untuk mencegah kecelakaan sebelum terjadi (未然防止に役にたつ)."
          },
          {
            question: "エラーは<ruby>恥<rt>は</rt></ruby>ずかしいものという<ruby>感覚<rt>かんかく</rt></ruby>だとか、<ruby>処罰<rt>しょばつ</rt></ruby>される<ruby>恐<rt>おそ</rt></ruby>れがあるため、<ruby>実際<rt>じっさい</rt></ruby>にはヒヤリ・ハットはなかなか<ruby>報告<rt>ほうこく</rt></ruby>されないことが<ruby>多<rt>おお</rt></ruby>い。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Sesuai dengan materi, karena ada rasa takut dihukum atau malu, pelaporan kesalahan sering kali tidak dilakukan oleh staf."
          },
          {
            question: "ヒヤリ・ハットを<ruby>報告<rt>ほうこく</rt></ruby>しやすくするためには、エラーをかくす<ruby>必要<rt>ひつよう</rt></ruby>がないオープンで<ruby>明<rt>あか</rt></ruby>るい<ruby>職場<rt>しょくば</rt></ruby>の<ruby>雰囲気<rt>ふんいき</rt></ruby>などが<ruby>重要<rt>じゅうよう</rt></ruby>となる。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Suasana tempat kerja yang terbuka sangat penting untuk mendorong para pekerja agar mau melaporkan kejadian Hiyari-Hatto."
          },
          {
            question: "<ruby>指差呼称<rt>しさこしょう</rt></ruby>は、ただ<ruby>指<rt>ゆび</rt></ruby>を<ruby>差<rt>さ</rt></ruby>すだけでよく、<ruby>声<rt>こえ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>す<ruby>必要<rt>ひつよう</rt></ruby>はない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Harus menunjuk sekaligus mengeluarkan suara (同時に声を出すことで意識を集中し) untuk benar-benar memusatkan konsentrasi."
          },
          {
            question: "<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>誤<rt>あやま</rt></ruby>りなく<ruby>進<rt>すす</rt></ruby>めていくために、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>すべき<ruby>箇所<rt>かしょ</rt></ruby>を<ruby>指差<rt>ゆびさ</rt></ruby>しながら、「ヨーシ」と<ruby>声<rt>こえ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>して<ruby>確認<rt>かくにん</rt></ruby>することが<ruby>重要<rt>じゅうよう</rt></ruby>である。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Ini adalah prinsip dasar dari 指差呼称 (Pointing and Calling) untuk memastikan keselamatan di area kerja penerbangan."
          }
        ]
      },
      {
        pageNumber: 14,
        title: "標示の定義 (Tabel Definisi Marka Jalan)",
        content: [
          {
            jp: "13. <ruby>車両通路<rt>しゃりょうつうろ</rt></ruby>の<ruby>指示標示<rt>しじひょうじ</rt></ruby><ruby>等<rt>とう</rt></ruby>の<ruby>定義<rt>ていぎ</rt></ruby>",
            id: "13. Definisi Marka dan Petunjuk Jalan Kendaraan",
            type: "title"
          },
          {
            jp: `
              <div class="overflow-x-auto w-full scrollbar-thin">
                <table class="w-full min-w-[640px] table-fixed divide-y divide-slate-200 dark:divide-slate-800 text-left text-xs sm:text-sm">
                  <thead class="bg-slate-50 dark:bg-slate-900/50">
                    <tr>
                      <th scope="col" class="w-[180px] px-3 py-3 sm:px-4 font-bold text-slate-900 dark:text-white border-r border-slate-200 dark:border-slate-800">
                        <div class="flex flex-col items-center text-center">
                          <ruby>種類<rt>しゅるい</rt></ruby>
                          <span class="mt-1 text-[10px] sm:text-xs font-normal text-slate-550 dark:text-slate-400">
                            Jenis
                          </span>
                        </div>
                      </th>

                      <th scope="col" class="px-3 py-3 sm:px-4 font-bold text-slate-900 dark:text-white border-r border-slate-200 dark:border-slate-800">
                        <div class="flex flex-col items-center text-center">
                          <ruby>定義<rt>ていぎ</rt></ruby>
                          <span class="mt-1 text-[10px] sm:text-xs font-normal text-slate-550 dark:text-slate-400">
                            Definisi
                          </span>
                        </div>
                      </th>

                      <th scope="col" class="w-[110px] px-3 py-3 sm:px-4 font-bold text-slate-900 dark:text-white">
                        <div class="flex flex-col items-center text-center">
                          <ruby>記号<rt>きごう</rt></ruby>
                          <span class="mt-1 text-[10px] sm:text-xs font-normal text-slate-550 dark:text-slate-400">
                            Kigou
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-950/25">

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-3 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>停止線標示<rt>ていしせんひょうじ</rt></ruby>
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Markah Garis Henti
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>車両<rt>しゃりょう</rt></ruby>が<ruby>停止<rt>ていし</rt></ruby>する場合の位置であることを<ruby>示<rt>しめ</rt></ruby>す。
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400">
                          Menunjukkan posisi di mana kendaraan harus berhenti.
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4">
                        <div class="flex items-center justify-center">
                          <div class="w-20 h-14 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-[9px] text-slate-400 dark:text-slate-550 font-sans tracking-wider select-none">
                            <svg class="w-4 h-4 mb-1 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>SOON</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-3 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>進行方向標示<rt>しんこうほうこうひょうじ</rt></ruby>
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Markah Arah Gerak
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>車両<rt>しゃりょう</rt></ruby>が<ruby>通行<rt>つうこう</rt></ruby>することができる<ruby>方向<rt>ほうこう</rt></ruby>であることを<ruby>示<rt>しめ</rt></ruby>す。
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400">
                          Menunjukkan arah gerak/lalu lintas yang boleh dilewati kendaraan.
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4">
                        <div class="flex items-center justify-center">
                          <div class="w-20 h-14 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-[9px] text-slate-400 dark:text-slate-550 font-sans tracking-wider select-none">
                            <svg class="w-4 h-4 mb-1 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>SOON</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-3 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>横断歩道<rt>おうだんほどう</rt></ruby>あり<ruby>標示<rt>ひょうじ</rt></ruby>
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Markah Penyeberangan Jalan
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>前方<rt>ぜんぽう</rt></ruby>に<ruby>横断歩道<rt>おうだんほどう</rt></ruby>があることを<ruby>示<rt>しめ</rt></ruby>す。
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400">
                          Menunjukkan bahwa di depan terdapat area penyeberangan pejalan kaki (zebra cross).
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4">
                        <div class="flex items-center justify-center">
                          <div class="w-20 h-14 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-[9px] text-slate-400 dark:text-slate-550 font-sans tracking-wider select-none">
                            <svg class="w-4 h-4 mb-1 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>SOON</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-3 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>前方優先標示<rt>ぜんぽうゆうせんひょうじ</rt></ruby>
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Markah Prioritas Depan
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>当該通路<rt>とうがいつうろ</rt></ruby>と<ruby>交差<rt>こうさ</rt></ruby>する<ruby>前方<rt>ぜんぽう</rt></ruby>に<ruby>航空機<rt>こうくうき</rt></ruby>のための<ruby>誘導路<rt>ゆうどうろ</rt></ruby><ruby>及<rt>およ</rt></ruby>びエプロン<ruby>誘導路<rt>ゆうどうろ</rt></ruby>があることを<ruby>示<rt>しめ</rt></ruby>す。
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400">
                          Menunjukkan bahwa di depan persimpangan terdapat taxiway pesawat dan taxiway apron.
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4">
                        <div class="flex items-center justify-center">
                          <div class="w-20 h-14 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-[9px] text-slate-400 dark:text-slate-550 font-sans tracking-wider select-none">
                            <svg class="w-4 h-4 mb-1 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>SOON</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-3 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        サービスレーン<ruby>標示<rt>ひょうじ</rt></ruby>
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Markah Jalur Layanan (Service Lane)
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>誘導路<rt>ゆうどうろ</rt></ruby>（エプロン<ruby>誘導路<rt>ゆうどうろ</rt></ruby>）を<ruby>横断<rt>おうだん</rt></ruby>する<ruby>車両通路<rt>しゃりょうつうろ</rt></ruby>であることを<ruby>示<rt>しめ</rt></ruby>す。
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400">
                          Menunjukkan jalur lintas kendaraan yang menyeberangi taxiway (taxiway apron).
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4">
                        <div class="flex items-center justify-center">
                          <div class="w-20 h-14 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-[9px] text-slate-400 dark:text-slate-550 font-sans tracking-wider select-none">
                            <svg class="w-4 h-4 mb-1 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>SOON</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-3 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>誘導路横断待機区域標示<rt>ゆうどうろおうだんたいきくいきひょうじ</rt></ruby>
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Markah Area Tunggu
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>車両<rt>しゃりょう</rt></ruby>が<ruby>誘導路<rt>ゆうどうろ</rt></ruby>を<ruby>横断<rt>おうだん</rt></ruby>する場合の<ruby>待機位置<rt>たいきいち</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>す。
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400">
                          Menunjukkan posisi siaga/menunggu saat kendaraan hendak menyeberangi taxiway.
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4">
                        <div class="flex items-center justify-center">
                          <div class="w-20 h-14 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-[9px] text-slate-400 dark:text-slate-550 font-sans tracking-wider select-none">
                            <svg class="w-4 h-4 mb-1 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>SOON</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            `
          }
        ],
        quizzes: [
          {
            question: "Perhatikan gambar marka berikut ini:<br><div class=\"w-full max-w-[160px] h-24 my-3 mx-auto bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 font-sans tracking-wider select-none\"><svg class=\"w-6 h-6 mb-1.5 text-slate-300 dark:text-slate-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\" /></svg><span class=\"text-[10px] font-bold\">SOON</span></div><br>Gambar di atas menunjukkan posisi di mana kendaraan harus berhenti. Marka jenis apakah ini?",
            options: [
              { text: "A. 停止線標示 (Markah Garis Henti)", isCorrect: true },
              { text: "B. 前方優先標示 (Markah Prioritas Depan)", isCorrect: false },
              { text: "C. 横断歩道あり標示 (Markah Penyeberangan Jalan)", isCorrect: false }
            ],
            explanation: "Gambar tersebut adalah 停止線標示 (Markah Garis Henti) yang berfungsi menunjukkan batas berhenti kendaraan."
          },
          {
            question: "Perhatikan gambar marka berikut ini:<br><div class=\"w-full max-w-[160px] h-24 my-3 mx-auto bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 font-sans tracking-wider select-none\"><svg class=\"w-6 h-6 mb-1.5 text-slate-300 dark:text-slate-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\" /></svg><span class=\"text-[10px] font-bold\">SOON</span></div><br>Gambar di atas menunjukkan arah lalu lintas yang boleh dilewati kendaraan. Marka jenis apakah ini?",
            options: [
              { text: "A. 誘導路横断待機区域標示 (Markah Area Tunggu)", isCorrect: false },
              { text: "B. サービスレーン標示 (Markah Jalur Layanan)", isCorrect: false },
              { text: "C. 進行方向標示 (Markah Arah Gerak)", isCorrect: true }
            ],
            explanation: "Gambar tersebut menunjukkan 進行方向標示 (Markah Arah Gerak)."
          },
          {
            question: "Perhatikan gambar marka berikut ini:<br><div class=\"w-full max-w-[160px] h-24 my-3 mx-auto bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 font-sans tracking-wider select-none\"><svg class=\"w-6 h-6 mb-1.5 text-slate-300 dark:text-slate-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\" /></svg><span class=\"text-[10px] font-bold\">SOON</span></div><br>Gambar di atas menandakan adanya zebra cross di depan. Marka jenis apakah ini?",
            options: [
              { text: "A. 横断歩道あり標示 (Markah Penyeberangan)", isCorrect: true },
              { text: "B. 停止線標示 (Markah Garis Henti)", isCorrect: false },
              { text: "C. 前方優先標示 (Markah Prioritas Depan)", isCorrect: false }
            ],
            explanation: "Gambar tersebut adalah 横断歩道あり標示, yakni marka peringatan bahwa di depan ada penyeberangan pejalan kaki."
          },
          {
            question: "Perhatikan gambar marka berikut ini:<br><div class=\"w-full max-w-[160px] h-24 my-3 mx-auto bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 font-sans tracking-wider select-none\"><svg class=\"w-6 h-6 mb-1.5 text-slate-300 dark:text-slate-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\" /></svg><span class=\"text-[10px] font-bold\">SOON</span></div><br>Gambar di atas mengindikasikan adanya jalur lintas kendaraan yang menyeberangi taxiway pesawat. Marka jenis apakah ini?",
            options: [
              { text: "A. 前方優先標示 (Markah Prioritas Depan)", isCorrect: false },
              { text: "B. サービスレーン標示 (Markah Jalur Layanan)", isCorrect: true },
              { text: "C. 誘導路横断待機区域標示 (Markah Area Tunggu)", isCorrect: false }
            ],
            explanation: "Gambar tersebut adalah サービスレーン標示 (Service Lane), yang mana merupakan jalur kendaraan di atas apron/taxiway."
          },
          {
            question: "Perhatikan gambar marka berikut ini:<br><div class=\"w-full max-w-[160px] h-24 my-3 mx-auto bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 font-sans tracking-wider select-none\"><svg class=\"w-6 h-6 mb-1.5 text-slate-300 dark:text-slate-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\" /></svg><span class=\"text-[10px] font-bold\">SOON</span></div><br>Gambar di atas menunjukkan posisi siaga bagi kendaraan sebelum menyeberangi taxiway. Marka jenis apakah ini?",
            options: [
              { text: "A. 進行方向標示 (Markah Arah Gerak)", isCorrect: false },
              { text: "B. 前方優先標示 (Markah Prioritas Depan)", isCorrect: false },
              { text: "C. 誘導路横断待機区域標示 (Markah Area Tunggu)", isCorrect: true }
            ],
            explanation: "Gambar tersebut adalah 誘導路横断待機区域標示, yakni area tunggu wajib bagi kendaraan darat sebelum diizinkan melintasi jalur pesawat."
          }
        ]
      },
      {
        pageNumber: 15,
        title: "エプロン内安全のための定義 (Definisi Keselamatan di Area Apron)",
        content: [
          {
            jp: "<ruby>エプロン<rt>えぷろん</rt></ruby><ruby>内安全<rt>ないあんぜん</rt></ruby>のための<ruby>定義<rt>ていぎ</rt></ruby>",
            id: "Definisi untuk Keselamatan di Area Apron",
            type: "title"
          },
          {
            jp: `
              <div class="overflow-x-auto w-full scrollbar-thin">
                <table class="w-full min-w-[640px] table-fixed divide-y divide-slate-200 dark:divide-slate-800 text-left text-xs sm:text-sm">
                  <thead class="bg-slate-50 dark:bg-slate-900/50">
                    <tr>
                      <th scope="col" class="w-[180px] px-3 py-3 sm:px-4 font-bold text-slate-900 dark:text-white border-r border-slate-200 dark:border-slate-800">
                        <div class="flex flex-col items-center text-center">
                          <ruby>種類<rt>しゅるい</rt></ruby>
                          <span class="mt-1 text-[10px] sm:text-xs font-normal text-slate-550 dark:text-slate-400">
                            Jenis
                          </span>
                        </div>
                      </th>

                      <th scope="col" class="px-3 py-3 sm:px-4 font-bold text-slate-900 dark:text-white border-r border-slate-200 dark:border-slate-800">
                        <div class="flex flex-col items-center text-center">
                          <ruby>定義<rt>ていぎ</rt></ruby>
                          <span class="mt-1 text-[10px] sm:text-xs font-normal text-slate-550 dark:text-slate-400">
                            Definisi
                          </span>
                        </div>
                      </th>

                      <th scope="col" class="w-[110px] px-3 py-3 sm:px-4 font-bold text-slate-900 dark:text-white">
                        <div class="flex flex-col items-center text-center">
                          <ruby>記号<rt>きごう</rt></ruby>
                          <span class="mt-1 text-[10px] sm:text-xs font-normal text-slate-550 dark:text-slate-400">
                            Simbol
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-950/25">

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-3 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>機材制限区域<rt>きざいせいげんくいき</rt></ruby>
                        (Equipment Restraint Area ERA)
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Area Pembatasan Peralatan (ERA)
                        </div>
                      </td>
                      <td class="px-3 py-3 sm:px-4 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>スポット<rt>すぽっと</rt></ruby>に<ruby>航空機<rt>こうくうき</rt></ruby>が<ruby>出入<rt>でい</rt></ruby>りする<ruby>際<rt>さい</rt></ruby>には、いかなる
                        <ruby>車両<rt>しゃりょう</rt></ruby>や<ruby>機材<rt>きざい</rt></ruby>の<ruby>進入<rt>しんにゅう</rt></ruby>も<ruby>禁止<rt>きんし</rt></ruby>する<ruby>区域<rt>くいき</rt></ruby>で、
                        <ruby>機材待機区域<rt>きざいたいきくいき</rt></ruby>の<ruby>内側<rt>うちがわ</rt></ruby>に<ruby>設定<rt>せってい</rt></ruby>される。
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400">
                          Area yang melarang masuknya kendaraan maupun peralatan apa pun ketika pesawat keluar masuk spot, dan ditetapkan di bagian dalam Area Tunggu Peralatan.
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4">
                        <div class="flex items-center justify-center">
                          <img
                            src="https://i.pinimg.com/736x/57/fc/01/57fc0174ebcb6e2a815e6f1751863d1b.jpg"
                            alt="機材制限区域 (ERA)"
                            class="w-full max-w-[180px] h-auto rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm object-contain"
                            loading="lazy"
                            decoding="async"
                          >
                        </div>
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-3 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>機材待機区域<rt>きざいたいきくいき</rt></ruby>
                        (Equipment Staging Area ESA)
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Area Tunggu Peralatan (ESA)
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>当<rt>とう</rt></ruby>スポットのハンドリング<ruby>作業<rt>さぎょう</rt></ruby>に
                        <ruby>従事<rt>じゅうじ</rt></ruby>する<ruby>車両<rt>しゃりょう</rt></ruby>や
                        <ruby>機材<rt>きざい</rt></ruby>の<ruby>待機場所<rt>たいきばしょ</rt></ruby>として
                        <ruby>使用<rt>しよう</rt></ruby>する<ruby>区域<rt>くいき</rt></ruby>で、
                        <ruby>機材制限区域<rt>きざいせいげんくいき</rt></ruby>の
                        <ruby>外側<rt>そとがわ</rt></ruby>に<ruby>設定<rt>せってい</rt></ruby>される。<br><br>

                        この<ruby>区域<rt>くいき</rt></ruby>は、
                        <ruby>機材置場<rt>きざいおきば</rt></ruby>として
                        <ruby>承認<rt>しょうにん</rt></ruby>された
                        <ruby>車両<rt>しゃりょう</rt></ruby>を<ruby>除<rt>のぞ</rt></ruby>き、
                        <ruby>航空機<rt>こうくうき</rt></ruby>のスポット・インの
                        <ruby>30分前<rt>さんじゅっぷんまえ</rt></ruby>から
                        <ruby>使用<rt>しよう</rt></ruby>できるが、
                        <ruby>当該<rt>とうがい</rt></ruby>スポットでの
                        <ruby>作業<rt>さぎょう</rt></ruby>が
                        <ruby>完了<rt>かんりょう</rt></ruby>し<ruby>次第<rt>しだい</rt></ruby>、
                        すみやかに<ruby>退去<rt>たいきょ</rt></ruby>すること。

                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400">
                          Area yang digunakan sebagai tempat menunggu kendaraan dan peralatan yang bertugas melakukan pekerjaan ground handling pada spot tersebut, dan ditetapkan di luar Area Pembatasan Peralatan (ERA). Kecuali kendaraan yang telah disetujui sebagai tempat penyimpanan peralatan, area ini dapat digunakan mulai 30 menit sebelum pesawat memasuki spot. Setelah pekerjaan di spot tersebut selesai, kendaraan dan peralatan harus segera meninggalkan area ini.
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4">
                        <img
                          src="https://i.pinimg.com/736x/7e/c6/8f/7ec68f228e282142bfa8c8f074a26b0d.jpg"
                          alt="機材待機区域 (ESA)"
                          class="w-full h-auto rounded-lg border border-slate-200 dark:border-slate-700 object-contain"
                          loading="lazy"
                          decoding="async"
                        >
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-3 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>高さ制限<rt>たかさせいげん</rt></ruby>のある
                        <ruby>機材待機区域<rt>きざいたいきくいき</rt></ruby>
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Area Tunggu Peralatan dengan Batas Ketinggian
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        （<ruby>高さ制限<rt>たかさせいげん</rt></ruby>のある
                        <ruby>機材待機区域<rt>きざいたいきくいき</rt></ruby>）

                        <ruby>当<rt>とう</rt></ruby>スポットのハンドリング
                        <ruby>作業<rt>さぎょう</rt></ruby>に
                        <ruby>従事<rt>じゅうじ</rt></ruby>する
                        <ruby>高<rt>たか</rt></ruby>さが
                        25m<ruby>以下<rt>いか</rt></ruby>の
                        <ruby>車両<rt>しゃりょう</rt></ruby>や
                        <ruby>機材<rt>きざい</rt></ruby>の
                        <ruby>待機場所<rt>たいきばしょ</rt></ruby>として
                        <ruby>使用<rt>しよう</rt></ruby>できる
                        <ruby>区域<rt>くいき</rt></ruby>で、
                        <ruby>待機区域<rt>たいきくいき</rt></ruby>の
                        <ruby>外側<rt>そとがわ</rt></ruby>に
                        <ruby>設定<rt>せってい</rt></ruby>される。

                        <br><br>

                        この<ruby>区域<rt>くいき</rt></ruby>は、
                        <ruby>航空機<rt>こうくうき</rt></ruby>のスポット・インの
                        <ruby>30分前<rt>さんじゅっぷんまえ</rt></ruby>から
                        <ruby>使用<rt>しよう</rt></ruby>できるが、
                        <ruby>当<rt>とう</rt></ruby>スポットでの
                        <ruby>作業<rt>さぎょう</rt></ruby>が
                        <ruby>完了<rt>かんりょう</rt></ruby>し
                        <ruby>次第<rt>しだい</rt></ruby>、
                        すみやかに
                        <ruby>退去<rt>たいきょ</rt></ruby>すること。

                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400">
                          Area yang dapat digunakan sebagai tempat menunggu kendaraan dan peralatan dengan tinggi 25 meter atau kurang yang bertugas melakukan pekerjaan ground handling pada spot tersebut. Area ini ditetapkan di luar area tunggu peralatan. Area ini dapat digunakan mulai 30 menit sebelum pesawat memasuki spot, namun setelah pekerjaan di spot selesai, kendaraan dan peralatan harus segera meninggalkan area tersebut.
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4">
                        <img
                          src="https://i.pinimg.com/736x/9f/c0/b9/9fc0b9fc50c239f6651ac5d22e0e6ddd.jpg"
                          alt="高さ制限のある機材待機区域"
                          class="w-full h-auto rounded-lg border border-slate-200 dark:border-slate-700 object-contain"
                          loading="lazy"
                          decoding="async"
                        >
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-3 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>PBB稼働区域<rt>ぴーびーびーかどうくいき</rt></ruby>マーキング
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Marka Area Operasi PBB
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>車両<rt>しゃりょう</rt></ruby>や
                        <ruby>機材<rt>きざい</rt></ruby>の
                        <ruby>駐車<rt>ちゅうしゃ</rt></ruby>を
                        <ruby>全面的<rt>ぜんめんてき</rt></ruby>に
                        <ruby>禁止<rt>きんし</rt></ruby>する
                        <ruby>区域<rt>くいき</rt></ruby>で、
                        PBBの
                        <ruby>作動範囲<rt>さどうはんい</rt></ruby>及び
                        スポット<ruby>内<rt>ない</rt></ruby>に
                        <ruby>設定<rt>せってい</rt></ruby>される。

                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400">
                          Area yang sepenuhnya melarang parkir kendaraan maupun peralatan. Area ini ditetapkan pada jangkauan pergerakan Passenger Boarding Bridge (PBB) serta di dalam area spot pesawat.
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4">
                        <img
                          src="https://i.pinimg.com/736x/ee/10/66/ee1066ffe3bf5c9c308ec8af0f9e7169.jpg"
                          alt="PBB稼働区域マーキング"
                          class="w-full h-auto rounded-lg border border-slate-200 dark:border-slate-700 object-contain"
                          loading="lazy"
                          decoding="async"
                        >
                      </td>
                    </tr>

                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                      <td class="px-3 py-3 sm:px-4 font-semibold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        <ruby>PBB待機位置<rt>ぴーびーびーたいきいち</rt></ruby>
                        <br>
                        PBB Stand-by Position
                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-normal">
                          Posisi Tunggu PBB
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4 text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 break-words leading-relaxed">
                        PBBの
                        <ruby>待機位置<rt>たいきいち</rt></ruby>を
                        <ruby>示<rt>しめ</rt></ruby>すために
                        <ruby>設定<rt>せってい</rt></ruby>される。

                        <div class="mt-1.5 text-[11px] text-sky-600 dark:text-sky-400">
                          Ditetapkan untuk menunjukkan posisi tunggu (stand-by position) Passenger Boarding Bridge (PBB).
                        </div>
                      </td>

                      <td class="px-3 py-3 sm:px-4">
                        <img
                          src="https://i.pinimg.com/736x/9a/de/a6/9adea6a374fd714234b0df0067664607.jpg"
                          alt="PBB待機位置"
                          class="w-full h-auto rounded-lg border border-slate-200 dark:border-slate-700 object-contain"
                          loading="lazy"
                          decoding="async"
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            `
          }
        ],
        quizzes: [
          {
            question: "Perhatikan gambar berikut ini:<br><img src=\"https://i.pinimg.com/736x/57/fc/01/57fc0174ebcb6e2a815e6f1751863d1b.jpg\" class=\"w-full max-w-[200px] h-auto my-3 rounded-lg border border-slate-300 dark:border-slate-600 shadow-sm mx-auto\"><br>Apakah gambar tersebut sesuai dengan jenis <strong>機材待機区域 (ESA)</strong>?",
            options: [
              { text: "A. Sesuai, itu adalah Area Tunggu Peralatan (ESA).", isCorrect: false },
              { text: "B. Tidak sesuai, gambar tersebut adalah 機材制限区域 (ERA).", isCorrect: true },
              { text: "C. Tidak sesuai, gambar tersebut adalah PBB待機位置.", isCorrect: false }
            ],
            explanation: "Gambar tersebut menunjukkan garis merah yang membatasi pesawat, yang merupakan marka untuk 機材制限区域 (Equipment Restraint Area / ERA), bukan ESA."
          },
          {
            question: "Perhatikan gambar berikut ini:<br><img src=\"https://i.pinimg.com/736x/7e/c6/8f/7ec68f228e282142bfa8c8f074a26b0d.jpg\" class=\"w-full max-w-[200px] h-auto my-3 rounded-lg border border-slate-300 dark:border-slate-600 shadow-sm mx-auto\"><br>Apakah gambar ini merupakan <strong>機材待機区域 (ESA)</strong>?",
            options: [
              { text: "A. Sesuai, gambar tersebut merupakan Area Tunggu Peralatan (ESA).", isCorrect: true },
              { text: "B. Tidak sesuai, itu adalah 高さ制限のある機材待機区域 (ESA Batas Tinggi).", isCorrect: false },
              { text: "C. Tidak sesuai, itu adalah marka untuk Service Lane.", isCorrect: false }
            ],
            explanation: "Tepat sekali. Gambar tersebut menunjukkan marka 機材待機区域 (Equipment Staging Area / ESA) standar tanpa ada keterangan batas ketinggian."
          },
          {
            question: "Perhatikan gambar marka berikut ini:<br><img src=\"https://i.pinimg.com/736x/9f/c0/b9/9fc0b9fc50c239f6651ac5d22e0e6ddd.jpg\" class=\"w-full max-w-[200px] h-auto my-3 rounded-lg border border-slate-300 dark:border-slate-600 shadow-sm mx-auto\"><br>Apakah gambar ini sesuai dengan jenis <strong>高さ制限のある機材待機区域</strong>?",
            options: [
              { text: "A. Tidak sesuai, itu adalah 機材制限区域 (ERA).", isCorrect: false },
              { text: "B. Sesuai, itu adalah Area Tunggu Peralatan dengan batas ketinggian.", isCorrect: true },
              { text: "C. Tidak sesuai, itu adalah PBB稼働区域マーキング.", isCorrect: false }
            ],
            explanation: "Benar. Gambar tersebut memiliki marka khusus berupa tulisan yang membatasi ketinggian kendaraan, yaitu 高さ制限のある機材待機区域."
          },
          {
            question: "Perhatikan gambar berikut:<br><img src=\"https://i.pinimg.com/736x/ee/10/66/ee1066ffe3bf5c9c308ec8af0f9e7169.jpg\" class=\"w-full max-w-[200px] h-auto my-3 rounded-lg border border-slate-300 dark:border-slate-600 shadow-sm mx-auto\"><br>Apakah gambar ini adalah marka <strong>PBB待機位置 (Posisi Tunggu PBB)</strong>?",
            options: [
              { text: "A. Sesuai, itu adalah posisi tunggu PBB.", isCorrect: false },
              { text: "B. Tidak sesuai, gambar tersebut adalah 機材待機区域 (ESA).", isCorrect: false },
              { text: "C. Tidak sesuai, gambar tersebut adalah PBB稼働区域マーキング (Area Operasi PBB).", isCorrect: true }
            ],
            explanation: "Gambar tersebut menunjukkan area bergaris miring (zebra-like) yang merupakan PBB稼働区域マーキング, di mana parkir kendaraan dilarang sepenuhnya, bukan sekadar posisi tunggu."
          },
          {
            question: "Perhatikan gambar ini:<br><img src=\"https://i.pinimg.com/736x/9a/de/a6/9adea6a374fd714234b0df0067664607.jpg\" class=\"w-full max-w-[200px] h-auto my-3 rounded-lg border border-slate-300 dark:border-slate-600 shadow-sm mx-auto\"><br>Apakah gambar ini sesuai dengan jenis <strong>PBB待機位置</strong>?",
            options: [
              { text: "A. Sesuai, gambar tersebut menunjukkan PBB Stand-by Position.", isCorrect: true },
              { text: "B. Tidak sesuai, itu adalah marka batas kecepatan kendaraan.", isCorrect: false },
              { text: "C. Tidak sesuai, itu adalah PBB稼働区域マーキング.", isCorrect: false }
            ],
            explanation: "Tepat. Marka lingkaran/lingkaran ganda tersebut digunakan untuk memandu roda PBB kembali tepat ke posisi tunggunya (PBB待機位置)."
          }
        ]
      },
      {
        pageNumber: 16,
        title: "危険物の航空輸送 (Pengangkutan Barang Berbahaya via Udara)",
        content: [
          {
            jp: "Reference-2 <ruby>危険物<rt>きけんぶつ</rt></ruby>を<ruby>航空<rt>こうくう</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>するために",
            id: "Referensi 2: Untuk Mengangkut Barang Berbahaya Melalui Udara",
            type: "title"
          },
          {
            jp: "（<ruby>国土交通省<rt>こくどこうつうしょう</rt></ruby><ruby>航空局<rt>こうくうきょく</rt></ruby>／<ruby>一般社団法人<rt>いっぱんしゃだんほうじん</rt></ruby><ruby>航空貨物運送協会<rt>こうくうかもつうんそうきょうかい</rt></ruby><ruby>作成<rt>さくせい</rt></ruby>パンフレット<ruby>抜粋<rt>ばっすい</rt></ruby>）",
            id: "(Kutipan dari pamflet yang dibuat oleh Biro Penerbangan Kementerian Pertanahan, Infrastruktur, Transportasi dan Pariwisata / Asosiasi Transportasi Kargo Udara Jepang)",
            type: "subtitle"
          },
          {
            jp: "1. <ruby>危険物<rt>きけんぶつ</rt></ruby>の<ruby>航空<rt>こうくう</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>はルール<ruby>厳守<rt>げんしゅ</rt></ruby>!",
            id: "1. Pengangkutan Barang Berbahaya Melalui Udara Harus Mematuhi Aturan Secara Ketat!",
            type: "subtitle"
          },
          {
            jp: "<ruby>航空法<rt>こうくうほう</rt></ruby>では、<ruby>爆発<rt>ばくはつ</rt></ruby>の<ruby>恐<rt>おそ</rt></ruby>れのあるもの、<ruby>燃<rt>も</rt></ruby>えやすいもの、<ruby>他<rt>ほか</rt></ruby>の<ruby>物件<rt>ぶっけん</rt></ruby>を<ruby>損傷<rt>そんしょう</rt></ruby>するものなどを「<ruby>危険物<rt>きけんぶつ</rt></ruby>」と<ruby>位置付<rt>いちづ</rt></ruby>け、これらを<ruby>輸送<rt>ゆそう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>には<ruby>同法<rt>どうほう</rt></ruby>で<ruby>定<rt>さだ</rt></ruby>める<ruby>安全<rt>あんぜん</rt></ruby><ruby>運航<rt>うんこう</rt></ruby>のルールに<ruby>従<rt>したが</rt></ruby>わなければならない。",
            id: "Dalam Undang-Undang Penerbangan, benda yang berisiko meledak, mudah terbakar, atau dapat merusak benda lain diklasifikasikan sebagai \"Barang Berbahaya\". Ketika mengangkutnya, Anda wajib mematuhi aturan pengoperasian yang aman yang ditetapkan oleh undang-undang tersebut.",
            type: "paragraph"
          },
          {
            jp: "ルールに<ruby>従<rt>したが</rt></ruby>わず<ruby>輸送<rt>ゆそう</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>は、50<ruby>万円<rt>まんえん</rt></ruby><ruby>以下<rt>いか</rt></ruby>の<ruby>罰金<rt>ばっきん</rt></ruby>の<ruby>対象<rt>たいしょう</rt></ruby>となる。",
            id: "Apabila mengangkut tanpa mematuhi aturan, maka akan dikenakan denda sebesar 500.000 Yen atau kurang.",
            type: "paragraph"
          },
          {
            jp: "ルールに<ruby>従<rt>したが</rt></ruby>わずに<ruby>輸送<rt>ゆそう</rt></ruby>した<ruby>危険物<rt>きけんぶつ</rt></ruby>の<ruby>例<rt>れい</rt></ruby>",
            id: "Contoh barang berbahaya yang diangkut tanpa mematuhi aturan:",
            type: "subtitle"
          },
          {
            jp: "① モバイルバッテリー",
            id: "1. Power bank (Baterai seluler)",
            type: "paragraph"
          },
          {
            jp: "② スプレー<ruby>缶<rt>かん</rt></ruby>（ヘア<ruby>用<rt>よう</rt></ruby>、<ruby>虫<rt>むし</rt></ruby>よけ、<ruby>防錆材<rt>ぼうせいざい</rt></ruby>、<ruby>消炎鎮痛剤<rt>しょうえんちんつうざい</rt></ruby>など）",
            id: "2. Kaleng semprot/aerosol (untuk rambut, pengusir serangga, bahan anti karat, pereda nyeri/anti-inflamasi, dll.)",
            type: "paragraph"
          },
          {
            jp: "③ ホバーボード（リチウムイオンバッテリーが<ruby>入<rt>はい</rt></ruby>っている<ruby>乗<rt>の</rt></ruby>り<ruby>物<rt>もの</rt></ruby>）",
            id: "3. Hoverboard (kendaraan yang menggunakan baterai lithium-ion)",
            type: "paragraph"
          },
          {
            jp: "④ <ruby>化粧品類<rt>けしょうひんるい</rt></ruby>（<ruby>化粧水<rt>けしょうすい</rt></ruby>、<ruby>日焼<rt>ひや</rt></ruby>け<ruby>止<rt>ど</rt></ruby>め、マニキュア）",
            id: "4. Produk kosmetik (lotion kosmetik, tabir surya, cat kuku)",
            type: "paragraph"
          },
          {
            jp: "2. <ruby>危険物<rt>きけんぶつ</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>のルールを<ruby>正<rt>ただ</rt></ruby>しく<ruby>理解<rt>りかい</rt></ruby>する",
            id: "2. Memahami Aturan Pengangkutan Barang Berbahaya dengan Benar",
            type: "subtitle"
          },
          {
            jp: "<ruby>危険物<rt>きけんぶつ</rt></ruby>を<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>輸送<rt>ゆそう</rt></ruby>するためには、<ruby>荷送人<rt>におくりにん</rt></ruby>・<ruby>運送<rt>うんそう</rt></ruby><ruby>事業者<rt>じぎょうしゃ</rt></ruby>がそれぞれルールを<ruby>正<rt>ただ</rt></ruby>しく<ruby>理解<rt>りかい</rt></ruby>し<ruby>行動<rt>こうどう</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。",
            id: "Agar dapat mengangkut barang berbahaya dengan aman, sangat penting bagi pengirim kargo dan operator transportasi untuk sama-sama memahami aturan dengan benar dan bertindak sesuai dengan aturan tersebut.",
            type: "paragraph"
          },
          {
            jp: "<ruby>関係<rt>かんけい</rt></ruby>する<ruby>全<rt>すべ</rt></ruby>ての<ruby>者<rt>もの</rt></ruby>が<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>教育<rt>きょういく</rt></ruby><ruby>訓練<rt>くんれん</rt></ruby>を<ruby>受<rt>う</rt></ruby>け、<ruby>正<rt>ただ</rt></ruby>しい<ruby>知識<rt>ちしき</rt></ruby>を<ruby>身<rt>み</rt></ruby>につけることが<ruby>重要<rt>じゅうよう</rt></ruby>である。",
            id: "Sangatlah penting bagi semua pihak yang terlibat untuk menerima pendidikan dan pelatihan yang tepat, serta membekali diri dengan pengetahuan yang benar.",
            type: "paragraph"
          },
          {
            jp: "<ruby>輸送<rt>ゆそう</rt></ruby>ルールの3つのポイント",
            id: "3 Poin Aturan Pengangkutan",
            type: "subtitle"
          },
          {
            jp: "① <ruby>危険物<rt>きけんぶつ</rt></ruby><ruby>申告書<rt>しんこくしょ</rt></ruby>の<ruby>作成<rt>さくせい</rt></ruby>",
            id: "1. Pembuatan Dokumen Deklarasi Barang Berbahaya (Shipper's Declaration for Dangerous Goods)",
            type: "paragraph"
          },
          {
            jp: "② ラベルの<ruby>貼付<rt>ちょうふ</rt></ruby>",
            id: "2. Penempelan Label",
            type: "paragraph"
          },
          {
            jp: "③ <ruby>梱包<rt>こんぽう</rt></ruby>",
            id: "3. Pengemasan (Packing)",
            type: "paragraph"
          },
          {
            jp: "<ruby>荷送人<rt>におくりにん</rt></ruby>と<ruby>運送<rt>うんそう</rt></ruby><ruby>事業者<rt>じぎょうしゃ</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>",
            id: "Peran Pengirim Kargo dan Operator Transportasi",
            type: "subtitle"
          },
          {
            jp: "（a）<ruby>荷送人<rt>におくりにん</rt></ruby>：<ruby>輸送品<rt>ゆそうひん</rt></ruby>が<ruby>危険物<rt>きけんぶつ</rt></ruby>に<ruby>該当<rt>がいとう</rt></ruby>するか<ruby>判別<rt>はんべつ</rt></ruby>し、<ruby>申告書<rt>しんこくしょ</rt></ruby><ruby>作成<rt>さくせい</rt></ruby>・ラベル<ruby>貼付<rt>ちょうふ</rt></ruby>・<ruby>梱包<rt>こんぽう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。",
            id: "(a) Pengirim Kargo: Menentukan apakah barang yang akan dikirim termasuk dalam kategori barang berbahaya, kemudian membuat dokumen deklarasi, menempelkan label, dan melakukan pengemasan.",
            type: "paragraph"
          },
          {
            jp: "（b）<ruby>運送<rt>うんそう</rt></ruby><ruby>事業者<rt>じぎょうしゃ</rt></ruby>：<ruby>運送状<rt>うんそうじょう</rt></ruby>で<ruby>品名<rt>ひんめい</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>し、<ruby>適切<rt>てきせつ</rt></ruby>なラベル・<ruby>梱包<rt>こんぽう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>。<ruby>不備<rt>ふび</rt></ruby>があれば<ruby>荷送人<rt>におくりにん</rt></ruby>へ<ruby>確認<rt>かくにん</rt></ruby>する。",
            id: "(b) Operator Transportasi: Memeriksa nama barang pada surat muatan udara (air waybill), serta memeriksa kelayakan label dan pengemasannya. Jika terdapat kekurangan atau ketidaksesuaian, wajib memastikannya kembali kepada pengirim kargo.",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "<ruby>危険物<rt>きけんぶつ</rt></ruby>の<ruby>航空<rt>こうくう</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>はルールを<ruby>守<rt>まも</rt></ruby>らなくても<ruby>問題<rt>もんだい</rt></ruby>ない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Pengangkutan barang berbahaya melalui udara harus mematuhi aturan secara ketat (ルール厳守). Jika melanggar akan dikenakan denda hingga 500.000 Yen."
          },
          {
            question: "モバイルバッテリーは<ruby>危険物<rt>きけんぶつ</rt></ruby>の<ruby>例<rt>れい</rt></ruby>として<ruby>制限<rt>せいげん</rt></ruby><ruby>対象<rt>たいしょう</rt></ruby>になる<ruby>場合<rt>ばあい</rt></ruby>がある。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Sesuai dengan modul, power bank (モバイルバッテリー) adalah salah satu contoh barang berbahaya yang pengangkutannya memiliki aturan dan pembatasan khusus."
          },
          {
            question: "<ruby>危険物<rt>きけんぶつ</rt></ruby><ruby>申告書<rt>しんこくしょ</rt></ruby>は<ruby>作成<rt>さくせい</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Salah satu dari 3 poin penting aturan transportasi barang berbahaya adalah pembuatan dokumen deklarasi barang berbahaya (危険物申告書の作成)."
          },
          {
            question: "<ruby>輸送<rt>ゆそう</rt></ruby>ルールにはラベル<ruby>貼付<rt>ちょうふ</rt></ruby>や<ruby>梱包<rt>こんぽう</rt></ruby>の<ruby>規定<rt>きてい</rt></ruby>が<ruby>含<rt>ふく</rt></ruby>まれる。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Tiga poin utamanya adalah: pembuatan dokumen deklarasi, penempelan label, dan pengemasan."
          },
          {
            question: "<ruby>運送<rt>うんそう</rt></ruby><ruby>事業者<rt>じぎょうしゃ</rt></ruby>は<ruby>内容<rt>ないよう</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>をせずそのまま<ruby>輸送<rt>ゆそう</rt></ruby>できる。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Operator transportasi wajib mengecek nama barang, kelayakan label, dan pengemasan. Jika ada yang kurang/salah, mereka harus mengkonfirmasinya kepada pengirim kargo."
          }
        ]
      },
      {
        pageNumber: 17,
        title: "危険物の正しい判別 (Klasifikasi Barang Berbahaya)",
        content: [
          {
            jp: "● <ruby>危険物<rt>きけんぶつ</rt></ruby>の<ruby>正<rt>ただ</rt></ruby>しい<ruby>判別<rt>はんべつ</rt></ruby>",
            id: "Klasifikasi Barang Berbahaya yang Benar",
            type: "title"
          },
          {
            jp: "<ruby>次<rt>つぎ</rt></ruby>のものが<ruby>危険物<rt>きけんぶつ</rt></ruby>に<ruby>該当<rt>がいとう</rt></ruby>します。",
            id: "Barang-barang berikut ini termasuk dalam kategori barang berbahaya.",
            type: "paragraph"
          },
          {
            jp: "<ruby>詳細<rt>しょうさい</rt></ruby>は「<ruby>航空機<rt>こうくうき</rt></ruby>による<ruby>爆発物<rt>ばくはつぶつ</rt></ruby><ruby>等<rt>とう</rt></ruby>の<ruby>輸送基準<rt>ゆそうきじゅん</rt></ruby><ruby>等<rt>とう</rt></ruby>を<ruby>定<rt>さだ</rt></ruby>める<ruby>告示<rt>こくじ</rt></ruby>（<ruby>国土交通省<rt>こくどこうつうしょう</rt></ruby>）」を<ruby>確認<rt>かくにん</rt></ruby>してください。",
            id: "Untuk rincian detail, silakan periksa 'Pemberitahuan Penetapan Standar Pengangkutan Bahan Peledak, dll. dengan Pesawat Udara (Kementerian Pertanahan, Infrastruktur, Transportasi dan Pariwisata)'.",
            type: "paragraph"
          },
          {
            jp: "（ホームページで<ruby>閲覧可能<rt>えつらんかのう</rt></ruby>）",
            id: "(Dapat diakses/dilihat melalui situs web resmi)",
            type: "paragraph"
          },
          {
            jp: "① <ruby>火薬類<rt>かやくるい</rt></ruby>：<ruby>高温<rt>こうおん</rt></rubyScope>、<ruby>火気<rt>かき</rt></ruby>、<ruby>衝撃<rt>しょうげき</rt></ruby>により<ruby>爆発<rt>ばくはつ</rt></ruby>",
            id: "1. Bahan Peledak: Dapat meledak akibat suhu tinggi, api, atau guncangan/benturan.",
            type: "paragraph"
          },
          {
            jp: "<ruby>例<rt>れい</rt></ruby>：<ruby>花火<rt>はなび</rt></ruby>、<ruby>弾薬<rt>だんやく</rt></ruby><ruby>等<rt>とう</rt></ruby>",
            id: "Contoh: Kembang api, amunisi, dll.",
            type: "paragraph"
          },
          {
            jp: "② <ruby>高圧<rt>こうあつ</rt></ruby>ガス<ruby>類<rt>るい</rt></ruby>：<ruby>引火性<rt>いんかせい</rt></ruby>ガス、<ruby>毒性<rt>どくせい</rt></ruby>ガス、その<ruby>他<rt>た</rt></ruby>のガス",
            id: "2. Gas Bertekanan: Gas yang mudah terbakar, gas beracun, dan gas bertekanan lainnya.",
            type: "paragraph"
          },
          {
            jp: "<ruby>例<rt>れい</rt></ruby>：ガスライター、ヘアスプレー、<ruby>酸素<rt>さんそ</rt></ruby>ボンベ<ruby>等<rt>とう</rt></ruby>",
            id: "Contoh: Korek api gas, hair spray, tabung oksigen, dll.",
            type: "paragraph"
          },
          {
            jp: "③ <ruby>引火性液体<rt>いんかせいえきたい</rt></ruby>：<ruby>引火点<rt>いんかてん</rt></ruby>が60℃<ruby>以下<rt>いか</rt></ruby>の<ruby>液体<rt>えきたい</rt></ruby>",
            id: "3. Cairan Mudah Terbakar: Cairan dengan titik nyala (flash point) 60°C atau lebih rendah.",
            type: "paragraph"
          },
          {
            jp: "<ruby>例<rt>れい</rt></ruby>：<ruby>塗料<rt>とりょう</rt></ruby>、<ruby>化粧品<rt>けしょうひん</rt></ruby>、<ruby>香水<rt>こうすい</rt></ruby>、<ruby>接着剤<rt>せっちゃくざい</rt></ruby><ruby>等<rt>とう</rt></ruby>",
            id: "Contoh: Cat, kosmetik, parfum, perekat/lem, dll.",
            type: "paragraph"
          },
          {
            jp: "④ <ruby>可燃性物質類<rt>かねんせいぶっしつるい</rt></ruby>（<ruby>自然発火性物質<rt>しぜんはっかせいぶっしつ</rt></ruby><ruby>含<rt>ふく</rt></ruby>む）",
            id: "4. Zat Mudah Terbakar: Termasuk zat yang dapat terbakar secara spontan (spontaneous combustion).",
            type: "paragraph"
          },
          {
            jp: "<ruby>例<rt>れい</rt></ruby>：マッチ、<ruby>金属粉末<rt>きんぞくふんまつ</rt></ruby>、<ruby>活性炭<rt>かっせいたん</rt></ruby><ruby>等<rt>とう</rt></ruby>",
            id: "Contoh: Korek api kayu, bubuk logam, karbon aktif, dll.",
            type: "paragraph"
          },
          {
            jp: "⑤ <ruby>酸化性物質類<rt>さんかせいぶっしつるい</rt></ruby>",
            id: "5. Zat Pengoksidasi (Oksidator)",
            type: "paragraph"
          },
          {
            jp: "<ruby>例<rt>れい</rt></ruby>：<ruby>化学酸素発生器<rt>かがくさんそはっせいき</rt></ruby>、<ruby>過酸化水素水<rt>かさんかすいそすい</rt></ruby><ruby>等<rt>とう</rt></ruby>",
            id: "Contoh: Generator oksigen kimia, hidrogen peroksida cair, dll.",
            type: "paragraph"
          },
          {
            jp: "⑥ <ruby>毒物類<rt>どくぶつるい</rt></ruby>：<ruby>毒物<rt>どくぶつ</rt></ruby>、<ruby>病毒<rt>びょうどく</rt></ruby>を<ruby>移<rt>うつ</rt></ruby>しやすい<ruby>物質<rt>ぶっしつ</rt></ruby>",
            id: "6. Zat Beracun dan Zat Menular: Bahan beracun atau zat yang mudah menularkan penyakit/virus.",
            type: "paragraph"
          },
          {
            jp: "<ruby>例<rt>れい</rt></ruby>：<ruby>殺虫殺菌剤<rt>さっちゅうさっきんざい</rt></ruby>、<ruby>農薬<rt>のうやく</rt></ruby>、<ruby>医療系廃棄物<rt>いりょうけいはいきぶつ</rt></ruby><ruby>等<rt>とう</rt></ruby>",
            id: "Contoh: Insektisida/fungisida, pestisida, limbah medis, dll.",
            type: "paragraph"
          },
          {
            jp: "⑦ <ruby>放射性物質<rt>ほうしゃせいぶっしつ</rt></ruby>",
            id: "7. Bahan Radioaktif",
            type: "paragraph"
          },
          {
            jp: "⑧ <ruby>腐食性物質<rt>ふしょくせいぶっしつ</rt></ruby>：<ruby>皮膚<rt>ひふ</rt></ruby>の<ruby>壊死<rt>えし</rt></ruby>、<ruby>金属腐食<rt>きんぞくふしょく</rt></ruby><ruby>等<rt>とう</rt></ruby>を<ruby>起<rt>お</rt></ruby>こす<ruby>物質<rt>ぶっしつ</rt></ruby>",
            id: "8. Zat Korosif: Zat yang dapat menyebabkan kerusakan (nekrosis) pada kulit, korosi logam, dll.",
            type: "paragraph"
          },
          {
            jp: "<ruby>例<rt>れい</rt></ruby>：<ruby>硫酸<rt>りゅうさん</rt></ruby>、<ruby>鉛電池<rt>なまりでんち</rt></ruby><ruby>等<rt>とう</rt></ruby>",
            id: "Contoh: Asam sulfat, aki timbal (baterai asam timbal), dll.",
            type: "paragraph"
          },
          {
            jp: "⑨ その<ruby>他<rt>た</rt></ruby>の<ruby>有害物件<rt>ゆうがいぶっけん</rt></ruby>",
            id: "9. Barang Berbahaya Lainnya (Miscellaneous Dangerous Goods)",
            type: "paragraph"
          },
          {
            jp: "<ruby>例<rt>れい</rt></ruby>：リチウム<ruby>電池<rt>でんち</rt></ruby>、ドライアイス、<ruby>磁石<rt>じしゃく</rt></ruby><ruby>等<rt>とう</rt></ruby>",
            id: "Contoh: Baterai lithium, es kering (dry ice), magnet, dll.",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "<ruby>火薬類<rt>かやくるい</rt></ruby>は<ruby>高温<rt>こうおん</rt></ruby>・<ruby>火気<rt>かき</rt></ruby>・<ruby>衝撃<rt>しょうげき</rt></ruby>によって<ruby>爆発<rt>ばくはつ</rt></ruby>する<ruby>可能性<rt>かのうせい</rt></ruby>がある。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Bahan peledak (火薬類) sangat sensitif terhadap suhu tinggi, api terbuka, dan guncangan/benturan mekanis sehingga dapat meledak."
          },
          {
            question: "<ruby>高圧<rt>こうあつ</rt></ruby>ガス<ruby>類<rt>るい</rt></ruby>にはガスライターやヘアスプレーが<ruby>含<rt>ふく</rt></ruby>まれる。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Korek gas (ガスライター) dan hair spray mengandung gas bertekanan tinggi (高圧ガス) yang mudah terbakar."
          },
          {
            question: "<ruby>引火性液体<rt>いんかせいえきたい</rt></ruby>の<ruby>引火点<rt>いんかてん</rt></ruby>は100℃<ruby>以下<rt>いか</rt></ruby>である。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Sesuai dengan aturan penerbangan, cairan mudah terbakar (引火性液体) diklasifikasikan sebagai cairan dengan titik nyala (引火点) 60°C atau lebih rendah, bukan 100°C."
          },
          {
            question: "<ruby>放射性物質<rt>ほうしゃせいぶっしつ</rt></ruby>は<ruby>危険物<rt>きけんぶつ</rt></ruby>に<ruby>含<rt>ふく</rt></ruby>まれない。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Bahan radioaktif (放射性物質) secara resmi termasuk dalam klasifikasi barang berbahaya kategori 7."
          },
          {
            question: "リチウム<ruby>電池<rt>でんち</rt></ruby>はその<ruby>他<rt>た</rt></ruby>の<ruby>有害物件<rt>ゆうがいぶっけん</rt></ruby>に<ruby>分類<rt>ぶんるい</rt></ruby>される<ruby>場合<rt>ばあい</rt></ruby>がある。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Baterai lithium (リチウム電池) dikelompokkan ke dalam kategori 9 yaitu barang berbahaya lainnya (その他の有害物件)."
          }
        ]
      },
      {
        pageNumber: 18,
        title: "正しいラベルの選定 (Pemilihan Label yang Benar)",
        content: [
          {
            jp: "<ruby>正<rt>ただ</rt></ruby>しいラベルの<ruby>選定<rt>せんてい</rt></ruby>",
            id: "Pemilihan label yang benar",
            type: "title"
          },
          {
            jp: "ラベルには「<ruby>危険性<rt>きけんせい</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>すもの」と「<ruby>輸送方法<rt>ゆそうほうほう</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>すもの」があります。",
            id: "Label bahaya digunakan untuk menandakan tipe risiko dari paket kargo, sedangkan label penanganan memandu metode transportasi yang sesuai di bandara.",
            type: "paragraph"
          },
          {
            jp: `
            <div class="overflow-x-auto w-full scrollbar-thin">
              <table class="w-full min-w-[640px] table-fixed divide-y divide-slate-200 dark:divide-slate-800 text-left text-xs sm:text-sm">
                <thead class="bg-slate-50 dark:bg-slate-900/50">
                  <tr>
                    <th class="w-1/3 px-3 py-3 font-bold text-center border-r border-slate-200 dark:border-slate-800">
                      <ruby>火薬類<rt>かやくるい</rt></ruby> 
                      <div class="text-[10px] text-slate-550 dark:text-slate-400 font-medium mt-0.5">Bahan peledak / Explosive</div>
                    </th>
                    <th class="w-1/3 px-3 py-3 font-bold text-center border-r border-slate-200 dark:border-slate-800">
                      <ruby>高圧ガス<rt>こうあつがす</rt></ruby> 
                      <div class="text-[10px] text-slate-550 dark:text-slate-400 font-medium mt-0.5">Gas bertekanan / Flammable Gas</div>
                    </th>
                    <th class="w-1/3 px-3 py-3 font-bold text-center">
                      <ruby>引火性液体<rt>いんかせいえきたい</rt></ruby> 
                      <div class="text-[10px] text-slate-550 dark:text-slate-400 font-medium mt-0.5">Cairan mudah terbakar / Flammable Liquid</div>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-950/20">
                  <tr>
                    <td class="p-3 border-r border-slate-200 dark:border-slate-800">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/UN_transport_pictogram_-_1.svg/500px-UN_transport_pictogram_-_1.svg.png"
                          alt="Kelas 1 Explosive"
                          class="w-full h-32 sm:h-36 object-contain rounded-lg border border-slate-200 dark:border-slate-800 bg-white" />
                    </td>
                    <td class="p-3 border-r border-slate-200 dark:border-slate-800">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ADR_2.1.svg/500px-ADR_2.1.svg.png"
                          alt="Kelas 2 Flammable Gas"
                          class="w-full h-32 sm:h-36 object-contain rounded-lg border border-slate-200 dark:border-slate-800 bg-white" />
                    </td>
                    <td class="p-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ADR_3.svg/500px-ADR_3.svg.png"
                          alt="Kelas 3 Flammable Liquid"
                          class="w-full h-32 sm:h-36 object-contain rounded-lg border border-slate-200 dark:border-slate-800 bg-white" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            `,
            id: "Tabel label bahaya utama: Kelas 1 (Bahan Peledak), Kelas 2 (Gas Flammable), dan Kelas 3 (Cairan Mudah Terbakar).",
            type: "table"
          },
          {
            jp: `
            <div class="overflow-x-auto w-full scrollbar-thin mt-4">
              <table class="w-full min-w-[640px] table-fixed divide-y divide-slate-200 dark:divide-slate-800 text-left text-xs sm:text-sm">
                <thead class="bg-slate-50 dark:bg-slate-900/50">
                  <tr>
                    <th class="w-1/3 px-3 py-3 text-center font-bold border-r border-slate-200 dark:border-slate-800">
                      <ruby>可燃性物質類<rt>かねんせいぶっしつるい</rt></ruby> 
                      <div class="text-[10px] text-slate-550 dark:text-slate-400 font-medium mt-0.5">Mudah terbakar / Flammable Solid</div>
                    </th>
                    <th class="w-1/3 px-3 py-3 text-center font-bold border-r border-slate-200 dark:border-slate-800">
                      <ruby>酸化性物質類<rt>さんかせいぶっしつるい</rt></ruby> 
                      <div class="text-[10px] text-slate-550 dark:text-slate-400 font-medium mt-0.5">Zat Pengoksidasi / Oxidizer</div>
                    </th>
                    <th class="w-1/3 px-3 py-3 text-center font-bold">
                      <ruby>毒物類<rt>どくぶつるい</rt></ruby> 
                      <div class="text-[10px] text-slate-550 dark:text-slate-400 font-medium mt-0.5">Zat beracun / Toxic Substance</div>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-950/20">
                  <tr>
                    <td class="p-3 border-r border-slate-200 dark:border-slate-800">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/ADR_4.1.svg/500px-ADR_4.1.svg.png"
                          alt="Kelas 4 Flammable Solid"
                          class="w-full h-32 sm:h-36 object-contain rounded-lg border border-slate-200 dark:border-slate-800 bg-white" />
                    </td>
                    <td class="p-3 border-r border-slate-200 dark:border-slate-800">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/ADR_5.1.svg/500px-ADR_5.1.svg.png"
                          alt="Kelas 5.1 Oxidizing Agent"
                          class="w-full h-32 sm:h-36 object-contain rounded-lg border border-slate-200 dark:border-slate-800 bg-white" />
                    </td>
                    <td class="p-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/ADR_6.1.svg/500px-ADR_6.1.svg.png"
                          alt="Kelas 6.1 Toxic Substance"
                          class="w-full h-32 sm:h-36 object-contain rounded-lg border border-slate-200 dark:border-slate-800 bg-white" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            `,
            id: "Tabel label bahaya: Kelas 4 (Bahan Padat Mudah Terbakar), Kelas 5 (Pengoksidasi/Oksidator), dan Kelas 6 (Zat Beracun/Menular).",
            type: "table"
          },
          {
            jp: `
            <div class="overflow-x-auto w-full scrollbar-thin mt-4">
              <table class="w-full min-w-[640px] table-fixed divide-y divide-slate-200 dark:divide-slate-800 text-left text-xs sm:text-sm">
                <thead class="bg-slate-50 dark:bg-slate-900/50">
                  <tr>
                    <th class="w-1/3 px-3 py-3 text-center font-bold border-r border-slate-200 dark:border-slate-800">
                      <ruby>放射性物質類<rt>ほうしゃせいぶっしつるい</rt></ruby> 
                      <div class="text-[10px] text-slate-550 dark:text-slate-400 font-medium mt-0.5">Bahan Radioaktif / Radioactive</div>
                    </th>
                    <th class="w-1/3 px-3 py-3 text-center font-bold border-r border-slate-200 dark:border-slate-800">
                      <ruby>腐食性物質<rt>ふしょくせいぶっしつ</rt></ruby> 
                      <div class="text-[10px] text-slate-550 dark:text-slate-400 font-medium mt-0.5">Zat Korosif / Corrosive</div>
                    </th>
                    <th class="w-1/3 px-3 py-3 text-center font-bold">
                      その他の<ruby>有害物件<rt>ゆうがいぶっけん</rt></ruby> 
                      <div class="text-[10px] text-slate-550 dark:text-slate-400 font-medium mt-0.5">Lainnya / Miscellaneous</div>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-950/20">
                  <tr>
                    <td class="p-3 border-r border-slate-200 dark:border-slate-800">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/ADR_7A.svg/500px-ADR_7A.svg.png"
                          alt="Kelas 7 Radioactive"
                          class="w-full h-32 sm:h-36 object-contain rounded-lg border border-slate-200 dark:border-slate-800 bg-white" />
                    </td>
                    <td class="p-3 border-r border-slate-200 dark:border-slate-800">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/UN_transport_pictogram_-_8.svg/500px-UN_transport_pictogram_-_8.svg.png"
                          alt="Kelas 8 Corrosive"
                          class="w-full h-32 sm:h-36 object-contain rounded-lg border border-slate-200 dark:border-slate-800 bg-white" />
                    </td>
                    <td class="p-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dangclass9.svg/500px-Dangclass9.svg.png"
                          alt="Kelas 9 Miscellaneous"
                          class="w-full h-32 sm:h-36 object-contain rounded-lg border border-slate-200 dark:border-slate-800 bg-white" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            `,
            id: "Tabel label bahaya: Kelas 7 (Bahan Radioaktif), Kelas 8 (Zat Korosif yang merusak jaringan tubuh/logam), dan Kelas 9 (Lain-lain/Miscellaneous seperti baterai lithium).",
            type: "table"
          }
        ],
        quizzes: [
          {
            question: "Perhatikan gambar label berikut:<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ADR_3.svg/500px-ADR_3.svg.png\" class=\"w-full max-w-[140px] h-auto my-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white shadow-sm mx-auto\"><br>Label di atas digunakan untuk menandai zat berbahaya kategori apa?",
            options: [
              { text: "A. 引火性液体 (Cairan Mudah Terbakar)", isCorrect: true },
              { text: "B. 高圧ガス (Gas Bertekanan)", isCorrect: false },
              { text: "C. 毒物類 (Zat Beracun)", isCorrect: false }
            ],
            explanation: "Tepat sekali! Label merah bersimbol api dengan angka 3 di sudut bawah menunjukkan Kelas 3: 引火性液体 (Cairan Mudah Terbakar) seperti bensin, alkohol, parfum, atau cat cair."
          },
          {
            question: "Perhatikan gambar label berikut:<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/UN_transport_pictogram_-_8.svg/500px-UN_transport_pictogram_-_8.svg.png\" class=\"w-full max-w-[140px] h-auto my-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white shadow-sm mx-auto\"><br>Apakah nama klasifikasi bahasa Jepang untuk label Kelas 8 di atas?",
            options: [
              { text: "A. 腐食性物質 (Zat Korosif)", isCorrect: true },
              { text: "B. 酸化性物質類 (Zat Pengoksidasi)", isCorrect: false },
              { text: "C. 火薬類 (Bahan Peledak)", isCorrect: false }
            ],
            explanation: "Benar! Label Kelas 8 dengan simbol tetesan cairan yang merusak logam dan tangan menunjukkan kategori 腐食性物質 (Zat Korosif) seperti asam sulfat atau cairan baterai aki."
          },
          {
            question: "Perhatikan gambar label berikut:<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/UN_transport_pictogram_-_1.svg/500px-UN_transport_pictogram_-_1.svg.png\" class=\"w-full max-w-[140px] h-auto my-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white shadow-sm mx-auto\"><br>Manakah contoh zat kargo yang dikategorikan dalam klasifikasi label Kelas 1 di atas?",
            options: [
              { text: "A. 花火、弾薬 (Kembang api, amunisi)", isCorrect: true },
              { text: "B. ガスライター、酸素ボンベ (Korek gas, tabung oksigen)", isCorrect: false },
              { text: "C. リチウム電池、ドライアイス (Baterai lithium, dry ice)", isCorrect: false }
            ],
            explanation: "Tepat! Label oranye bergambar ledakan bom dengan angka 1 di bagian bawah adalah Kelas 1: 火薬類 (Bahan Peledak), dengan contoh kargo berupa kembang api (花火) dan amunisi senjata (弾薬)."
          },
          {
            question: "Perhatikan gambar label berikut:<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/ADR_5.1.svg/500px-ADR_5.1.svg.png\" class=\"w-full max-w-[140px] h-auto my-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white shadow-sm mx-auto\"><br>Apakah klasifikasi dari label berwarna kuning dengan kode angka 5.1 ini?",
            options: [
              { text: "A. 酸化性物質類 (Zat Pengoksidasi / Oksidator)", isCorrect: true },
              { text: "B. 放射性物質類 (Bahan Radioaktif)", isCorrect: false },
              { text: "C. 可燃性物質類 (Zat Padat Mudah Terbakar)", isCorrect: false }
            ],
            explanation: "Benar! Simbol api di atas lingkaran berlatar kuning dengan angka 5.1 melambangkan 酸化性物質類 (Zat Pengoksidasi/Oksidator) seperti hidrogen peroksida, yang memicu pembakaran dengan melepas oksigen."
          },
          {
            question: "Perhatikan gambar label berikut:<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dangclass9.svg/500px-Dangclass9.svg.png\" class=\"w-full max-w-[140px] h-auto my-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white shadow-sm mx-auto\"><br>Jenis kargo bandara manakah yang termasuk ke dalam klasifikasi label Kelas 9 di atas?",
            options: [
              { text: "A. Baterai lithium (リチウム電池), es kering (ドライアイス), dan magnet", isCorrect: true },
              { text: "B. Racun serangga pestisida dan limbah medis infeksius", isCorrect: false },
              { text: "C. Lem perekat industri, cat minyak, dan parfum", isCorrect: false }
            ],
            explanation: "Benar! Label bermotif garis vertikal hitam-putih di atas dan angka 9 di bawah melambangkan Kelas 9: その他の有害物件 (Miscellaneous/Barang Berbahaya Lainnya), seperti baterai lithium, es kering, dan magnet."
          }
        ]
      },
      {
        pageNumber: 19,
        title: "正しい容器の選定 (Pemilihan Wadah & Aturan Lain)",
        content: [
          {
            jp: "<ruby>正<rt>ただ</rt></ruby>しい<ruby>容器<rt>ようき</rt></ruby>の<ruby>選定<rt>せんてい</rt></ruby>",
            id: "Pemilihan Wadah yang Benar",
            type: "title"
          },
          {
            jp: "<ruby>告示<rt>こくじ</rt></ruby>では、<ruby>輸送品<rt>ゆそうひん</rt></ruby>の<ruby>特性<rt>とくせい</rt></ruby>を<ruby>踏<rt>ふ</rt></ruby>まえ<ruby>容器<rt>ようき</rt></ruby>に<ruby>求<rt>もと</rt></ruby>められる<ruby>形状<rt>けいじょう</rt></ruby>や<ruby>材質等<rt>ざいしつとう</rt></ruby>を<ruby>定<rt>さだ</rt></ruby>めており、<ruby>安全<rt>あんぜん</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>には<ruby>国連<rt>こくれん</rt></ruby><ruby>容器<rt>ようき</rt></ruby>など<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>容器<rt>ようき</rt></ruby>の<ruby>選定<rt>せんてい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。",
            id: "Pemberitahuan resmi (Notification) menetapkan bentuk, bahan, dan lain-lain yang diwajibkan untuk wadah berdasarkan karakteristik barang yang diangkut. Untuk mewujudkan transportasi yang aman, sangat diperlukan pemilihan wadah yang tepat seperti Wadah Standar PBB (UN Packaging).",
            type: "paragraph"
          },
          {
            jp: "（ガソリンの<ruby>場合<rt>ばあい</rt></ruby>）",
            id: "Dalam Kasus Bensin:",
            type: "subtitle"
          },
          {
            jp: "① <ruby>形状<rt>けいじょう</rt></ruby>：ジェリカン",
            id: "1. Bentuk: Jerigen (Jerrycan)",
            type: "paragraph"
          },
          {
            jp: "② <ruby>材質<rt>ざいしつ</rt></ruby>：<ruby>鋼<rt>はがね</rt></ruby>",
            id: "2. Bahan: Baja (Steel)",
            type: "paragraph"
          },
          {
            jp: "③ <ruby>細分類<rt>さいぶんるい</rt></ruby>：<ruby>天板<rt>てんばん</rt></ruby><ruby>固定式<rt>こていしき</rt></ruby>",
            id: "3. Subklasifikasi: Tipe tutup atas tetap (Fixed head / Non-removable head)",
            type: "paragraph"
          },
          {
            jp: "● その<ruby>他<rt>た</rt></ruby>のルール",
            id: "Aturan-aturan Lainnya",
            type: "subtitle"
          },
          {
            jp: "その<ruby>他<rt>た</rt></ruby>にも<ruby>守<rt>まも</rt></ruby>らなければいけないルールがあります。<ruby>告示<rt>こくじ</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>を<ruby>正<rt>ただ</rt></ruby>しく<ruby>理解<rt>りかい</rt></ruby>してください。",
            id: "Selain itu, terdapat aturan-aturan lain yang juga harus dipatuhi secara ketat. Harap pastikan Anda memahami isi dari Pemberitahuan resmi tersebut dengan benar.",
            type: "paragraph"
          },
          {
            jp: "＜<ruby>告示<rt>こくじ</rt></ruby>の<ruby>例<rt>れい</rt></ruby>（ガソリン）＞",
            id: "< Contoh Aturan Pemberitahuan Khusus Bensin >",
            type: "subtitle"
          },
          {
            jp: "<ruby>例<rt>れい</rt></ruby>：<ruby>旅客機<rt>りょかくき</rt></ruby>で<ruby>輸送<rt>ゆそう</rt></ruby>できる<ruby>量<rt>りょう</rt></ruby> 5リットルまで",
            id: "Contoh: Batas maksimal jumlah yang dapat diangkut menggunakan pesawat penumpang (Passenger Aircraft) adalah hingga 5 liter.",
            type: "paragraph"
          }
        ],
        quizzes: [
          {
            question: "<ruby>安全<rt>あんぜん</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>には、<ruby>輸送品<rt>ゆそうひん</rt></ruby>の<ruby>特性<rt>とくせい</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせた<ruby>国連<rt>こくれん</rt></ruby><ruby>容器<rt>ようき</rt></ruby>など<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>容器<rt>ようき</rt></ruby>の<ruby>選定<rt>せんてい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。",
            isCorrect: true,
            explanation: "Tadashii (Benar). Berdasarkan karakteristik kargo, pemilihan wadah standar seperti Wadah PBB (UN Packaging) sangat diwajibkan demi keamanan."
          },
          {
            question: "ガソリンを<ruby>輸送<rt>ゆそう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>容器<rt>ようき</rt></ruby>の<ruby>材質<rt>ざいしつ</rt></ruby>はプラスチックである。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Bahan (材質) yang ditetapkan untuk wadah bensin sesuai dengan contoh pada modul ini adalah Baja (鋼 / Steel), bukan plastik."
          },
          {
            question: "ガソリンを<ruby>旅客機<rt>りょかくき</rt></ruby>で<ruby>輸送<rt>ゆそう</rt></ruby>できる<ruby>量<rt>りょう</rt></ruby>は、<ruby>無制限<rt>むせいげん</rt></ruby>である。",
            isCorrect: false,
            explanation: "Machigatte (Salah). Ada batasan ketat. Berdasarkan contoh di atas, jumlah maksimal bensin yang dapat diangkut dengan pesawat penumpang hanya hingga 5 liter (5リットルまで)."
          }
        ]
      }
];

async function uploadData() {
  const collectionRef = db.collection('ssw_pages');
  console.log("Mulai mengunggah data ke Firestore...");

  for (const page of defaultPages) {
    const docId = `page_${page.pageNumber}`;
    await collectionRef.doc(docId).set(page);
    console.log(`✅ Halaman ${page.pageNumber} berhasil disimpan dengan ID: ${docId}`);
  }

  console.log("🎉 Seluruh data berhasil diunggah ke Firestore!");
}

uploadData().catch(console.error);