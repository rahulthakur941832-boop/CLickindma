import React, { useState } from 'react';
import { LeadInquiry } from '../types';
import { X, Trash2, Download, Phone, MessageSquare, ShieldCheck, User, Mail, FileSpreadsheet, Check, Send, ExternalLink, Code, Lock } from 'lucide-react';
import { OWNER_GMAIL, getStoredWebhookUrl, saveWebhookUrl, sendLeadToGoogleWorkspace } from '../lib/leadStorage';

interface InquiriesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  leads: LeadInquiry[];
  onClearLeads: () => void;
  onLockAdmin?: () => void;
}

export const InquiriesDrawer: React.FC<InquiriesDrawerProps> = ({
  isOpen,
  onClose,
  leads,
  onClearLeads,
  onLockAdmin
}) => {
  const [webhookUrl, setWebhookUrl] = useState(getStoredWebhookUrl());
  const [isSaved, setIsSaved] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testSent, setTestSent] = useState(false);
  const [showScriptModal, setShowScriptModal] = useState(false);

  if (!isOpen) return null;

  const handleSaveWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    saveWebhookUrl(webhookUrl);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleTestSend = async () => {
    setIsTesting(true);
    await sendLeadToGoogleWorkspace({
      id: 'test-' + Date.now(),
      name: 'Sample Test Client',
      phone: '+91 98765 43210',
      serviceSelected: 'Test Lead Dispatch',
      message: 'Testing Google Sheets and Gmail sync connection',
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    });
    setIsTesting(false);
    setTestSent(true);
    setTimeout(() => setTestSent(false), 4000);
  };

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['ID', 'Name', 'Phone', 'Service Selected', 'Submitted At', 'Message'];
    const rows = leads.map(l => [
      l.id,
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.serviceSelected || 'Standard Inquiry'}"`,
      `"${l.submittedAt}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `clickin_digital_leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const appsScriptCode = `function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      data.submittedAt || new Date().toLocaleString(),
      data.name || '',
      data.phone || '',
      data.serviceSelected || '',
      data.message || '',
      'Clickin DMA Website'
    ]);
    MailApp.sendEmail({
      to: "${OWNER_GMAIL}",
      subject: "🚨 New Lead: " + (data.name || "Inquiry") + " (" + (data.phone || "") + ")",
      body: "New Lead Received!\\n\\nName: " + data.name + "\\nPhone: " + data.phone + "\\nService: " + data.serviceSelected + "\\nMessage: " + data.message + "\\nSubmitted: " + data.submittedAt
    });
    return ContentService.createTextOutput(JSON.stringify({status: "ok"})).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({error: err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}`;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex justify-end">
      <div className="bg-white border-l border-slate-200 w-full max-w-xl h-full overflow-y-auto p-6 space-y-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 text-slate-900">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <div>
                <h3 className="font-black text-slate-900 text-lg">Inquiries & Lead Automation Admin</h3>
                <span className="text-xs text-slate-500 font-medium">Captured submissions for Rahul Singh</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {onLockAdmin && (
                <button
                  onClick={() => {
                    onLockAdmin();
                    onClose();
                  }}
                  title="Lock Admin Panel"
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-700" />
                  <span>Lock Admin</span>
                </button>
              )}

              <button
                onClick={onClose}
                className="p-2 bg-slate-100 text-slate-600 hover:text-slate-900 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Integration Cards */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-300 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-700" />
                <span className="text-xs font-black text-slate-900">Active Destination Email</span>
              </div>
              <span className="text-xs font-mono bg-white px-2.5 py-0.5 rounded border border-slate-300 font-bold text-slate-900">
                {OWNER_GMAIL}
              </span>
            </div>

            <div className="text-[11px] text-slate-600 font-medium">
              ✅ All website forms and CTA package buttons automatically send new leads to <strong>{OWNER_GMAIL}</strong>.
            </div>

            {/* Google Apps Script / Sheet Sync Field */}
            <form onSubmit={handleSaveWebhook} className="space-y-2 pt-2 border-t border-slate-200" autoComplete="off">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Google Sheets Webhook URL (Optional)</span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowScriptModal(true)}
                  className="text-[10px] text-slate-800 underline font-extrabold flex items-center gap-1 cursor-pointer"
                >
                  <Code className="w-3 h-3 text-slate-600" />
                  Get Google Script Code
                </button>
              </div>

              <div className="flex gap-2">
                <input
                  type="url"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  placeholder="Paste Google Apps Script Web App URL..."
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="flex-1 bg-white text-slate-900 text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 font-mono"
                />
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-2 rounded-xl text-xs font-black shrink-0 transition-colors cursor-pointer"
                >
                  {isSaved ? 'Saved!' : 'Save URL'}
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={handleTestSend}
                disabled={isTesting}
                className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3 h-3 text-emerald-400" />
                <span>{isTesting ? 'Sending Test...' : 'Test Send Lead'}</span>
              </button>

              {testSent && (
                <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Test dispatched to {OWNER_GMAIL}!
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full border border-slate-300">
              Total Recorded Inquiries: {leads.length}
            </span>

            <div className="flex items-center gap-2">
              {leads.length > 0 && (
                <>
                  <button
                    onClick={exportCSV}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 rounded-lg text-xs font-extrabold flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-700" />
                    Export CSV
                  </button>

                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to clear all leads?')) {
                        onClearLeads();
                      }
                    }}
                    className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Clear
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Lead List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {leads.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-2">
              <MessageSquare className="w-10 h-10 mx-auto opacity-30" />
              <p className="text-sm font-semibold">No lead submissions recorded yet.</p>
              <p className="text-xs text-slate-500">Submit any form on the page to test lead capture!</p>
            </div>
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2 border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center font-bold text-xs">
                      <User className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">{lead.name}</h4>
                      <span className="text-[10px] text-amber-800 font-bold">{lead.serviceSelected}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">{lead.submittedAt}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-700">
                  <span className="font-mono bg-white px-2 py-1 rounded border border-slate-200 text-amber-900 font-bold">
                    {lead.phone}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${lead.phone.replace(/[^0-9+]/g, '')}`}
                      className="p-1.5 bg-amber-500 text-slate-950 rounded hover:bg-amber-600 transition-colors font-bold"
                      title="Call Phone"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
                      title="Message on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {lead.message && (
                  <p className="text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 leading-relaxed italic font-medium">
                    "{lead.message}"
                  </p>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
          Clickin Digital Marketing Agency • Rahul Singh Lead System
        </div>

      </div>

      {/* Script Code Modal */}
      {showScriptModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl relative text-slate-900">
            <button
              onClick={() => setShowScriptModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                <span>Google Apps Script Code for Google Sheets</span>
              </h3>
              <p className="text-xs text-slate-600">
                Paste this inside Google Sheet &gt; Extensions &gt; Apps Script, then click Deploy as Web App ("Anyone").
              </p>
            </div>

            <pre className="bg-slate-900 text-amber-300 p-4 rounded-xl text-xs overflow-x-auto font-mono max-h-60">
              {appsScriptCode}
            </pre>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(appsScriptCode);
                  alert('Google Apps Script code copied to clipboard!');
                }}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-xl cursor-pointer"
              >
                Copy Script Code
              </button>
              <button
                onClick={() => setShowScriptModal(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-4 py-2 rounded-xl cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

