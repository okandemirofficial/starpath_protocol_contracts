import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Gizlilik Politikası | Kilim Health",
  description: "Kilim Health Gizlilik Politikası",
}

export default function PrivacyPolicyPage() {
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
              Kilim Health Gizlilik Politikası
            </h1>
            <p className="text-muted-foreground/70 mb-8 text-sm">Yürürlük Tarihi: 25 Kasım 2025</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">1. Amaç</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bu Gizlilik Politikası, Kilim Health Teknoloji A.Ş. ("Kilim Health", "Biz") tarafından işletilen mobil uygulamayı kullanan kişilerin ("Kullanıcı") gizliliğini korumak ve kişisel verilerin nasıl işlendiği konusunda bilgilendirmek amacıyla hazırlanmıştır.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">2. Toplanan Bilgiler</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Uygulama üzerinden toplanabilecek bilgiler:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Kimlik ve iletişim bilgileri (ad, soyad, e-posta, telefon)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Sağlık ve ilişki bilgileri (kullanıcının paylaştığı duygusal ve psikolojik veriler)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Partner bilgileri (kullanıcı bağlantısı, ilişki durumu vb.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Kullanım verileri (uygulama etkileşimi, görüşme geçmişi, AI önerileri)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Cihaz ve teknik veriler (IP adresi, işletim sistemi, uygulama sürümü)</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">3. Bilgilerin Kullanım Amaçları</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Toplanan bilgiler şu amaçlarla kullanılır:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Yapay zekâ destekli ilişki koçluğu hizmetini sunmak</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kullanıcı deneyimini iyileştirmek ve öneri algoritmalarını geliştirmek</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Partner eşleştirmesini ve iletişim analizini sağlamak</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Hataları tespit etmek ve hizmet kalitesini artırmak</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Gerekli durumlarda kullanıcıyı profesyonel uzmanlara yönlendirmek</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">4. Bilgilerin Paylaşımı</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kilim Health, kullanıcı verilerini üçüncü taraflara satmaz veya ticari amaçla paylaşmaz.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Veriler yalnızca şu durumlarda aktarılabilir:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Hizmetin gerektirdiği teknik altyapı sağlayıcılarına (bulut sunucu, veri depolama vb.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Profesyonel danışmanlara (kullanıcının isteği üzerine ve açık rızasıyla)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Yasal zorunluluk durumunda yetkili kurum ve mercilere</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">5. Veri Güvenliği</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kilim Health, verilerin yetkisiz erişim ve kayıplara karşı korunması için aşağıdaki önlemleri uygular:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Şifreleme ve erişim kontrolü</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Güvenli sunucular ve veri tabanı altyapısı</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Düzenli güvenlik testleri ve log kayıtları</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Personel ve iş ortaklarına yönelik gizlilik yükümlülüğü</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">6. Kullanıcı Hakları</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kullanıcılar, KVKK Madde 11 uyarınca şu haklara sahiptir:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Kişisel verilerinin işlenip işlenmediğini öğrenme</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>İşlenmişse bilgi talep etme</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Yanlış veya eksik verilerin düzeltilmesini veya silinmesini isteme</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Verilerin yurt içi veya yurt dışına aktarımı hakkında bilgi edinme</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Açık rıza verdiği işlemleri her zaman geri çekme</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Bu haklar <span className="text-accent">info@kilimhealth.com</span> adresine e-posta gönderilerek kullanılabilir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">7. Saklama Süresi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kişisel veriler işleme amacı süresince ve ilgili yasal yükümlülükler boyunca saklanır; amacı ortadan kalktığında anonimleştirilir veya imha edilir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">8. Çocuk Kullanıcılar</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Uygulama 18 yaşından küçük kişiler tarafından kullanılamaz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ebeveyn veya vasiden yazılı onay alınmadıkça veri işlenmez.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">9. Güncellemeler</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bu politika, yasal gereklilikler veya hizmet değişiklikleri nedeniyle güncellenebilir.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En güncel versiyon, mobil uygulama içinde "Gizlilik ve KVKK" sekmesinde yayınlanır.
              </p>
            </section>

            <section className="mb-12">
              <div className="mt-4 p-6 bg-card/50 border border-border/40 rounded-xl backdrop-blur">
                <p className="text-muted-foreground leading-relaxed">
                  Kullanıcı, uygulamayı kullanmaya devam ederek bu Gizlilik Politikası'nı okuduğunu, anladığını ve kabul ettiğini beyan eder.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
