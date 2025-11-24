export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-xl mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Kilim Yasal
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Kilim için önemli yasal belgeler ve politikalar. Gizlilik uygulamalarımızı ve hizmet şartlarımızı okuyun.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="/terms-of-use" className="text-muted-foreground hover:text-accent transition-colors">
                  Kullanım Koşulları
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">İletişim</h4>
            <p className="text-sm text-muted-foreground">info@kilim.app</p>
          </div>
        </div>
        <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Kilim Health Teknoloji A.Ş. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
