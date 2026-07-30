document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S6B — BÔNUS / FECHE AGORA -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s6b" data-i="8">

  <!-- glows decorativos de fundo -->
  <div class="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none" style="background:radial-gradient(circle,rgba(29,185,84,.10) 0%,transparent 70%);"></div>
  <div class="absolute bottom-0 left-[5%] w-[320px] h-[320px] rounded-full pointer-events-none" style="background:radial-gradient(circle,rgba(29,185,84,.06) 0%,transparent 70%);"></div>

  <!-- header bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Oferta Exclusiva</span>
  </div>

  <div class="flex-1 grid grid-cols-2 gap-0 pt-20">

    <!-- coluna esquerda -->
    <div class="px-14 py-12 flex flex-col justify-center border-r border-[#DDE8E2]">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Feche em Agosto</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-5">O que você ganha<br><em class="text-[#6EBF8B] not-italic"> fechando agora.</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-10 max-w-[400px]">Contratos assinados até o fim de agosto levam um site institucional completo sem custo adicional, entregue em até 30 dias, antes mesmo do app ficar pronto.</p>

      <!-- lista de benefícios -->
      <div class="flex flex-col gap-3 mt-2">
        <div class="flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Presença digital imediata</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Seu site no ar enquanto o app é desenvolvido</div>
          </div>
        </div>
        <div class="flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Entrega em até 30 dias</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">A partir da assinatura do contrato</div>
          </div>
        </div>
        <div class="flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Sem custo adicional</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Economia de <strong class="text-[#158A3E] font-bold">R$ 4.000</strong> no seu investimento</div>
          </div>
        </div>
      </div>
    </div>

    <!-- coluna direita -->
    <div class="h-full flex flex-col gap-3 px-8 py-8" style="background:linear-gradient(160deg,#F0FDF4 0%,#DCFCE7 100%);">

      <!-- topo: só o badge -->
      <div class="flex-shrink-0 flex items-center gap-3">
        <div class="inline-flex items-center gap-[6px] bg-[#1DB954] text-white text-[10px] font-black tracking-[.1em] uppercase px-3 py-[5px] rounded-full">
          <span class="relative flex h-[8px] w-[8px]">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
            <span class="relative inline-flex h-[8px] w-[8px] rounded-full bg-white"></span>
          </span>
          Bônus exclusivo · Ago/2026
        </div>
        <span class="text-[10px] font-bold tracking-[.14em] uppercase text-[#158A3E]/60">Site Institucional</span>
      </div>

      <!-- mockup -->
      <div class="select-none pointer-events-none relative flex-1 flex items-center justify-center" style="max-height:300px;">
        <div class="rounded-[14px] overflow-hidden border border-[#DDE8E2] shadow-[0_24px_64px_rgba(27,94,32,.18)] w-[62%]">
          <!-- barra do browser -->
          <div class="flex items-center gap-1.5 px-3 py-[9px] bg-[#F4F8F5] border-b border-[#DDE8E2]">
            <div class="w-[8px] h-[8px] rounded-full bg-[#FF5F57]/75"></div>
            <div class="w-[8px] h-[8px] rounded-full bg-[#FFBD2E]/75"></div>
            <div class="w-[8px] h-[8px] rounded-full bg-[#28C840]/75"></div>
            <div class="flex-1 mx-2 bg-[#DDE8E2] rounded-full h-[14px] flex items-center px-2.5">
              <span style="font-size:7px;color:#8FA398;font-family:monospace;white-space:nowrap;overflow:hidden;">buyadisco.com.br</span>
            </div>
          </div>
          <!-- screenshot — site institucional buyAdisco -->
          <div style="height:220px;overflow:hidden;background:#060F06;position:relative;font-family:sans-serif;">

            <!-- glow de fundo -->
            <div style="position:absolute;top:20px;right:60px;width:160px;height:160px;background:radial-gradient(ellipse,rgba(109,196,54,.18) 0%,transparent 65%);pointer-events:none;"></div>

            <!-- navbar — altura fixa 28px -->
            <div style="height:28px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid rgba(255,255,255,.06);">
              <div style="display:flex;align-items:center;gap:4px;">
                <div style="width:14px;height:14px;border-radius:50%;background:#6DC436;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#060F06" stroke-width="3.5"/><circle cx="12" cy="12" r="3" fill="#060F06"/></svg>
                </div>
                <span style="color:#fff;font-size:6.5px;font-weight:800;line-height:1;">buyAdisco</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="color:rgba(255,255,255,.35);font-size:5.5px;line-height:1;">O app</span>
                <span style="color:rgba(255,255,255,.35);font-size:5.5px;line-height:1;">Catálogo</span>
                <span style="color:rgba(255,255,255,.35);font-size:5.5px;line-height:1;">Contato</span>
                <span style="display:inline-block;background:#6DC436;border-radius:3px;padding:2px 6px;color:#060F06;font-size:5.5px;font-weight:700;line-height:1.4;">Baixar grátis</span>
              </div>
            </div>

            <!-- hero — colunas com largura fixa + centralizadas -->
            <div style="height:192px;display:flex;align-items:center;justify-content:center;padding:0 28px;gap:20px;">

              <!-- coluna texto — largura fixa -->
              <div style="width:190px;flex-shrink:0;display:flex;flex-direction:column;gap:7px;">
                <div style="display:inline-flex;align-items:center;gap:3px;background:rgba(109,196,54,.12);border:1px solid rgba(109,196,54,.22);border-radius:20px;padding:2px 6px;align-self:flex-start;">
                  <div style="width:3.5px;height:3.5px;border-radius:50%;background:#6DC436;flex-shrink:0;"></div>
                  <span style="color:#6DC436;font-size:4.5px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;white-space:nowrap;">Marketplace · iOS & Android</span>
                </div>
                <div style="font-size:16px;font-weight:900;color:#fff;line-height:1.08;letter-spacing:-.03em;">Seus discos<br><span style="color:#6DC436;">favoritos.</span></div>
                <div style="font-size:5px;color:rgba(255,255,255,.38);line-height:1.6;">Compre, venda e colecione vinis raros. O marketplace para quem leva música a sério.</div>
                <div style="display:flex;gap:4px;">
                  <div style="display:inline-flex;align-items:center;gap:2.5px;background:#6DC436;border-radius:4px;padding:4px 8px;">
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="#060F06"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.4.07 2.38.74 3.2.8 1.22-.24 2.39-.93 3.7-.84 1.57.12 2.75.72 3.53 1.84-3.24 1.94-2.7 6.1.57 7.28zm-3.27-14c-.06 2.3-2.1 4.17-4.22 4.02C9.26 7.82 11 5.5 13.78 6.28z"/></svg>
                    <span style="color:#060F06;font-size:5px;font-weight:700;line-height:1;">App Store</span>
                  </div>
                  <div style="display:inline-flex;align-items:center;gap:2.5px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:4px 8px;">
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="rgba(255,255,255,.55)"><path d="M3.18 23.76c.33.18.72.17 1.08-.02l12.43-7.16-2.55-2.55L3.18 23.76zM20.77 9.29l-2.62-1.51-2.87 2.87 2.87 2.87 2.65-1.52c.76-.43.76-1.28-.03-1.71zM2.01 1.15C1.76 1.42 1.6 1.83 1.6 2.35v19.3c0 .52.16.93.41 1.2l.07.06 10.81-10.81v-.23L2.08 1.09l-.07.06zM14.09 11.1l-2.85-2.85-8.07-4.65 10.92 7.5z"/></svg>
                    <span style="color:rgba(255,255,255,.55);font-size:5px;line-height:1;">Google Play</span>
                  </div>
                </div>
                <div style="display:flex;align-items:center;gap:4px;">
                  <div style="display:flex;align-items:center;">
                    <div style="width:9px;height:9px;border-radius:50%;background:#6DC436;border:1.5px solid #060F06;"></div>
                    <div style="width:9px;height:9px;border-radius:50%;background:#4CAF50;border:1.5px solid #060F06;margin-left:-3px;"></div>
                    <div style="width:9px;height:9px;border-radius:50%;background:#388E3C;border:1.5px solid #060F06;margin-left:-3px;"></div>
                  </div>
                  <span style="font-size:4.5px;color:rgba(255,255,255,.3);line-height:1;">+12k colecionadores</span>
                </div>
              </div>

              <!-- coluna phone — largura fixa -->
              <div style="flex-shrink:0;width:90px;height:176px;position:relative;">
                <div style="position:absolute;inset:-10px;background:radial-gradient(ellipse,rgba(109,196,54,.28) 0%,transparent 65%);filter:blur(12px);pointer-events:none;"></div>
                <div style="position:absolute;right:0;top:8px;bottom:8px;width:72px;border-radius:10px;overflow:hidden;box-shadow:0 10px 32px rgba(0,0,0,.65),0 0 0 1px rgba(255,255,255,.08);">
                  <img src="assets/images/mockup_vinil.png" alt="App buyAdisco" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block;">
                </div>
                <div style="position:absolute;top:16px;left:0;background:rgba(20,20,20,.85);border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:3px 6px;white-space:nowrap;">
                  <div style="font-size:6.5px;font-weight:800;color:#fff;line-height:1.2;">4.9 ★</div>
                  <div style="font-size:4px;color:rgba(255,255,255,.4);line-height:1.2;">App Store</div>
                </div>
                <div style="position:absolute;bottom:24px;left:0;background:rgba(20,30,20,.9);border:1px solid rgba(109,196,54,.3);border-radius:6px;padding:3px 6px;white-space:nowrap;">
                  <div style="font-size:5px;font-weight:700;color:#6DC436;line-height:1.2;">+800 discos</div>
                  <div style="font-size:4px;color:rgba(255,255,255,.38);line-height:1.2;">adicionados hoje</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- bloco de preço — inline -->
      <div class="flex-shrink-0 px-1">
        <div class="text-[10px] font-semibold tracking-[.08em] uppercase text-[#8FA398] mb-2">Site Institucional</div>
        <div class="flex items-baseline gap-3">
          <span class="font-black leading-none tracking-[-0.03em] text-[#8FA398] line-through" style="font-size:clamp(22px,2.4vw,28px);">R$ 4.000</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BBF7D0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          <span class="font-black leading-none tracking-[-0.04em] text-[#1DB954]" style="font-size:clamp(30px,3.2vw,40px);">GRÁTIS</span>
        </div>
        <div class="text-[10px] text-[#8FA398] mt-1.5">incluído no contrato</div>
      </div>

      <!-- rodapé: badges -->
      <div class="flex-shrink-0 flex items-center gap-2">
        <div class="flex items-center gap-1.5 bg-[#F4F8F5] rounded-full px-3 py-[7px]">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8FA398" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span class="text-[11px] font-medium text-[#5C6E64]">Entrega em <strong class="text-[#0C1410] font-semibold">30 dias</strong></span>
        </div>
        <div class="flex items-center gap-1.5 bg-[#FFFBEB] rounded-full px-3 py-[7px]">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span class="text-[11px] font-medium text-[#92400E]">Válido até 31/ago</span>
        </div>
      </div>

    </div>
  </div>
</section>
`);
