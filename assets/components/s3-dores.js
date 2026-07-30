document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S3 — DORES DO CLIENTE -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-[#F4F8F5]" id="s3" data-i="4">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Problemas identificados</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div>
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Diagnóstico</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Os desafios do<br><em class="text-[#6EBF8B] not-italic">mercado de vinis.</em></h2>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-8 flex-1">

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Mercado fragmentado</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Vendas de vinis espalhadas em Facebook, OLX e grupos informais, sem um ponto central. O comprador precisa garimpar em múltiplas plataformas sem nenhuma padronização.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Informações inconsistentes</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Fotos ruins, preços sem referência e descrições vagas sobre o estado de conservação tornam a compra arriscada e afastam compradores mais exigentes.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Golpes e falsificações</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Plataformas descentralizadas não oferecem verificação de vendedores. Golpes com produtos que não chegam ou não condizem com o anúncio são recorrentes no nicho.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Referência global desatualizada</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">O Discogs, maior plataforma do mundo, tem interface considerada defasada pelos colecionadores. No Brasil, nenhuma solução moderna preenche essa lacuna.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Ausência de credenciamento</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Não existe mecanismo de verificação para lojistas sérios. Quem vende profissionalmente fica no mesmo nível de quem faz um anúncio avulso, sem distinção de confiabilidade.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Dificuldade de migrar estoque</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Lojistas com grandes coleções cadastradas no Discogs ou em planilhas não têm como importar esse acervo facilmente para plataformas alternativas, travando a migração.</div>
      </div>

    </div>
  </div>
</section>
`);
