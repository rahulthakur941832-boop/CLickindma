import { LeadInquiry } from '../types';
import { trackLeadSubmission } from './analytics';

const LEADS_STORAGE_KEY = 'clickin_digital_leads';
const WEBHOOK_STORAGE_KEY = 'clickin_google_webhook_url';

// Default Target Email for Rahul Singh / Clickin DMA
export const OWNER_GMAIL = 'clickindma@gmail.com';

// Get configured Google Apps Script Webhook URL
export function getStoredWebhookUrl(): string {
  try {
    return localStorage.getItem(WEBHOOK_STORAGE_KEY) || '';
  } catch (e) {
    return '';
  }
}

export function saveWebhookUrl(url: string): void {
  try {
    localStorage.setItem(WEBHOOK_STORAGE_KEY, url.trim());
  } catch (e) {
    console.error('Error saving webhook URL:', e);
  }
}

export function getStoredLeads(): LeadInquiry[] {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading leads:', e);
    return [];
  }
}

/**
 * Dispatch lead data asynchronously to Google Sheets & Gmail (clickindma@gmail.com)
 */
export async function sendLeadToGoogleWorkspace(lead: LeadInquiry): Promise<boolean> {
  const webhookUrl = getStoredWebhookUrl();
  const payload = {
    targetEmail: OWNER_GMAIL,
    id: lead.id,
    name: lead.name,
    phone: lead.phone,
    serviceSelected: lead.serviceSelected || 'Website Inquiry',
    message: lead.message || 'General Website Lead',
    submittedAt: lead.submittedAt || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    source: 'Clickin DMA Website'
  };

  // 1. Post to custom Google Apps Script Webhook if configured
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors'
      });
      console.log('Lead posted to Google Webhook:', payload);
    } catch (err) {
      console.warn('Primary Google Webhook post error:', err);
    }
  }

  // 2. Direct Ajax Dispatch to Gmail (clickindma@gmail.com)
  try {
    fetch(`https://formsubmit.co/ajax/${OWNER_GMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `🚨 NEW WEBSITE LEAD: ${lead.name} (${lead.phone}) - Clickin DMA`,
        _replyto: OWNER_GMAIL,
        _template: 'table',
        'Lead ID': lead.id,
        'Customer Name': lead.name,
        'Phone Number': lead.phone,
        'Service Package': lead.serviceSelected || 'Website Inquiry',
        'Inquiry Details': lead.message || 'Submitted from website form',
        'Date & Time': lead.submittedAt,
        'Destination Gmail': OWNER_GMAIL
      })
    }).catch((e) => console.log('FormSubmit email status:', e));
  } catch (e) {
    // Ignore error in background
  }

  return true;
}

export function saveNewLead(lead: Omit<LeadInquiry, 'id' | 'submittedAt'>): LeadInquiry {
  const existing = getStoredLeads();
  const newLead: LeadInquiry = {
    ...lead,
    id: 'lead-' + Date.now(),
    submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };
  const updated = [newLead, ...existing];
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving lead:', e);
  }

  // Dispatch to Google Workspace (Gmail + Sheets)
  sendLeadToGoogleWorkspace(newLead);

  // Track event in GA4 and Meta Pixel
  trackLeadSubmission(newLead.serviceSelected, newLead.phone);

  return newLead;
}

