function Privacy() {
  return (
    <main className="w-screen min-h-screen lg:flex justify-center px-2 lg:px-0 bg-base-100/80">
      <section className="lg:w-4/6">
        <h1 className="text-2xl font-bold py-4">Gizlilik Politikası</h1>
        <p className="indent-4 py-4">
          <strong>aparmantemizligi.com</strong> olarak, kullanıcılarımızın
          gizliliğine saygı duyuyor ve kişisel verilerinizi korumayı taahhüt
          ediyoruz. Bu gizlilik politikası, sitemizi ziyaret ettiğinizde hangi
          bilgileri topladığımızı, bu bilgileri nasıl kullandığımızı ve nasıl
          koruduğumuzu açıklamaktadır.
        </p>

        <h2 className=" text-lg font-semibold">Toplanan Bilgiler</h2>
        <ul className="indent-4 py-4">
          <li>
            Ad, soyad, e-posta, telefon numarası (iletişim formu üzerinden)
          </li>
          <li>
            IP adresi, tarayıcı bilgisi, kullanım süresi (analitik veriler)
          </li>
          <li>WhatsApp üzerinden yapılan iletişimlerde sağlanan bilgiler</li>
        </ul>

        <h2 className=" text-lg font-semibold">Bilgilerin Kullanımı</h2>
        <ul className="indent-4 py-4">
          <li>Hizmet taleplerinizi değerlendirmek</li>
          <li>Size geri dönüş sağlamak</li>
          <li>Site deneyiminizi iyileştirmek</li>
          <li>Yasal yükümlülüklerimizi yerine getirmek</li>
        </ul>

        <h2 className=" text-lg font-semibold">Bilgilerin Paylaşımı</h2>
        <p className="indent-4 py-4">
          Kişisel bilgileriniz, üçüncü kişilerle <strong>paylaşılmaz</strong>,{" "}
          <strong>satılmaz</strong> veya <strong>kiralanmaz</strong>. Yalnızca
          yasal zorunluluk halinde resmi makamlarla paylaşılabilir.
        </p>

        <h2 className=" text-lg font-semibold">Güvenlik</h2>
        <p className="indent-4 py-4">
          Kişisel bilgileriniz güvenli sunucularda saklanmakta ve yalnızca
          yetkili kişilerce erişilebilmektedir.
        </p>
      </section>
    </main>
  );
}
export default Privacy;
