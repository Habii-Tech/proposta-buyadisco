document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S1 — CAPA -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col" id="s1" data-i="0" style="background:linear-gradient(110deg, #1F2B23 0%, #152018 38%, #0D1208 60%, #080B06 100%);">
  <div class="bg-grid"></div>
  <!-- glow Habii (esquerda) -->
  <div class="absolute left-0 top-0 w-[50%] h-full pointer-events-none" style="background:radial-gradient(ellipse 80% 70% at 15% 50%, rgba(29,185,84,.09) 0%, transparent 65%)"></div>
  <!-- glow cliente / lime (direita) -->
  <div class="absolute right-0 top-0 w-[55%] h-full pointer-events-none" style="background:radial-gradient(ellipse 70% 65% at 80% 48%, rgba(110,215,100,.10) 0%, transparent 60%)"></div>
  <!-- bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <a class="flex items-center no-underline" href="#">
      <img src="assets/images/logo.png" alt="Habii.tech" style="height:28px;width:auto;display:block;margin-left:30px">
    </a>
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-white/30">Proposta Comercial · 2026</span>
  </div>
  <!-- body -->
  <div class="relative z-[5] flex-1 grid grid-cols-2 gap-0 items-center pt-[88px] px-16 pb-8">
    <div>
      <div class="inline-flex items-center gap-[7px] bg-[rgba(29,185,84,.12)] border border-[rgba(29,185,84,.28)] text-[#1DB954] text-[11px] font-bold px-[14px] py-[6px] rounded-full tracking-[.08em] uppercase mb-7">
        <span class="w-[5px] h-[5px] bg-[#1DB954] rounded-full block"></span>Proposta Comercial · 2026
      </div>
      <h1 class="text-[clamp(52px,6vw,82px)] font-black leading-[.95] tracking-[-0.04em] text-white mb-6">Proposta<br><em class="text-[#1DB954] not-italic">Comercial</em><br><span class="text-white/20"> buyAdisco</span></h1>
      <p class="text-[17px] text-white/45 leading-[1.72] max-w-[460px] mb-[52px]">Desenvolvimento de <strong class="text-white/75 font-semibold">aplicativo mobile + painel administrativo web</strong> para o marketplace de vinis de <strong class="text-white/75 font-semibold">Gustavo Ceschin, no Brasil</strong></p>
    </div>
    <!-- Phone mockup -->
    <div style="display:flex; justify-content:center; align-items:center; position:relative; z-index:5;">
      <img src="assets/images/mockup_vinil.png" alt="buyAdisco mockup" style="max-height:520px; width:auto; object-fit:contain; filter:drop-shadow(0 32px 60px rgba(0,0,0,.55));">
    </div>
  </div>
</section>
`);
