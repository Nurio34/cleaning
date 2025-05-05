function CookiePolicy() {
  return (
    <main className="w-screen min-h-screen lg:flex justify-center px-2 lg:px-0 bg-base-100/80">
      <section className="lg:w-4/6">
        <h1 className="text-2xl font-bold py-4">Çerez (Cookie) Politikası</h1>

        <p className="indent-4 py-4">
          <strong>aparmantemizligi.com</strong> web sitesinde kullanıcı
          deneyimini geliştirmek için çerezler (cookies) kullanmaktayız.
        </p>

        <h2 className=" text-lg font-semibold">Çerez Nedir?</h2>
        <p className="indent-4 py-4">
          Çerezler, web sitesini ziyaret ettiğinizde tarayıcınıza gönderilen
          küçük metin dosyalarıdır. Site kullanımınızı hatırlamamıza yardımcı
          olur.
        </p>

        <h2 className=" text-lg font-semibold">Kullanılan Çerez Türleri</h2>
        <ul className="indent-4 py-4">
          <li>
            <strong>Zorunlu Çerezler:</strong> Temel işlevsellik için
            gereklidir.
          </li>
          <li>
            <strong>Analitik Çerezler:</strong> Site trafiğini anlamamıza
            yardımcı olur (örneğin Google Analytics).
          </li>
          <li>
            <strong>Fonksiyonel Çerezler:</strong> Tercihlerinizi hatırlar.
          </li>
        </ul>

        <h2 className=" text-lg font-semibold">
          Çerezleri Nasıl Yönetebilirsiniz?
        </h2>
        <p className="indent-4 py-4">
          Tarayıcınızın ayarlarından çerezleri kontrol edebilir veya
          silebilirsiniz. Ancak bazı çerezleri devre dışı bırakmanız, sitenin
          doğru çalışmasını engelleyebilir.
        </p>
      </section>
    </main>
  );
}
export default CookiePolicy;
