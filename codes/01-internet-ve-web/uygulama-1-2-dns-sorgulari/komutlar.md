# Uygulama 1.2 — DNS Sorguları: Örnek Çözüm

Bu dosya, [Bölüm 1](../../../notlar/01-internet-ve-web.md) Uygulama 1.2'nin örnek çözümüdür. Gerçek çıktılar zamanla ve sorgunun yapıldığı ağa göre değişebilir.

## 1. Alan adının IP adresini bulma

PowerShell:

```powershell
Resolve-DnsName www.nku.edu.tr
```

Örnek çıktı (Kasım 2026, üniversite ağından alınmıştır):

```text
Name           Type TTL  Section IPAddress
----           ---- ---  ------- ---------
www.nku.edu.tr AAAA 3600 Answer  2001:a98:8090:0:193:255:68:63
www.nku.edu.tr A    3600 Answer  193.255.68.63
```

- `A` kaydı IPv4, `AAAA` kaydı IPv6 adresini verir.
- `TTL 3600`: bu yanıt, çözümleyicilerin önbelleğinde en fazla 3600 saniye (1 saat) tutulabilir.

Aynı sorgu, tüm işletim sistemlerinde bulunan `nslookup` ile:

```text
nslookup www.nku.edu.tr
```

Çıktının başındaki `Server:` satırı, sorguyu yanıtlayan **özyinelemeli çözümleyicinin** (ev modemi, okulun veya servis sağlayıcının DNS sunucusu) adresidir. "Non-authoritative answer" ifadesi, yanıtın yetkili sunucudan değil çözümleyicinin önbelleğinden geldiğini belirtir.

## 2. Farklı kayıt türleri

```powershell
Resolve-DnsName nku.edu.tr -Type MX     # e-posta sunucuları
Resolve-DnsName nku.edu.tr -Type NS     # yetkili ad sunucuları
Resolve-DnsName www.w3.org -Type CNAME  # takma ad (varsa)
```

`nslookup` karşılıkları:

```text
nslookup -type=MX nku.edu.tr
nslookup -type=NS nku.edu.tr
```

| Kayıt | Gözlem |
|---|---|
| MX | Üniversitenin e-postasını kabul eden sunucuların adları ve öncelik değerleri (küçük sayı = önce denenir). |
| NS | `nku.edu.tr` bölgesinden sorumlu yetkili ad sunucuları. |
| CNAME | Bir adın başka bir ada yönlendirildiği durumlar (ör. içerik dağıtım ağı kullanan siteler). |

## 3. Belirli bir çözümleyiciye sorma

```powershell
Resolve-DnsName www.nku.edu.tr -Server 1.1.1.1
```

```text
nslookup www.nku.edu.tr 9.9.9.9
```

Farklı ortak çözümleyicilerden (ör. Cloudflare `1.1.1.1`, Quad9 `9.9.9.9`) aynı yanıtın gelmesi beklenir. Bazı kurum ağları güvenlik nedeniyle dış çözümleyicilere giden DNS trafiğini engeller; bu durumda komut zaman aşımı (timeout) hatası verir ve adım ev bağlantısında denenmelidir. Kurum içi bir ağdan sorgu yapıldığında bazı adlar için farklı (iç ağa özgü) yanıtlar görülebilir; buna "bölünmüş DNS" (split-horizon DNS) denir.

## 4. Önbelleği görme ve temizleme (Windows)

```powershell
Get-DnsClientCache | Select-Object -First 10
Clear-DnsClientCache   # yönetici yetkisi gerekebilir
```

(Komut İstemi karşılığı: `ipconfig /displaydns` ve `ipconfig /flushdns`.)

**Kendinizi sınayın (cevap):** `Resolve-DnsName` komutunu art arda iki kez çalıştırınca ikinci yanıttaki TTL değerinin azaldığı görülebilir; bu, yanıtın önbellekten geldiğini ve geri sayımın sürdüğünü gösterir.
