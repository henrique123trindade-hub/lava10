import React from 'react';

interface Lava10EmblemProps {
  className?: string;
  size?: number | string;
  title?: string;
}

/**
 * Emblema oficial da Lava10 Lavanderia Autoatendimento
 * Vetorizado com alta fidelidade a partir do logo circular oficial da marca:
 * - Fundo circular azul royal (#143A8C)
 * - Textos em arco "LAVANDERIA" e "AUTO ATENDIMENTO"
 * - Máquina de lavar comercial frontal e cesto com roupas dobradas
 * - Tipografia em destaque "LAVA 10" com acabamento geométrico
 */
export const Lava10Emblem: React.FC<Lava10EmblemProps> = ({
  className = '',
  size = '100%',
  title = 'Lava10 Lavanderia Autoatendimento',
}) => {
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={`select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <defs>
        {/* Curvas de caminho para os textos em arco superior e inferior */}
        {/* Arco superior: sentido horário do quadrante esquerdo ao direito */}
        <path
          id="lava10-arc-top"
          d="M 68 250 A 182 182 0 1 1 432 250"
          fill="none"
        />
        {/* Arco inferior: sentido horário da direita para a esquerda invertido para leitura normal */}
        <path
          id="lava10-arc-bottom"
          d="M 85 270 A 175 175 0 0 0 415 270"
          fill="none"
        />

        {/* Gradiente sutil de profundidade */}
        <linearGradient id="machine-grad" x1="140" y1="110" x2="270" y2="290" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E9EFF9" />
        </linearGradient>

        <linearGradient id="drum-grad" x1="170" y1="160" x2="250" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#143A8C" />
          <stop offset="50%" stopColor="#1C4CB7" />
          <stop offset="100%" stopColor="#0D2660" />
        </linearGradient>
      </defs>

      {/* Círculo Principal - Azul Royal Oficial Lava10 */}
      <circle cx="250" cy="250" r="248" fill="#143A8C" />

      {/* Anéis Circulares Brancos (Bordas concêntricas) */}
      <circle cx="250" cy="250" r="238" stroke="#FFFFFF" strokeWidth="5.5" fill="none" />
      <circle cx="250" cy="250" r="218" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.95" />
      <circle cx="250" cy="250" r="185" stroke="#FFFFFF" strokeWidth="4.5" fill="none" />
      <circle cx="250" cy="250" r="176" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.9" />

      {/* Texto Superior em Arco: LAVANDERIA */}
      <text
        fill="#FFFFFF"
        fontSize="34"
        fontWeight="900"
        fontFamily="Montserrat, Inter, system-ui, sans-serif"
        letterSpacing="8"
      >
        <textPath href="#lava10-arc-top" startOffset="50%" textAnchor="middle">
          LAVANDERIA
        </textPath>
      </text>

      {/* Texto Inferior em Arco: AUTO ATENDIMENTO */}
      <text
        fill="#FFFFFF"
        fontSize="25"
        fontWeight="800"
        fontFamily="Montserrat, Inter, system-ui, sans-serif"
        letterSpacing="6.5"
      >
        <textPath href="#lava10-arc-bottom" startOffset="50%" textAnchor="middle">
          AUTO ATENDIMENTO
        </textPath>
      </text>

      {/* ========================================================
          ILUSTRAÇÃO CENTRAL: MÁQUINA DE LAVAR + CESTO DE ROUPAS
         ======================================================== */}
      <g transform="translate(10, 5)">
        {/* --- Máquina de Lavar Profissional (Perspectiva 2.5D) --- */}
        <g id="washing-machine">
          {/* Sombra / Borda externa da máquina */}
          <polygon
            points="145,125 285,145 272,305 132,285"
            fill="#0E2863"
            opacity="0.4"
          />

          {/* Face frontal da máquina */}
          <polygon
            points="140,120 270,140 258,295 128,275"
            fill="url(#machine-grad)"
            stroke="#143A8C"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Painel de Controle Superior */}
          <polygon
            points="142,123 268,142 265,165 139,146"
            fill="#DDE7F6"
            stroke="#143A8C"
            strokeWidth="1.5"
          />

          {/* Gaveta de Sabão (esquerda) */}
          <polygon
            points="146,131 184,137 182,154 144,148"
            fill="#FFFFFF"
            stroke="#143A8C"
            strokeWidth="1.5"
          />
          {/* Ranhuras da gaveta */}
          <line x1="150" y1="140" x2="178" y2="144" stroke="#143A8C" strokeWidth="1" />
          <line x1="149" y1="144" x2="177" y2="148" stroke="#143A8C" strokeWidth="1" />

          {/* Botão Seletor Rotativo (centro do painel) */}
          <ellipse
            cx="224"
            cy="151"
            rx="7"
            ry="7.5"
            fill="#FFFFFF"
            stroke="#143A8C"
            strokeWidth="1.5"
          />
          <circle cx="224" cy="151" r="3" fill="#143A8C" />

          {/* Luzes indicadoras do painel */}
          <line x1="242" y1="153" x2="260" y2="156" stroke="#143A8C" strokeWidth="2" strokeDasharray="3 2" />

          {/* Óculo Central da Máquina (Porta de Vidro) */}
          <ellipse
            cx="198"
            cy="216"
            rx="45"
            ry="48"
            fill="#FFFFFF"
            stroke="#143A8C"
            strokeWidth="4"
          />
          <ellipse
            cx="198"
            cy="216"
            rx="36"
            ry="39"
            fill="url(#drum-grad)"
            stroke="#FFFFFF"
            strokeWidth="2.5"
          />
          {/* Brilho / Reflexo do tambor de vidro */}
          <path
            d="M 174 200 A 28 30 0 0 1 218 190"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          {/* Ondulação interna das roupas / tambor */}
          <ellipse
            cx="198"
            cy="217"
            rx="18"
            ry="20"
            fill="none"
            stroke="#5C85DB"
            strokeWidth="2"
            opacity="0.6"
          />

          {/* Painel inferior de filtro */}
          <polygon
            points="224,258 250,262 248,278 222,274"
            fill="#DDE7F6"
            stroke="#143A8C"
            strokeWidth="1.5"
          />
        </g>

        {/* --- Cesto de Roupa com Roupas Dobradas (Lado Direito) --- */}
        <g id="laundry-basket">
          {/* Corpo do Cesto */}
          <polygon
            points="260,172 342,158 328,266 268,272"
            fill="#FFFFFF"
            stroke="#143A8C"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Grade / Trança do Cesto (Linhas verticais e horizontais) */}
          <g stroke="#143A8C" strokeWidth="1.5" opacity="0.85">
            {/* Verticais */}
            <line x1="278" y1="172" x2="282" y2="268" />
            <line x1="294" y1="168" x2="296" y2="268" />
            <line x1="310" y1="164" x2="310" y2="267" />
            <line x1="326" y1="161" x2="322" y2="267" />

            {/* Horizontais */}
            <line x1="264" y1="190" x2="338" y2="178" />
            <line x1="265" y1="210" x2="335" y2="198" />
            <line x1="266" y1="230" x2="332" y2="218" />
            <line x1="267" y1="250" x2="330" y2="238" />
          </g>

          {/* Montanha de Roupas Limpas saindo do cesto */}
          {/* Camada 1: Base de toalhas/roupas */}
          <path
            d="M 252 176 
               C 246 160, 260 142, 280 144 
               C 292 128, 320 126, 334 142 
               C 346 142, 355 156, 348 172 
               Z"
            fill="#FFFFFF"
            stroke="#143A8C"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Camada 2: Dobras superiores do tecido */}
          <path
            d="M 265 160 C 275 148, 305 146, 325 158"
            fill="none"
            stroke="#143A8C"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 280 145 C 295 136, 315 138, 326 148"
            fill="none"
            stroke="#143A8C"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Dobra de toalha caindo suavemente para fora */}
          <path
            d="M 288 152 
               C 292 165, 308 190, 316 192 
               C 324 192, 326 178, 324 165"
            fill="#F2F6FC"
            stroke="#143A8C"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* ========================================================
          TIPOGRAFIA PRINCIPAL DA MARCA: "LAVA 10"
         ======================================================== */}
      <g id="brand-typography">
        {/* Arco de Apoio / Sublinhado sob o numeral 10 */}
        <path
          d="M 160 412 C 215 428, 285 428, 340 412"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Palavra "LAVA" com traços geométricos em perspectiva dinâmica */}
        <text
          x="250"
          y="348"
          fill="#FFFFFF"
          fontSize="68"
          fontWeight="900"
          fontFamily="Montserrat, Inter, system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="4"
        >
          LAVA
        </text>

        {/* Numeral "10" imponente em branco puro */}
        <text
          x="250"
          y="410"
          fill="#FFFFFF"
          fontSize="76"
          fontWeight="900"
          fontFamily="Montserrat, Inter, system-ui, sans-serif"
          textAnchor="middle"
          letterSpacing="2"
        >
          10
        </text>
      </g>
    </svg>
  );
};
