export type LogToken = {
  text: string
  style: 'cmd' | 'sys' | 'ok' | 'active' | 'dim' | 'cursor'
}

export type LogLine = {
  tokens: LogToken[]
  delay: number        // ms after previous line appears
  typewriter?: boolean // if true, characters appear one-by-one (only for cmd lines)
  speed?: number       // ms per character for typewriter (default: 38)
}

export type Scene = {
  id: string
  lines: LogLine[]
  holdDuration: number // ms to hold after last line before clearing
}

export const TERMINAL_SCENES: Scene[] = [

  // ─── SCENE 1: Platform Init ───────────────────────────────
  {
    id: 'scene-init',
    holdDuration: 2800,
    lines: [
      {
        delay: 0,
        typewriter: true,
        speed: 38,
        tokens: [
          { text: '$ ', style: 'active' },
          { text: 'ttt init --workspace acme-corp --agents 6', style: 'cmd' },
        ]
      },
      { delay: 600, tokens: [] }, // blank line
      {
        delay: 200,
        tokens: [
          { text: '[SYS]  ', style: 'sys' },
          { text: 'Resolving workspace config', style: 'sys' },
          { text: '...............  ', style: 'dim' },
          { text: '✓', style: 'ok' },
          { text: '  12ms', style: 'sys' },
        ]
      },
      {
        delay: 180,
        tokens: [
          { text: '[SYS]  ', style: 'sys' },
          { text: 'Mounting tenant namespace: ', style: 'sys' },
          { text: 'acme-corp', style: 'active' },
          { text: '  ', style: 'dim' },
          { text: '✓', style: 'ok' },
          { text: '  8ms', style: 'sys' },
        ]
      },
      { delay: 300, tokens: [] },
      {
        delay: 120,
        tokens: [
          { text: '[AGT]  ', style: 'sys' },
          { text: 'Deploying CRM Agent', style: 'sys' },
          { text: '...............  ', style: 'dim' },
          { text: '✓', style: 'ok' },
          { text: '  LIVE', style: 'active' },
        ]
      },
      {
        delay: 160,
        tokens: [
          { text: '[AGT]  ', style: 'sys' },
          { text: 'Deploying Voice Agent', style: 'sys' },
          { text: '.............  ', style: 'dim' },
          { text: '✓', style: 'ok' },
          { text: '  LIVE', style: 'active' },
        ]
      },
      {
        delay: 140,
        tokens: [
          { text: '[AGT]  ', style: 'sys' },
          { text: 'Deploying OCR Agent', style: 'sys' },
          { text: '...............  ', style: 'dim' },
          { text: '✓', style: 'ok' },
          { text: '  LIVE', style: 'active' },
        ]
      },
      {
        delay: 150,
        tokens: [
          { text: '[AGT]  ', style: 'sys' },
          { text: 'Deploying Finance Agent', style: 'sys' },
          { text: '...........  ', style: 'dim' },
          { text: '✓', style: 'ok' },
          { text: '  LIVE', style: 'active' },
        ]
      },
      { delay: 280, tokens: [] },
      {
        delay: 120,
        tokens: [
          { text: '[NET]  ', style: 'sys' },
          { text: 'Connecting pipeline mesh', style: 'sys' },
          { text: '..........  ', style: 'dim' },
          { text: '✓', style: 'ok' },
          { text: '  4 nodes', style: 'active' },
        ]
      },
      {
        delay: 160,
        tokens: [
          { text: '[NET]  ', style: 'sys' },
          { text: 'API gateway: ', style: 'sys' },
          { text: 'READY', style: 'active' },
          { text: '                     ', style: 'dim' },
          { text: '✓', style: 'ok' },
          { text: '  2ms', style: 'sys' },
        ]
      },
      { delay: 300, tokens: [] },
      {
        delay: 120,
        tokens: [
          { text: '[RUN]  ', style: 'sys' },
          { text: 'Pipeline exec — ', style: 'sys' },
          { text: 'Aventra CRM', style: 'active' },
          { text: '          ', style: 'dim' },
          { text: '142,891', style: 'active' },
          { text: ' ops', style: 'sys' },
        ]
      },
      {
        delay: 100,
        tokens: [
          { text: '[RUN]  ', style: 'sys' },
          { text: 'Accuracy target', style: 'sys' },
          { text: '.....................  ', style: 'dim' },
          { text: '99.92%', style: 'active' },
        ]
      },
      {
        delay: 100,
        tokens: [
          { text: '[RUN]  ', style: 'sys' },
          { text: 'Latency target', style: 'sys' },
          { text: '......................  ', style: 'dim' },
          { text: '165ms', style: 'active' },
        ]
      },
      { delay: 300, tokens: [] },
      {
        delay: 200,
        tokens: [
          { text: '● ', style: 'ok' },
          { text: 'SYS: OPERATIONAL  ', style: 'active' },
          { text: '─────────────────────────────', style: 'dim' },
        ]
      },
      { delay: 200, tokens: [] },
      {
        delay: 300,
        tokens: [
          { text: '> ', style: 'active' },
          { text: '_', style: 'cursor' },
        ]
      },
    ]
  },

  // ─── SCENE 2: Voice Agent Live Run ─────────────────────────
  {
    id: 'scene-voice',
    holdDuration: 2800,
    lines: [
      {
        delay: 0,
        typewriter: true,
        speed: 40,
        tokens: [
          { text: '$ ', style: 'active' },
          { text: 'ttt run --agent voice --stream live', style: 'cmd' },
        ]
      },
      { delay: 500, tokens: [] },
      {
        delay: 200,
        tokens: [
          { text: '[VCE]  ', style: 'sys' },
          { text: 'Model: ', style: 'sys' },
          { text: 'ThreeTier-Voice-3.1', style: 'active' },
          { text: '             fine-tuned', style: 'sys' },
        ]
      },
      {
        delay: 160,
        tokens: [
          { text: '[VCE]  ', style: 'sys' },
          { text: 'Hallucination guard: ', style: 'sys' },
          { text: 'ENABLED', style: 'active' },
          { text: '          ✓', style: 'ok' },
        ]
      },
      {
        delay: 160,
        tokens: [
          { text: '[VCE]  ', style: 'sys' },
          { text: 'Context window: ', style: 'sys' },
          { text: '128k tokens', style: 'active' },
          { text: '              ✓', style: 'ok' },
        ]
      },
      { delay: 260, tokens: [] },
      {
        delay: 120,
        tokens: [
          { text: '[EVT]  ', style: 'sys' },
          { text: 'CALL_STARTED', style: 'active' },
          { text: '       id: call_9xK2m', style: 'sys' },
        ]
      },
      {
        delay: 200,
        tokens: [
          { text: '[EVT]  ', style: 'sys' },
          { text: 'intent_detected', style: 'sys' },
          { text: '     → ', style: 'dim' },
          { text: 'booking_inquiry', style: 'active' },
          { text: '  0.97', style: 'sys' },
        ]
      },
      {
        delay: 180,
        tokens: [
          { text: '[EVT]  ', style: 'sys' },
          { text: 'crm_lookup', style: 'sys' },
          { text: '          → ', style: 'dim' },
          { text: 'match found', style: 'active' },
          { text: '      14ms', style: 'sys' },
        ]
      },
      {
        delay: 160,
        tokens: [
          { text: '[EVT]  ', style: 'sys' },
          { text: 'response_generated', style: 'sys' },
          { text: '  → ', style: 'dim' },
          { text: '312ms', style: 'active' },
          { text: '             ✓', style: 'ok' },
        ]
      },
      {
        delay: 180,
        tokens: [
          { text: '[EVT]  ', style: 'sys' },
          { text: 'CALL_COMPLETED', style: 'active' },
          { text: '     score: ', style: 'sys' },
          { text: '9.4/10', style: 'active' },
        ]
      },
      { delay: 280, tokens: [] },
      {
        delay: 160,
        tokens: [
          { text: '[STAT] ', style: 'sys' },
          { text: 'Calls today: ', style: 'sys' },
          { text: '4,821', style: 'active' },
          { text: '  ↑18% vs yesterday', style: 'sys' },
        ]
      },
      {
        delay: 120,
        tokens: [
          { text: '[STAT] ', style: 'sys' },
          { text: 'Avg resolution: ', style: 'sys' },
          { text: '1.8 min', style: 'active' },
          { text: '    no human escalation', style: 'sys' },
        ]
      },
      { delay: 280, tokens: [] },
      {
        delay: 200,
        tokens: [
          { text: '● ', style: 'ok' },
          { text: 'STREAM: LIVE  ', style: 'active' },
          { text: '──────────────────────────────────', style: 'dim' },
        ]
      },
      { delay: 200, tokens: [] },
      {
        delay: 300,
        tokens: [
          { text: '> ', style: 'active' },
          { text: '_', style: 'cursor' },
        ]
      },
    ]
  },

  // ─── SCENE 3: DocuFlow OCR Pipeline ────────────────────────
  {
    id: 'scene-ocr',
    holdDuration: 2800,
    lines: [
      {
        delay: 0,
        typewriter: true,
        speed: 42,
        tokens: [
          { text: '$ ', style: 'active' },
          { text: 'ttt pipeline status --id docuflow-prod', style: 'cmd' },
        ]
      },
      { delay: 500, tokens: [] },
      {
        delay: 200,
        tokens: [
          { text: '[OCR]  ', style: 'sys' },
          { text: 'Pipeline: ', style: 'sys' },
          { text: 'docuflow-prod', style: 'active' },
          { text: '           v2.4.1', style: 'sys' },
        ]
      },
      {
        delay: 160,
        tokens: [
          { text: '[OCR]  ', style: 'sys' },
          { text: 'Status: ', style: 'sys' },
          { text: 'PROCESSING', style: 'active' },
          { text: '              ✓', style: 'ok' },
        ]
      },
      { delay: 260, tokens: [] },
      {
        delay: 140,
        tokens: [
          { text: '[DOC]  ', style: 'sys' },
          { text: 'invoice_batch_0441.pdf', style: 'active' },
          { text: '  → scanning', style: 'sys' },
        ]
      },
      {
        delay: 200,
        tokens: [
          { text: '[DOC]  ', style: 'sys' },
          { text: 'Vendor extraction', style: 'sys' },
          { text: '.........  ', style: 'dim' },
          { text: '✓', style: 'ok' },
          { text: '  conf: 0.99', style: 'sys' },
        ]
      },
      {
        delay: 160,
        tokens: [
          { text: '[DOC]  ', style: 'sys' },
          { text: 'Line-item parse', style: 'sys' },
          { text: '...........  ', style: 'dim' },
          { text: '✓', style: 'ok' },
          { text: '  14 items', style: 'active' },
        ]
      },
      {
        delay: 160,
        tokens: [
          { text: '[DOC]  ', style: 'sys' },
          { text: 'ERP write-back', style: 'sys' },
          { text: '............  ', style: 'dim' },
          { text: '✓', style: 'ok' },
          { text: '  22ms', style: 'sys' },
        ]
      },
      { delay: 260, tokens: [] },
      {
        delay: 140,
        tokens: [
          { text: '[STAT] ', style: 'sys' },
          { text: 'Docs processed today:  ', style: 'sys' },
          { text: '1,247', style: 'active' },
        ]
      },
      {
        delay: 120,
        tokens: [
          { text: '[STAT] ', style: 'sys' },
          { text: 'Extraction accuracy:   ', style: 'sys' },
          { text: '99.4%', style: 'active' },
        ]
      },
      {
        delay: 120,
        tokens: [
          { text: '[STAT] ', style: 'sys' },
          { text: 'Avg time per doc:      ', style: 'sys' },
          { text: '0.8s', style: 'active' },
          { text: '  (was 14min manual)', style: 'sys' },
        ]
      },
      { delay: 300, tokens: [] },
      {
        delay: 200,
        tokens: [
          { text: '● ', style: 'ok' },
          { text: 'PIPELINE: NOMINAL  ', style: 'active' },
          { text: '─────────────────────────────', style: 'dim' },
        ]
      },
      { delay: 200, tokens: [] },
      {
        delay: 300,
        tokens: [
          { text: '> ', style: 'active' },
          { text: '_', style: 'cursor' },
        ]
      },
    ]
  },
]
