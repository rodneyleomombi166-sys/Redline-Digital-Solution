import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

interface StoredEnquiry {
  enquiryId: string;
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  estimatedBudget?: string;
  projectDetails: string;
  timestamp: string;
}

const enquiriesLog: StoredEnquiry[] = [];

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Route: Submit a Business Enquiry
  app.post('/api/enquiries', (req, res) => {
    const {
      fullName,
      businessName,
      phone,
      email,
      serviceRequired,
      estimatedBudget,
      projectDetails,
      honeypot,
    } = req.body || {};

    if (honeypot) {
      return res.status(400).json({ error: 'Spam submission rejected.' });
    }

    if (
      !fullName ||
      typeof fullName !== 'string' ||
      !businessName ||
      typeof businessName !== 'string' ||
      !phone ||
      typeof phone !== 'string' ||
      !email ||
      typeof email !== 'string' ||
      !serviceRequired ||
      typeof serviceRequired !== 'string' ||
      !projectDetails ||
      typeof projectDetails !== 'string'
    ) {
      return res.status(400).json({
        error: 'Please complete all required fields before submitting your enquiry.',
      });
    }

    const enquiryId = `RDS-2026-${String(enquiriesLog.length + 101).padStart(4, '0')}`;
    const timestamp = new Date().toISOString();

    const record: StoredEnquiry = {
      enquiryId,
      fullName: fullName.trim(),
      businessName: businessName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      serviceRequired: serviceRequired.trim(),
      estimatedBudget: estimatedBudget ? String(estimatedBudget).trim() : undefined,
      projectDetails: projectDetails.trim(),
      timestamp,
    };

    enquiriesLog.push(record);

    return res.status(201).json({
      ok: true,
      enquiryId,
      timestamp: new Date(timestamp).toLocaleString('en-PG', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    });
  });

  app.get('/api/enquiries', (_req, res) => {
    res.json({
      ok: true,
      count: enquiriesLog.length,
      enquiries: enquiriesLog,
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Redline Digital Solution server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start Redline Digital Solution server:', err);
  process.exit(1);
});
