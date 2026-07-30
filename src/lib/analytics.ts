// Analytics & Tracking Utility for GA4 & Meta Pixel
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-EXJ0R8N500';
export const META_PIXEL_ID = '2295649901206471';

/**
 * Track custom events on GA4 and Meta Pixel
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  try {
    // 1. Google Analytics 4 Event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    }

    // 2. Meta Pixel Event
    if (typeof window !== 'undefined' && window.fbq) {
      if (eventName === 'generate_lead' || eventName === 'lead_submitted') {
        window.fbq('track', 'Lead', {
          content_name: params?.serviceSelected || 'Website Inquiry',
          value: params?.value || 0,
          currency: 'INR'
        });
      } else if (eventName === 'contact' || eventName === 'whatsapp_click') {
        window.fbq('track', 'Contact', {
          content_category: params?.source || 'WhatsApp Chat'
        });
      } else {
        window.fbq('trackCustom', eventName, params);
      }
    }
  } catch (err) {
    console.warn('Analytics track error:', err);
  }
}

/**
 * Track Lead Submissions
 */
export function trackLeadSubmission(serviceName?: string, phone?: string) {
  trackEvent('generate_lead', {
    serviceSelected: serviceName || 'General Inquiry',
    phone_provided: Boolean(phone),
    event_category: 'Lead Generation',
    event_label: 'Website Lead Form'
  });
}

/**
 * Track WhatsApp Chat Button Clicks
 */
export function trackWhatsAppClick(source: string = 'Floating Button') {
  trackEvent('whatsapp_click', {
    source,
    event_category: 'Contact',
    event_label: 'WhatsApp Direct Chat'
  });
}

/**
 * Track Phone Call Button Clicks
 */
export function trackPhoneCallClick(source: string = 'Header Line') {
  trackEvent('phone_call_click', {
    source,
    event_category: 'Contact',
    event_label: 'Direct Phone Call'
  });
}

/**
 * Track Package / Service Views
 */
export function trackSelectPackage(packageName: string, price: string) {
  trackEvent('select_content', {
    content_type: 'Service Package',
    content_id: packageName,
    package_price: price,
    event_category: 'Pricing'
  });
}
