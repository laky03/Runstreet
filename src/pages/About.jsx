function About() {
    return (
      <div className="page-container">
        <section className="glass-panel rounded-[2rem] p-8 mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">O nama</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">Runstreet Sneaker Store</h1>
          <p className="mt-4 text-lg text-slate-600">
            Runstreet je prodavnica specijalizovana za patike i moderne sneaker modele za
            svakodnevnu upotrebu. Nas cilj je da kupcima ponudimo kvalitetne modele, dobru uslugu
            i jednostavno iskustvo online kupovine.
          </p>
        </section>
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="glass-panel rounded-[2rem] p-8">
            <h2 className="text-2xl font-bold text-slate-950">Ko smo mi</h2>
            <p className="mt-4 text-slate-600 leading-7">
              Bavimo se prodajom patika i pracenjem aktuelnih trendova u sneaker svetu. U nasoj
              ponudi nalaze se modeli za svaki dan, gradske kombinacije i udobnu svakodnevnu
              upotrebu.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Fokusirani smo na kvalitet, moderan izbor i zadovoljstvo kupaca. Zelimo da svaki
              posetilac nase prodavnice lako pronadje model koji odgovara njegovom stilu.
            </p>
          </div>

          <div className="glass-panel rounded-[2rem] p-8">
            <h2 className="text-2xl font-bold text-slate-950">Informacije o firmi</h2>
            <div className="mt-5 space-y-4 text-slate-600">
              <p>
                <span className="font-semibold text-slate-950">Adresa:</span> Narodnih heroja 28
              </p>
              <p>
                <span className="font-semibold text-slate-950">Radno vreme:</span> Ponedeljak -
                Subota, 09:00 - 20:00
              </p>
              <p>
                <span className="font-semibold text-slate-950">Telefon:</span> 011/123-456
              </p>
              <p>
                <span className="font-semibold text-slate-950">Email:</span> info@runstreet.rs
              </p>
            </div>
          </div>
        </section>
       
       
        <section className="glass-panel rounded-[2rem] p-8 mt-8">
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200">
            <iframe
             title="Lokacija prodavnice Runstreet"
              src="https://www.google.com/maps?q=Narodnih%20heroja%2028&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </section>
        </div>

    );
}

export default About;