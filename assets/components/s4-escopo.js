document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4 — ESCOPO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s4" data-i="5">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Escopo · buyAdisco</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div class="mb-8 flex items-end justify-between gap-8">
      <div>
        <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">O que vamos construir</div>
        <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Escopo<br><em class="text-[#6EBF8B] not-italic">do projeto.</em></h2>
      </div>
      <p class="text-[15px] text-[#5C6E64] max-w-[360px] leading-[1.65] pb-1 flex-shrink-0">App mobile para iOS e Android com marketplace de vinis + <strong class="text-[#1F2B23] font-semibold">painel web administrativo</strong> para gestão da plataforma.</p>
    </div>
    <div class="flex-1 grid gap-4" style="grid-template-columns: repeat(2,1fr);">

      <!-- App Mobile -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">App Mobile · iOS e Android</div>
            <div class="flex items-center gap-[10px] mt-[5px]">
              <span class="text-[10px] font-bold tracking-[.06em] uppercase bg-white/20 text-white px-2 py-[2px] rounded-full">9 no MVP</span>
              <span class="text-[10px] font-semibold text-white/50">+4 na V. Completa</span>
            </div>
          </div>
        </div>
        <div class="px-7 pt-[18px] pb-[14px] flex-1 bg-white overflow-hidden">

          <!-- MVP -->
          <div class="flex items-center gap-2 mb-[6px]">
            <span class="text-[9px] font-black tracking-[.12em] uppercase text-white bg-[#158A3E] px-[8px] py-[3px] rounded-full">MVP</span>
          </div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Cadastro e perfis de usuário comum e lojista</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Vitrine virtual e listagem de acervo</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Compra e venda P2P com comissão por transação</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gateway de pagamento externo (Stripe/Yugo)</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Cadastro de produtos via IA (código de barras e fotos)</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Importação de catálogo via API Discogs e CSV</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Selo de verificação para lojistas credenciados</div>
          <div class="si flex items-center gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Fluxo de avaliações para reputação <span class="text-[9px] font-black tracking-[.1em] uppercase text-[#B45309] bg-[#FEF3C7] border border-[#FDE68A] px-[7px] py-[2px] rounded-full shrink-0">Sugestão</span></div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Notificações por e-mail</div>

          <!-- Versão Completa -->
          <div class="flex items-center gap-2 mt-[10px] mb-[6px]">
            <span class="text-[9px] font-black tracking-[.12em] uppercase text-white bg-[#7C3AED] px-[8px] py-[3px] rounded-full">V. Completa</span>
          </div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#7C3AED]/80 py-[6px] font-medium border-b border-[#EDE9FE] leading-[1.35]">Planos de assinatura mensal para lojistas (In app purchase)</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#7C3AED]/80 py-[6px] font-medium border-b border-[#EDE9FE] leading-[1.35]">Leilões e sistema de ofertas/lances</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#7C3AED]/80 py-[6px] font-medium leading-[1.35]">Feed (Postagens)</div>

        </div>
      </div>

      <!-- Painel Administrativo Web -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Painel Web · Administrativo</div>
            <div class="flex items-center gap-[10px] mt-[5px]">
              <span class="text-[10px] font-bold tracking-[.06em] uppercase bg-white/20 text-white px-2 py-[2px] rounded-full">9 no MVP</span>
              <span class="text-[10px] font-semibold text-white/50">+3 na V. Completa</span>
            </div>
          </div>
        </div>
        <div class="px-7 pt-[18px] pb-[14px] flex-1 bg-white overflow-hidden">

          <!-- MVP -->
          <div class="flex items-center gap-2 mb-[6px]">
            <span class="text-[9px] font-black tracking-[.12em] uppercase text-white bg-[#158A3E] px-[8px] py-[3px] rounded-full">MVP</span>
          </div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gestão de usuários e lojistas</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Aprovação e controle de selos de verificação</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Monitoramento de transações e repasses</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Moderação de anúncios e denúncias</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Dashboard de métricas e receita</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Relatórios de vendas e comissões</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Configurações da plataforma</div>
          <div class="si flex items-baseline gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Envio de notificações em massa</div>
          <div class="si flex items-center gap-3 text-[14px] text-[#374840] py-[7px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gestão de avaliações e reputação <span class="text-[9px] font-black tracking-[.1em] uppercase text-[#B45309] bg-[#FEF3C7] border border-[#FDE68A] px-[7px] py-[2px] rounded-full shrink-0">Sugestão</span></div>

          <!-- Versão Completa -->
          <div class="flex items-center gap-2 mt-[10px] mb-[6px]">
            <span class="text-[9px] font-black tracking-[.12em] uppercase text-white bg-[#7C3AED] px-[8px] py-[3px] rounded-full">V. Completa</span>
          </div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#7C3AED]/80 py-[6px] font-medium border-b border-[#EDE9FE] leading-[1.35]">Gestão de planos e assinaturas</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#7C3AED]/80 py-[6px] font-medium border-b border-[#EDE9FE] leading-[1.35]">Gestão de leilões ativos</div>
          <div class="si flex items-baseline gap-3 text-[13px] text-[#7C3AED]/80 py-[6px] font-medium leading-[1.35]">Moderação do feed de postagens</div>

        </div>
      </div>

    </div>
  </div>
</section>
`);
