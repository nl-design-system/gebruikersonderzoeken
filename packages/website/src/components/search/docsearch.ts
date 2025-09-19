import docsearch from '@docsearch/js';

const translations = {
  button: {
    buttonAriaLabel: 'Zoeken',
    buttonText: 'Zoeken',
  },
  modal: {
    askAiScreen: {
      afterToolCallText: 'Gezocht naar',
      aggregatedToolCallNode: undefined,
      aggregatedToolCallText: undefined,
      copyButtonCopiedText: 'Gekopieerd!',
      copyButtonText: 'Kopiëren',
      copyButtonTitle: 'Kopiëren',
      disclaimerText: 'Antwoorden worden gegenereerd door AI en kunnen fouten bevatten. Controleer de antwoorden.',
      dislikeButtonTitle: 'Vind ik niet leuk',
      duringToolCallText: 'Zoeken naar ',
      likeButtonTitle: 'Vind ik leuk',
      preToolCallText: 'Bezig met zoeken...',
      relatedSourcesText: 'Gerelateerde bronnen',
      thanksForFeedbackText: 'Bedankt voor je feedback!',
      thinkingText: 'Bezig met nadenken...',
    },
    errorScreen: {
      helpText: 'Controleer je netwerkverbinding.',
      titleText: 'Kan resultaten niet ophalen',
    },
    footer: {
      backToSearchText: 'Terug naar zoeken',
      closeKeyAriaLabel: 'Escape-toets',
      closeText: 'Sluiten',
      navigateDownKeyAriaLabel: 'Pijl omlaag',
      navigateText: 'Navigeren',
      navigateUpKeyAriaLabel: 'Pijl omhoog',
      poweredByText: 'Mogelijk gemaakt door',
      selectKeyAriaLabel: 'Enter-toets',
      selectText: 'Selecteren',
      submitQuestionText: 'Vraag verzenden',
    },
    noResultsScreen: {
      noResultsText: 'Geen resultaten gevonden voor',
      reportMissingResultsLinkText: 'Laat het ons weten.',
      reportMissingResultsText: 'Denk je dat deze zoekopdracht resultaten zou moeten opleveren?',
      suggestedQueryText: 'Probeer te zoeken naar',
    },
    resultsScreen: {
      askAiPlaceholder: 'Vraag het aan AI: ',
    },
    searchBox: {
      backToKeywordSearchButtonAriaLabel: 'Terug naar zoekwoorden',
      backToKeywordSearchButtonText: 'Terug naar zoekwoorden',
      clearButtonAriaLabel: 'Zoekopdracht wissen',
      clearButtonTitle: 'Wissen',
      closeButtonAriaLabel: 'Sluiten',
      closeButtonText: 'Sluiten',
      enterKeyHint: 'zoeken',
      enterKeyHintAskAi: 'enter',
      placeholderText: 'Zoeken naar onderzoeken', // fallback: 'Zoek documentatie' of 'Zoek documentatie of stel een vraag aan AI'
      placeholderTextAskAi: undefined, // fallback: 'Stel een andere vraag...'
      placeholderTextAskAiStreaming: 'Beantwoorden...',
      searchInputLabel: 'Zoeken',
    },
    startScreen: {
      favoriteSearchesTitle: 'Favorieten',
      noRecentSearchesText: 'Geen recente zoekopdrachten',
      recentConversationsTitle: 'Recente gesprekken',
      recentSearchesTitle: 'Recent',
      removeFavoriteSearchButtonTitle: 'Verwijder deze zoekopdracht uit favorieten',
      removeRecentConversationButtonTitle: 'Verwijder dit gesprek uit de geschiedenis',
      removeRecentSearchButtonTitle: 'Verwijder deze zoekopdracht uit de geschiedenis',
      saveRecentSearchButtonTitle: 'Deze zoekopdracht opslaan',
    },
  },
};

docsearch({
  apiKey: '74627f8933dc6059f68f48ee8fbecaa9',
  appId: 'HWYTAR8XU5',
  container: '.DocSearch-Trigger',
  indexName: 'gebruikersonderzoek',
  translations,
});
