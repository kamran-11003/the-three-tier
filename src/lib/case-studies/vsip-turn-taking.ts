import { CaseStudyMeta } from './case-study';

export const vsipTurnTaking: CaseStudyMeta = {
  slug: 'vsip-turn-taking',
  title: 'Building Human-Like Turn Taking in AI Kiosks',
  subtitle: 'Overcoming the walkie-talkie paradigm in conversational AI.',
  client: 'VSIP',
  publishDate: '2024-04-18T08:00:00Z',
  readTime: 8,
  tags: ['Conversational AI', 'Latency', 'System Architecture'],
  coverAbstract:
    'Conversations are not discrete HTTP requests. They are fluid, overlapping, and asynchronous. Yet, most Voice AI systems force humans into a rigid "walkie-talkie" paradigm: wait for the beep, speak, wait for the response. For the VoiceStream Intelligence Platform (VSIP), we engineered an asynchronous turn-taking engine that allows for interruption, backchanneling, and true conversational fluidity.',
  images: {
    hero: '/images/case-studies/vsip-turn-taking-hero.png',
    card: '/images/case-studies/vsip-turn-taking-card.png',
  },
  seo: {
    metaTitle: 'Building Human-Like Turn Taking in AI Kiosks | The Three Tier',
    metaDescription: 'How The Three Tier engineered an asynchronous turn-taking engine for VSIP to eliminate the walkie-talkie paradigm in Voice AI.',
    keywords: ['Conversational AI', 'Turn Taking', 'VSIP', 'Asynchronous AI', 'Voice Kiosk'],
    ogImage: '/images/case-studies/vsip-turn-taking-hero.png',
    canonicalUrl: 'https://www.thethreetier.com/case-studies/vsip-turn-taking',
  },
  schema: {
    articleType: 'TechArticle',
    about: ['Conversational AI', 'User Experience Design', 'Software Architecture'],
  },
  sections: [
    {
      id: 'the-sequential-problem',
      heading: 'The Sequential Problem',
      body: `Traditional Voice AI operates on a strictly sequential state machine. 

1. **Listen:** Record audio until silence is detected.
2. **Process:** Send to STT (Speech-to-Text), then LLM, then TTS (Text-to-Speech).
3. **Speak:** Play the audio response.
4. **Repeat.**

This creates the dreaded "walkie-talkie" effect. If the AI is speaking, the human cannot interrupt. If the human pauses to think ("umm..."), the AI assumes they are finished and cuts them off. It forces the human to adapt to the machine's strict HTTP request/response cycle.`,
    },
    {
      id: 'asynchronous-engine',
      heading: 'The Asynchronous Engine',
      body: `To achieve human-like fluidity, we had to break the sequential state machine. We rebuilt the VSIP core architecture around **asynchronous, full-duplex audio streams**.

Instead of waiting for a complete utterance, the system streams audio continuously to the edge processor via WebSockets.

- **Continuous Listening:** The microphone never turns off. Even while the AI is speaking, it is analyzing the user's audio channel.
- **Interruption Handlers:** If the user speaks a clear linguistic token while the AI is talking, the AI instantly halts its playback and flushes its current audio buffer.
- **Backchanneling:** If the user says "uh-huh" or "yeah," the system classifies it as a backchannel token. It acknowledges the user is engaged but does *not* interrupt the AI's playback.`,
    },
    {
      id: 'design-intent',
      heading: 'Designing for Intent, Not Just Silence',
      body: `The hardest part of conversational AI isn't understanding words; it's understanding silence.

In a traditional system, 1.5 seconds of silence triggers the end of a turn. But humans pause for many reasons: to read a screen, to look in their bag, or simply to think.

We introduced **Multimodal Intent Analysis**.

By coupling the audio stream with the kiosk's vision sensors, we analyze user gaze and posture during silences.

- If the user is looking away or down, the system extends the silence threshold (they are thinking/searching).
- If the user makes direct eye contact with the screen and closes their mouth, the system shortens the threshold (they are yielding the floor).

We stopped measuring silence in milliseconds and started measuring it in intent.`,
    },
    {
      id: 'outcomes',
      heading: 'The End of the Walkie-Talkie',
      body: `The result is a kiosk that doesn't feel like a command-line interface wrapped in a voice wrapper. It feels like a conversation.

- **Sub-150ms Interruption Latency:** The AI stops speaking almost instantly when interrupted, preventing frustrating overlap.
- **Zero "Cut-Off" Complaints:** By using gaze-aware silence thresholds, users are no longer cut off while thinking.
- **3x Increase in Session Length:** Users engage in longer, more complex diagnostic conversations because the cognitive load of "operating" the AI has been removed.

The Three Tier engineered the latency out of the conversation, allowing the intelligence of the LLM to actually shine through.`,
    },
  ],
};
