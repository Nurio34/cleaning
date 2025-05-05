function KVKK() {
  return (
    <main className="w-screen min-h-screen lg:flex justify-center px-2 lg:px-0 bg-base-100/80">
      <section className="lg:w-4/6">
        <h1 className="text-2xl font-bold py-4">
          Kişisel Verilerin Korunması Hakkında Aydınlatma Metni
        </h1>

        <p className="indent-4 py-4">
          <strong>Veri Sorumlusu:</strong> aparmantemizligi.com
        </p>

        <p className="indent-4 py-4">
          6698 Sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca,
          kişisel verileriniz, aşağıda açıklanan kapsamda{" "}
          <strong>aparmantemizligi.com</strong> tarafından işlenebilecektir.
        </p>

        <h2 className=" text-lg font-semibold">İşlenen Veriler</h2>
        <ul className="indent-4 py-4">
          <li>İsim, soyisim, telefon numarası, e-posta adresi</li>
          <li>İletişim içerikleri (formda yazdığınız mesaj)</li>
        </ul>

        <h2 className=" text-lg font-semibold">Amaçlar</h2>
        <ul className="indent-4 py-4">
          <li>Size hizmet sunmak</li>
          <li>İletişim kurmak</li>
          <li>Talep ve şikayetlerinizi değerlendirmek</li>
          <li>Hukuki yükümlülükleri yerine getirmek</li>
        </ul>

        <h2 className=" text-lg font-semibold">Hukuki Dayanak</h2>
        <p className="indent-4 py-4">
          KVKK m.5/2 uyarınca, açık rızanıza dayanarak işlenmektedir.
        </p>

        <h2 className=" text-lg font-semibold">Haklarınız</h2>
        <p className="indent-4 py-4">KVKK’nın 11. maddesi kapsamında:</p>
        <ul className="indent-4 py-4">
          <li>Verilerinize erişme</li>
          <li>Düzeltme veya silinmesini talep etme</li>
          <li>İşlemeye itiraz etme</li>
        </ul>

        <p className="indent-4 py-4">
          Taleplerinizi <strong>info@aparmantemizligi.com</strong> adresine
          iletebilirsiniz.
        </p>
      </section>
    </main>
  );
}
export default KVKK;
