import { CaseStudyMeta } from './case-study';

export const vsipAccessibility: CaseStudyMeta = {
  slug: 'vsip-accessibility',
  title: 'The Hidden AI Behind Accessible Voice Kiosks',
  subtitle: 'Redefining accessibility beyond screen readers and braille.',
  client: 'VSIP',
  publishDate: '2024-05-02T08:00:00Z',
  readTime: 7,
  tags: ['Accessibility', 'Inclusive Design', 'Multimodal AI'],
  coverAbstract:
    'Accessibility in physical hardware often stops at braille keypads and high-contrast modes. But true accessibility means adapting to the user, not forcing the user to adapt to the interface. For the VoiceStream Intelligence Platform (VSIP), we engineered a multimodal AI system that dynamically alters its interaction model based on the user\'s physical and cognitive context.',
  images: {
    hero: '/images/case-studies/vsip-accessibility-hero.png',
    card: '/images/case-studies/vsip-accessibility-card.png',
  },
  seo: {
    metaTitle: 'The Hidden AI Behind Accessible Voice Kiosks | The Three Tier',
    metaDescription: 'How The Three Tier engineered a multimodal AI system for VSIP that dynamically adapts to users physical and cognitive needs.',
    keywords: ['Accessibility', 'Inclusive Design', 'Multimodal AI', 'VSIP', 'Voice Kiosk'],
    ogImage: '/images/case-studies/vsip-accessibility-hero.png',
    canonicalUrl: 'https://www.thethreetier.com/case-studies/vsip-accessibility',
  },
  schema: {
    articleType: 'TechArticle',
    about: ['Accessibility', 'Human-Computer Interaction', 'Artificial Intelligence'],
  },
  sections: [
    {
      id: 'beyond-screen-readers',
      heading: 'Beyond Screen Readers',
      body: `Traditional kiosk accessibility relies on mechanical workarounds: braille pads, headphone jacks for screen readers, and wheelchair-height buttons. These are necessary baseline compliances, but they represent a fundamentally broken user experience. They force the user to "switch modes" to use the machine.

Voice AI presented an opportunity to remove the mode-switch entirely. If you can speak and hear, you can use the kiosk, regardless of mobility or visual acuity. 

But standard Voice AI still fails users with speech impediments, heavy accents, or cognitive delays. We needed to push the boundaries of what "accessible" meant.`,
    },
    {
      id: 'speaker-verification',
      heading: 'Acoustic Normalization for Speech Diversity',
      body: `Off-the-shelf Speech-to-Text (STT) models are notoriously biased. They perform exceptionally well on standard American English and degrade rapidly when encountering accents, stutters, or conditions like dysarthria.

To solve this, we implemented an **Acoustic Normalization Layer** ahead of the primary STT engine.

This layer uses a specialized model trained specifically on atypical speech patterns. When it detects a highly divergent acoustic profile, it doesn't try to transcribe it immediately. Instead, it extracts the phonetic intent and maps it to the closest semantic equivalent before passing it to the LLM. 

This prevents the classic failure loop where the AI repeatedly says, *"I'm sorry, I didn't catch that."*`,
    },
    {
      id: 'bilingual-recognition',
      heading: 'Fluid Code-Switching',
      body: `In public spaces, users frequently "code-switch"—starting a sentence in English and finishing it in Spanish. Standard voice systems require users to explicitly select a language from a menu before speaking.

VSIP removes the language barrier entirely. The audio stream is analyzed in real-time by a parallel language detection model. If a user switches from English to Mandarin mid-sentence, the STT engine hot-swaps its language processing context in under 50ms. 

The LLM then receives the fully translated intent and responds in the user's primary language.`,
    },
    {
      id: 'intent-analysis',
      heading: 'Cognitive Pacing',
      body: `Users with cognitive impairments or those who are simply overwhelmed often speak slowly or take long pauses. Traditional voice assistants ruthlessly cut them off.

Using the multimodal intent analysis developed for turn-taking, VSIP adjusts its **Cognitive Pacing**.

If the system detects hesitant speech patterns, frequent "umms," or prolonged silences combined with a confused gaze, it dynamically alters its own behavior:

1. It extends the silence timeout by 200%.
2. It shifts its TTS (Text-to-Speech) output to a slower, more deliberate cadence.
3. It simplifies its vocabulary and offers concrete, binary choices rather than open-ended questions.`,
    },
    {
      id: 'outcomes',
      heading: 'True Inclusivity at Scale',
      body: `Accessibility should not feel like an "add-on" or a special mode. It should be invisible infrastructure that works for everyone.

- **100% Interface Equivalence:** Visually impaired users receive the exact same service and information depth as sighted users, without needing a headphone jack.
- **68% Improvement in Atypical Speech Recognition:** Users with stutters or heavy accents successfully complete tasks at nearly the same rate as the baseline demographic.
- **Seamless Multilingual Support:** VSIP natively supports fluid conversation across 14 languages without a single button press.

By treating accessibility as an AI engineering challenge rather than a mechanical compliance checklist, VSIP delivers on the true promise of public technology.`,
    },
  ],
};
