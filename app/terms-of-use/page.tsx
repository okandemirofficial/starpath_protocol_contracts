import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Kullanıcı Sözleşmesi | Kilim",
  description: "Kilim Health Mobil Uygulaması Kullanıcı Sözleşmesi",
}

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-medium text-sm"
            >
              ← Sözleşmelere Dön
            </Link>
          </div>

          <article className="prose prose-sm md:prose-base max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent prose-strong:text-foreground prose-li:text-muted-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Kilim Health Mobil Uygulaması Kullanıcı Sözleşmesi
            </h1>
            <p className="text-muted-foreground/70 mb-8 text-sm">Yürürlük Tarihi: 25 Kasım 2025</p>

            <section className="mb-12">
              <div className="mt-4 p-6 bg-card/50 border border-border/40 rounded-xl backdrop-blur">
                <p className="text-foreground mb-2">
                  <strong>Veri Sorumlusu ve Hizmet Sağlayıcı:</strong>
                </p>
                <p className="text-muted-foreground mb-2">Kilim Health Teknoloji A.Ş.</p>
                <p className="text-foreground">
                  <strong>E-posta:</strong> <span className="text-accent">info@kilimhealth.com</span>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">1. Taraflar ve Amaç</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bu sözleşme, Kilim Health Teknoloji A.Ş. ("Şirket" veya "Kilim Health") tarafından işletilen mobil uygulama ("Uygulama") üzerinden sunulan dijital ilişki koçluğu hizmetlerinden yararlanmak isteyen gerçek kişiler ("Kullanıcı") ile Şirket arasında akdedilmiştir.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Kullanıcı, bu sözleşmeyi onaylayarak Uygulama'da sunulan hizmetleri, aşağıda belirtilen koşullar çerçevesinde kullanmayı kabul eder.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">2. Hizmetin Kapsamı</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kilim Health, Kullanıcıların kendi ilişkilerini geliştirmelerine destek olmak amacıyla:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Yapay zekâ destekli bir "ilişki koçu" sistemi,</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Partnerler arası iletişim ve farkındalık analizleri,</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Profesyonel uzman yönlendirmeleri (psikolog, terapist vb.)</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                gibi hizmetler sunar.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Uygulama üzerinden verilen yapay zekâ tavsiyeleri profesyonel psikolojik danışmanlık veya tıbbi hizmet niteliğinde değildir. Gerektiğinde Kullanıcı, sistem tarafından profesyonel desteğe yönlendirilebilir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">3. Kayıt ve Hesap Kullanımı</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kullanıcı, Uygulama'ya üye olurken kimlik, iletişim, sağlık ve partner bilgilerini doğru ve eksiksiz şekilde paylaşmayı kabul eder.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kullanıcı, sadece kendi adına hesap açabilir. Başkası adına hesap açmak veya üçüncü kişilerin bilgilerini izinsiz paylaşmak yasaktır.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kullanıcı, hesabına ait erişim bilgilerini gizli tutmakla yükümlüdür.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Şirket, sahte bilgi paylaşımı, sistemin kötüye kullanımı veya mevzuata aykırılık durumunda üyeliği askıya alma veya sonlandırma hakkına sahiptir.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">4. Kullanım Koşulları ve Yükümlülükler</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kullanıcı, Uygulama'yı yalnızca kişisel amaçlarla kullanabilir; ticari, rekabetçi veya yasa dışı faaliyetlerde kullanamaz.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Yapay zekâ çıktıları yalnızca rehberlik amaçlıdır; bu öneriler profesyonel teşhis veya tedavi yerine geçmez.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kullanıcı, sistemde paylaştığı tüm verilerin doğru, güncel ve kendisine ait olduğunu beyan eder.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Uygulama üzerinden yapılan iletişimlerde etik, saygılı ve yasal sınırlar içinde davranmak zorundadır.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">5. Ücretlendirme ve Ödeme</h2>
              <p className="text-muted-foreground leading-relaxed">
                Uygulama'nın temel fonksiyonları ücretsiz olabilir; ancak Şirket bazı hizmetleri (premium üyelik, uzman görüşmesi, raporlama vb.) ücretli sunabilir.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Ücretli hizmetlerde, Kullanıcı ödeme işlemi öncesinde bilgilendirilir ve onay vermedikçe ücret tahakkuk ettirilmez.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">6. Fikri Mülkiyet Hakları</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Uygulama'nın tüm bileşenleri (tasarım, yazılım kodları, görseller, veritabanı, yapay zekâ modeli vb.) Kilim Health Teknoloji A.Ş.'ye aittir.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kullanıcı, bu içerikleri izinsiz kopyalayamaz, çoğaltamaz, dağıtamaz veya tersine mühendislik yapamaz.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kullanıcı tarafından paylaşılan içerikler (örneğin mesajlar, sorular, yanıtlar) Şirket tarafından anonimleştirilerek yapay zekâ sisteminin geliştirilmesinde kullanılabilir.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">7. Kişisel Verilerin Korunması</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kullanıcı tarafından paylaşılan tüm kişisel veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) hükümlerine uygun şekilde işlenir.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Veri işleme süreçleri Aydınlatma Metni ve Açık Rıza Beyanı ile belirlenmiştir.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kullanıcı, KVKK kapsamında veri işleme, saklama ve aktarım süreçleri hakkında bilgilendirilmiştir.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">8. Sorumluluk Reddi</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Uygulama, kullanıcı ilişkilerinde nihai sonuç garantisi vermez.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Şirket, yapay zekâ tarafından yapılan önerilerin uygulanması sonucunda doğabilecek dolaylı veya doğrudan zararlardan sorumlu tutulamaz.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Hizmet, "olduğu gibi" sunulur; sistemsel hatalar, teknik kesintiler veya üçüncü taraf servis arızalarından dolayı Şirket sorumlu değildir.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">9. Fesih</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kullanıcı, hesabını dilediği zaman silebilir.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Şirket, kullanıcı sözleşmesine aykırı davranan kişilerin hesaplarını önceden bildirimde bulunmaksızın kapatma hakkına sahiptir.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Hesap silindiğinde, yasal zorunluluklar dışında kişisel veriler ilgili politikalar uyarınca imha edilir.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">10. Uygulanacak Hukuk ve Yetki</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bu sözleşme Türk Hukuku'na tabidir.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Taraflar arasında doğabilecek uyuşmazlıklarda İstanbul (Anadolu) Mahkemeleri ve İcra Daireleri yetkilidir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">11. Yürürlük</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kullanıcı, Uygulama'ya üye olup bu sözleşmeyi onayladığı anda sözleşme yürürlüğe girer.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Şirket, gerekli gördüğünde sözleşme hükümlerinde değişiklik yapabilir; güncel versiyon Uygulama'da yayımlandığı tarihte yürürlüğe girer.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
