document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4b — MOCKUP / SOLUÇÃO VISUAL -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s4b" data-i="6">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">A solução · buyAdisco</span>
  </div>
  <div class="flex-1 grid grid-cols-2 gap-0 pt-20 overflow-hidden">
    <!-- left -->
    <div class="s4b-left px-14 py-12 flex flex-col justify-center border-r border-[#DDE8E2]">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Prévia do produto</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-5">A solução<br><em class="text-[#6EBF8B] not-italic">em suas mãos.</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-[18px]">Um marketplace dedicado ao universo do vinil — com experiência moderna, vendedores verificados e IA para facilitar o cadastro de qualquer coleção.</p>
      <div class="flex flex-col gap-3 mt-7">
        <div class="s4b-feature flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Marketplace de Vinis</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Compra e venda P2P e entre lojistas com pagamento seguro</div>
          </div>
        </div>
        <div class="s4b-feature flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Vendedores Verificados</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Selo de credenciamento e controle de confiabilidade</div>
          </div>
        </div>
        <div class="s4b-feature flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">IA no Cadastro</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Cadastro automático via código de barras, foto ou Discogs</div>
          </div>
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="s4b-right flex items-center justify-center relative overflow-hidden" style="background:linear-gradient(160deg,#F0FDF4 0%,#DCFCE7 100%);">
      <img src="assets/images/mockup_vinil.png" alt="buyAdisco mockup" style="height:480px; width:auto; object-fit:contain; filter:drop-shadow(0 24px 48px rgba(27,94,32,.22));">
    </div>
  </div>
</section>
`);
