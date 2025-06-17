import {getSettingValues, Setting} from './settings';

// Simple constants for the analytics setting keys
export const ANALYTICS_KEYS = [
    'email_track_opens',
    'email_track_clicks', 
    'members_track_sources',
    'outbound_link_tagging',
    'traffic_analytics' // New traffic analytics setting
];

/**
 * Get all analytics settings in one simple call
 */
export function getAnalyticsSettings(settings: Setting[] | null) {
    const [emailTrackOpens, emailTrackClicks, membersTrackSources, outboundLinkTagging, trafficAnalytics] = 
        getSettingValues<boolean>(settings, ANALYTICS_KEYS);
    
    return {
        emailTrackOpens: emailTrackOpens ?? true,
        emailTrackClicks: emailTrackClicks ?? true,
        membersTrackSources: membersTrackSources ?? true,
        outboundLinkTagging: outboundLinkTagging ?? true,
        trafficAnalytics: trafficAnalytics ?? true
    };
} 