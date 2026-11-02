# Uygulama 1.1 — Ağ Bağlantısını Tanıma: Örnek Çözüm

Bu dosya, [Bölüm 1](../../../notlar/01-internet-ve-web.md) Uygulama 1.1'in örnek çözümüdür. Komutlar Windows Terminal (PowerShell) içinde çalıştırılır; macOS/Linux karşılıkları ayrıca verilmiştir. Çıktılardaki adresler bilgisayardan bilgisayara ve ağdan ağa değişir; burada gösterilen değerler temsilîdir ve belgeleme amacıyla ayrılmış adres bloklarından (RFC 5737, RFC 3849) seçilmiştir.

## 1. Kendi IP adresini bulma

```text
ipconfig
```

(macOS/Linux: `ip addr` veya `ifconfig`)

İlgili kısım (temsilî):

```text
Wireless LAN adapter Wi-Fi:
   IPv6 Address. . . . . . . . . . . : 2001:db8:10:20::1a
   IPv4 Address. . . . . . . . . . . : 192.168.1.34
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.1.1
```

| Satır | Anlamı |
|---|---|
| IPv4 Address | Bilgisayarın yerel ağdaki adresi. `192.168.x.x`, `10.x.x.x` ve `172.16–31.x.x` özel (private) bloklardır; İnternet'te doğrudan yönlendirilmez (RFC 1918). |
| Subnet Mask | Adresin hangi kısmının ağı, hangi kısmının cihazı gösterdiğini belirler. `255.255.255.0` = ilk üç sekizli ağ adresidir. |
| Default Gateway | Yerel ağ dışına giden paketlerin teslim edildiği yönlendirici (ev modemi/router). |
| IPv6 Address | Aynı arabirimin IPv6 adresi (varsa). |

**Kendinizi sınayın (cevap):** Okulda ve evde farklı IPv4 adresi görülmesi normaldir; adresi o ağdaki yönlendirici DHCP ile dağıtır. İnternet'te görünen ortak (public) adres ise genellikle yönlendiricinin adresidir (NAT).

## 2. Erişilebilirliği sınama

```text
ping www.nku.edu.tr
```

(macOS/Linux: `ping -c 4 www.nku.edu.tr`)

Temsilî çıktı:

```text
Pinging www.nku.edu.tr [203.0.113.63] with 32 bytes of data:
Reply from 203.0.113.63: bytes=32 time=6ms TTL=58
Reply from 203.0.113.63: bytes=32 time=5ms TTL=58
...
Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)
```

- Köşeli parantezdeki değer, alan adının DNS ile çevrildiği IP adresidir.
- `time=` gidiş-dönüş süresidir (ms).
- Bazı sunucular güvenlik nedeniyle `ping` (ICMP) isteklerine yanıt vermez; "Request timed out" görülmesi sitenin kapalı olduğu anlamına gelmez.

## 3. Paketlerin izlediği yolu izleme

```text
tracert -d -h 15 www.nku.edu.tr
```

(macOS/Linux: `traceroute -n -m 15 www.nku.edu.tr`)

`-d` ad çözümlemeyi kapatır (daha hızlı), `-h 15` en fazla 15 atlama (hop) gösterir.

Temsilî çıktı:

```text
  1     2 ms     1 ms     1 ms  192.168.1.1
  2     7 ms     6 ms     6 ms  198.51.100.1
  3     *        *        *     Request timed out.
  4    11 ms    10 ms    10 ms  198.51.100.77
  ...
  9    14 ms    13 ms    13 ms  203.0.113.63
Trace complete.
```

- 1. satır her zaman varsayılan ağ geçididir (ev/okul yönlendiricisi).
- Sonraki satırlar İnternet servis sağlayıcısının ve omurganın yönlendiricileridir.
- `*` görülen satırlar, o yönlendiricinin bu tür sorulara yanıt vermediğini gösterir; paket yine de iletilmiştir.

**Kendinizi sınayın (cevap):** Yurt dışındaki bir site (ör. `www.w3.org`) için atlama sayısı ve süre genellikle artar; paketler ülke çıkış noktalarından ve deniz altı/kara kablolarından geçer.
