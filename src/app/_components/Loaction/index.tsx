function Location() {
  return (
    <section className="w-screen h-screen pt-4">
      <iframe
        title="google maps location of the business"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3015.956531915715!2d29.216335121267818!3d40.89476839084394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDUzJzQxLjQiTiAyOcKwMTInNTcuMyJF!5e0!3m2!1str!2str!4v1746392294193!5m2!1str!2str"
        className="w-full h-full"
        style={{ border: 0 }} // ✅ fixed style
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Location;
