# Odoo Dynamic Blog Snippet

Bu modül, Odoo website editörüne **Dynamic Blog Posts** isimli özel bir blok ekler.
Blok, web sitesinde yayınlanmış son blog yazılarını dinamik olarak listeler.

## Desteklenen sürüm
- Odoo 18

## Bağımlılıklar
- website
- website_blog

## Kurulum
1. Zip dosyasını açın.
2. `odoo_dynamic_blog_snippet` klasörünü Odoo `addons` dizininize kopyalayın.
3. Odoo servisiniz yeniden başlatın.
4. Apps menüsünde geliştirici modu açıksa **Update Apps List** yapın.
5. `Website Dynamic Blog Snippet` modülünü kurun.

## Kullanım
1. Website uygulamasına girin.
2. İlgili sayfada **Edit** seçin.
3. Sol taraftaki bloklar içinde **Dynamic Blog Posts** bloğunu bulun.
4. Sayfaya sürükleyip bırakın.
5. Sayfayı kaydedin.

## Notlar
- Sadece `website_published = True` olan blog kayıtları gösterilir.
- Varsayılan olarak 6 kayıt listelenir.
- Görsel alanı olarak `image_1920` kullanılır.
- Blog yazısı yoksa kullanıcıya bilgi mesajı gösterilir.

## Geliştirme
Limit, kategori filtresi, slider yapısı veya snippet options eklemek isterseniz:
- `controllers/main.py`
- `static/src/js/dynamic_blog_snippet.js`
- `views/templates.xml`

dosyalarını genişletebilirsiniz.
