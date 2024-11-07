---
sidebar_position: 1
description: Internal module reference.
---

# Known Modules

Documentation of available stores and their methods through BdApi.Webpack.getStore().

```js
// Example usage:
const store = BdApi.Webpack.getStore("StoreName");
```

---

## ApplicationStoreDirectoryStore

Available methods:

- `getFetchStatus()`
- `getStoreLayout()`
- `hasStorefront()`
- `initialize()`

---

## UserOfferStore

Available methods:

- `forceReset()`
- `getAcknowledgedOffers()`
- `getAlmostExpiringTrialOffers()`
- `getAnyOfUserTrialOfferId()`
- `getReferrer()`
- `getState()`
- `getUnacknowledgedDiscountOffers()`
- `getUnacknowledgedOffers()`
- `getUserDiscountOffer()`
- `getUserTrialOffer()`
- `hasAnyUnexpiredDiscountOffer()`
- `hasAnyUnexpiredOffer()`
- `hasFetchedOffer()`
- `initialize()`
- `shouldFetchAnnualOffer()`
- `shouldFetchOffer()`

---

## PromotionsStore

Available methods:

- `bogoPromotion()`
- `consumedInboundPromotionId()`
- `getState()`
- `hasFetchedConsumedInboundPromotionId()`
- `initialize()`
- `isFetchingActiveBogoPromotion()`
- `isFetchingActiveOutboundPromotions()`
- `lastDismissedOutboundPromotionStartDate()`
- `lastFetchedActiveBogoPromotion()`
- `lastFetchedActivePromotions()`
- `lastSeenOutboundPromotionStartDate()`
- `outboundPromotions()`

---

## CollectiblesPurchaseStore

Available methods:

- `claimError()`
- `fetchError()`
- `getPurchase()`
- `hasPreviouslyFetched()`
- `isClaiming()`
- `isFetching()`
- `purchases()`

---

## FriendSuggestionStore

Available methods:

- `getSuggestion()`
- `getSuggestionCount()`
- `getSuggestions()`
- `initialize()`

---

## InstanceIdStore

Available methods:

- `getId()`

---

## UserGuildSettingsStore

Available methods:

- `accountNotificationSettings()`
- `allowAllMessages()`
- `allowNoMessages()`
- `getAddedToMessages()`
- `getAllSettings()`
- `getChannelFlags()`
- `getChannelIdFlags()`
- `getChannelMessageNotifications()`
- `getChannelMuteConfig()`
- `getChannelOverrides()`
- `getChannelRecordUnreadSetting()`
- `getChannelUnreadSetting()`
- `getGuildFavorites()`
- `getGuildFlags()`
- `getGuildUnreadSetting()`
- `getMessageNotifications()`
- `getMuteConfig()`
- `getMutedChannels()`
- `getNewForumThreadsCreated()`
- `getNotifyHighlights()`
- `getOptedInChannels()`
- `getOptedInChannelsWithPendingUpdates()`
- `getPendingChannelUpdates()`
- `getState()`
- `initialize()`
- `isAddedToMessages()`
- `isCategoryMuted()`
- `isChannelMuted()`
- `isChannelOptedIn()`
- `isChannelOrParentOptedIn()`
- `isChannelRecordOrParentOptedIn()`
- `isFavorite()`
- `isGuildCollapsed()`
- `isGuildOrCategoryOrChannelMuted()`
- `isMessagesFavorite()`
- `isMobilePushEnabled()`
- `isMuteScheduledEventsEnabled()`
- `isMuted()`
- `isOptInEnabled()`
- `isSuppressEveryoneEnabled()`
- `isSuppressRolesEnabled()`
- `isTemporarilyMuted()`
- `mentionOnAllMessages()`
- `resolveGuildUnreadSetting()`
- `resolveUnreadSetting()`
- `resolvedMessageNotifications()`
- `useNewNotifications()`

---

## TutorialIndicatorStore

Available methods:

- `getData()`
- `getDefinition()`
- `getIndicators()`
- `initialize()`
- `shouldShow()`
- `shouldShowAnyIndicators()`

---

## ChannelStatusStore

Available methods:

- `getChannelStatus()`

---

## WebAuthnStore

Available methods:

- `getCredentials()`
- `hasCredentials()`
- `hasFetchedCredentials()`

---

## FavoritesSuggestionStore

Available methods:

- `getState()`
- `getSuggestedChannelId()`
- `initialize()`

---

## SpotifyProtocolStore

Available methods:

- `isProtocolRegistered()`

---

## DevToolsSettingsStore

Available methods:

- `devWidgetPosition()`
- `displayTools()`
- `getUserAgnosticState()`
- `initialize()`
- `lastOpenTabId()`
- `showDevWidget()`
- `sidebarWidth()`

---

## RTCConnectionStore

Available methods:

- `getAveragePing()`
- `getChannelId()`
- `getDuration()`
- `getGuildId()`
- `getHostname()`
- `getLastPing()`
- `getLastSessionVoiceChannelId()`
- `getMediaSessionId()`
- `getOutboundLossRate()`
- `getPacketStats()`
- `getPings()`
- `getQuality()`
- `getRTCConnection()`
- `getRTCConnectionId()`
- `getRemoteDisconnectVoiceChannelId()`
- `getSecureFramesRosterMapEntry()`
- `getSecureFramesState()`
- `getState()`
- `getUserIds()`
- `getVoiceStateStats()`
- `getWasEverMultiParticipant()`
- `getWasEverRtcConnected()`
- `initialize()`
- `isConnected()`
- `isDisconnected()`
- `isUserConnected()`
- `setLastSessionVoiceChannelId()`

---

## MaskedLinkStore

Available methods:

- `initialize()`
- `isTrustedDomain()`
- `isTrustedProtocol()`

---

## NewChannelsStore

Available methods:

- `getNewChannelIds()`
- `initialize()`
- `shouldIndicateNewChannel()`

---

## UserRequiredActionStore

Available methods:

- `getAction()`
- `hasAction()`

---

## ActivityShelfStore

Available methods:

- `getState()`
- `initialize()`

---

## ProfileEffectStore

Available methods:

- `canFetch()`
- `fetchError()`
- `getProfileEffectById()`
- `hasFetched()`
- `isFetching()`
- `profileEffects()`
- `tryItOutId()`

---

## UserSettingsAccountStore

Available methods:

- `getAllPending()`
- `getAllTryItOut()`
- `getErrors()`
- `getFormState()`
- `getIsSubmitDisabled()`
- `getPendingAccentColor()`
- `getPendingAvatar()`
- `getPendingAvatarDecoration()`
- `getPendingBanner()`
- `getPendingBio()`
- `getPendingGlobalName()`
- `getPendingProfileEffectId()`
- `getPendingPronouns()`
- `getPendingThemeColors()`
- `getTryItOutAvatar()`
- `getTryItOutAvatarDecoration()`
- `getTryItOutBanner()`
- `getTryItOutProfileEffectId()`
- `getTryItOutThemeColors()`
- `showNotice()`

---

## CheckoutRecoveryStore

Available methods:

- `getIsTargeted()`
- `shouldFetchCheckoutRecovery()`

---

## VideoStreamStore

Available methods:

- `getStreamId()`
- `getUserStreamData()`

---

## GatewayConnectionStore

Available methods:

- `getSocket()`
- `initialize()`
- `isConnected()`
- `isConnectedOrOverlay()`
- `isTryingToConnect()`
- `lastTimeConnectedChanged()`

---

## SaveableChannelsStore

Available methods:

- `canEvictOrphans()`
- `getSaveableChannels()`
- `initialize()`
- `loadCache()`
- `saveLimit()`
- `takeSnapshot()`

---

## LurkingStore

Available methods:

- `getHistorySnapshot()`
- `getLoadId()`
- `getLurkingSource()`
- `initialize()`
- `isLurking()`
- `lurkingGuildIds()`
- `mostRecentLurkedGuildId()`
- `setHistorySnapshot()`

---

## GuildSettingsVanityURLStore

Available methods:

- `errorDetails()`
- `hasError()`
- `originalVanityURLCode()`
- `showNotice()`
- `vanityURLCode()`
- `vanityURLUses()`

---

## GuildOnboardingPromptsStore

Available methods:

- `ackIdForGuild()`
- `getDefaultChannelIds()`
- `getEnabled()`
- `getEnabledOnboardingPrompts()`
- `getOnboardingPrompt()`
- `getOnboardingPrompts()`
- `getOnboardingPromptsForOnboarding()`
- `getOnboardingResponses()`
- `getOnboardingResponsesForPrompt()`
- `getPendingResponseOptions()`
- `getSelectedOptions()`
- `initialize()`
- `isAdvancedMode()`
- `isLoading()`
- `lastFetchedAt()`
- `shouldFetchPrompts()`

---

## RecentVoiceChannelStore

Available methods:

- `getChannelHistory()`
- `getState()`
- `initialize()`

---

## MediaPostSharePromptStore

Available methods:

- `shouldDisplayPrompt()`

---

## SKUStore

Available methods:

- `didFetchingSkuFail()`
- `get()`
- `getForApplication()`
- `getParentSKU()`
- `getSKUs()`
- `initialize()`
- `isFetching()`

---

## PrivateChannelSortStore

Available methods:

- `getPrivateChannelIds()`
- `getSortedChannels()`
- `initialize()`
- `serializeForOverlay()`

---

## CollapsedVoiceChannelStore

Available methods:

- `getCollapsed()`
- `getState()`
- `initialize()`
- `isCollapsed()`

---

## UploadStore

Available methods:

- `getFiles()`
- `getMessageForFile()`
- `getUploadAttachments()`
- `getUploaderFileForMessageId()`
- `initialize()`

---

## DiscoverGuildsStore

Available methods:

- `getGuild()`
- `getGuilds()`
- `initialize()`
- `isFetching()`

---

## DismissibleContentFrameworkStore

Available methods:

- `dailyCapOverridden()`
- `getRenderedAtTimestamp()`
- `getState()`
- `hasUserHitDCCap()`
- `initialize()`
- `lastDCDismissed()`

---

## ContentInventoryPersistedStore

Available methods:

- `getDebugFastImpressionCappingEnabled()`
- `getImpressionCappedItemIds()`
- `getState()`
- `hidden()`
- `initialize()`
- `reset()`

---

## GameStore

Available methods:

- `detectableGamesEtag()`
- `fetching()`
- `games()`
- `getDetectableGame()`
- `getGameByExecutable()`
- `getGameByGameData()`
- `getGameByName()`
- `getState()`
- `initialize()`
- `isGameInDatabase()`
- `lastFetched()`
- `markGameReported()`
- `shouldReport()`

---

## SubscriptionStore

Available methods:

- `getActiveApplicationSubscriptions()`
- `getActiveGuildSubscriptions()`
- `getMostRecentPremiumTypeSubscription()`
- `getPremiumSubscription()`
- `getPremiumTypeSubscription()`
- `getPreviousPremiumTypeSubscription()`
- `getSubscriptionById()`
- `getSubscriptionForPlanIds()`
- `getSubscriptions()`
- `hasFetchedMostRecentPremiumTypeSubscription()`
- `hasFetchedPreviousPremiumTypeSubscription()`
- `hasFetchedSubscriptions()`
- `inReverseTrial()`

---

## GiftCodeStore

Available methods:

- `get()`
- `getAcceptingCodes()`
- `getError()`
- `getForGifterSKUAndPlan()`
- `getIsAccepting()`
- `getIsResolved()`
- `getIsResolving()`
- `getResolvedCodes()`
- `getResolvingCodes()`
- `getUserGiftCodesFetchingForSKUAndPlan()`
- `getUserGiftCodesLoadedAtForSKUAndPlan()`

---

## StageChannelRoleStore

Available methods:

- `getPermissionsForUser()`
- `initialize()`
- `isAudienceMember()`
- `isModerator()`
- `isSpeaker()`

---

## DevToolsDesignTogglesStore

Available methods:

- `all()`
- `allWithDescriptions()`
- `get()`
- `getUserAgnosticState()`
- `initialize()`
- `set()`

---

## AutoUpdateStore

Available methods:

- `getState()`

---

## SecureFramesVerifiedStore

Available methods:

- `initialize()`
- `isCallVerified()`
- `isStreamVerified()`
- `isUserVerified()`

---

## HangStatusStore

Available methods:

- `getCurrentDefaultStatus()`
- `getCurrentHangStatus()`
- `getCustomHangStatus()`
- `getHangStatusActivity()`
- `getRecentCustomStatuses()`
- `getState()`
- `initialize()`

---

## GuildRoleConnectionEligibilityStore

Available methods:

- `getGuildRoleConnectionEligibility()`

---

## TypingStore

Available methods:

- `getTypingUsers()`
- `isTyping()`

---

## SendMessageOptionsStore

Available methods:

- `getOptions()`

---

## PerksDemosStore

Available methods:

- `activatedEndTime()`
- `hasActivated()`
- `hasActiveDemo()`
- `isAvailable()`
- `overrides()`
- `shouldActivate()`
- `shouldFetch()`

---

## DeveloperActivityShelfStore

Available methods:

- `getActivityUrlOverride()`
- `getDeveloperShelfItems()`
- `getFetchState()`
- `getFilter()`
- `getIsEnabled()`
- `getLastUsedObject()`
- `getState()`
- `getUseActivityUrlOverride()`
- `inDevModeForApplication()`
- `initialize()`

---

## BrowserHandoffStore

Available methods:

- `initialize()`
- `isHandoffAvailable()`
- `key()`
- `user()`

---

## UploadAttachmentStore

Available methods:

- `findUpload()`
- `getFirstUpload()`
- `getUpload()`
- `getUploadCount()`
- `getUploads()`
- `hasAdditionalUploads()`

---

## ConsumablesStore

Available methods:

- `getEntitlement()`
- `getErrored()`
- `getPlayedAnimation()`
- `getPreviousGoLiveSettings()`
- `getPrice()`
- `isEntitlementFetched()`
- `isEntitlementFetching()`
- `isFetchingPrice()`

---

## GuildTemplateTooltipStore

Available methods:

- `shouldShowGuildTemplateDirtyTooltip()`
- `shouldShowGuildTemplatePromotionTooltip()`

---

## MediaEngineStore

Available methods:

- `getAecDump()`
- `getAttenuateWhileSpeakingOthers()`
- `getAttenuateWhileSpeakingSelf()`
- `getAttenuation()`
- `getAudioSubsystem()`
- `getAutomaticGainControl()`
- `getCameraComponent()`
- `getDebugLogging()`
- `getEchoCancellation()`
- `getEnableSilenceWarning()`
- `getEverSpeakingWhileMuted()`
- `getExperimentalEncoders()`
- `getExperimentalSoundshare()`
- `getGoLiveContext()`
- `getGoLiveSource()`
- `getH265Enabled()`
- `getHardwareEncoding()`
- `getInputDetected()`
- `getInputDeviceId()`
- `getInputDevices()`
- `getInputVolume()`
- `getLocalPan()`
- `getLocalVolume()`
- `getLoopback()`
- `getMLSSigningKey()`
- `getMediaEngine()`
- `getMode()`
- `getModeOptions()`
- `getNoInputDetectedNotice()`
- `getNoiseCancellation()`
- `getNoiseSuppression()`
- `getOpenH264()`
- `getOutputDeviceId()`
- `getOutputDevices()`
- `getOutputVolume()`
- `getPacketDelay()`
- `getQoS()`
- `getSettings()`
- `getShortcuts()`
- `getSidechainCompression()`
- `getSidechainCompressionStrength()`
- `getSpeakingWhileMuted()`
- `getState()`
- `getSupportedSecureFramesProtocolVersion()`
- `getUseSystemScreensharePicker()`
- `getVideoComponent()`
- `getVideoDeviceId()`
- `getVideoDevices()`
- `getVideoHook()`
- `getVideoStreamParameters()`
- `getVideoToggleState()`
- `hasClipsSource()`
- `hasContext()`
- `initialize()`
- `isAdvancedVoiceActivitySupported()`
- `isAecDumpSupported()`
- `isAnyLocalVideoAutoDisabled()`
- `isAutomaticGainControlSupported()`
- `isDeaf()`
- `isEnableHardwareMuteNotice()`
- `isEnabled()`
- `isExperimentalEncodersSupported()`
- `isHardwareMute()`
- `isInteractionRequired()`
- `isLocalMute()`
- `isLocalVideoAutoDisabled()`
- `isLocalVideoDisabled()`
- `isMediaFilterSettingLoading()`
- `isMute()`
- `isNativeAudioPermissionReady()`
- `isNoiseCancellationError()`
- `isNoiseCancellationSupported()`
- `isNoiseSuppressionSupported()`
- `isScreenSharing()`
- `isSelfDeaf()`
- `isSelfMute()`
- `isSelfMutedTemporarily()`
- `isSimulcastSupported()`
- `isSoundSharing()`
- `isSupported()`
- `isVideoAvailable()`
- `isVideoEnabled()`
- `notifyMuteUnmuteSoundWasSkipped()`
- `setCanHavePriority()`
- `shouldSkipMuteUnmuteSound()`
- `supports()`
- `supportsDisableLocalVideo()`
- `supportsExperimentalSoundshare()`
- `supportsInApp()`
- `supportsScreenSoundshare()`
- `supportsSystemScreensharePicker()`
- `supportsVideoHook()`

---

## BlockedDomainStore

Available methods:

- `getBlockedDomainList()`
- `getCurrentRevision()`
- `initialize()`
- `isBlockedDomain()`

---

## NotificationCenterItemsStore

Available methods:

- `active()`
- `cursor()`
- `errored()`
- `getState()`
- `hasMore()`
- `initialize()`
- `initialized()`
- `items()`
- `loading()`
- `localItems()`
- `tabFocused()`

---

## ThreadMessageStore

Available methods:

- `getChannelThreadsVersion()`
- `getCount()`
- `getInitialOverlayState()`
- `getMostRecentMessage()`
- `initialize()`

---

## ContentInventoryStore

Available methods:

- `getDebugImpressionCappingDisabled()`
- `getFeed()`
- `getFeedRequestId()`
- `getFeedState()`
- `getFeeds()`
- `getFilters()`
- `getLastFeedFetchDate()`
- `getMatchingInboxEntry()`

---

## GuildDiscoveryCategoryStore

Available methods:

- `getAllCategories()`
- `getCategoryName()`
- `getClanDiscoveryCategories()`
- `getDiscoveryCategories()`
- `getFetchedLocale()`
- `getPrimaryCategories()`

---

## EmailSettingsStore

Available methods:

- `getEmailSettings()`

---

## LiveChannelNoticesStore

Available methods:

- `getState()`
- `initialize()`
- `isLiveChannelNoticeHidden()`

---

## PresenceStore

Available methods:

- `findActivity()`
- `getActivities()`
- `getActivityMetadata()`
- `getAllApplicationActivities()`
- `getApplicationActivity()`
- `getClientStatus()`
- `getPrimaryActivity()`
- `getState()`
- `getStatus()`
- `getUserIds()`
- `initialize()`
- `isMobileOnline()`
- `setCurrentUserOnConnectionOpen()`

---

## ThreadMemberListStore

Available methods:

- `canUserViewChannel()`
- `getMemberListSections()`
- `getMemberListVersion()`
- `initialize()`

---

## ImpersonateStore

Available methods:

- `getBackNavigationSection()`
- `getData()`
- `getImpersonateType()`
- `getMemberOptions()`
- `getOnboardingResponses()`
- `getViewingChannels()`
- `getViewingRoles()`
- `getViewingRolesTimestamp()`
- `hasViewingRoles()`
- `isChannelOptedIn()`
- `isFullServerPreview()`
- `isOnboardingEnabled()`
- `isOptInEnabled()`
- `isViewingRoles()`
- `isViewingServerShop()`

---

## GuildAffinitiesStore

Available methods:

- `affinities()`
- `getGuildAffinity()`
- `getState()`
- `hasRequestResolved()`
- `initialize()`

---

## ApplicationBuildStore

Available methods:

- `getBuildSize()`
- `getTargetBuildId()`
- `getTargetManifests()`
- `hasNoBuild()`
- `initialize()`
- `isFetching()`
- `needsToFetchBuildSize()`

---

## EmojiCaptionsStore

Available methods:

- `clear()`
- `getCaptionsForEmojiById()`
- `getEmojiCaptionsTTL()`
- `getIsFetching()`
- `getState()`
- `hasPersistedState()`
- `initialize()`

---

## ApplicationCommandAutocompleteStore

Available methods:

- `getAutocompleteChoices()`
- `getAutocompleteLastChoices()`
- `getLastErrored()`
- `getLastResponseNonce()`
- `initialize()`

---

## SoundboardEventStore

Available methods:

- `frecentlyPlayedSounds()`
- `getState()`
- `hasPendingUsage()`
- `initialize()`
- `playedSoundHistory()`
- `recentlyHeardSoundIds()`

---

## NewUserStore

Available methods:

- `getState()`
- `getType()`
- `initialize()`

---

## ActivityLauncherStore

Available methods:

- `getState()`
- `getStates()`

---

## ChannelSKUStore

Available methods:

- `getSkuIdForChannel()`

---

## GuildMFAWarningStore

Available methods:

- `initialize()`
- `isVisible()`

---

## ApplicationStreamingStore

Available methods:

- `getActiveStreamForApplicationStream()`
- `getActiveStreamForStreamKey()`
- `getActiveStreamForUser()`
- `getAllActiveStreams()`
- `getAllActiveStreamsForChannel()`
- `getAllApplicationStreams()`
- `getAllApplicationStreamsForChannel()`
- `getAnyDiscoverableStreamForUser()`
- `getAnyStreamForUser()`
- `getCurrentAppIntent()`
- `getCurrentUserActiveStream()`
- `getIsActiveStreamPreviewDisabled()`
- `getLastActiveStream()`
- `getRTCStream()`
- `getState()`
- `getStreamForUser()`
- `getStreamerActiveStreamMetadata()`
- `getStreamerActiveStreamMetadataForStream()`
- `getViewerIds()`
- `initialize()`
- `isSelfStreamHidden()`

---

## ChannelListVoiceCategoryStore

Available methods:

- `getState()`
- `initialize()`
- `isVoiceCategoryCollapsed()`
- `isVoiceCategoryExpanded()`

---

## GuildSettingsOnboardingPromptsStore

Available methods:

- `advancedMode()`
- `editedOnboardingPrompts()`
- `errors()`
- `guildId()`
- `hasChanges()`
- `initialize()`
- `submitting()`

---

## ForumSearchStore

Available methods:

- `getHasSearchResults()`
- `getSearchLoading()`
- `getSearchQuery()`
- `getSearchResults()`

---

## PermissionSpeakStore

Available methods:

- `initialize()`
- `isAFKChannel()`
- `shouldShowWarning()`

---

## ThemeStore

Available methods:

- `darkSidebar()`
- `getState()`
- `initialize()`
- `isSystemThemeAvailable()`
- `systemPrefersColorScheme()`
- `systemTheme()`
- `theme()`

---

## ChannelFollowingPublishBumpStore

Available methods:

- `initialize()`
- `shouldShowBump()`

---

## ApplicationCommandIndexStore

Available methods:

- `getApplicationState()`
- `getApplicationStates()`
- `getContextState()`
- `getGuildState()`
- `getUserState()`
- `hasApplicationState()`
- `hasContextStateApplication()`
- `hasUserStateApplication()`
- `initialize()`
- `query()`
- `queryInstallOnDemandApp()`

---

## MaintenanceStore

Available methods:

- `getIncident()`
- `getScheduledMaintenance()`
- `initialize()`

---

## GuildAutomodMessageStore

Available methods:

- `getLastIncidentAlertMessage()`
- `getMentionRaidDetected()`
- `getMessage()`
- `getMessagesVersion()`
- `getState()`
- `initialize()`

---

## RTCDebugStore

Available methods:

- `getAllStats()`
- `getInboundStats()`
- `getOutboundStats()`
- `getSection()`
- `getSimulcastDebugOverride()`
- `getStats()`
- `getVideoStreams()`
- `shouldRecordNextConnection()`

---

## ClanDiscoveryStore

Available methods:

- `getCurrentRecommendationId()`
- `getGuildProfile()`
- `getSavedGuildIds()`
- `getSavedGuilds()`
- `getSearchResult()`
- `getStaticClans()`
- `hasError()`
- `hasLoadedSavedGuilds()`
- `hasLoadedStaticClanDiscovery()`
- `isLoading()`
- `isSavedGuildId()`
- `shouldFetchGuild()`

---

## LibraryApplicationStatisticsStore

Available methods:

- `applicationStatistics()`
- `getCurrentUserStatisticsForApplication()`
- `getGameDuration()`
- `getLastPlayedDateTime()`
- `getQuickSwitcherScoreForApplication()`
- `hasApplicationStatistic()`
- `lastFetched()`

---

## GuildLeaderboardRanksStore

Available methods:

- `getCurrentLeaderboardRanks()`
- `getPrevLeaderboardRanks()`
- `getState()`
- `initialize()`
- `reset()`

---

## SafetyHubStore

Available methods:

- `getAccountStanding()`
- `getAppealClassificationId()`
- `getAppealSignal()`
- `getClassification()`
- `getClassificationRequestState()`
- `getClassifications()`
- `getFetchError()`
- `getFreeTextAppealReason()`
- `getIsDsaEligible()`
- `getIsSubmitting()`
- `getSubmitError()`
- `getUsername()`
- `isFetching()`
- `isInitialized()`

---

## ChannelFollowerStatsStore

Available methods:

- `getFollowerStatsForChannel()`

---

## OverlayStore

Available methods:

- `getActiveRegions()`
- `getAvatarSizeMode()`
- `getDisableExternalLinkAlert()`
- `getDisplayNameMode()`
- `getDisplayUserMode()`
- `getFocusedPID()`
- `getNotificationPositionMode()`
- `getSelectedCallId()`
- `getSelectedChannelId()`
- `getSelectedGuildId()`
- `getState()`
- `getTextChatNotificationMode()`
- `getTextWidgetOpacity()`
- `incompatibleApp()`
- `initialize()`
- `initialized()`
- `isFocused()`
- `isInstanceFocused()`
- `isInstanceLocked()`
- `isLocked()`
- `isPinned()`
- `isPreviewingInGame()`
- `showKeybindIndicators()`

---

## ForumActivePostStore

Available methods:

- `getAndDeleteMostRecentUserCreatedThreadId()`
- `getCanAckThreads()`
- `getCurrentThreadIds()`
- `getFirstNoReplyThreadId()`
- `getNewThreadCount()`
- `getThreadIds()`
- `initialize()`

---

## SelectivelySyncedUserSettingsStore

Available methods:

- `getAppearanceSettings()`
- `getState()`
- `getTextSettings()`
- `initialize()`
- `shouldSync()`

---

## PerksRelevanceStore

Available methods:

- `getState()`
- `hasFetchedRelevance()`
- `initialize()`
- `profileThemesRelevanceExceeded()`

---

## GuildProductsStore

Available methods:

- `getGuildProduct()`
- `getGuildProductFetchState()`
- `getGuildProductsForGuild()`
- `getGuildProductsForGuildFetchState()`
- `isGuildProductsCacheExpired()`

---

## EventDirectoryStore

Available methods:

- `getCachedGuildByEventId()`
- `getCachedGuildScheduledEventById()`
- `getEventDirectoryEntries()`
- `isFetching()`

---

## GuildRoleMemberCountStore

Available methods:

- `getRoleMemberCount()`
- `shouldFetch()`

---

## StreamerModeStore

Available methods:

- `autoToggle()`
- `disableNotifications()`
- `disableSounds()`
- `enableContentProtection()`
- `enabled()`
- `getSettings()`
- `getState()`
- `hideInstantInvites()`
- `hidePersonalInformation()`
- `initialize()`

---

## VideoSpeakerStore

Available methods:

- `getSpeaker()`
- `initialize()`

---

## SearchAutocompleteStore

Available methods:

- `getState()`
- `initialize()`

---

## MaxMemberCountChannelNoticeStore

Available methods:

- `initialize()`
- `isVisible()`

---

## GameConsoleStore

Available methods:

- `getAwaitingRemoteSessionInfo()`
- `getDevice()`
- `getDevicesForPlatform()`
- `getFetchingDevices()`
- `getLastSelectedDeviceByPlatform()`
- `getPendingDeviceCommands()`
- `getRemoteSessionId()`
- `getUserAgnosticState()`
- `initialize()`

---

## ThreadMembersStore

Available methods:

- `getInitialOverlayState()`
- `getMemberCount()`
- `getMemberIdsPreview()`
- `initialize()`

---

## UserSettingsOverridesStore

Available methods:

- `getAppliedOverrideReasonKey()`
- `getOverride()`
- `getState()`
- `initialize()`

---

## ApplicationDirectoryApplicationsStore

Available methods:

- `getApplication()`
- `getApplicationFetchState()`
- `getApplicationFetchStates()`
- `getApplicationLastFetchTime()`
- `getApplicationRecord()`
- `getApplications()`
- `getInvalidApplicationIds()`
- `isFetching()`
- `isInvalidApplication()`

---

## GravityStore

Available methods:

- `getCustomChannelScore()`
- `getCustomGuildScore()`
- `getCustomGuildScores()`
- `getDehydratedItem()`
- `getDehydratedItems()`
- `getDiscoverableGuilds()`
- `getHydratedItem()`
- `getHydratedItems()`
- `getLoadId()`
- `getMessage()`
- `getMissingItems()`
- `getNewDehydratedItems()`
- `getNewUnreadDehydratedItems()`
- `getNextIndexToHydrate()`
- `getReadDisplayItems()`
- `getSelectedSummary()`
- `getState()`
- `getUnreadDisplayItems()`
- `getVersion()`
- `hasNewContent()`
- `hasOpened()`
- `hasOpenedEnoughTimes()`
- `initialize()`
- `isGravitySelectedChannel()`
- `videosMuted()`

---

## PermissionVADStore

Available methods:

- `canUseVoiceActivity()`
- `initialize()`
- `shouldShowWarning()`

---

## GuildMemberStore

Available methods:

- `getCachedSelfMember()`
- `getCommunicationDisabledUserMap()`
- `getCommunicationDisabledVersion()`
- `getMember()`
- `getMemberIds()`
- `getMemberRoleWithPendingUpdates()`
- `getMemberVersion()`
- `getMembers()`
- `getMutableAllGuildsAndMembers()`
- `getNick()`
- `getNicknameGuildsMapping()`
- `getNicknames()`
- `getPendingRoleUpdates()`
- `getSelfMember()`
- `getTrueMember()`
- `initialize()`
- `isCurrentUserGuest()`
- `isGuestOrLurker()`
- `isMember()`
- `memberOf()`

---

## ExternalStreamingStore

Available methods:

- `getStream()`
- `initialize()`

---

## GuildDirectoryStore

Available methods:

- `getAdminGuildEntryIds()`
- `getCurrentCategoryId()`
- `getDirectoryAllEntriesCount()`
- `getDirectoryCategoryCounts()`
- `getDirectoryEntries()`
- `getDirectoryEntry()`
- `isFetching()`

---

## ReferralTrialStore

Available methods:

- `checkAndFetchReferralsRemaining()`
- `getEligibleUsers()`
- `getFetchingEligibleUsers()`
- `getIsEligibleToSendReferrals()`
- `getIsFetchingReferralIncentiveEligibility()`
- `getIsSenderEligibleForIncentive()`
- `getIsSenderQualifiedForIncentive()`
- `getNextIndexOfEligibleUsers()`
- `getRecipientEligibility()`
- `getRecipientStatus()`
- `getReferralsRemaining()`
- `getRefreshAt()`
- `getRelevantReferralTrialOffers()`
- `getRelevantUserTrialOffer()`
- `getSenderIncentiveState()`
- `getSentUserIds()`
- `initialize()`
- `isFetchingRecipientEligibility()`
- `isFetchingReferralsRemaining()`
- `isResolving()`

---

## ChannelSettingsPermissionsStore

Available methods:

- `advancedMode()`
- `category()`
- `channel()`
- `editedPermissionIds()`
- `formState()`
- `getPermissionOverwrite()`
- `hasChanges()`
- `initialize()`
- `isLockable()`
- `locked()`
- `permissionOverwrites()`
- `selectedOverwriteId()`
- `showNotice()`

---

## CreatorMonetizationStore

Available methods:

- `getPriceTiersFetchStateForGuildAndType()`
- `getPriceTiersForGuildAndType()`

---

## InteractionStore

Available methods:

- `canQueueInteraction()`
- `getIFrameModalApplicationId()`
- `getIFrameModalKey()`
- `getInteraction()`
- `getMessageInteractionStates()`

---

## LibraryApplicationStore

Available methods:

- `entitledBranchIds()`
- `fetched()`
- `getActiveLaunchOptionId()`
- `getActiveLibraryApplication()`
- `getAllLibraryApplications()`
- `getLibraryApplication()`
- `hasApplication()`
- `hasLibraryApplication()`
- `hasRemovedLibraryApplicationThisSession()`
- `initialize()`
- `isUpdatingFlags()`
- `libraryApplications()`
- `whenInitialized()`

---

## GuildRoleSubscriptionsStore

Available methods:

- `getApplicationIdForGuild()`
- `getDidFetchListingForSubscriptionPlanId()`
- `getMonetizationRestrictions()`
- `getMonetizationRestrictionsFetchState()`
- `getSubscriptionGroupListing()`
- `getSubscriptionGroupListingForSubscriptionListing()`
- `getSubscriptionGroupListingsForGuild()`
- `getSubscriptionGroupListingsForGuildFetchState()`
- `getSubscriptionListing()`
- `getSubscriptionListingForPlan()`
- `getSubscriptionListingsForGuild()`
- `getSubscriptionSettings()`
- `getSubscriptionTrial()`

---

## NotificationSettingsStore

Available methods:

- `getDesktopType()`
- `getDisableAllSounds()`
- `getDisableUnreadBadge()`
- `getDisabledSounds()`
- `getNotifyMessagesInSelectedChannel()`
- `getTTSType()`
- `getUserAgnosticState()`
- `initialize()`
- `isSoundDisabled()`
- `taskbarFlash()`

---

## CloudSyncStore

Available methods:

- `getState()`
- `initialize()`
- `isSyncing()`

---

## LocalActivityStore

Available methods:

- `findActivity()`
- `getActivities()`
- `getApplicationActivities()`
- `getApplicationActivity()`
- `getCustomStatusActivity()`
- `getPrimaryActivity()`
- `initialize()`

---

## SlowmodeStore

Available methods:

- `getSlowmodeCooldownGuess()`
- `initialize()`

---

## ApplicationDirectorySimilarApplicationsStore

Available methods:

- `getFetchState()`
- `getSimilarApplications()`

---

## ReadStateStore

Available methods:

- `ackMessageId()`
- `getAllReadStates()`
- `getForDebugging()`
- `getGuildChannelUnreadState()`
- `getGuildUnreadsSentinel()`
- `getMentionChannelIds()`
- `getMentionCount()`
- `getNonChannelAckId()`
- `getNotifCenterReadState()`
- `getOldestUnreadMessageId()`
- `getOldestUnreadTimestamp()`
- `getReadStatesByChannel()`
- `getSnapshot()`
- `getTrackedAckMessageId()`
- `getUnreadCount()`
- `hasOpenedThread()`
- `hasRecentlyVisitedAndRead()`
- `hasTrackedUnread()`
- `hasUnread()`
- `hasUnreadOrMentions()`
- `hasUnreadPins()`
- `initialize()`
- `isEstimated()`
- `isForumPostUnread()`
- `isNewForumThread()`
- `lastMessageId()`
- `lastMessageTimestamp()`
- `lastPinTimestamp()`

---

## UserLeaderboardStore

Available methods:

- `getLastUpdateRequested()`
- `getState()`
- `initialize()`

---

## GuildBoostSlotStore

Available methods:

- `boostSlots()`
- `getGuildBoostSlot()`
- `hasFetched()`
- `initialize()`

---

## EmbeddedActivitiesStore

Available methods:

- `getActivityPanelMode()`
- `getConnectedActivityChannelId()`
- `getCurrentEmbeddedActivity()`
- `getEmbeddedActivitiesByChannel()`
- `getEmbeddedActivitiesForChannel()`
- `getEmbeddedActivitiesForGuild()`
- `getEmbeddedActivityDurationMs()`
- `getEmbeddedActivityForUserId()`
- `getFocusedLayout()`
- `getGridOrientationLockStateForApp()`
- `getLaunchState()`
- `getLaunchStates()`
- `getLayoutModeForApp()`
- `getOrientationLockStateForApp()`
- `getPipOrientationLockStateForApp()`
- `getSelfEmbeddedActivities()`
- `getSelfEmbeddedActivityForChannel()`
- `getShelfActivities()`
- `getShelfFetchStatus()`
- `getState()`
- `hasActivityEverBeenLaunched()`
- `initialize()`
- `isLaunchingActivity()`
- `shouldFetchShelf()`

---

## GameInviteStore

Available methods:

- `getInviteStatuses()`
- `getInvites()`
- `getLastUnseenInvite()`
- `getUnseenInviteCount()`
- `isInviteGameInstalled()`
- `isInviteJoinable()`

---

## EditMessageStore

Available methods:

- `getEditActionSource()`
- `getEditingMessage()`
- `getEditingMessageId()`
- `getEditingRichValue()`
- `getEditingTextValue()`
- `isEditing()`
- `isEditingAny()`

---

## GuildCategoryStore

Available methods:

- `getCategories()`
- `initialize()`

---

## MFAStore

Available methods:

- `emailToken()`
- `getBackupCodes()`
- `getNonces()`
- `getVerificationKey()`
- `hasSeenBackupPrompt()`
- `togglingSMS()`

---

## GuildBoostingNoticeStore

Available methods:

- `channelNoticePredicate()`
- `initialize()`

---

## CollectiblesShopStore

Available methods:

- `analyticsLocations()`
- `analyticsSource()`
- `getAnalytics()`
- `initialProductSkuId()`

---

## GlobalDiscoveryServersSearchCountStore

Available methods:

- `getCounts()`
- `getIsFetchingCounts()`
- `getIsInitialFetchComplete()`

---

## SpamMessageRequestStore

Available methods:

- `getSpamChannelIds()`
- `getSpamChannelsCount()`
- `initialize()`
- `isAcceptedOptimistic()`
- `isReady()`
- `isSpam()`
- `loadCache()`
- `takeSnapshot()`

---

## EmojiStore

Available methods:

- `categories()`
- `diversitySurrogate()`
- `emojiFrecencyWithoutFetchingLatest()`
- `emojiReactionFrecencyWithoutFetchingLatest()`
- `expandedSectionsByGuildIds()`
- `getCustomEmojiById()`
- `getDisambiguatedEmojiContext()`
- `getEmojiAutosuggestion()`
- `getGuildEmoji()`
- `getGuilds()`
- `getNewlyAddedEmoji()`
- `getSearchResultsOrder()`
- `getState()`
- `getTopEmoji()`
- `getTopEmojisMetadata()`
- `getUsableCustomEmojiById()`
- `getUsableGuildEmoji()`
- `hasFavoriteEmojis()`
- `hasPendingUsage()`
- `hasUsableEmojiInAnyGuild()`
- `initialize()`
- `loadState()`
- `searchWithoutFetchingLatest()`

---

## IncomingCallStore

Available methods:

- `getFirstIncomingCallId()`
- `getIncomingCallChannelIds()`
- `getIncomingCalls()`
- `hasIncomingCalls()`
- `initialize()`

---

## InstantInviteStore

Available methods:

- `canRevokeFriendInvite()`
- `getFriendInvite()`
- `getFriendInvitesFetching()`
- `getInvite()`

---

## ActiveThreadsStore

Available methods:

- `forEachGuild()`
- `getThreadsForGuild()`
- `getThreadsForParent()`
- `hasLoaded()`
- `hasThreadsForChannel()`
- `initialize()`
- `isActive()`

---

## LoginRequiredActionStore

Available methods:

- `getState()`
- `initialize()`
- `requiredActions()`
- `requiredActionsIncludes()`
- `wasLoginAttemptedInSession()`

---

## BillingInfoStore

Available methods:

- `editSourceError()`
- `ipCountryCode()`
- `ipCountryCodeHasError()`
- `ipCountryCodeLoaded()`
- `ipCountryCodeRequest()`
- `ipCountryCodeWithFallback()`
- `isBusy()`
- `isLocalizedPromoEnabled()`
- `isPaymentSourceFetching()`
- `isRemovingPaymentSource()`
- `isSubscriptionFetching()`
- `isSyncing()`
- `isUpdatingPaymentSource()`
- `localizedPricingPromo()`
- `localizedPricingPromoHasError()`
- `paymentSourcesFetchRequest()`
- `removeSourceError()`

---

## PoggermodeSettingsStore

Available methods:

- `comboSoundsEnabled()`
- `combosEnabled()`
- `combosRequiredCount()`
- `getUserAgnosticState()`
- `initialize()`
- `isEnabled()`
- `screenshakeEnabled()`
- `screenshakeEnabledLocations()`
- `settingsVisible()`
- `shakeIntensity()`

---

## ContentInventoryOutboxStore

Available methods:

- `deleteOutboxEntryError()`
- `getMatchingOutboxEntry()`
- `getUserOutbox()`
- `hasInitialized()`
- `isDeletingEntryHistory()`
- `isFetchingUserOutbox()`

---

## ExperimentStore

Available methods:

- `getAllExperimentAssignments()`
- `getAllExperimentOverrideDescriptors()`
- `getAllUserExperimentDescriptors()`
- `getExperimentOverrideDescriptor()`
- `getGuildExperimentBucket()`
- `getGuildExperimentDescriptor()`
- `getGuildExperiments()`
- `getLoadedGuildExperiment()`
- `getLoadedUserExperiment()`
- `getRecentExposures()`
- `getRegisteredExperiments()`
- `getSerializedState()`
- `getUserExperimentBucket()`
- `getUserExperimentDescriptor()`
- `hasExperimentTrackedExposure()`
- `hasLoadedExperiments()`
- `hasRegisteredExperiment()`
- `initialize()`
- `loadCache()`
- `takeSnapshot()`

---

## MessageRequestStore

Available methods:

- `getMessageRequestChannelIds()`
- `getMessageRequestsCount()`
- `getUserCountryCode()`
- `initialize()`
- `isAcceptedOptimistic()`
- `isMessageRequest()`
- `isReady()`
- `loadCache()`
- `takeSnapshot()`

---

## LayoutStore

Available methods:

- `getAllWidgets()`
- `getDefaultLayout()`
- `getLayout()`
- `getLayouts()`
- `getRegisteredWidgets()`
- `getState()`
- `getWidget()`
- `getWidgetConfig()`
- `getWidgetDefaultSettings()`
- `getWidgetType()`
- `getWidgetsForLayout()`
- `initialize()`

---

## GlobalDiscoveryServersSearchResultsStore

Available methods:

- `getAlgoliaSearchIndex()`
- `getError()`
- `getErrorMessage()`
- `getGuild()`
- `getGuildIds()`
- `getIsAlgoliaInitialized()`
- `getIsBlocked()`
- `getIsFetching()`
- `getIsInitialFetchComplete()`
- `getLastFetchTimestamp()`
- `getOffset()`
- `getTotal()`

---

## BasicGuildStore

Available methods:

- `getGuild()`
- `getGuildOrStatus()`
- `getVersion()`

---

## ChannelRTCStore

Available methods:

- `getActivityParticipants()`
- `getAllChatOpen()`
- `getChatOpen()`
- `getFilteredParticipants()`
- `getLayout()`
- `getMode()`
- `getParticipant()`
- `getParticipants()`
- `getParticipantsOpen()`
- `getParticipantsVersion()`
- `getSelectedParticipant()`
- `getSelectedParticipantId()`
- `getSelectedParticipantStats()`
- `getSpeakingParticipants()`
- `getStageStreamSize()`
- `getStageVideoLimitBoostUpsellDismissed()`
- `getStreamParticipants()`
- `getUserParticipantCount()`
- `getVideoParticipants()`
- `getVoiceParticipantsHidden()`
- `initialize()`
- `isFullscreenInContext()`

---

## PrivateChannelReadStateStore

Available methods:

- `getUnreadPrivateChannelIds()`
- `initialize()`

---

## GuildSettingsOnboardingStore

Available methods:

- `canCloseEarly()`
- `getCurrentPage()`
- `hasChanges()`
- `hasConfiguredAnythingForCurrentStep()`
- `hasErrors()`
- `initialize()`
- `isEducationUpsellDismissed()`
- `showNotice()`

---

## GuildSettingsIntegrationsStore

Available methods:

- `editedCommandId()`
- `editedIntegration()`
- `editedWebhook()`
- `formState()`
- `getApplication()`
- `getErrors()`
- `getIntegration()`
- `getSection()`
- `getSectionId()`
- `getWebhook()`
- `guild()`
- `hasChanges()`
- `initialize()`
- `integrations()`
- `isFetching()`
- `showNotice()`
- `webhooks()`

---

## ApplicationStreamingSettingsStore

Available methods:

- `getState()`
- `initialize()`

---

## OverlayRTCConnectionStore

Available methods:

- `getAveragePing()`
- `getConnectionState()`
- `getHostname()`
- `getLastPing()`
- `getOutboundLossRate()`
- `getPings()`
- `getQuality()`

---

## BrowserCheckoutStateStore

Available methods:

- `browserCheckoutState()`
- `loadId()`

---

## PictureInPictureStore

Available methods:

- `getDockedRect()`
- `getState()`
- `initialize()`
- `isEmbeddedActivityHidden()`
- `isOpen()`
- `pipActivityWindow()`
- `pipVideoWindow()`
- `pipWidth()`
- `pipWindow()`
- `pipWindows()`

---

## MessageStore

Available methods:

- `focusedMessageId()`
- `getLastChatCommandMessage()`
- `getLastEditableMessage()`
- `getLastMessage()`
- `getLastNonCurrentUserMessage()`
- `getMessage()`
- `getMessages()`
- `hasCurrentUserSentMessage()`
- `hasCurrentUserSentMessageSinceAppStart()`
- `hasPresent()`
- `initialize()`
- `isLoadingMessages()`
- `isReady()`
- `jumpedMessageId()`
- `whenReady()`

---

## ChannelSettingsStore

Available methods:

- `getCategory()`
- `getChannel()`
- `getFormState()`
- `getInvites()`
- `getProps()`
- `getSection()`
- `hasChanges()`
- `initialize()`
- `isOpen()`
- `showNotice()`

---

## ClanSettingsStore

Available methods:

- `getState()`

---

## InstallationManagerStore

Available methods:

- `defaultInstallationPath()`
- `getInstallationPath()`
- `getLabelFromPath()`
- `getState()`
- `hasGamesInstalledInPath()`
- `initialize()`
- `installationPaths()`
- `installationPathsMetadata()`
- `shouldBeInstalled()`

---

## GuildSettingsSafetyStore

Available methods:

- `getCurrentPage()`

---

## TopEmojiStore

Available methods:

- `getIsFetching()`
- `getState()`
- `getTopEmojiIdsByGuildId()`
- `initialize()`

---

## SpellcheckStore

Available methods:

- `hasLearnedWord()`
- `initialize()`
- `isEnabled()`

---

## EnablePublicGuildUpsellNoticeStore

Available methods:

- `initialize()`
- `isVisible()`

---

## FirstPartyRichPresenceStore

Available methods:

- `getActivities()`
- `initialize()`

---

## GuildTemplateStore

Available methods:

- `getDisplayedGuildTemplateCode()`
- `getForGuild()`
- `getGuildTemplate()`
- `getGuildTemplates()`

---

## DispatchApplicationStore

Available methods:

- `getDefaultLaunchOption()`
- `getHistoricalTotalBytesDownloaded()`
- `getHistoricalTotalBytesRead()`
- `getHistoricalTotalBytesWritten()`
- `getLaunchOptions()`
- `getState()`
- `initialize()`
- `isInstalled()`
- `isLaunchable()`
- `isUpToDate()`
- `shouldPatch()`
- `supportsCloudSync()`
- `whenInitialized()`

---

## ProxyBlockStore

Available methods:

- `blockedByProxy()`

---

## GuildPromptsStore

Available methods:

- `getState()`
- `hasViewedPrompt()`
- `initialize()`

---

## GuildBoostingNoticeStore

Available methods:

- `channelNoticePredicate()`
- `initialize()`

---

## DetectedOffPlatformPremiumPerksStore

Available methods:

- `getDetectedOffPlatformPremiumPerks()`
- `initialize()`

---

## StageInstanceStore

Available methods:

- `getAllStageInstances()`
- `getStageInstanceByChannel()`
- `getStageInstancesByGuild()`
- `isLive()`
- `isPublic()`

---

## GatedChannelStore

Available methods:

- `initialize()`
- `isChannelGated()`
- `isChannelGatedAndVisible()`
- `isChannelOrThreadParentGated()`

---

## ApplicationAssetsStore

Available methods:

- `getApplicationAssetFetchState()`
- `getApplicationAssets()`
- `getFetchingIds()`

---

## GuildStore

Available methods:

- `getAllGuildsRoles()`
- `getGeoRestrictedGuilds()`
- `getGuild()`
- `getGuildCount()`
- `getGuildIds()`
- `getGuilds()`
- `getRole()`
- `getRoles()`
- `isLoaded()`

---

## DevToolsDevSettingsStore

Available methods:

- `all()`
- `allByCategory()`
- `get()`
- `getUserAgnosticState()`
- `initialize()`
- `set()`

---

## ChannelSectionStore

Available methods:

- `getCurrentSidebarChannelId()`
- `getCurrentSidebarMessageId()`
- `getGuildSidebarState()`
- `getSection()`
- `getSidebarState()`
- `getState()`
- `initialize()`

---

## ClipsStore

Available methods:

- `getActiveAnimation()`
- `getClips()`
- `getClipsWarningShown()`
- `getHardwareClassification()`
- `getHardwareClassificationForDecoupled()`
- `getHardwareClassificationVersion()`
- `getIsAtMaxSaveClipOperations()`
- `getLastClipsError()`
- `getLastClipsSession()`
- `getNewClipIds()`
- `getPendingClips()`
- `getSettings()`
- `getStreamClipAnimations()`
- `getUserAgnosticState()`
- `hasAnyClipAnimations()`
- `hasClips()`
- `hasTakenDecoupledClip()`
- `initialize()`
- `isClipsEnabledForUser()`
- `isDecoupledGameClippingEnabled()`
- `isViewerClippingAllowedForUser()`
- `isVoiceRecordingAllowedForUser()`

---

## DispatchApplicationLaunchSetupStore

Available methods:

- `getLastProgress()`
- `isRunning()`

---

## NewlyAddedEmojiStore

Available methods:

- `getLastSeenEmojiByGuild()`
- `getState()`
- `initialize()`
- `isNewerThanLastSeen()`

---

## PurchasedItemsFestivityStore

Available methods:

- `canPlayWowMoment()`
- `getState()`
- `initialize()`
- `isFetchingWowMomentMedia()`
- `wowMomentWumpusMedia()`

---

## AdyenStore

Available methods:

- `cashAppPayComponent()`
- `client()`

---

## ChannelMemberStore

Available methods:

- `getProps()`
- `getRows()`
- `initialize()`

---

## PremiumGiftingIntentStore

Available methods:

- `canShowFriendsTabBadge()`
- `getDevToolTotalFriendAnniversaries()`
- `getFriendAnniversaries()`
- `getFriendAnniversaryYears()`
- `getState()`
- `initialize()`
- `isGiftIntentMessageInCooldown()`
- `isTopAffinityFriendAnniversary()`

---

## TTSStore

Available methods:

- `currentMessage()`
- `getUserAgnosticState()`
- `initialize()`
- `isSpeakingMessage()`
- `speechRate()`

---

## OverlayRunningGameStore

Available methods:

- `getGame()`
- `getGameForPID()`

---

## WindowStore

Available methods:

- `getFocusedWindowId()`
- `getLastFocusedWindowId()`
- `isElementFullScreen()`
- `isFocused()`
- `isVisible()`
- `windowSize()`

---

## RecentMentionsStore

Available methods:

- `everyoneFilter()`
- `getMentions()`
- `guildFilter()`
- `hasLoadedEver()`
- `hasMention()`
- `hasMore()`
- `initialize()`
- `isOpen()`
- `lastLoaded()`
- `loading()`
- `mentionsAreStale()`
- `roleFilter()`

---

## HubLinkNoticeStore

Available methods:

- `channelNoticePredicate()`
- `initialize()`

---

## VoiceChannelEffectsStore

Available methods:

- `effectCooldownEndTime()`
- `getEffectForUserId()`
- `isOnCooldown()`
- `recentlyUsedEmojis()`

---

## CertifiedDeviceStore

Available methods:

- `getCertifiedDevice()`
- `getCertifiedDeviceByType()`
- `getCertifiedDeviceName()`
- `getModel()`
- `getRevision()`
- `getVendor()`
- `hasAutomaticGainControl()`
- `hasEchoCancellation()`
- `hasNoiseSuppression()`
- `initialize()`
- `isCertified()`
- `isHardwareMute()`

---

## HDStreamingViewerStore

Available methods:

- `cooldownIsActive()`
- `getState()`
- `initialize()`

---

## InteractionModalStore

Available methods:

- `getModalState()`

---

## GuildSettingsEmojiStore

Available methods:

- `getEmojiRevision()`
- `getEmojis()`
- `initialize()`
- `isUploadingEmoji()`

---

## SoundpackStore

Available methods:

- `getLastSoundpackExperimentId()`
- `getSoundpack()`
- `getState()`
- `initialize()`

---

## ConsentStore

Available methods:

- `fetchedConsents()`
- `getAuthenticationConsentRequired()`
- `hasConsented()`
- `receivedConsentsInConnectionOpen()`

---

## GuildAvailabilityStore

Available methods:

- `initialize()`
- `isUnavailable()`
- `totalGuilds()`
- `totalUnavailableGuilds()`
- `unavailableGuilds()`

---

## GuildIncidentsStore

Available methods:

- `getGuildAlertSettings()`
- `getGuildIncident()`
- `getIncidentsByGuild()`
- `initialize()`

---

## MediaPostEmbedStore

Available methods:

- `getEmbedFetchState()`
- `getMediaPostEmbed()`
- `getMediaPostEmbeds()`

---

## ApplicationSubscriptionStore

Available methods:

- `getApplicationEntitlementsForGuild()`
- `getEntitlementsForGuild()`
- `getEntitlementsForGuildFetchState()`
- `getSubscriptionGroupListing()`
- `getSubscriptionGroupListingForSubscriptionListing()`
- `getSubscriptionGroupListingsForApplicationFetchState()`
- `getSubscriptionListing()`
- `getSubscriptionListingForPlan()`
- `getSubscriptionListingsForApplication()`

---

## ApplicationViewStore

Available methods:

- `applicationFilterQuery()`
- `applicationViewItems()`
- `filteredLibraryApplicationViewItems()`
- `hasFetchedApplications()`
- `hiddenLibraryApplicationViewItems()`
- `initialize()`
- `launchableApplicationViewItems()`
- `libraryApplicationViewItems()`
- `sortedFilteredLibraryApplicationViewItems()`

---

## PermissionStore

Available methods:

- `can()`
- `canAccessGuildSettings()`
- `canAccessMemberSafetyPage()`
- `canBasicChannel()`
- `canImpersonateRole()`
- `canManageUser()`
- `canWithPartialContext()`
- `computeBasicPermissions()`
- `computePermissions()`
- `getChannelPermissions()`
- `getChannelsVersion()`
- `getGuildPermissionProps()`
- `getGuildPermissions()`
- `getGuildVersion()`
- `getHighestRole()`
- `initialize()`
- `isRoleHigher()`

---

## OverridePremiumTypeStore

Available methods:

- `getCreatedAtOverride()`
- `getPremiumTypeActual()`
- `getPremiumTypeOverride()`
- `getState()`
- `initialize()`
- `premiumType()`

---

## PaymentAuthenticationStore

Available methods:

- `awaitingPaymentId()`
- `error()`
- `isAwaitingAuthentication()`

---

## SubscriptionPlanStore

Available methods:

- `get()`
- `getFetchedSKUIDs()`
- `getForSKU()`
- `getForSkuAndInterval()`
- `getPaymentSourceIds()`
- `getPaymentSourcesForPlanId()`
- `getPlanIdsForSkus()`
- `hasPaymentSourceForSKUId()`
- `hasPaymentSourceForSKUIds()`
- `ignoreSKUFetch()`
- `isFetchingForPremiumSKUs()`
- `isFetchingForSKU()`
- `isFetchingForSKUs()`
- `isLoadedForPremiumSKUs()`
- `isLoadedForSKU()`
- `isLoadedForSKUs()`

---

## TenureRewardStore

Available methods:

- `getFetchState()`
- `getState()`
- `getTenureRewardStatusForRewardId()`
- `initialize()`

---

## ClientThemesBackgroundStore

Available methods:

- `getLinearGradient()`
- `getState()`
- `gradientPreset()`
- `initialize()`
- `isCoachmark()`
- `isEditorOpen()`
- `isPreview()`
- `mobilePendingThemeIndex()`

---

## IdleStore

Available methods:

- `getIdleSince()`
- `isAFK()`
- `isIdle()`

---

## PopoutWindowStore

Available methods:

- `getIsAlwaysOnTop()`
- `getState()`
- `getWindow()`
- `getWindowFocused()`
- `getWindowKeys()`
- `getWindowOpen()`
- `getWindowState()`
- `getWindowVisible()`
- `initialize()`
- `unmountWindow()`

---

## CallStore

Available methods:

- `getCall()`
- `getCalls()`
- `getInternalState()`
- `getMessageId()`
- `initialize()`
- `isCallActive()`
- `isCallUnavailable()`

---

## ApplicationStatisticsStore

Available methods:

- `getStatisticsForApplication()`
- `shouldFetchStatisticsForApplication()`

---

## GuildBoostingProgressBarPersistedStore

Available methods:

- `getCountForGuild()`
- `getState()`
- `initialize()`

---

## ChannelSettingsIntegrationsStore

Available methods:

- `editedWebhook()`
- `formState()`
- `getProps()`
- `getWebhook()`
- `hasChanges()`
- `initialize()`
- `showNotice()`
- `webhooks()`

---

## GlobalDiscoveryServersSearchLayoutStore

Available methods:

- `getVisibleTabs()`
- `initialize()`

---

## AppLauncherStore

Available methods:

- `activeViewType()`
- `appDMChannelsWithFailedLoads()`
- `closeReason()`
- `entrypoint()`
- `initialState()`
- `initialize()`
- `lastShownEntrypoint()`
- `shouldShowModal()`
- `shouldShowPopup()`

---

## GuildBoostingGracePeriodNoticeStore

Available methods:

- `getLastDismissedGracePeriodForGuild()`
- `getState()`
- `initialize()`
- `isVisible()`

---

## PhoneStore

Available methods:

- `getCountryCode()`
- `getUserAgnosticState()`
- `initialize()`

---

## MessageReactionsStore

Available methods:

- `getReactions()`

---

## ApplicationStreamPreviewStore

Available methods:

- `getIsPreviewLoading()`
- `getPreviewURL()`
- `getPreviewURLForStreamKey()`

---

## PrivateChannelRecipientsInviteStore

Available methods:

- `getQuery()`
- `getResults()`
- `getSelectedUsers()`
- `getState()`
- `hasFriends()`
- `initialize()`

---

## StoreListingStore

Available methods:

- `get()`
- `getForChannel()`
- `getForSKU()`
- `getStoreListing()`
- `getUnpublishedForSKU()`
- `initialize()`
- `isFetchingForSKU()`

---

## ConnectedAccountsStore

Available methods:

- `addPendingAuthorizedState()`
- `deletePendingAuthorizedState()`
- `getAccount()`
- `getAccounts()`
- `getLocalAccount()`
- `getLocalAccounts()`
- `hasPendingAuthorizedState()`
- `isFetching()`
- `isJoining()`
- `isSuggestedAccountType()`
- `joinErrorMessage()`

---

## DomainMigrationStore

Available methods:

- `getMigrationStatus()`

---

## KeybindsStore

Available methods:

- `getKeybindForAction()`
- `getOverlayChatKeybind()`
- `getOverlayKeybind()`
- `getUserAgnosticState()`
- `hasExactKeybind()`
- `hasKeybind()`
- `initialize()`

---

## ApplicationStoreSettingsStore

Available methods:

- `didMatureAgree()`

---

## SurveyStore

Available methods:

- `getCurrentSurvey()`
- `getLastSeenTimestamp()`
- `getState()`
- `getSurveyOverride()`
- `initialize()`

---

## GuildSettingsAnalyticsStore

Available methods:

- `getError()`
- `getMemberInsights()`
- `getOverviewAnalytics()`
- `shouldFetchMemberInsights()`

---

## GuildRoleConnectionsConfigurationStore

Available methods:

- `getGuildRoleConnectionsConfiguration()`
- `initialize()`

---

## GuildOnboardingHomeSettingsStore

Available methods:

- `getActionForChannel()`
- `getEnabled()`
- `getIsLoading()`
- `getNewMemberAction()`
- `getNewMemberActions()`
- `getResourceChannels()`
- `getResourceForChannel()`
- `getSettings()`
- `getWelcomeMessage()`
- `hasMemberAction()`
- `hasSettings()`

---

## StageChannelParticipantStore

Available methods:

- `getChannels()`
- `getChannelsVersion()`
- `getMutableParticipants()`
- `getMutableRequestToSpeakParticipants()`
- `getParticipant()`
- `getParticipantCount()`
- `getParticipantsVersion()`
- `getRequestToSpeakParticipantsVersion()`
- `initialize()`

---

## JoinedThreadsStore

Available methods:

- `flags()`
- `getInitialOverlayState()`
- `getMuteConfig()`
- `getMutedThreads()`
- `hasJoined()`
- `isMuted()`
- `joinTimestamp()`

---

## QuestsStore

Available methods:

- `claimedQuests()`
- `getOptimisticProgress()`
- `getQuest()`
- `getRewardCode()`
- `getRewards()`
- `getStreamHeartbeatFailure()`
- `isClaimingReward()`
- `isDismissingContent()`
- `isEnrolling()`
- `isFetchingClaimedQuests()`
- `isFetchingCurrentQuests()`
- `isFetchingRewardCode()`
- `isProgressingOnDesktop()`
- `lastFetchedCurrentQuests()`
- `questDeliveryOverride()`
- `questToDeliverForPlacement()`
- `quests()`
- `selectedTaskPlatform()`

---

## PremiumPromoStore

Available methods:

- `initialize()`
- `isEligible()`

---

## ContextMenuStore

Available methods:

- `close()`
- `getContextMenu()`
- `isOpen()`
- `version()`

---

## WelcomeScreenSettingsStore

Available methods:

- `get()`
- `getSettingsProps()`
- `initialize()`
- `showNotice()`

---

## DataHarvestStore

Available methods:

- `harvestType()`
- `requestingHarvest()`

---

## FrecencyStore

Available methods:

- `frecencyWithoutFetchingLatest()`
- `getBonusScore()`
- `getFrequentlyWithoutFetchingLatest()`
- `getMaxScore()`
- `getScoreForDMWithoutFetchingLatest()`
- `getScoreWithoutFetchingLatest()`
- `getState()`
- `hasPendingUsage()`
- `initialize()`

---

## EntitlementStore

Available methods:

- `applicationIdsFetched()`
- `applicationIdsFetching()`
- `fetchedAllEntitlements()`
- `fetchingAllEntitlements()`
- `get()`
- `getForApplication()`
- `getForSku()`
- `getForSubscription()`
- `getFractionalPremium()`
- `getGiftable()`
- `getUnactivatedFractionalPremiumUnits()`
- `hasFetchedForApplicationIds()`
- `initialize()`
- `isEntitledToSku()`
- `isFetchedForApplication()`
- `isFetchingForApplication()`

---

## ForumPostUnreadCountStore

Available methods:

- `getCount()`
- `getThreadIdsMissingCounts()`
- `initialize()`

---

## UserSettingsProtoStore

Available methods:

- `computeState()`
- `frecencyWithoutFetchingLatest()`
- `getDismissedGuildContent()`
- `getFullState()`
- `getGuildFolders()`
- `getGuildRecentsDismissedAt()`
- `getGuildsProto()`
- `getState()`
- `hasLoaded()`
- `initialize()`
- `settings()`
- `wasMostRecentUpdateFromServer()`

---

## GravityUnreadStateStore

Available methods:

- `getReadTimestamp()`
- `getState()`
- `getUserAgnosticState()`
- `initialize()`

---

## InviteModalStore

Available methods:

- `getProps()`
- `initialize()`
- `isOpen()`

---

## ChannelStore

Available methods:

- `getAllThreadsForParent()`
- `getBasicChannel()`
- `getChannel()`
- `getChannelIds()`
- `getDMChannelFromUserId()`
- `getDMFromUserId()`
- `getDMUserIds()`
- `getDebugInfo()`
- `getGuildChannelsVersion()`
- `getInitialOverlayState()`
- `getMutableBasicGuildChannelsForGuild()`
- `getMutableDMsByUserIds()`
- `getMutableGuildChannelsForGuild()`
- `getMutablePrivateChannels()`
- `getPrivateChannelsVersion()`
- `getSortedPrivateChannels()`
- `hasChannel()`
- `initialize()`
- `loadAllGuildAndPrivateChannelsFromDisk()`

---

## LaunchableGameStore

Available methods:

- `isLaunchable()`
- `launchableGames()`
- `launchingGames()`

---

## UserStore

Available methods:

- `filter()`
- `findByTag()`
- `forEach()`
- `getCurrentUser()`
- `getUser()`
- `getUserStoreVersion()`
- `getUsers()`
- `handleLoadCache()`
- `initialize()`
- `takeSnapshot()`

---

## RunningGameStore

Available methods:

- `addExecutableTrackedByAnalytics()`
- `canShowAdminWarning()`
- `getCandidateGames()`
- `getCurrentGameForAnalytics()`
- `getGameForPID()`
- `getGameOverlayStatus()`
- `getGamesSeen()`
- `getLauncherForPID()`
- `getObservedAppNameForWindow()`
- `getOverlayOptionsForPID()`
- `getOverrideForGame()`
- `getOverrides()`
- `getRunningDiscordApplicationIds()`
- `getRunningGames()`
- `getRunningVerifiedApplicationIds()`
- `getSeenGameByName()`
- `getVisibleGame()`
- `getVisibleRunningGames()`
- `initialize()`
- `isDetectionEnabled()`
- `isObservedAppRunning()`
- `shouldContinueWithoutElevatedProcessForPID()`
- `shouldElevateProcessForPID()`

---

## CollectiblesCategoryStore

Available methods:

- `categories()`
- `error()`
- `getCategory()`
- `getCategoryForProduct()`
- `getProduct()`
- `initialize()`
- `isFetchingCategories()`
- `isFetchingProduct()`
- `lastFetchOptions()`
- `lastSuccessfulFetch()`
- `products()`
- `recommendedGiftSkuIds()`

---

## ActiveJoinedThreadsStore

Available methods:

- `computeAllActiveJoinedThreads()`
- `getActiveJoinedRelevantThreadsForGuild()`
- `getActiveJoinedRelevantThreadsForParent()`
- `getActiveJoinedThreadsForGuild()`
- `getActiveJoinedThreadsForParent()`
- `getActiveJoinedUnreadThreadsForGuild()`
- `getActiveJoinedUnreadThreadsForParent()`
- `getActiveThreadCount()`
- `getActiveUnjoinedThreadsForGuild()`
- `getActiveUnjoinedThreadsForParent()`
- `getActiveUnjoinedUnreadThreadsForGuild()`
- `getActiveUnjoinedUnreadThreadsForParent()`
- `getNewThreadCount()`
- `getNewThreadCountsForGuild()`
- `hasActiveJoinedUnreadThreads()`
- `initialize()`

---

## SpeakingStore

Available methods:

- `getSpeakers()`
- `getSpeakingDuration()`
- `initialize()`
- `isAnyoneElseSpeaking()`
- `isAnyonePrioritySpeaking()`
- `isCurrentUserPrioritySpeaking()`
- `isCurrentUserSpeaking()`
- `isPrioritySpeaker()`
- `isSoundSharing()`
- `isSpeaking()`

---

## AccessibilityStore

Available methods:

- `alwaysShowLinkDecorations()`
- `colorblindMode()`
- `contrast()`
- `desaturateUserColors()`
- `fontScale()`
- `fontScaleClass()`
- `fontSize()`
- `forcedColorsModalSeen()`
- `getUserAgnosticState()`
- `hideTags()`
- `initialize()`
- `isFontScaledDown()`
- `isFontScaledUp()`
- `isMessageGroupSpacingDecreased()`
- `isMessageGroupSpacingIncreased()`
- `isSubmitButtonEnabled()`
- `isZoomedIn()`
- `isZoomedOut()`
- `keyboardModeEnabled()`
- `keyboardNavigationExplainerModalSeen()`
- `lowContrastMode()`
- `messageGroupSpacing()`
- `rawPrefersReducedMotion()`
- `roleStyle()`
- `saturation()`
- `syncForcedColors()`
- `syncProfileThemeWithUserTheme()`
- `systemForcedColors()`
- `systemPrefersContrast()`
- `systemPrefersCrossfades()`
- `systemPrefersReducedMotion()`
- `useForcedColors()`
- `useReducedMotion()`
- `zoom()`

---

## GuildVerificationStore

Available methods:

- `canChatInGuild()`
- `getCheck()`
- `initialize()`

---

## ViewHistoryStore

Available methods:

- `getState()`
- `hasViewed()`
- `initialize()`

---

## SecureFramesPersistedStore

Available methods:

- `getPersistentCodesEnabled()`
- `getState()`
- `getUploadedKeyVersionsCached()`
- `initialize()`

---

## SubscriptionRemindersStore

Available methods:

- `shouldShowReactivateNotice()`

---

## BraintreeStore

Available methods:

- `getClient()`
- `getLastURL()`
- `getPayPalClient()`
- `getVenmoClient()`

---

## UserProfileStore

Available methods:

- `getGuildMemberProfile()`
- `getMutualFriends()`
- `getMutualFriendsCount()`
- `getMutualGuilds()`
- `getUserProfile()`
- `initialize()`
- `isFetchingFriends()`
- `isFetchingProfile()`
- `isSubmitting()`
- `takeSnapshot()`

---

## ChannelPinsStore

Available methods:

- `getPinnedMessages()`
- `initialize()`
- `loaded()`

---

## UnreadSettingNoticeStore

Available methods:

- `getNumberOfChannelVisitsSince()`
- `getNumberOfRenders()`
- `getNumberOfRendersSince()`
- `getState()`
- `initialize()`

---

## VideoQualityModeStore

Available methods:

- `mode()`

---

## VideoBackgroundStore

Available methods:

- `hasBeenApplied()`
- `hasUsedBackgroundInCall()`
- `initialize()`
- `videoFilterAssets()`

---

## GuildOnboardingHomeNavigationStore

Available methods:

- `getHomeNavigationChannelId()`
- `getSelectedResourceChannelId()`
- `getState()`
- `initialize()`

---

## LabFeatureStore

Available methods:

- `get()`
- `getUserAgnosticState()`
- `initialize()`
- `set()`

---

## NowPlayingStore

Available methods:

- `gameIds()`
- `games()`
- `getNowPlaying()`
- `getUserGame()`
- `initialize()`
- `usersPlaying()`

---

## ClanSetupStore

Available methods:

- `getGuildIds()`
- `getState()`
- `getStateForGuild()`
- `initialize()`

---

## GuildMemberCountStore

Available methods:

- `getMemberCount()`
- `getMemberCounts()`
- `getOnlineCount()`

---

## VerifiedKeyStore

Available methods:

- `getKeyTrustedAt()`
- `getState()`
- `getUserIds()`
- `getUserVerifiedKeys()`
- `initialize()`
- `isKeyVerified()`

---

## LurkerModePopoutStore

Available methods:

- `initialize()`
- `shouldShowPopout()`

---

## StreamingCapabilitiesStore

Available methods:

- `GPUDriversOutdated()`
- `canUseHardwareAcceleration()`
- `getState()`
- `initialize()`
- `problematicGPUDriver()`

---

## ApplicationCommandFrecencyStore

Available methods:

- `getCommandFrecencyWithoutLoadingLatest()`
- `getScoreWithoutLoadingLatest()`
- `getState()`
- `getTopCommandsWithoutLoadingLatest()`
- `hasPendingUsage()`
- `initialize()`

---

## GIFPickerViewStore

Available methods:

- `getAnalyticsID()`
- `getQuery()`
- `getResultItems()`
- `getResultQuery()`
- `getSelectedFormat()`
- `getSuggestions()`
- `getTrendingCategories()`
- `getTrendingSearchTerms()`

---

## MobileWebSidebarStore

Available methods:

- `getIsOpen()`

---

## ForumPostMessagesStore

Available methods:

- `getMessage()`
- `initialize()`
- `isLoading()`

---

## UserSettingsModalStore

Available methods:

- `getPreviousSection()`
- `getProps()`
- `getScrollPosition()`
- `getSection()`
- `getSubsection()`
- `hasChanges()`
- `initialize()`
- `isOpen()`
- `onClose()`
- `shouldOpenWithoutBackstack()`

---

## ExpandedGuildFolderStore

Available methods:

- `getExpandedFolders()`
- `getState()`
- `initialize()`
- `isFolderExpanded()`

---

## DetectableGameSupplementalStore

Available methods:

- `canFetch()`
- `getCoverImageUrl()`
- `getGame()`
- `getGames()`
- `getLocalizedName()`
- `getThemes()`
- `isFetching()`

---

## AuthSessionsStore

Available methods:

- `getSessions()`

---

## SharedCanvasStore

Available methods:

- `getAvatarImage()`
- `getDrawMode()`
- `getDrawables()`
- `getEmojiImage()`
- `visibleOverlayCanvas()`

---

## CreatorMonetizationMarketingStore

Available methods:

- `getEligibleGuildsForNagActivate()`

---

## HypeSquadStore

Available methods:

- `getHouseMembership()`

---

## SignUpStore

Available methods:

- `getActiveGuildSignUp()`
- `getActiveUserSignUp()`
- `hasCompletedTarget()`

---

## CategoryCollapseStore

Available methods:

- `getCollapsedCategories()`
- `getState()`
- `initialize()`
- `isCollapsed()`
- `version()`

---

## GuildDiscoveryStore

Available methods:

- `getCurrentCategoryId()`
- `getCurrentHomepageCategoryId()`
- `getDiscoverableGuilds()`
- `getIsReady()`
- `getLoadId()`
- `getMostRecentQuery()`
- `getSearchIndex()`
- `getSeenGuildIds()`
- `getTopCategoryCounts()`
- `hasSearchError()`
- `initialize()`
- `isFetching()`
- `isFetchingSearch()`

---

## InviteNoticeStore

Available methods:

- `channelNoticePredicate()`
- `initialize()`

---

## SubscriptionRoleStore

Available methods:

- `buildRoles()`
- `getGuildIdsWithPurchasableRoles()`
- `getPurchasableSubscriptionRoles()`
- `getSubscriptionRoles()`
- `getUserIsAdmin()`
- `getUserSubscriptionRoles()`
- `initialize()`

---

## TestModeStore

Available methods:

- `error()`
- `getState()`
- `inTestModeForApplication()`
- `inTestModeForEmbeddedApplication()`
- `initialize()`
- `isFetchingAuthorization()`
- `isTestMode()`
- `shouldDisplayTestMode()`
- `testModeApplicationId()`
- `testModeEmbeddedApplicationId()`
- `testModeOriginURL()`
- `whenInitialized()`

---

## VoiceChannelEffectsPersistedStore

Available methods:

- `getState()`
- `initialize()`

---

## RelationshipStore

Available methods:

- `getBlockedIDs()`
- `getBlockedOrIgnoredIDs()`
- `getFriendCount()`
- `getFriendIDs()`
- `getNickname()`
- `getOutgoingCount()`
- `getPendingCount()`
- `getRelationshipCount()`
- `getRelationshipType()`
- `getRelationships()`
- `getSince()`
- `getSinces()`
- `getSpamCount()`
- `initialize()`
- `isBlocked()`
- `isBlockedForMessage()`
- `isBlockedOrIgnored()`
- `isBlockedOrIgnoredForMessage()`
- `isFriend()`
- `isIgnored()`
- `isIgnoredForMessage()`
- `isSpam()`

---

## InviteStore

Available methods:

- `getInvite()`
- `getInviteError()`
- `getInviteKeyForGuildId()`
- `getInvites()`

---

## DraftStore

Available methods:

- `getDraft()`
- `getRecentlyEditedDrafts()`
- `getState()`
- `getThreadDraftWithParentMessageId()`
- `getThreadSettings()`
- `initialize()`

---

## LocaleStore

Available methods:

- `initialize()`
- `locale()`

---

## GravityFiltersStore

Available methods:

- `filterNSFW()`
- `getState()`
- `getUserAgnosticState()`
- `initialize()`
- `negativeContentOnly()`

---

## IntegrationQueryStore

Available methods:

- `getQuery()`
- `getResults()`

---

## ContentInventoryActivityStore

Available methods:

- `getMatchingActivity()`
- `initialize()`

---

## GuildMemberRequesterStore

Available methods:

- `initialize()`
- `requestMember()`

---

## NoteStore

Available methods:

- `getNote()`

---

## MultiAccountStore

Available methods:

- `canUseMultiAccountNotifications()`
- `getCanUseMultiAccountMobile()`
- `getHasLoggedInAccounts()`
- `getIsValidatingUsers()`
- `getState()`
- `getUsers()`
- `getValidUsers()`
- `initialize()`
- `isSwitchingAccount()`

---

## TransientKeyStore

Available methods:

- `getUsers()`
- `isKeyVerified()`

---

## GuildNSFWAgreeStore

Available methods:

- `didAgree()`
- `initialize()`

---

## ChannelListStore

Available methods:

- `getGuild()`
- `getGuildWithoutChangingGuildActionRows()`
- `initialize()`
- `recentsChannelCount()`

---

## SearchMessageStore

Available methods:

- `getMessage()`

---

## UnsyncedUserSettingsStore

Available methods:

- `activityPanelHeight()`
- `callChatSidebarWidth()`
- `callHeaderHeight()`
- `darkSidebar()`
- `dataSavingMode()`
- `disableActivityHardwareAccelerationPrompt()`
- `disableActivityHostLeftNitroUpsell()`
- `disableApplicationSubscriptionCancellationSurvey()`
- `disableCallUserConfirmationPrompt()`
- `disableEmbeddedActivityPopOutAlert()`
- `disableHideSelfStreamAndVideoConfirmationAlert()`
- `disableInviteWithTextChannelActivityLaunch()`
- `disableVoiceChannelChangeAlert()`
- `displayCompactAvatars()`
- `expressionPickerWidth()`
- `getUserAgnosticState()`
- `homeSidebarWidth()`
- `initialize()`
- `lowQualityImageMode()`
- `messageRequestSidebarWidth()`
- `postSidebarWidth()`
- `pushUpsellUserSettingsDismissed()`
- `saveCameraUploadsToDevice()`
- `swipeToReply()`
- `threadSidebarWidth()`
- `useMobileChatCustomRenderer()`
- `useSystemTheme()`
- `videoUploadQuality()`

---

## StageChannelSelfRichPresenceStore

Available methods:

- `getActivity()`
- `initialize()`

---

## MessageRequestPreviewStore

Available methods:

- `getMessageRequestPreview()`
- `initialize()`
- `shouldLoadMessageRequestPreview()`

---

## InviteSuggestionsStore

Available methods:

- `getInitialCounts()`
- `getInviteSuggestionRows()`
- `getSelectedInviteMetadata()`
- `getTotalSuggestionsCount()`
- `initialize()`

---

## StageMusicStore

Available methods:

- `getUserAgnosticState()`
- `initialize()`
- `isMuted()`
- `shouldPlay()`

---

## ConnectedAppsStore

Available methods:

- `connections()`
- `getAllConnections()`
- `getApplication()`
- `isConnected()`

---

## SoundboardStore

Available methods:

- `getFavorites()`
- `getOverlaySerializedState()`
- `getSound()`
- `getSoundById()`
- `getSounds()`
- `getSoundsForGuild()`
- `hasFetchedAllSounds()`
- `hasFetchedDefaultSounds()`
- `hasHadOtherUserPlaySoundInSession()`
- `initialize()`
- `isFavoriteSound()`
- `isFetching()`
- `isFetchingDefaultSounds()`
- `isFetchingSounds()`
- `isLocalSoundboardMuted()`
- `isPlayingSound()`
- `isUserPlayingSounds()`
- `shouldFetchDefaultSounds()`

---

## SearchStore

Available methods:

- `getAnalyticsId()`
- `getCurrentSearchId()`
- `getDocumentsIndexedCount()`
- `getEditorState()`
- `getHistory()`
- `getOffset()`
- `getQuery()`
- `getRawResults()`
- `getResultsBlocked()`
- `getResultsState()`
- `getSearchFetcher()`
- `getSearchType()`
- `getTotalResults()`
- `hasError()`
- `hasResults()`
- `initialize()`
- `isActive()`
- `isHistoricalIndexing()`
- `isIndexing()`
- `isSearching()`
- `isTokenized()`
- `shouldShowBlockedResults()`
- `shouldShowNoResultsAlt()`

---

## SpotifyStore

Available methods:

- `canPlay()`
- `getActiveSocketAndDevice()`
- `getActivity()`
- `getLastPlayedTrackId()`
- `getPlayableComputerDevices()`
- `getPlayerState()`
- `getSyncingWith()`
- `getTrack()`
- `hasConnectedAccount()`
- `initialize()`
- `shouldShowActivity()`
- `wasAutoPaused()`

---

## SavedMessagesStore

Available methods:

- `getIsStale()`
- `getLastChanged()`
- `getMessageBookmarks()`
- `getMessageReminders()`
- `getOverdueMessageReminderCount()`
- `getSavedMessage()`
- `getSavedMessageCount()`
- `getSavedMessages()`
- `hasOverdueReminder()`
- `initialize()`
- `isMessageBookmarked()`
- `isMessageReminder()`

---

## SortedGuildStore

Available methods:

- `getCompatibleGuildFolders()`
- `getFastListGuildFolders()`
- `getFlattenedGuildFolderList()`
- `getFlattenedGuildIds()`
- `getGuildFolderById()`
- `getGuildFolders()`
- `getGuildsTree()`
- `initialize()`
- `takeSnapshot()`

---

## AppViewStore

Available methods:

- `getHomeLink()`
- `initialize()`

---

## NotificationCenterStore

Available methods:

- `getState()`
- `getTab()`
- `hasNewMentions()`
- `initialize()`
- `isDataStale()`
- `isLocalItemAcked()`
- `isRefreshing()`
- `shouldReload()`

---

## FalsePositiveStore

Available methods:

- `canSubmitFpReport()`
- `getChannelFpInfo()`
- `getFpMessageInfo()`
- `validContentScanVersion()`

---

## GuildIdentitySettingsStore

Available methods:

- `getAllPending()`
- `getAnalyticsLocations()`
- `getErrors()`
- `getFormState()`
- `getGuild()`
- `getIsSubmitDisabled()`
- `getPendingAccentColor()`
- `getPendingAvatar()`
- `getPendingAvatarDecoration()`
- `getPendingBanner()`
- `getPendingBio()`
- `getPendingNickname()`
- `getPendingProfileEffectId()`
- `getPendingPronouns()`
- `getPendingThemeColors()`
- `getSource()`
- `showNotice()`

---

## DimensionStore

Available methods:

- `getChannelDimensions()`
- `getGuildDimensions()`
- `getGuildListDimensions()`
- `isAtBottom()`
- `percentageScrolled()`

---

## SessionsStore

Available methods:

- `getActiveSession()`
- `getRemoteActivities()`
- `getSession()`
- `getSessionById()`
- `getSessions()`
- `initialize()`

---

## GuildSubscriptionsStore

Available methods:

- `getSubscribedThreadIds()`
- `initialize()`
- `isSubscribedToAnyGuildChannel()`
- `isSubscribedToAnyMember()`
- `isSubscribedToMemberUpdates()`
- `isSubscribedToThreads()`

---

## RecentlyActiveCollapseStore

Available methods:

- `getState()`
- `initialize()`
- `isCollapsed()`

---

## GameLibraryViewStore

Available methods:

- `activeRowKey()`
- `initialize()`
- `isNavigatingByKeyboard()`
- `sortDirection()`
- `sortKey()`

---

## NowPlayingViewStore

Available methods:

- `currentActivityParties()`
- `initialize()`
- `isMounted()`
- `loaded()`
- `nowPlayingCards()`

---

## ApplicationSubscriptionChannelNoticeStore

Available methods:

- `getLastGuildDismissedTime()`
- `getUserAgnosticState()`
- `initialize()`

---

## ChangelogStore

Available methods:

- `getChangelog()`
- `getChangelogLoadStatus()`
- `getConfig()`
- `getStateForDebugging()`
- `hasLoadedConfig()`
- `initialize()`
- `isLocked()`
- `lastSeenChangelogDate()`
- `lastSeenChangelogId()`
- `latestChangelogId()`
- `overrideId()`

---

## KeywordFilterStore

Available methods:

- `getKeywordTrie()`
- `initializeForKeywordTests()`
- `loadCache()`
- `takeSnapshot()`

---

## PendingReplyStore

Available methods:

- `getPendingReply()`
- `getPendingReplyActionSource()`
- `initialize()`

---

## OverlayBridgeStore

Available methods:

- `enabled()`
- `getFocusedPID()`
- `initialize()`
- `isCrashed()`
- `isInputLocked()`
- `isReady()`
- `isSupported()`
- `legacyEnabled()`

---

## ApplicationDirectorySearchStore

Available methods:

- `getFetchState()`
- `getSearchResults()`

---

## HotspotStore

Available methods:

- `getHotspotOverride()`
- `getState()`
- `hasHiddenHotspot()`
- `hasHotspot()`
- `initialize()`

---

## ApplicationStore

Available methods:

- `_getAllApplications()`
- `didFetchingApplicationFail()`
- `getAppIdForBotUserId()`
- `getApplication()`
- `getApplicationByName()`
- `getApplicationLastUpdated()`
- `getApplications()`
- `getFetchingOrFailedFetchingIds()`
- `getGuildApplication()`
- `getGuildApplicationIds()`
- `getState()`
- `initialize()`
- `isFetchingApplication()`

---

## UserAffinitiesStore

Available methods:

- `getFetching()`
- `getState()`
- `getUserAffinities()`
- `getUserAffinitiesMap()`
- `getUserAffinitiesUserIds()`
- `getUserAffinity()`
- `initialize()`
- `needsRefresh()`

---

## PaymentStore

Available methods:

- `getPayment()`
- `getPayments()`

---

## GuildOnboardingStore

Available methods:

- `getCurrentOnboardingStep()`
- `getOnboardingStatus()`
- `resetOnboardingStatus()`
- `shouldShowOnboarding()`

---

## LayerStore

Available methods:

- `getLayers()`
- `hasLayers()`

---

## ConnectedDeviceStore

Available methods:

- `getUserAgnosticState()`
- `initialize()`
- `initialized()`
- `inputDevices()`
- `lastDeviceConnected()`
- `lastInputSystemDevice()`
- `lastOutputSystemDevice()`
- `outputDevices()`

---

## StickersPersistedStore

Available methods:

- `getState()`
- `hasPendingUsage()`
- `initialize()`
- `stickerFrecencyWithoutFetchingLatest()`

---

## ApplicationFrecencyStore

Available methods:

- `getApplicationFrecencyWithoutLoadingLatest()`
- `getScoreWithoutLoadingLatest()`
- `getState()`
- `getTopApplicationsWithoutLoadingLatest()`
- `hasPendingUsage()`
- `initialize()`

---

## QuickSwitcherStore

Available methods:

- `channelNoticePredicate()`
- `getChannelHistory()`
- `getFrequentGuilds()`
- `getFrequentGuildsLength()`
- `getProps()`
- `getResultTotals()`
- `getState()`
- `initialize()`
- `isOpen()`

---

## GamePartyStore

Available methods:

- `getParties()`
- `getParty()`
- `getUserParties()`
- `initialize()`

---

## UpcomingEventNoticesStore

Available methods:

- `getAllEventDismissals()`
- `getAllUpcomingNoticeSeenTimes()`
- `getGuildEventNoticeDismissalTime()`
- `getState()`
- `getUpcomingNoticeSeenTime()`
- `initialize()`

---

## GuildPopoutStore

Available methods:

- `getGuild()`
- `hasFetchFailed()`
- `initialize()`
- `isFetchingGuild()`

---

## PoggermodeStore

Available methods:

- `getComboScore()`
- `getMessageCombo()`
- `getMostRecentMessageCombo()`
- `getUserCombo()`
- `getUserComboShakeIntensity()`
- `initialize()`
- `isComboing()`

---

## GuildOnboardingMemberActionStore

Available methods:

- `getCompletedActions()`
- `getState()`
- `hasCompletedActionForChannel()`

---

## ApplicationStoreUserSettingsStore

Available methods:

- `getState()`
- `hasAcceptedEULA()`
- `hasAcceptedStoreTerms()`
- `initialize()`

---

## GuildRoleSubscriptionTierTemplatesStore

Available methods:

- `getChannel()`
- `getTemplateWithCategory()`
- `getTemplates()`

---

## FavoriteStore

Available methods:

- `favoriteServerMuted()`
- `getCategoryRecord()`
- `getFavorite()`
- `getFavoriteChannels()`
- `getNickname()`
- `initialize()`
- `isFavorite()`

---

## PaymentSourceStore

Available methods:

- `defaultPaymentSource()`
- `defaultPaymentSourceId()`
- `getDefaultBillingCountryCode()`
- `getPaymentSource()`
- `hasFetchedPaymentSources()`
- `paymentSourceIds()`
- `paymentSources()`

---

## WebhooksStore

Available methods:

- `error()`
- `getWebhooksForChannel()`
- `getWebhooksForGuild()`
- `isFetching()`

---

## SKUPaymentModalStore

Available methods:

- `analyticsLocation()`
- `applicationId()`
- `error()`
- `forceConfirmationStepOnMount()`
- `getPricesForSku()`
- `giftCode()`
- `isFetchingSKU()`
- `isGift()`
- `isIAP()`
- `isOpen()`
- `isPurchasingSKU()`
- `promotionId()`
- `skuId()`

---

## DeveloperOptionsStore

Available methods:

- `appDirectoryIncludesInactiveCollections()`
- `cssDebuggingEnabled()`
- `getDebugOptionsHeaderValue()`
- `initialize()`
- `isAnalyticsDebuggerEnabled()`
- `isAxeEnabled()`
- `isBugReporterEnabled()`
- `isForcedCanary()`
- `isIdleStatusIndicatorEnabled()`
- `isLoggingAnalyticsEvents()`
- `isLoggingGatewayEvents()`
- `isLoggingOverlayEvents()`
- `isStreamInfoOverlayEnabled()`
- `isTracingRequests()`
- `layoutDebuggingEnabled()`
- `sourceMapsEnabled()`

---

## HookErrorStore

Available methods:

- `getHookError()`

---

## DevToolsDesignTogglesStore

Available methods:

- `all()`
- `allWithDescriptions()`
- `get()`
- `getUserAgnosticState()`
- `initialize()`
- `set()`

---

## GuildDirectorySearchStore

Available methods:

- `getSearchResults()`
- `getSearchState()`
- `shouldFetch()`

---

## NetworkStore

Available methods:

- `getEffectiveConnectionSpeed()`
- `getServiceProvider()`
- `getType()`
- `initialize()`

---

## ReferencedMessageStore

Available methods:

- `getMessage()`
- `getMessageByReference()`
- `getReplyIdsForChannel()`
- `initialize()`

---

## CollectiblesMarketingsStore

Available methods:

- `fetchState()`
- `getMarketingBySurface()`

---

## RTCConnectionDesyncStore

Available methods:

- `desyncedVoiceStatesCount()`
- `getDesyncedParticipants()`
- `getDesyncedUserIds()`
- `getDesyncedVoiceStates()`
- `initialize()`

---

## AuthorizedAppsStore

Available methods:

- `getApps()`
- `getFetchState()`
- `initialize()`

---

## PoggermodeAchievementStore

Available methods:

- `getAllUnlockedAchievements()`
- `getState()`
- `getUnlocked()`
- `initialize()`

---

## PurchaseTokenAuthStore

Available methods:

- `expiresAt()`
- `purchaseTokenAuthState()`
- `purchaseTokenHash()`

---

## SelfPresenceStore

Available methods:

- `findActivity()`
- `getActivities()`
- `getApplicationActivity()`
- `getLocalPresence()`
- `getPrimaryActivity()`
- `getStatus()`
- `initialize()`

---

## GuildReadStateStore

Available methods:

- `getGuildChangeSentinel()`
- `getGuildHasUnreadIgnoreMuted()`
- `getMentionCount()`
- `getMentionCountForChannels()`
- `getMentionCountForPrivateChannel()`
- `getMutableGuildReadState()`
- `getMutableGuildStates()`
- `getMutableUnreadGuilds()`
- `getPrivateChannelMentionCount()`
- `getStoreChangeSentinel()`
- `getTotalMentionCount()`
- `getTotalNotificationsMentionCount()`
- `hasAnyUnread()`
- `hasUnread()`
- `initialize()`
- `loadCache()`
- `takeSnapshot()`

---

## GuildSettingsDefaultChannelsStore

Available methods:

- `editedDefaultChannelIds()`
- `guildId()`
- `hasChanges()`
- `initialize()`
- `submitting()`

---

## LocalInteractionComponentStateStore

Available methods:

- `getInteractionComponentState()`
- `getInteractionComponentStateVersion()`
- `getInteractionComponentStates()`

---

## MemberSafetyStore

Available methods:

- `getCurrentMemberSearchResultsByGuildId()`
- `getElasticSearchPaginationByGuildId()`
- `getEnhancedMember()`
- `getEstimatedMemberSearchCountByGuildId()`
- `getKnownMemberSearchCountByGuildId()`
- `getLastCursorTimestamp()`
- `getLastRefreshTimestamp()`
- `getMembersByGuildId()`
- `getMembersCountByGuildId()`
- `getNewMemberTimestamp()`
- `getPagedMembersByGuildId()`
- `getPaginationStateByGuildId()`
- `getSearchStateByGuildId()`
- `hasDefaultSearchStateByGuildId()`
- `initialize()`
- `isInitialized()`

---

## ApplicationDirectoryCategoriesStore

Available methods:

- `getCategories()`
- `getLastFetchTimeMs()`

---

## DefaultRouteStore

Available methods:

- `defaultRoute()`
- `fallbackRoute()`
- `getState()`
- `initialize()`
- `lastNonVoiceRoute()`

---

## AppliedGuildBoostStore

Available methods:

- `applyBoostError()`
- `cooldownEndsAt()`
- `getAppliedGuildBoost()`
- `getAppliedGuildBoostsForGuild()`
- `getCurrentUserAppliedBoosts()`
- `getLastFetchedAtForGuild()`
- `isFetchingCurrentUserAppliedBoosts()`
- `isModifyingAppliedBoost()`
- `unapplyBoostError()`

---

## RegionStore

Available methods:

- `getOptimalRegion()`
- `getOptimalRegionId()`
- `getRandomRegion()`
- `getRandomRegionId()`
- `getRegions()`
- `initialize()`

---

## IntegrationPermissionStore

Available methods:

- `getApplicationId()`
- `getApplicationPermissions()`
- `getCommand()`
- `getCommands()`
- `getEditedApplication()`
- `getEditedCommand()`
- `isUnavailable()`

---

## DeveloperExperimentStore

Available methods:

- `getExperimentDescriptor()`
- `initialize()`

---

## PremiumPaymentModalStore

Available methods:

- `getGiftCode()`
- `paymentError()`

---

## StickerMessagePreviewStore

Available methods:

- `getStickerPreview()`

---

## SelectedGuildStore

Available methods:

- `getGuildId()`
- `getLastSelectedGuildId()`
- `getLastSelectedTimestamp()`
- `getState()`
- `initialize()`

---

## FamilyCenterStore

Available methods:

- `canRefetch()`
- `getActionsForDisplayType()`
- `getGuild()`
- `getIsInitialized()`
- `getLinkCode()`
- `getLinkTimestamp()`
- `getLinkedUsers()`
- `getRangeStartTimestamp()`
- `getSelectedTab()`
- `getSelectedTeenId()`
- `getStartId()`
- `getTotalForDisplayType()`
- `getUserCountry()`
- `initialize()`
- `isLoading()`
- `loadCache()`
- `takeSnapshot()`

---

## ArchivedThreadsStore

Available methods:

- `canLoadMore()`
- `getThreads()`
- `initialize()`
- `isInitialLoad()`
- `isLoading()`
- `nextOffset()`

---

## ActivityInviteEducationStore

Available methods:

- `getState()`
- `initialize()`
- `shouldShowEducation()`

---

## DispatchApplicationErrorStore

Available methods:

- `getLastError()`

---

## ApplicationStoreLocationStore

Available methods:

- `getCurrentPath()`
- `getCurrentRoute()`
- `reset()`

---

## GuildScheduledEventStore

Available methods:

- `getActiveEventByChannel()`
- `getGuildEventCountByIndex()`
- `getGuildScheduledEvent()`
- `getGuildScheduledEventsByIndex()`
- `getGuildScheduledEventsForGuild()`
- `getRsvp()`
- `getRsvpVersion()`
- `getUserCount()`
- `getUsersForGuildEvent()`
- `hasUserCount()`
- `isActive()`
- `isInterestedInEventRecurrence()`

---

## StickersStore

Available methods:

- `getAllGuildStickers()`
- `getAllStickersIterator()`
- `getPremiumPacks()`
- `getRawStickersByGuild()`
- `getStickerById()`
- `getStickerPack()`
- `getStickersByGuildId()`
- `hasLoadedStickerPacks()`
- `initialize()`
- `isFetchingStickerPacks()`
- `isLoaded()`
- `isPremiumPack()`
- `loadState()`
- `stickerMetadata()`

---

## PopoutWindowStore

Available methods:

- `getIsAlwaysOnTop()`
- `getState()`
- `getWindow()`
- `getWindowFocused()`
- `getWindowKeys()`
- `getWindowOpen()`
- `getWindowState()`
- `getWindowVisible()`
- `initialize()`
- `unmountWindow()`

---

## NoticeStore

Available methods:

- `getNotice()`
- `hasNotice()`
- `initialize()`
- `isNoticeDismissed()`

---

## RTCRegionStore

Available methods:

- `getPreferredRegion()`
- `getPreferredRegions()`
- `getRegion()`
- `getUserAgnosticState()`
- `initialize()`
- `shouldIncludePreferredRegion()`
- `shouldPerformLatencyTest()`

---

## UserGuildJoinRequestStore

Available methods:

- `computeGuildIds()`
- `getCooldown()`
- `getJoinRequestGuild()`
- `getRequest()`
- `hasFetchedRequestToJoinGuilds()`
- `hasJoinRequestCoackmark()`

---

## SortedVoiceStateStore

Available methods:

- `countVoiceStatesForChannel()`
- `getAllVoiceStates()`
- `getVoiceStateVersion()`
- `getVoiceStates()`
- `getVoiceStatesForChannel()`
- `getVoiceStatesForChannelAlt()`
- `initialize()`

---

## DispatchManagerStore

Available methods:

- `activeItems()`
- `finishedItems()`
- `getQueuePosition()`
- `initialize()`
- `isCorruptInstallation()`
- `paused()`

---

## AuthInviteStore

Available methods:

- `getGuild()`

---

## MemberVerificationFormStore

Available methods:

- `get()`
- `getRulesPrompt()`

---

## SelectedChannelStore

Available methods:

- `getChannelId()`
- `getCurrentlySelectedChannelId()`
- `getLastChannelFollowingDestination()`
- `getLastSelectedChannelId()`
- `getLastSelectedChannels()`
- `getMostRecentSelectedTextChannelId()`
- `getVoiceChannelId()`
- `initialize()`

---

## DiscoverGuildChecklistStore

Available methods:

- `getDiscoveryChecklist()`
- `isLoading()`
- `isPendingSuccess()`
- `passesChecklist()`

---

## GuildSettingsRolesStore

Available methods:

- `editedRoleIds()`
- `editedRoleIdsForConfigurations()`
- `errorMessage()`
- `formState()`
- `getEditedRoleConnectionConfigurationsMap()`
- `getPermissionSearchQuery()`
- `getRole()`
- `getSortDeltas()`
- `guild()`
- `hasChanges()`
- `hasRoleConfigurationChanges()`
- `hasSortChanges()`
- `initialize()`
- `roles()`
- `showNotice()`

---

## StreamRTCConnectionStore

Available methods:

- `getActiveStreamKey()`
- `getAllActiveStreamKeys()`
- `getHostname()`
- `getMaxViewers()`
- `getMediaSessionId()`
- `getQuality()`
- `getRTCConnection()`
- `getRTCConnections()`
- `getRegion()`
- `getRtcConnectionId()`
- `getSecureFramesRosterMapEntry()`
- `getSecureFramesState()`
- `getStatsHistory()`
- `getStreamSourceId()`
- `getUserIds()`
- `getVideoStats()`
- `isUserConnected()`

---

## BurstReactionEffectsStore

Available methods:

- `getEffectForEmojiId()`
- `getReactionPickerAnimation()`

---

## NativeScreenSharePickerStore

Available methods:

- `enabled()`
- `getPickerState()`
- `initialize()`
- `releasePickerStream()`
- `supported()`

---

## ForumChannelAdminOnboardingGuideStore

Available methods:

- `getState()`
- `hasHidden()`
- `initialize()`

---

## BitRateStore

Available methods:

- `bitrate()`

---

## ChannelListUnreadsStore

Available methods:

- `getUnreadStateForGuildId()`
- `initialize()`

---

## GuildSettingsOnboardingHomeSettingsStore

Available methods:

- `getDismissedSuggestedChannelIds()`
- `getNewMemberAction()`
- `getResourceChannel()`
- `getSettings()`
- `getState()`
- `getSubmitting()`
- `hasChanges()`
- `initialize()`

---

## MyGuildApplicationsStore

Available methods:

- `getFetchState()`
- `getGuildIdsForApplication()`
- `getLastFetchTimeMs()`
- `getNextFetchRetryTimeMs()`
- `getState()`
- `initialize()`

---

## FriendsStore

Available methods:

- `getState()`
- `initialize()`

---

## NewPaymentSourceStore

Available methods:

- `adyenPaymentData()`
- `braintreeEmail()`
- `braintreeNonce()`
- `error()`
- `getBillingAddressInfo()`
- `getCreditCardInfo()`
- `isBillingAddressInfoValid()`
- `isCardInfoValid()`
- `popupCallbackCalled()`
- `redirectedPaymentId()`
- `redirectedPaymentSourceId()`
- `stripePaymentMethod()`
- `venmoUsername()`

---

## VoiceStateStore

Available methods:

- `getAllVoiceStates()`
- `getCurrentClientVoiceChannelId()`
- `getDiscoverableVoiceState()`
- `getDiscoverableVoiceStateForUser()`
- `getUserVoiceChannelId()`
- `getUsersWithVideo()`
- `getVideoVoiceStatesForChannel()`
- `getVoicePlatformForChannel()`
- `getVoiceState()`
- `getVoiceStateForChannel()`
- `getVoiceStateForSession()`
- `getVoiceStateForUser()`
- `getVoiceStateVersion()`
- `getVoiceStates()`
- `getVoiceStatesForChannel()`
- `hasVideo()`
- `isCurrentClientInVoiceChannel()`
- `isInChannel()`
- `userHasBeenMovedVersion()`

---

## CallChatToastsStore

Available methods:

- `getState()`
- `getToastsEnabled()`
- `initialize()`

---

## GuildChannelStore

Available methods:

- `getAllGuilds()`
- `getChannels()`
- `getDefaultChannel()`
- `getDirectoryChannelIds()`
- `getFirstChannel()`
- `getFirstChannelOfType()`
- `getSFWDefaultChannel()`
- `getSelectableChannelIds()`
- `getSelectableChannels()`
- `getTextChannelNameDisambiguations()`
- `getVocalChannelIds()`
- `hasCategories()`
- `hasChannels()`
- `hasElevatedPermissions()`
- `hasSelectableChannel()`
- `initialize()`

---

## GuildSettingsAuditLogStore

Available methods:

- `actionFilter()`
- `applicationCommands()`
- `automodRules()`
- `deletedTargets()`
- `groupedFetchCount()`
- `guildScheduledEvents()`
- `hasError()`
- `hasOlderLogs()`
- `integrations()`
- `isInitialLoading()`
- `isLoading()`
- `isLoadingNextPage()`
- `logs()`
- `targetIdFilter()`
- `threads()`
- `userIdFilter()`
- `userIds()`
- `webhooks()`

---

## GuildLeaderboardStore

Available methods:

- `get()`
- `getLeaderboardResponse()`
- `getLeaderboards()`

---

## WelcomeScreenStore

Available methods:

- `get()`
- `hasError()`
- `hasSeen()`
- `isEmpty()`
- `isFetching()`

---

## CommandsMigrationStore

Available methods:

- `canShowOverviewTooltip()`
- `canShowToggleTooltip()`
- `getState()`
- `initialize()`
- `shouldShowChannelNotice()`

---

## ApplicationCommandStore

Available methods:

- `getActiveCommand()`
- `getActiveCommandSection()`
- `getActiveOption()`
- `getActiveOptionName()`
- `getCommandOrigin()`
- `getOption()`
- `getOptionState()`
- `getOptionStates()`
- `getPreferredCommandId()`
- `getSource()`
- `getState()`
- `initialize()`

---

## GuildSettingsStore

Available methods:

- `getBans()`
- `getErrors()`
- `getGuild()`
- `getGuildId()`
- `getMetadata()`
- `getProps()`
- `getSavedRouteState()`
- `getSection()`
- `getSelectedRoleId()`
- `getSlug()`
- `hasChanges()`
- `initialize()`
- `isGuildMetadataLoaded()`
- `isOpen()`
- `isSubmitting()`
- `showNotice()`
- `showPublicSuccessModal()`
