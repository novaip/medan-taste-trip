/**
 * AI Assistant Chat Widget
 * Specialist for Medan Food & Travel Media Kit, Brand Deals, and Local Recommendations
 */

const KNOWLEDGE_BASE = [
  {
    keywords: ['harga', 'rate', 'rate card', 'biaya', 'tarif', 'budget', 'ongkos', 'fee', 'bayar', 'paket berapa'],
    response: `💰 <strong>Estimasi Rate Card & Paket Kolaborasi:</strong><br><br>
• <strong>Dine & Review (Resto/Cafe):</strong> Mulai Rp 1.5jt – Rp 2.5jt (Reels/TikTok + Google Review Lvl 8).<br>
• <strong>Staycation & Wisata (Hotel/Resort):</strong> Mulai Rp 3jt – Rp 5jt (2x Cinematic Reels + Story Highlights).<br>
• <strong>Grand Opening & Event:</strong> Mulai Rp 2jt – Rp 3.5jt (Kehadiran 3-4 jam + Live Stories + Recap).<br><br>
📄 Untuk detail rincian lengkap & diskon bundling campaign, Anda bisa <a href="./docs/media-kit.pdf" download class="text-brand-primary underline font-bold">Unduh Media Kit PDF</a> atau langsung chat via WhatsApp!`
  },
  {
    keywords: ['statistik', 'audiens', 'followers', 'demografi', 'insight', 'jangkauan', 'views', 'impresi', 'reach', 'umur', 'kota'],
    response: `📊 <strong>Statistik & Demografi Audiens MedanTasteTrip:</strong><br><br>
• <strong>Total Jangkauan Komunitas:</strong> 250.000+ Followers (IG Reels, TikTok & Shorts).<br>
• <strong>Tayangan Bulanan:</strong> 1.8M+ Organic Monthly Views.<br>
• <strong>Domisili Audiens:</strong> <strong>68.4% Kota Medan & Sumatera Utara</strong>, 18% Jabodetabek.<br>
• <strong>Profil Usia:</strong> 72% usia 21–38 tahun (segmen produktif dengan daya beli kuliner & travel tinggi).<br>
• <strong>Average Engagement Rate:</strong> 8.4% (jauh di atas rata-rata industri).`
  },
  {
    keywords: ['dine', 'resto', 'cafe', 'makanan', 'menu', 'review resto', 'kuliner', 'warung', 'food review'],
    response: `🍜 <strong>Paket Dine & Review (Restoran / Cafe):</strong><br><br>
Paket ini dirancang khusus untuk mendatangkan pelanggan baru ke resto/cafe Anda:<br>
1. 1x Video Reels & TikTok resolusi tinggi (Fokus bumbu, visual rasa, & suasana).<br>
2. 3x Live Story Coverage saat kunjungan.<br>
3. Review Bintang 5 di Google Maps (Local Guide Level 8 dengan 5.2M+ views).<br>
4. Hak penggunaan foto/video untuk materi iklan brand Anda selama 30 hari.<br><br>
Tertarik? Anda bisa mengisi <a href="#contact" class="text-brand-primary underline font-bold">Formulir di bawah</a> atau langsung booking via WA!`
  },
  {
    keywords: ['staycation', 'hotel', 'resort', 'villa', 'glamping', 'wisata', 'toba', 'berastagi', 'trip', 'travel'],
    response: `🏨 <strong>Paket Travel & Staycation Experience:</strong><br><br>
Paling diminati hotel, villa, dan resort di Medan, Berastagi, Danau Toba, hingga Bukit Lawang:<br>
1. 2x Video Sinematik (Room Tour eksklusif + Fasilitas dining & view).<br>
2. Highlight Story permanen selama 6 bulan di Instagram.<br>
3. File foto HD kualitas editorial untuk bank konten sosial media Anda.<br>
4. Tautan kode promo / link booking khusus untuk mengukur reservasi langsung.`
  },
  {
    keywords: ['opening', 'launching', 'event', 'acara', 'grand opening', 'kehadiran', 'datang'],
    response: `🎉 <strong>Paket Grand Opening & Event Attendance:</strong><br><br>
Membangun antrean dan viralitas sejak hari pertama buka:<br>
1. Kehadiran langsung tim di lokasi (3–4 jam).<br>
2. Live Instagram Stories interaktif sepanjang acara.<br>
3. 1x Video Recap Acara tayang H+1.<br>
4. Mengundang interaksi komunitas pecinta kuliner Medan agar ramai berkunjung.`
  },
  {
    keywords: ['berapa lama', 'proses', 'jadwal', 'lead time', 'pengerjaan', 'kapan tayang', 'revisi'],
    response: `⏱️ <strong>Jadwal & Proses Pengerjaan:</strong><br><br>
• <strong>Kunjungan / Shooting:</strong> Dijadwalkan H-3 sampai H-7 setelah kesepakatan.<br>
• <strong>Produksi & Editing:</strong> Rata-rata <strong>3–5 hari kerja</strong> setelah kunjungan atau produk diterima.<br>
• <strong>Revisi:</strong> Diberikan kesempatan 1x revisi minor sebelum jadwal posting resmi.<br>
• <strong>Laporan Insights:</strong> Insight performa konten dikirimkan H+7 setelah tayang.`
  },
  {
    keywords: ['rekomendasi kuliner', 'kuliner enak', 'soto', 'mie aceh', 'durian', 'makanan khas medan', 'rekomendasi', 'saran makanan'],
    response: `🍲 <strong>Rekomendasi Kuliner Wajib di Medan:</strong><br><br>
1. <strong>Sarapan:</strong> Soto Kesawan 1956 (kuah santan gurih & udang galah) atau Bihun Bebek Kumango.<br>
2. <strong>Makan Siang/Malam:</strong> Mie Aceh Titi Bobrok (Mie Kepiting basah) & Kari Tabona.<br>
3. <strong>Nongkrong & Kopi:</strong> Kopi Apek Kesawan atau Roastery modern di kawasan Ringroad & Polonia.<br>
4. <strong>Pencuci Mulut:</strong> Durian Ucok & Bolu Gulung Meranti.<br><br>
Punya resto kuliner Medan dan ingin kita review? Beritahu saya nama resto Anda!`
  },
  {
    keywords: ['kontak', 'whatsapp', 'wa', 'hubungi', 'telepon', 'hp', 'pic', 'admin', 'ngomong', 'bicara manusia'],
    response: `💬 <strong>Hubungi Manajemen MedanTasteTrip:</strong><br><br>
Anda bisa langsung tersambung dengan PIC kami sekarang:<br>
• <strong>WhatsApp:</strong> <a href="https://wa.me/6285195902552?text=Halo%20saya%20tertarik%20kolaborasi%20brand" target="_blank" class="text-emerald-600 font-bold underline">+62 851-9590-2552</a><br>
• <strong>Email:</strong> <a href="mailto:kerjasama@medantastetrip.com" class="text-brand-primary font-bold underline">kerjasama@medantastetrip.com</a><br>
• <strong>Lokasi Base:</strong> Kota Medan, Sumatera Utara.<br><br>
Kami aktif merespons setiap hari kerja pukul 09.00 - 18.00 WIB.`
  },
  {
    keywords: ['halo', 'hai', 'hello', 'pagi', 'siang', 'sore', 'malam', 'assalamualaikum', 'tes', 'ping'],
    response: `Halo! 👋 Selamat datang di <strong>MedanTasteTrip</strong>.<br><br>
Saya Asisten AI resmi yang siap menjawab pertanyaan Anda seputar <strong>Media Kit, paket promosi resto/hotel, rate card</strong>, maupun rekomendasi wisata kuliner Medan.<br><br>
Ada yang bisa saya bantu untuk campaign brand Anda hari ini?`
  },
  {
    keywords: ['terima kasih', 'makasih', 'ok', 'oke', 'baik', 'thanks', 'sip', 'mantap'],
    response: `Sama-sama! Senang bisa membantu Anda. 😊<br><br>
Jika sudah siap bekerjasama, jangan ragu untuk mengisi <a href="#contact" class="text-brand-primary underline font-bold">Formulir Kolaborasi</a> atau hubungi WhatsApp kami. Semoga bisnis Anda semakin sukses!`
  }
];

export function initAIChat() {
  const launcher = document.getElementById('chat-launcher');
  const chatWindow = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close-btn');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const messagesContainer = document.getElementById('chat-messages');
  const promptBadge = document.getElementById('chat-prompt-badge');
  const closeBadgeBtn = document.getElementById('close-badge-btn');
  const quickChips = document.querySelectorAll('.chat-chip');

  if (!launcher || !chatWindow || !chatForm || !messagesContainer) return;

  // Show prompt badge after 3.5 seconds to invite user
  setTimeout(() => {
    if (promptBadge && chatWindow.classList.contains('hidden')) {
      promptBadge.classList.remove('hidden');
      requestAnimationFrame(() => {
        promptBadge.classList.remove('opacity-0', 'translate-y-2');
        promptBadge.classList.add('opacity-100', 'translate-y-0');
      });
    }
  }, 3500);

  if (closeBadgeBtn && promptBadge) {
    closeBadgeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      promptBadge.classList.add('hidden');
    });
  }

  function toggleChat(open = null) {
    const isHidden = chatWindow.classList.contains('hidden');
    const shouldOpen = open !== null ? open : isHidden;

    if (shouldOpen) {
      if (promptBadge) promptBadge.classList.add('hidden');
      chatWindow.classList.remove('hidden');
      requestAnimationFrame(() => {
        chatWindow.classList.remove('opacity-0', 'scale-95', 'translate-y-4');
        chatWindow.classList.add('opacity-100', 'scale-100', 'translate-y-0');
        chatInput?.focus();
        scrollToBottom();
      });
    } else {
      chatWindow.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
      chatWindow.classList.add('opacity-0', 'scale-95', 'translate-y-4');
      setTimeout(() => {
        chatWindow.classList.add('hidden');
      }, 250);
    }
  }

  launcher.addEventListener('click', () => toggleChat());
  if (closeBtn) closeBtn.addEventListener('click', () => toggleChat(false));

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function appendUserMessage(text) {
    const userMsg = document.createElement('div');
    userMsg.className = 'flex justify-end mb-3';
    userMsg.innerHTML = `
      <div class="max-w-[80%] bg-brand-primary text-white text-xs sm:text-sm py-2 px-3.5 rounded-2xl rounded-tr-sm shadow-sm leading-relaxed">
        ${escapeHTML(text)}
      </div>
    `;
    messagesContainer.appendChild(userMsg);
    scrollToBottom();
  }

  function appendAIMessage(htmlContent) {
    const aiMsg = document.createElement('div');
    aiMsg.className = 'flex items-start gap-2 mb-3';
    aiMsg.innerHTML = `
      <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
        AI
      </div>
      <div class="max-w-[82%] bg-gray-100 text-brand-dark text-xs sm:text-sm py-2.5 px-3.5 rounded-2xl rounded-tl-sm shadow-sm leading-relaxed">
        ${htmlContent}
      </div>
    `;
    messagesContainer.appendChild(aiMsg);
    scrollToBottom();
  }

  function showTypingIndicator() {
    const typing = document.createElement('div');
    typing.id = 'ai-typing-indicator';
    typing.className = 'flex items-start gap-2 mb-3';
    typing.innerHTML = `
      <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
        AI
      </div>
      <div class="bg-gray-100 text-brand-muted text-xs py-2 px-3.5 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce"></span>
        <span class="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span class="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce [animation-delay:0.4s]"></span>
      </div>
    `;
    messagesContainer.appendChild(typing);
    scrollToBottom();
    return typing;
  }

  function processQuery(query) {
    const lower = query.toLowerCase().trim();

    // Check knowledge base
    for (const item of KNOWLEDGE_BASE) {
      if (item.keywords.some(k => lower.includes(k))) {
        return item.response;
      }
    }

    // Default intelligent fallback
    return `Terima kasih atas pertanyaannya! 😊<br><br>
Pertanyaan spesifik mengenai <em>"${escapeHTML(query)}"</em> bisa langsung dikonsultasikan dengan manajemen kami agar mendapatkan penawaran & jadwal terbaik.<br><br>
👉 <a href="https://wa.me/6285195902552?text=Halo%20PIC%20MedanTasteTrip,%20saya%20ingin%20tanya:%20${encodeURIComponent(query)}" target="_blank" class="inline-flex items-center gap-1 text-emerald-600 font-bold underline mt-1">Chat Langsung via WhatsApp (+62 851-9590-2552)</a>`;
  }

  function handleSend(text) {
    if (!text || !text.trim()) return;
    const cleanText = text.trim();
    appendUserMessage(cleanText);
    if (chatInput) chatInput.value = '';

    const typing = showTypingIndicator();

    // Natural bot delay
    setTimeout(() => {
      typing.remove();
      const reply = processQuery(cleanText);
      appendAIMessage(reply);
    }, 600);
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSend(chatInput.value);
  });

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-question') || chip.textContent;
      handleSend(q);
    });
  });

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
}
